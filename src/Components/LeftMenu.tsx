import React, { ChangeEvent, useState } from "react";
import logo from "../pics/logo.png";
import search from "../pics/search.png";

const LeftMenu: React.FC = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    e.target.value = value.replace(/\D/g, "");
  };
  
  function handleClick() {
    console.log('name');
  }

  return (
    <aside className="leftMenu">
      <div className="top">
        <img src={logo} className="logo" />
        <p>Вишлистик</p>
      </div>
      <div className="burger">
        <button className="burgerButton" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div>
        <div className="search">
          <div>
            <input
              onChange={handleChange}
              type="search"
              placeholder="Код друга"
              id="search"
            />
            <label htmlFor="search">Ввести код друга</label>
          </div>
          <button>
            <img src={search} />
          </button>
        </div>
        <div className="menu">
          <div className="menuItem">
            <a href="/auth">Вход</a>
          </div>
          <div className="menuItem">
            <a>Регистрация</a>
          </div>
          <div className="menuItem">
            <a href="/">Мой вишлист</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftMenu;
