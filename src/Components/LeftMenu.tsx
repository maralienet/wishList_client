import React, { useState } from "react";
import logo from "../pics/logo.png";

const LeftMenu: React.FC = () => {
  function handleClick(e: Event) {
    if(e)
        console.log()
  }

  return (
    <aside className="leftMenu">
      <div className="top">
        <img src={logo} className="logo" />
        <p>Вишлистик</p>
      </div>
      <div className="search">
        <label htmlFor="search">Ввести код друга</label>
        <input type="search" placeholder="Код друга" id="search"></input>
      </div>
      <div className="menu">
        <div className="menuItem">Вход</div>
        <div className="menuItem">Регистрация</div>
        <div className="menuItem">О проекте</div>
      </div>
    </aside>
  );
};

export default LeftMenu;
