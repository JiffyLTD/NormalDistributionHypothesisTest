import React from "react";
import MainBlock from "../Components/MainBlock/MainBlock";

const About = () => {
  const technologyStackTopic = {
    title: "Стек технологий",
    content:
      "Было решено взять за основу клиент-серверную архитектуру. Клиентское приложение было написано на HTML, CSS, JS с помощью фреймворков React и Bootstrap, библиотеки Chart.js и Axios. Серверная часть была написана на C# с помощью фреймворка ASP.NET CORE и библиотек Math.NET Numerics, Aspose.Words, Aspose.Cells.",
  };

  const authorsOfTheWorkTopic = {
    title: "Авторы работы",
    content: (
      <p>
        Мартиросян Г.А. - руководитель проекта, специалист по работе с
        документами
        <br />
        Родионов Г.А. - главный разработчик
        <br />
        Беспалов Д.С. -  специалист по работе с
        документами
        <br />
        Фролов А.П. - тестировщик, специалист по работе с
        документами
      </p>
    ),
  };

  return (
    <div className="text-light position-absolute top-50 start-50 translate-middle">
      <MainBlock topic={technologyStackTopic} />
      <MainBlock topic={authorsOfTheWorkTopic} />
    </div>
  );
};

export default About;
