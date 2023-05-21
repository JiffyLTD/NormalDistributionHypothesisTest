import React from "react";
import MainBlock from "../Components/MainBlock/MainBlock";

const Main = () => {
  const coursWorkTopic = {
    title: "Тема курсовой работы",
    content:
      "Требуется проверить гипотезу о том, что случайная величина Х – вес упаковок – распределена по нормальному закону."
  };

  const technologyStackTopic = {
    title: "Стек технологий",
    content:
      "Было решено взять за основу клиент-серверную архитектуру. Клиентское приложение было написано на HTML, CSS, JS с помощью фреймворков React и Bootstrap. Серверная часть была написана на C# с помощью фреймворков ASP.NET CORE."
  };

  const authorsOfTheWorkTopic = {
    title: "Авторы работы",
    content: (
      <p>
        Мартиросян Г.А. - руководитель проекта, специалист по работе с документами
        <br />
        Родионов Г.А. - главный разработчик
        <br />
        Беспалов Д.С. - помощник по работе с документами, тестировщик
        <br />
        Фролов А.П. - помощник по работе с документами
      </p>
    )
  };

  return (
    <div
      className="container text-light d-flex flex-column justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <MainBlock topic={coursWorkTopic} />
      <MainBlock topic={technologyStackTopic} />
      <MainBlock topic={authorsOfTheWorkTopic} />
    </div>
  );
};

export default Main;
