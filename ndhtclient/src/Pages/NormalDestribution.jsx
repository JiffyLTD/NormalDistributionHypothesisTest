import React, { useState } from "react";
import Result from "../Components/UI/Result/Result";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";

const NormalDestribution = () => {
  document.title = "Приступить к работе";

  const [probability, setProbability] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const formValidation = () => {
    return probability === 0 || selectedFile === null;
  };

  const saveResultPDF = () => {
    let table = document.getElementById("pdf-to-print");

    let opt = {
      filename: "result.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { width: 900 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(table).save();
  };

  return (
    <div className="border rounded bg-white container">
      <div className="mt-5 mb-5">
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
          className="btn btn-primary mt-3"
          disabled={formValidation()}
        >
          Загрузить данные
        </button>
      </div>

      <div className="mb-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={saveResultPDF}
        >
          Сохранить в .pdf
        </button>
        &nbsp; или &nbsp;
        <button
          type="button"
          className="btn btn-primary"
        >
          Сохранить в .doc
        </button>
        <Result />
      </div>
    </div>
  );
};

export default NormalDestribution;
