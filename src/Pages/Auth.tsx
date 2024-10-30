import React, { useState } from "react";

const Auth: React.FC = () => {
  const [active, setActive] = useState("");

  function handleClick(name: string) {
    setActive(name);
  }

  return (
    <div className="Auth">
      <header>
        <h1 className="greet">Авторизация</h1>
      </header>
      <div className="body"></div>
    </div>
  );
};

export default Auth;
