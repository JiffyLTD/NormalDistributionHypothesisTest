import React from "react";

const ProbabilityInputBlock = ({setProbability}) => {
  return (
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
      <br />
      <span className="w-100 text-muted ms-2" id="inputGroup-sizing-sm">
          Например 0.05
        </span>
    </div>
  );
};

export default ProbabilityInputBlock;
