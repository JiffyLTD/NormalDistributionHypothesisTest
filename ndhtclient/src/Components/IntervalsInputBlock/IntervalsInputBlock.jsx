import React, { useEffect, useState } from "react";

const IntervalsInputBlock = ({ setStart, setEnd, setStep, start }) => {
  const [startIsInit, setStartIsInit] = useState(true);

  useEffect(() => {
    if (start) {
      setStartIsInit(false);
      let select = document.getElementById("end-select");
      select.innerHTML = '';
      for (let i = Number(start); i < Number(start) + 400; ) {
        i += 10;
        let opt = document.createElement("option");
        opt.value = i;
        opt.text = i;
        select.appendChild(opt);
      }
    }
  }, [start]);

  useEffect(() => {
    let select = document.getElementById("start-select");
    for (let i = 100; i <= 1500; ) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.text = i;
      select.appendChild(opt);
      i += 10;
    }
    let selectStep = document.getElementById("step-select");
    for (let i = 5; i <= 30; ) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.text = i;
      selectStep.appendChild(opt);
      i += 5;
    }
  }, []);

  return (
    <div className="mt-2">
      <h3>3. Выбор интервалов генеральной совокупности.</h3>
      <div className="input-group input-group-sm mb-3">
        <select
          className="form-select-sm rounded w-25"
          aria-label="Default select example"
          onChange={(e) => setStart(e.target.value)}
          id="start-select"
        >
          <option selected defaultValue disabled>
            Выберете нижний предел
          </option>
        </select>
        <span className="w-100 text-muted ms-2" id="inputGroup-sizing-sm">
          Например 800 грамм
        </span>
      </div>
      <div className="input-group input-group-sm mb-3">
        <select
          className="form-select-sm rounded w-25"
          aria-label="Default select example"
          disabled={startIsInit}
          id="end-select"
          onChange={(e) => setEnd(e.target.value)}
        >
          <option selected defaultValue disabled>
            Выберете верхний предел
          </option>
        </select>
        <span className="w-100 text-muted ms-2" id="inputGroup-sizing-sm">
          Например 1050 грамм
        </span>
      </div>
      <div className="input-group input-group-sm mb-3">
        <select
          className="form-select-sm rounded w-25"
          aria-label="Default select example"
          onChange={(e) => setStep(e.target.value)}
          id="step-select"
        >
          <option selected defaultValue disabled>
            Выберете шаг интервала
          </option>
        </select>
        <span className="w-100 text-muted ms-2" id="inputGroup-sizing-sm">
          Например 10 грамм
        </span>
      </div>
    </div>
  );
};

export default IntervalsInputBlock;
