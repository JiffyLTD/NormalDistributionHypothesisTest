import React from "react";
import img from "./important.png";

const Header = () => {
  return (
    <header className="mt-5 mb-5 d-flex justify-content-between">
      <div className="d-flex flex-row">
          <h4>
            <a className="text-light px-3" href="/">
              Главная
            </a>
          </h4>
          <h4>
            <a className="text-light px-3" href="/normalDestribution">
              Приступить к работе
            </a>
          </h4>
          <h4>
            <a className="text-light px-3" href="/userManual">
              Руководство пользователя
            </a>
          </h4>
          <h4>
            <a className="text-light px-3" href="/other">
              Прочее
            </a>
          </h4>
          </div>
          <div>
            <img src={img} alt="img" width="64px" height="64px"/>
          </div>
    </header>
  );
};

export default Header;
