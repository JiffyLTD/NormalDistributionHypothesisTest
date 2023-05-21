import React from "react";

const About = () => {
  document.title = "Информация";

  return (
    <div className="border rounded bg-white container">
      <h2 className="mt-2">
        План проверки гипотезы о нормальном распределении.
      </h2>
      <div className="mt-5">
        <h3>
          1. По данным выборки объема n найти среднее x и стандартное отклонение
          s.
        </h3>
      </div>
      <div className="mt-2">
        <h3>
          2. Разбить выборку на k интервалов и посчитать частоту f i попадания
          значений в каждый интервал.
        </h3>
      </div>
      <div className="mt-2">
        <h3>3. Найти теоретическую частоту p<sub>i</sub> для каждого интервала.</h3>
        <p className="ms-5 fs-5">
          По формуле p<sub>i</sub> = Φ((b<sub>i</sub> - x)/s) - Φ((a<sub>i</sub>{" "}
          - x)/s), где Φ - функция Лапласа, ai​ и bi​ - границы интервала.
        </p>
      </div>
      <div className="mt-2">
        <h3>4. Посчитать статистику Пирсона.</h3>
        <p className="ms-5 fs-5">По формуле χ<sup>2</sup> = ∑<sub>i=1</sub><sup>k</sup> ((f<sub>i</sub> - np<sub>i</sub>)<sup>2</sup>/(np<sub>i</sub>))</p>
      </div>
      <div className="mt-2">
        <h3>5. Сравнить полученное значение с критическим значением.</h3>
        <p className="ms-5 fs-5">
          По формуле χ<sup>2</sup><sub>α,k-3</sub> из таблицы распределения хи-квадрат с уровнем значимости α
          и числом степеней свободы k-3
          <br />(три параметра: среднее, дисперсия и объем выборки).
        </p>
      </div>
      <div className="mt-2">
        <h3>6. Сделать выводы.</h3>
        <p className="ms-5 fs-5">
           Если χ<sup>2</sup>  &lt; χ<sup>2</sup><sub>α,k-3</sub> , то принять гипотезу о нормальном распределении, иначе - отвергнуть.
        </p>
      </div>
    </div>
  );
};

export default About;
