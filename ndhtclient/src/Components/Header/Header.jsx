import React from "react";
import img from "./important.png";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className="mt-2 mb-5 d-flex justify-content-between">
      <div className="d-flex flex-row mt-5">
          <h4>
            <a className={styles.link}  href="/">
              Главная
            </a>
          </h4>
          <h4>
            <a className={styles.link} href="/normalDestribution">
              Приступить к работе
            </a>
          </h4>
          <h4>
            <a className={styles.link} href="/userManual">
              Руководство пользователя
            </a>
          </h4>
          <h4>
            <a className={styles.link} href="/about">
              О нас
            </a>
          </h4>
          </div>
          <div className="text-center mt-0"> 
            <img src={img} alt="img" width="64px" height="64px"/>
            <p className="text-light">Product Quality Analytics</p>
          </div>
    </header>
  );
};

export default Header;
