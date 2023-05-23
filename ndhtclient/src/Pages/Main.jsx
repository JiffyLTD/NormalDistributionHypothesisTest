import React from "react";
import MainBlock from "../Components/MainBlock/MainBlock";

const Main = () => {

  document.title = "Главная";

  const coursWorkTopic = {
    title: "Проверка гипотезы о нормальном распределении",
    content: <p>Рекомендуем для начала ознакомиться с <a className="text-light" href="/userManual">руководством пользования</a>,а затем вы можете <a className="text-light" href="/normalDestribution">приступить к работе</a></p>
  };

  return (
    <div className="container text-light d-flex flex-column justify-content-center">
      <MainBlock className="position-absolute top-50 start-50 translate-middle" topic={coursWorkTopic} />
    </div>
  );
};

export default Main;
