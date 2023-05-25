import React, { useState } from "react";
import Result from "../Components/UI/Result/Result";
import ServiceAPI from "../API/ServiceAPI";
import { InfinitySpin } from "react-loader-spinner";

const NormalDestribution = () => {
  document.title = "Приступить к работе";

  const [probability, setProbability] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [resultIsReady, setResultIsReady] = useState(false);
  const [error, setError] = useState("");
  const [enterData, setEnterData] = useState({
    startIntervals: [],
    endIntervals: [],
    frequencyIntervals: [],
    probability: 0
  });
  const [resultData1, setResultData1] = useState({
    middleIntervals: [0, 0],
    sampleMeans: [0, 0],
    standartDeviations: [0, 0],
    standartizeValues: [0, 0],
    standartNormalDestribution: [0, 0],
    theoreticalFrequencies: [0, 0],
    pirsonsValues: [0, 0]
  });
  const [resultData2, setResultData2] = useState({
    intervalsFrequencySum: 0,
    partialIntervalLength: 0,
    sampleMean: 0,
    standartDeviation: 0,
    pirsonsValuesSum: 0,
    pirsonsMean: 0,
    degreesOfFreedom: 0
  });
  const [resultMessage, setResultMessage] = useState('');

  const formValidation = () => {
    return probability === 0 || selectedFile === null;
  };

  const uploadData = async () => {
    setResultIsReady(false);
    setError("");
    setIsLoad(true);
    try {
      let result = await ServiceAPI.NormalDestribution();

      let resultData = result.data.populationOfData;

      setEnterData({startIntervals : resultData.startIntervals, endIntervals : resultData.endIntervals, frequencyIntervals : resultData.intervalsFrequency, probability : 0.05});
      setResultData1({middleIntervals : resultData.middleIntervals,  sampleMeans : resultData.sampleMeans, 
        standartDeviations : resultData.standartDeviations, standartizeValues : resultData.standartizeValues,
        standartNormalDestribution :  resultData.standartNormalDestribution, theoreticalFrequencies : resultData.theoreticalFrequencies,
        pirsonsValues : resultData.pirsonsValues});
      setResultData2({intervalsFrequencySum : resultData.intervalsFrequencySum, partialIntervalLength : resultData.partialIntervalLength,
        sampleMean : resultData.sampleMean, standartDeviation : resultData.standartDeviation,
        pirsonsValuesSum : resultData.pirsonsValuesSum, pirsonsMean : resultData.pirsonsMean,
        degreesOfFreedom : resultData1.theoreticalFrequencies.length - 3});
      setResultMessage(result.data.message);

      setResultIsReady(true);
    } catch (error) {
      setError("Ошибка соединения. Попробуйте позже.");
    }
    setIsLoad(false);
  };

  return (
    <div className="border rounded bg-white container">
      <div className="mt-5 mb-5 ms-5">
        <div>
          <h3>1. Загрузка данных.</h3>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label">
              Файл должен быть формата .csv
            </label>
            <input
              className="form-control form-control-sm w-25"
              id="formFileSm"
              type="file"
              onChange={(event) => setSelectedFile(event.target.files)}
            />
          </div>
        </div>
        <div>
          <h3>2. Выбор уровня значимости.</h3>
          <select
            className="form-select-sm w-25"
            aria-label="Default select example"
            onChange={(event) => setProbability(event.target.value)}
          >
            <option selected defaultValue disabled>
              Выберете уровень значимости
            </option>
            <option value="0.01">0.01</option>
            <option value="0.05">0.05</option>
            <option value="0.1">0.1</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3 mb-2"
          disabled={false}
          onClick={uploadData}
        >
          Загрузить данные
        </button>
        <div className="text-center">
          {isLoad ? <InfinitySpin color="blue" /> : ""}
          <span className="text-danger">{error}</span>
        </div>
      </div>
      {resultIsReady ? (
        <div className="mb-2">
          <button type="button" className="btn btn-danger">
            Сохранить в .pdf
          </button>
          &nbsp; или &nbsp;
          <button type="button" className="btn btn-primary">
            Сохранить в .doc
          </button>
          <Result enterData={enterData} resultData1={resultData1} resultData2={resultData2} resultMessage={resultMessage}/>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NormalDestribution;
