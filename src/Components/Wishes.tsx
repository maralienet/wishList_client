import React, { useState, useEffect } from "react";
import axios from "axios-typescript";
import star1 from "../pics/1.png";
import star2 from "../pics/2.png";
import star3 from "../pics/3.png";
import star4 from "../pics/4.png";
import star5 from "../pics/5.png";
import star6 from "../pics/6.png";
import star7 from "../pics/7.png";
import loading from "../pics/loading.gif";

type WishProps = {
  inner: string;
  url?: string;
};

type WishesProps = {
  section: string;
};

type Wishes = {
  id: string;
  categId: string;
  text: string;
  url?: string;
};

const Wish: React.FC<WishProps> = ({ inner, url }) => {
  let stars = [star1, star2, star3, star4, star5, star6, star7];

  return (
    <div className="wish">
      <img alt="" src={stars[Math.floor(Math.random() * 7)]} />
      {url ? (
        <a target="_blank" href={url}>
          {inner}
        </a>
      ) : (
        <span>{inner}</span>
      )}
    </div>
  );
};

const Wishes: React.FC<WishesProps> = ({ section }) => {
  const [wishes, setWishes] = useState<Wishes[]>([]);
  const [sect, setSect] = useState(null);

  useEffect(() => {
    if (section) {
      axios
        .get(
          `https://wishlist-server-7u5y.onrender.com/wishes?categId=${section}`
        )
        .then((res) => {
          let data = JSON.parse(res.data);
          setWishes(data);
        });
      axios
        .get(
          `https://wishlist-server-7u5y.onrender.com/categories?id=${section}`
        )
        .then((res) => {
          let data = JSON.parse(res.data);
          setSect(data[0].name);
        });
    }
  }, [section]);

  return (
    <div className="wishes">
      <p className="secName">
        --- {section ? `${sect}` : "Выбери категорию"} ---
      </p>
      <div>
        {wishes.length > 0 ? (
          wishes?.map((wish) => <Wish inner={wish.text} url={wish.url} />)
        ) : (
          <img className='loading' src={loading} />
        )}
      </div>
    </div>
  );
};

export default Wishes;
