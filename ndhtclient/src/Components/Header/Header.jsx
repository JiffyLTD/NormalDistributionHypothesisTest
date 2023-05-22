import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
      <header className="mt-5 mb-5">
        <Row>
          <Col sm="5">
            <h2 className="text-light ">Проверка гипотезы о нормальном распределении</h2>
          </Col>
          <Col className="d-flex justify-content-end align-items-end" sm="7">
            <h4><a className="text-light px-3" href="/">Главная</a></h4>
            <h4><a className="text-light px-3" href="/normalDestribution">Приступить к работе</a></h4>
            <h4><a className="text-light px-3" href="/about">Руководство пользователя</a></h4>
          </Col>
        </Row>
      </header>
  );
};

export default Header;
