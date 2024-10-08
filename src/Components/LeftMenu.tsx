import React, { ChangeEvent, useState } from "react";
import logo from "../pics/logo.png";

const LeftMenu: React.FC = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    e.target.value = value.replace(/\D/g, "");
  };

  return (
    <aside className="leftMenu">
      <div className="top">
        <img src={logo} className="logo" />
        <p>Вишлистик</p>
      </div>
      <div className="search">
        <input
          onChange={handleChange}
          type="search"
          placeholder="Код друга"
          id="search"
        />
        <label htmlFor="search">Ввести код друга</label>
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
