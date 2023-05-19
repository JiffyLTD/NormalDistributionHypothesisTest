import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
      <header className="mt-5">
        <Row>
          <Col sm="6">
            <h1 className="text-light ">Проверка гипотезы о нормальном распределении</h1>
          </Col>
          <Col className="d-flex justify-content-end align-items-end" sm="6">
            <h3><a className="text-light px-3" href="/">Главная</a></h3>
            <h3><a className="text-light px-3" href="/about">О работе</a></h3>
          </Col>
        </Row>
      </header>
  );
};

export default Header;
