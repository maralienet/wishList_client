import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import axios from "axios-typescript";
import loading from "../pics/loading.gif";

type SectionProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

type SectionsProps = {
  onClick: (name: string) => void;
};

type Section = {
  id: string;
  name: string;
};

const Section: React.FC<SectionProps> = ({ name, isActive, onClick }) => {
  return (
    <div className={`section ${isActive ? "active" : ""}`} onClick={onClick}>
      {name}
    </div>
  );
};

export const Sections: React.FC<SectionsProps> = ({ onClick }) => {
  const [active, setActive] = useState("");
  const [sects, setSects] = useState<Section[]>([]);

  useEffect(() => {
    axios
      .get("https://wishlist-server-7u5y.onrender.com/categories")
      .then((res) => {
        let data = JSON.parse(res.data);
        setSects(data);
      });
  }, []);

  function handleClick(name: string) {
    setActive(name);
    onClick(name);
  }

  return (
    <div className="sections">
      <p>☆ Категории ☆</p>
      {sects.length > 0 ? (
        sects?.map((sect) => (
          <Section
            key={sect.id}
            name={sect.name}
            isActive={active === sect.id}
            onClick={() => handleClick(sect.id)}
          />
        ))
      ) : (
        <img src={loading} />
      )}
    </div>
  );
};

export const SectionsCollapsible: React.FC<SectionsProps> = ({ onClick }) => {
  const [active, setActive] = useState("");
  const [sects, setSects] = useState<Section[]>([]);

  useEffect(() => {
    axios
      .get("https://wishlist-server-7u5y.onrender.com/categories")
      .then((res) => {
        let data = JSON.parse(res.data);
        setSects(data);
      });
  }, []);

  function handleClick(name: string) {
    setActive(name);
    onClick(name);
  }

  return (
    <Collapsible trigger="☆ Категории ☆">
      {sects.length > 0 ? (
        sects?.map((sect) => (
          <Section
            key={sect.id}
            name={sect.name}
            isActive={active === sect.id}
            onClick={() => handleClick(sect.id)}
          />
        ))
      ) : (
        <img src={loading} />
      )}
    </Collapsible>
  );
};
