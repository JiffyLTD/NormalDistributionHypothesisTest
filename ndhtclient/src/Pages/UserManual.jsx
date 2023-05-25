import React from "react";
import TableEnterData from "../Components/UI/TableEnterData/TableEnterData";
import TableResultData1 from "../Components/UI/TableResultData/TableResultData1";
import TableResultData2 from "../Components/UI/TableResultData/TableResultData2";
import { Col, Row } from "react-bootstrap";
import ChartResult from "../Components/UI/ChartResult/ChartResult";

const UserManual = () => {
  document.title = "Руководство пользования";

  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min) / 10;
  }

  const enterData = {
    startIntervals: [7.5, 10.5, 13.5],
    endIntervals: [10.5, 13.5, 16.5],
    frequencyIntervals: [2, 5, 1],
    probability: 0.05,
  };
  const resultData1 = {
    middleIntervals: [9, 12, 15],
    sampleMeans: [18, 72, 150],
    standartDeviations: [162, 864, 2250],
    standartizeValues: [-2.23, -1.68, -1.14],
    standartNormalDestribution: [0.03, 0.10, 0.21],
    theoreticalFrequencies: [1.81, 5.31, 2.19],
    pirsonsValues: [0.02, 0.09, 0.19],
  };
  const resultData2 = {
    intervalsFrequencySum: 9,
    partialIntervalLength: 3,
    sampleMean: 21.21,
    standartDeviation: 5.47,
    pirsonsValuesSum: 12.59,
    pirsonsMean: 14.01,
    degreesOfFreedom: resultData1.theoreticalFrequencies.length - 2 - 1,
  };

  return (
    <div className="border rounded bg-white container">
      <h2 className="mt-2">Руководство пользования.</h2>
      <div className="mt-5">
        <h3>1. Перейти на вкладку 'Приступить к работе'.</h3>
        <p className="ms-5 fs-5">
          Загрузить файл формата .csv и вида -
          <table className="border border-primary mt-2">
            <caption>Пример таблицы файла .csv - *data - данные</caption>
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
          <button type="button" className="btn btn-primary">
            Загрузить данные
          </button>
          <br />и затем подождать результата обработки данных
        </p>
      </div>
      <div className="mt-2">
        <h3>4. Получить результаты обработки данных.</h3>
        <p className="ms-5 fs-5">
          <span className="fw-bold">
            Результаты выводятся в виде таблиц и графика
          </span>
          <br />
          <span className="fw-bold">Примеры таблиц</span>
          <Row>
            <Col>
              <TableEnterData enterData={enterData} />
            </Col>
            <Col>
              <TableResultData1 resultData1={resultData1} />
            </Col>
          </Row>
          <TableResultData2 resultData2={resultData2} />
          <span className="fw-bold">Где входные данные :</span> <br />
          Начало интервала <br />
          Конец интервала <br />n <sub>i</sub> - частоты выборки <br />
          α- уровень значимости <br />
          <span className="fw-bold">Где вычисляемые данные :</span><br />
          h - длина частичного интервала <br />
          n - объем выборки <br />
          x <sub>i</sub> - середины интервалов <br />x<sub>i</sub>n
          <sub>i</sub> - данные необходимые для вычисления выборочной средней
          <br />x<sub>i</sub>
          <sup>2</sup> n<sub>i</sub> - данные необходимые для вычисления
          среднего квадратичного отклонения <br />z<sub>i</sub> -
          стандартизированные значения x<sub>i</sub>
          <br />
          f(
          <sub>
            z<sub>i</sub>
          </sub>
          ) - значение функции плотности стандартного нормального распределения
          <br />n<sub>i</sub>
          <sup>t</sup> - теоритические частоты
          <br />
          x̅ - выборочная средняя
          <br />
          &#x3C3; <sub>e</sub> - среднее квадратное отклонение <br />x{" "}
          <sup>2</sup> <sub>крит</sub> - критическое значение распределения
          <br />x <sup>2</sup> <sub>набл</sub> - критерий согласия Пирсона{" "}
          <br />
          k - количество степеней свободы <br />
          <span className="fw-bold">График</span> <br />
          <ChartResult dataBar={enterData} dataLine={resultData1}/>
          <span className="text-muted">Пример графика</span>
        </p>
      </div>
      <div className="mt-2">
        <h3>5. Сохранение результатов.</h3>
        <p className="ms-5 fs-5">
          Вы можете сохранить результаты в формате .pdf или .doc <br />
          Нажав на соответствующие кнопки &nbsp;
          <button type="button" className="btn btn-danger">
            Сохранить в .pdf
          </button>
          &nbsp; или &nbsp;
          <button type="button" className="btn btn-primary">
            Сохранить в .doc
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserManual;
