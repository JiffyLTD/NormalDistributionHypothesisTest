import React, { useEffect, useState } from "react";
import Result from "../Components/UI/Result/Result";
import ServiceAPI from "../API/ServiceAPI";
import { InfinitySpin } from "react-loader-spinner";
import FileInputBlock from "../Components/FileInputBlock/FileInputBlock";
import ProbabilityInputBlock from "../Components/ProbabilityInputBlock/ProbabilityInputBlock";
import IntervalsInputBlock from "../Components/IntervalsInputBlock/IntervalsInputBlock";

const NormalDestribution = () => {
  document.title = "Приступить к работе";

  const docHref = "https://localhost:7117/ResultDocuments/NDHT.docx";
  const pdfHref = "https://localhost:7117/ResultDocuments/NDHT.pdf";

  const [labels, setLabels] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [step, setStep] = useState(0);
  const [probability, setProbability] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formIsValid, setFormIsValid] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [resultIsReady, setResultIsReady] = useState(false);
  const [error, setError] = useState("");
  const [enterData, setEnterData] = useState({
    startIntervals: [],
    endIntervals: [],
    frequencyIntervals: [],
    probability: 0,
  });
  const [resultData1, setResultData1] = useState({
    middleIntervals: [0, 0],
    sampleMeans: [0, 0],
    standartDeviations: [0, 0],
    standartizeValues: [0, 0],
    standartNormalDestribution: [0, 0],
    theoreticalFrequencies: [0, 0],
    pirsonsValues: [0, 0],
  });
  const [resultData2, setResultData2] = useState({
    intervalsFrequencySum: 0,
    partialIntervalLength: 0,
    sampleMean: 0,
    standartDeviation: 0,
    pirsonsValuesSum: 0,
    pirsonsMean: 0,
    degreesOfFreedom: 0,
  });
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    if (probability && selectedFile && step && start && end) {
      setFormIsValid(false);
    }
  }, [probability, selectedFile, step, start, end]);

  useEffect(() => {
    if (labels && enterData && resultData1 && resultData2 && resultMessage) {
      if (frequencyIntervalsIsValid(enterData.frequencyIntervals)) {
        setResultIsReady(true);
      } else {
        setError("Установите корректные интервалы");
      }
    }
  }, [labels, enterData, resultData1, resultData2, resultMessage]);

  const frequencyIntervalsIsValid = (data) =>{
    let isValid = true;
    let elem = document.getElementById("list-error");
    elem.innerHTML = "";

    for(let i = 0;i < data.length; i++){
      if(data[i] === 0){
        isValid = false;
        let li = document.createElement("li");
        li.textContent =
          "Для интервала " +
          enterData.startIntervals[i] +
          " - " +
          enterData.endIntervals[i] +
          " значение частоты 0. ";
        elem.appendChild(li);
      }
    }

    return isValid;
  }

  const uploadData = async () => {
    setResultIsReady(false);
    setError("");
    setIsLoad(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("probability", probability);
    formData.append("start", start);
    formData.append("end", end);
    formData.append("step", step);

    try {
      let result = await ServiceAPI.NormalDestribution(formData);
      console.log(result);

      if (result.status === 200) {
        let resultData = result.data.populationOfData;

        let labels = [];
        for (let i = 0; i < resultData.startIntervals.length; i++) {
          labels[
            i
          ] = `${resultData.startIntervals[i]} - ${resultData.endIntervals[i]}`;
        }
        setLabels(labels);
        setEnterData({
          startIntervals: resultData.startIntervals,
          endIntervals: resultData.endIntervals,
          frequencyIntervals: resultData.intervalsFrequency,
          probability: probability,
          partialIntervalLength: resultData.partialIntervalLength,
        });
        setResultData1({
          middleIntervals: resultData.middleIntervals,
          sampleMeans: resultData.sampleMeans,
          standartDeviations: resultData.standartDeviations,
          standartizeValues: resultData.standartizeValues,
          standartNormalDestribution: resultData.standartNormalDestribution,
          theoreticalFrequencies: resultData.theoreticalFrequencies,
          pirsonsValues: resultData.pirsonsValues,
        });
        setResultData2({
          intervalsFrequencySum: resultData.intervalsFrequencySum,
          sampleMean: resultData.sampleMean,
          standartDeviation: resultData.standartDeviation,
          pirsonsValuesSum: resultData.pirsonsValuesSum,
          pirsonsMean: resultData.pirsonsMean,
          degreesOfFreedom: resultData.degreesOfFreedom,
        });
        setResultMessage(result.data.message);
      } else {
        console.log(result);
      }
    } catch (error) {
      try{
      if (error.response.status === 400) {
        setError("Ошибка чтения файла.");
        let elem = document.getElementById("list-error");
        elem.innerHTML = "";
        for(let i = 0; i < error.response.data.length; i++){
          let li = document.createElement("li");
          li.textContent = error.response.data[i];
          elem.appendChild(li);
        }
      }
    }
    catch{
      setError("Ошибка соединения с сервером. Попробуйте позже.");
    }
    }
    setIsLoad(false);
  };

  const clearResult = () => {
    setResultIsReady(false);
  };

  return (
    <div className="border rounded bg-white container">
      <div className="mt-5 mb-5 ms-5">
        <FileInputBlock setSelectedFile={setSelectedFile} />
        <ProbabilityInputBlock setProbability={setProbability} />
        <IntervalsInputBlock
          setStart={setStart}
          setEnd={setEnd}
          setStep={setStep}
          start={start}
        />
        <button
          type="button"
          className="btn btn-primary mt-3 mb-2"
          disabled={formIsValid}
          onClick={uploadData}
        >
          Загрузить данные
        </button>
        <div className="text-center">
          {isLoad ? (
            <div>
              <InfinitySpin color="blue" /> <p>Идет загрузка...</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <span className="text-danger">{error}</span>
        <ul id="list-error" className="text-danger"></ul>
      </div>
      {resultIsReady ? (
        <div className="mb-2">
          <a href={pdfHref} target="_blank" rel="noopener">
            <button type="button" className="btn btn-danger">
              Сохранить в .pdf
            </button>
          </a>
          &nbsp; или &nbsp;
          <a href={docHref} target="_blank" rel="noopener">
            <button type="button" className="btn btn-primary">
              Сохранить в .doc
            </button>
          </a>
          <button
            type="button"
            className="ms-5 btn btn-warning"
            onClick={clearResult}
          >
            Очистить результаты
          </button>
          <Result
            enterData={enterData}
            resultData1={resultData1}
            resultData2={resultData2}
            resultMessage={resultMessage}
            labels={labels}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NormalDestribution;
