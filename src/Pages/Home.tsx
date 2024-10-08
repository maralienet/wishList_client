import React, { useState } from "react";
import { Sections, SectionsCollapsible } from "../Components/Sections";
import Wishes from "../Components/Wishes";

const Home: React.FC = () => {
  const [active, setActive] = useState("");

  function handleClick(name: string) {
    setActive(name);
  }

  return (
    <>
      <header>
        <h1 className="greet">Привет!</h1>
        <h2>
          Это мой список желаний. Если затрудняешься с выбором подарка для меня,
          он должен помочь 😊
        </h2>
      </header>
      <div className="body">
        <aside>
          <Sections onClick={handleClick} />
          <SectionsCollapsible onClick={handleClick} />
        </aside>
        <div className="rings"></div>
        <Wishes section={active} />
      </div>
    </>
  );
};

export default Home;
