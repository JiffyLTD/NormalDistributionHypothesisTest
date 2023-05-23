import React from "react";
import ChartExample from "./UI/ChartExample/ChartExample";
import TableResult from "./UI/TableResult/TableResult";

const Result = () => {
  return (
    <div className="bg-white container mt-5" id='pdf-to-print'>
      <div className="d-flex flex-column justify-content-center" id='table-to-print'>
        <h3 className="text-center">
          Результат проверки гипотезы нормального распределения
        </h3>
        <span className="fw-bold">Таблица</span>
        <TableResult />
      </div>
      <div>
        <span className="fw-bold">График</span>
        <div
          className="d-flex flex-column justify-content-center"
          id='chart-to-print'
        >
          <ChartExample />
        </div>
      </div>
      <p className="mt-4 fw-bold">По результатам вычислений и по графику мы можем сделать вывод что - </p>
    </div>
  );
};

export default Result;
