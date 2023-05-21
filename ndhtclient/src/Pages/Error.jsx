import React from "react";

const Error = () => {
  document.title = "404 страница не найдена";

  return (
    <div
      className="container text-light d-flex flex-column justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <h1 className="text-center">Ошибка 404 - страница не найдена</h1>
      <h3 className="text-center">Вернуться на <a className="text-light" href="/">главную</a></h3>
    </div>
  );
};

export default Error;
