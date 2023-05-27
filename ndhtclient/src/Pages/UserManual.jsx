import React from "react";
import TableEnterData from "../Components/UI/TableEnterData/TableEnterData";
import TableResultData1 from "../Components/UI/TableResultData/TableResultData1";
import TableResultData2 from "../Components/UI/TableResultData/TableResultData2";
import { Col, Row } from "react-bootstrap";
import ChartResult from "../Components/UI/ChartResult/ChartResult";

const UserManual = () => {
  document.title = "Руководство пользования";

  const csvNeNormal = "https://localhost:7117/TestCsv/testDataCSVNeNormal.csv";
  const csvNormal = "https://localhost:7117/TestCsv/testDataCSVNormal.csv";

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
  const labels = ['800-810', '810-820', '820-830', '830-840', '840-850', '850-860', '860-870', '870-880', '880-890', '890-900'];

  return (
    <div className="border rounded bg-white container">
      <h2 className="mt-2">Руководство пользования.</h2>
      <div className="mt-5">
        <h3>1. Перейти на вкладку 'Приступить к работе'.</h3>
        <p className="ms-5 fs-5">
          <Row>
            <Col sm='4'>Загрузить файл формата .csv вида -</Col>
            <Col sm='7'><table className="border border-primary mt-2">
            <caption>Пример файла .csv</caption>
            <tr>
              <td className="border border-primary text-center" width="100pt">ID</td>
              <td className="border border-primary text-center" width="100pt">Weight</td>
            </tr>
            <tr>
              <td className="border border-primary text-center">data</td>
              <td className="border border-primary text-center">data</td>
            </tr>
          </table></Col>
          </Row>
          <span className="fw-bold">Где : </span><br />
          ID - номер упаковки продукта <br />
          Weight - вес упаковки продукта
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
          <select
        className="form-select-sm w-25 mt-2"
        aria-label="Default select example"
        disabled
      >
        <option selected defaultValue disabled>
        0.05
        </option>
      </select>
      <span className="fw-bold ms-1">- выберем значение 0.05</span>
        </p>
      </div>
      <div className="mt-2">
        <h3>3. Выбрать интервалы и шаг генеральной совокупности.</h3>
        <p className="ms-5 fs-5">
          В данном приложении есть возможность выбора : <br />
          - нижнего предела интервала в границах <span className="text-primary">100-1500</span> грамм c шагом в 10 грамм <br />
          - верхнего предела интервала в м <span className="text-primary">нижний предел интервала + 400 грамм</span> грамм c шагом в 10 грамм <br />
          - шага интервала в границах <span className="text-primary">5-30</span> грамм c шагом в 5 грамм <br />
        <div className="input-group input-group-sm mb-3 mt-2">
        <select
          className="form-select-sm rounded w-25"
          aria-label="Default select example"
          disabled
        >
          <option selected defaultValue disabled>
            800
          </option>
        </select>
        <span className="fw-bold ms-1">- выберем нижнее значение интервала 800 грамм</span>
      </div>
      <div className="input-group input-group-sm mb-3">
        <select
          className="form-select-sm rounded w-25"
          aria-label="Default select example"
          disabled
        >
          <option selected defaultValue disabled>
            900
          </option>
        </select>
        <span className="fw-bold ms-1">- выберем верхнее значение интервала 900 грамм</span>
      </div>
      <div className="input-group input-group-sm mb-3">
        <select
          className="form-select-sm rounded w-25"
          aria-label="Default select example"
          disabled
        >
          <option selected defaultValue disabled>
            10
          </option>
        </select>
        <span className="fw-bold ms-1">- выберем шаг интервала 10 грамм</span>
      </div>
        </p>
      </div>
      <div className="mt-2">
        <h3>4. Отправить данные на сервер</h3>
        <p className="ms-5 fs-5">
          После загрузки файла с данными и выбора всех настроек <br />-
          отправить данные на сервер с помощью кнопки{" "}
          <button type="button" className="btn btn-primary">
            Загрузить данные
          </button>
          <br />и затем подождать результата обработки данных
        </p>
      </div>
      <div className="mt-2">
        <h3>5. Получить результаты обработки данных.</h3>
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
          <span className="fw-bold">Пример графика</span> <br />
          <ChartResult dataBar={enterData} dataLine={resultData1} labels={labels}/>
          <span className="text-muted">Пример графика</span>
        </p>
      </div>
      <div className="mt-2">
        <h3>6. Сохранение результатов.</h3>
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
      <div className="mt-2">
        <h3>7. Скачать тестовые данные.</h3>
        <p className="ms-5 fs-5">
          Вы можете скачать тестовые данные и перейти на вкладку 'Приступить к работе', ввести все настройки из данного примера и убедиться в работоспособности программы.
          <br />
          <a href={csvNormal}>
          <button type="button" className="btn btn-success mt-2">
            Скачать тестовую выборку нормального распределения в формате .csv
          </button>
          </a>
          <br />
          <a href={csvNeNormal}>
          <button type="button" className="btn btn-success mt-2">
            Скачать тестовую выборку не нормального распределения в формате .csv
          </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserManual;
