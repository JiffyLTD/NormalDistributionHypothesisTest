import React from "react";
import TableResultExample from "../Components/UI/TableResultExample/TableResultExample";

const About = () => {
  document.title = "Руководство";

  return (
    <div className="border rounded bg-white container">
      <h2 className="mt-2">Руководство пользования.</h2>
      <div className="mt-5">
        <h3>1. Перейти на вкладку 'Приступить к работе'.</h3>
        <p className="ms-5 fs-5">
          Загрузить файл формата .csv и вида -
          <table className="border border-primary mt-2">
            <caption>Пример таблицы файла .csv</caption>
            <tr>
              <td className="border border-primary">
                Hi, I'm your first cell.
              </td>
              <td className="border border-primary">I'm your second cell.</td>
              <td className="border border-primary">I'm your third cell.</td>
              <td className="border border-primary">I'm your fourth cell.</td>
            </tr>
            <tr>
              <td className="border border-primary">data</td>
              <td className="border border-primary">data</td>
              <td className="border border-primary">data</td>
              <td className="border border-primary">data</td>
            </tr>
          </table>
        </p>
      </div>
      <div className="mt-2">
        <h3>2. Выбрать уровень значимости.</h3>
        <p className="ms-5 fs-5">
          В данном приложении есть возможность выбора 3х видов уровня значимости
          - <span className="text-primary">0.01, 0.05, 0.1</span>
          <br />
          Уровни значимости в гипотезе о нормальном распределении - это
          вероятности ошибочно отвергнуть нулевую гипотезу о том, что данные
          распределены нормально, когда она верна. Обычно уровень значимости
          обозначается буквой α и выбирается заранее в зависимости от желаемой
          степени уверенности в результате. Чем меньше α, тем сильнее
          доказательства нужны для отвержения нулевой гипотезы. Например, если α
          = 0.05, то это означает, что мы готовы принять риск ошибиться в 5%
          случаев.
        </p>
      </div>
      <div className="mt-2">
        <h3>3. Отправить данные на сервер</h3>
        <p className="ms-5 fs-5">
          После загрузки файла с данными и выбора уровня значимости <br />-
          отправить данные на сервер с помощью кнопки{" "}
          <button type="button" class="btn btn-primary">
            Загрузить данные
          </button>
          <br />и затем подождать результата обработки данных
        </p>
      </div>
      <div className="mt-2">
        <h3>4. Получить результаты обработки результатов.</h3>
        <p className="ms-5 fs-5">
          <TableResultExample />
         <span className="fw-bold">Где входные данные :</span> <br />
          h - длина частичного интервала <br />
          n - объем выборки <br />
          n <sub>i</sub> - частоты выборки <br />
          α- уровень значимости <br />
          <span className="fw-bold">Где вычисляемые данные :</span> <br />
          x <sub>i</sub> - середины интервалов <br />
          x<sub>i</sub>n<sub>i</sub> - данные необходимые для вычисления выборочной средней<br />
          x<sub>i</sub><sup>2</sup> n<sub>i</sub> - данные необходимые для вычисления среднего квадратичного отклонения <br />
          z<sub>i</sub> - стандартизированные значения x<sub>i</sub><br />
          f(
          <sub>
            z<sub>i</sub>
          </sub>
          ) - значение функции плотности стандартного нормального распределения<br />
          n<sub>i</sub>
          <sup>t</sup> - теоритические частоты<br />
          x̅ - выборочная средняя<br />
          &#x3C3; <sub>e</sub> - среднее квадратное отклонение <br />
          x <sup>2</sup> <sub>крит</sub> - критическое значение распределения<br /> 
          x <sup>2</sup> <sub>набл</sub> - критерий согласия Пирсона <br />
          k - количество степеней свободы <br />
        </p>
      </div>
      <div className="mt-2">
        <h3>5. Сравнить полученное значение с критическим значением.</h3>
        <p className="ms-5 fs-5">
          По формуле χ<sup>2</sup>
          <sub>α,k-3</sub> из таблицы распределения хи-квадрат с уровнем
          значимости α и числом степеней свободы k-3
          <br />
          (три параметра: среднее, дисперсия и объем выборки).
        </p>
      </div>
      <div className="mt-2">
        <h3>6. Сделать выводы.</h3>
        <p className="ms-5 fs-5">
          Если χ<sup>2</sup> &lt; χ<sup>2</sup>
          <sub>α,k-3</sub> , то принять гипотезу о нормальном распределении,
          иначе - отвергнуть.
        </p>
      </div>
    </div>
  );
};

export default About;
