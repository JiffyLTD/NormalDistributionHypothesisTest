import React from "react";
import TableEnterData from "../Components/UI/TableEnterData/TableEnterData";
import TableResultData1 from "../Components/UI/TableResultData/TableResultData1";
import TableResultData2 from "../Components/UI/TableResultData/TableResultData2";
import { Col, Row } from "react-bootstrap";
import ChartResult from "../Components/UI/ChartResult/ChartResult";

const UserManual = () => {
  document.title = "Руководство пользования";

  const csvNeNormalHref = "https://localhost:7117/TestCsv/testDataCSVNeNormal.csv";
  const csvNormalHref = "https://localhost:7117/TestCsv/testDataCSVNormal.csv";

  const enterData = {
    startIntervals: [800, 810, 820, 830, 840, 850, 860, 870, 880, 890],
    endIntervals: [810, 820, 830, 840, 850, 860, 870, 880, 890, 900],
    frequencyIntervals: [2, 6, 3, 6, 11, 5, 6, 4, 3, 4],
    probability: 0.05,
    partialIntervalLength: 10,
  };
  const resultData1 = {
    middleIntervals: [805, 815, 825, 835, 845, 855, 865, 875, 885, 895],
    sampleMeans: [1610, 4890, 2475, 5010, 9295, 4275, 5190, 3500, 2655, 3580],
    standartDeviations: [
      1296050, 3985350, 2041875, 4183350, 7854275, 3655125, 4489350, 3062500,
      2349675, 3204100,
    ],
    standartizeValues: [
      -1.8, -1.4, -0.99, -0.59, -0.19, 0.22, 0.62, 1.03, 1.43, 1.83,
    ],
    standartNormalDestribution: [
      0.08, 0.15, 0.24, 0.34, 0.39, 0.39, 0.33, 0.24, 0.14, 0.07,
    ],
    theoreticalFrequencies: [
      1.59, 3.03, 4.92, 6.77, 7.92, 7.87, 6.64, 4.76, 2.9, 1.5,
    ],
    pirsonsValues: [0.11, 2.9, 0.75, 0.09, 1.2, 1.05, 0.06, 0.12, 0.0, 4.17],
  };
  const resultData2 = {
    intervalsFrequencySum: 50,
    sampleMean: 849.6,
    standartDeviation: 24.76,
    pirsonsValuesSum: 10.44,
    pirsonsMean: 14.07,
    degreesOfFreedom: 7,
  };
  const labels = [
    "800-810",
    "810-820",
    "820-830",
    "830-840",
    "840-850",
    "850-860",
    "860-870",
    "870-880",
    "880-890",
    "890-900",
  ];

  return (
    <div className="border rounded bg-white container">
      <h2 className="mt-2">Руководство пользования.</h2>
      <div className="mt-5">
        <h3>1. Перейти на вкладку 'Приступить к работе'.</h3>
        <p className="ms-5 fs-5">
          <Row>
            <Col sm="4">Загрузить файл формата .csv вида -</Col>
            <Col sm="7">
              <table className="border border-primary mt-2">
                <caption className="fs-6">Пример структуры .csv файла</caption>
                <tr>
                  <td
                    className="border border-primary text-center"
                    width="100pt"
                  >
                    ID
                  </td>
                  <td
                    className="border border-primary text-center"
                    width="100pt"
                  >
                    Weight
                  </td>
                </tr>
                <tr>
                  <td className="border border-primary text-center">data</td>
                  <td className="border border-primary text-center">data</td>
                </tr>
              </table>
            </Col>
          </Row>
          <span className="fw-bold">Где : </span>
          <br />
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
          В данном приложении есть возможность выбора : <br />- нижнего предела
          интервала в границах <span className="text-primary">100-1500</span>{" "}
          грамм c шагом в 10 грамм <br />- верхнего предела интервала в м{" "}
          <span className="text-primary">
            нижний предел интервала + 400 грамм
          </span>{" "}
          грамм c шагом в 10 грамм <br />- шага интервала в границах{" "}
          <span className="text-primary">5-30</span> грамм c шагом в 5 грамм{" "}
          <br />
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
            <span className="fw-bold ms-1">
              - выберем нижнее значение интервала 800 грамм
            </span>
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
            <span className="fw-bold ms-1">
              - выберем верхнее значение интервала 900 грамм
            </span>
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
            <span className="fw-bold ms-1">
              - выберем шаг интервала 10 грамм
            </span>
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
          <span className="text-muted">Пример нормального распределения</span>
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
          Начало интервала - со скольки грамм начинается интервал
          <br />
          Конец интервала - на скольки граммах заканчивается интервал
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msub>
                  <mi>n</mi>
                  <mi>i</mi>
                </msub>
              </mrow>
              <annotation encoding="application/x-tex">n_i</annotation>
            </semantics>
          </math>{" "}
          - количество продукта в указанном интервале (частота выборки)
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <mi>α</mi>
              </mrow>
              <annotation encoding="application/x-tex">\alpha</annotation>
            </semantics>
          </math>
          - уровень значимости <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msubsup>
                  <mi>h</mi>
                </msubsup>
              </mrow>
              <annotation encoding="application/x-tex">h</annotation>
            </semantics>
          </math>{" "}
          - шаг интервала <br />
          <span className="fw-bold">Где вычисляемые данные :</span>
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msub>
                  <mi>x</mi>
                  <mi>i</mi>
                </msub>
              </mrow>
              <annotation encoding="application/x-tex">x_i</annotation>
            </semantics>
          </math>{" "}
          - середина интервала <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msub>
                  <mi>x</mi>
                  <mi>i</mi>
                </msub>
                <msub>
                  <mi>n</mi>
                  <mi>i</mi>
                </msub>
              </mrow>
              <annotation encoding="application/x-tex">x_i n_i</annotation>
            </semantics>
          </math>{" "}
          - взвешенная сумма
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msubsup>
                  <mi>x</mi>
                  <mi>i</mi>
                  <mn>2</mn>
                </msubsup>
                <msub>
                  <mi>n</mi>
                  <mi>i</mi>
                </msub>
              </mrow>
              <annotation encoding="application/x-tex">x_i^2 n_i</annotation>
            </semantics>
          </math>{" "}
          - взвешенная сумма квадратов отклонения
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msub>
                  <mi>z</mi>
                  <mi>i</mi>
                </msub>
              </mrow>
              <annotation encoding="application/x-tex">z_i</annotation>
            </semantics>
          </math>{" "}
          -стандартизированные значения середин интервалов
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msub>
                  <mi>f</mi>
                  <msub>
                    <mi>z</mi>
                    <mi>i</mi>
                  </msub>
                </msub>
              </mrow>
              <annotation encoding="application/x-tex">f_(z_i)</annotation>
            </semantics>
          </math>{" "}
          - значение функции плотности стандартного нормального распределения
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msubsup>
                  <mi>n</mi>
                  <mi>i</mi>
                  <mi>t</mi>
                </msubsup>
              </mrow>
              <annotation encoding="application/x-tex">n_i^t</annotation>
            </semantics>
          </math>{" "}
          - теоретические частоты
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <mfrac>
                  <mrow>
                    <mo stretchy="false">(</mo>
                    <msub>
                      <mi>n</mi>
                      <mi>i</mi>
                    </msub>
                    <mo>−</mo>
                    <msubsup>
                      <mi>n</mi>
                      <mi>i</mi>
                      <mi>t</mi>
                    </msubsup>
                    <msup>
                      <mo stretchy="false">)</mo>
                      <mn>2</mn>
                    </msup>
                  </mrow>
                  <msubsup>
                    <mi>n</mi>
                    <mi>i</mi>
                    <mi>t</mi>
                  </msubsup>
                </mfrac>
              </mrow>
              <annotation encoding="application/x-tex">
                \frac(n_i - n_i^t)^2n_i^t
              </annotation>
            </semantics>
          </math>{" "}
          - критерий согласия пирсона для интервала
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msubsup>
                  <mi>n</mi>
                </msubsup>
              </mrow>
              <annotation encoding="application/x-tex">n</annotation>
            </semantics>
          </math>{" "}
          - объем выборки <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <mover accent="true">
                  <mi>x</mi>
                  <mo>ˉ</mo>
                </mover>
                <mo>=</mo>
                <mfrac>
                  <mrow>
                    <mo>∑</mo>
                    <msub>
                      <mi>x</mi>
                      <mi>i</mi>
                    </msub>
                    <msub>
                      <mi>n</mi>
                      <mi>i</mi>
                    </msub>
                  </mrow>
                  <mi>n</mi>
                </mfrac>
              </mrow>
              <annotation encoding="application/x-tex">
                \barx = \frac\sum x_i n_in
              </annotation>
            </semantics>
          </math>{" "}
          - выборочная средняя
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msub>
                  <mi>σ</mi>
                  <mi>e</mi>
                </msub>
                <mo>=</mo>
                <msqrt>
                  <mrow>
                    <mfrac>
                      <mrow>
                        <msubsup>
                          <mi>x</mi>
                          <mi>i</mi>
                          <mn>2</mn>
                        </msubsup>
                        <msub>
                          <mi>n</mi>
                          <mi>i</mi>
                        </msub>
                      </mrow>
                      <mi>n</mi>
                    </mfrac>
                    <mo>−</mo>
                    <mo stretchy="false">(</mo>
                    <mover accent="true">
                      <mi>x</mi>
                      <mo>ˉ</mo>
                    </mover>
                    <msup>
                      <mo stretchy="false">)</mo>
                      <mn>2</mn>
                    </msup>
                  </mrow>
                </msqrt>
              </mrow>
              <annotation encoding="application/x-tex">
                \sigma_e = \sqrt\fracx_i^2 n_in - (\barx)^2
              </annotation>
            </semantics>
          </math>{" "}
          - среднее квадратическое отклонение <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <mi>k</mi>
              </mrow>
              <annotation encoding="application/x-tex">k</annotation>
            </semantics>
          </math>{" "}
          - количество степеней свободы <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msubsup>
                  <mi>x</mi>
                  <mtext>крит</mtext>
                  <mn>2</mn>
                </msubsup>
              </mrow>
              <annotation encoding="application/x-tex">
                x^2_\textкрит
              </annotation>
            </semantics>
          </math>{" "}
          - критическое значение распределения
          <br />
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <semantics>
              <mrow>
                <msubsup>
                  <mi>x</mi>
                  <mtext>набл</mtext>
                  <mn>2</mn>
                </msubsup>
              </mrow>
              <annotation encoding="application/x-tex">
                x^2_\textкрит
              </annotation>
            </semantics>
          </math>{" "}
          - наблюдаемый критерий согласия Пирсона
          <br />
          <span className="fw-bold">Пример графика</span> <br />
          <ChartResult
            dataBar={enterData}
            dataLine={resultData1}
            labels={labels}
          />
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
          Вы можете скачать тестовые данные и перейти на вкладку 'Приступить к
          работе', ввести все настройки из данного примера и убедиться в
          работоспособности программы.
          <br />
          <a href={csvNormalHref} target="_blank" rel="noopener">
            <button type="button" className="btn btn-success mt-2">
              Скачать тестовую выборку нормального распределения в формате .csv
            </button>
          </a>
          <br />
          <a href={csvNeNormalHref} target="_blank" rel="noopener">
            <button type="button" className="btn btn-success mt-2">
              Скачать тестовую выборку не нормального распределения в формате
              .csv
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserManual;
