import React from "react";
import { Col, Row } from "react-bootstrap";
import TableEnterData from "../TableEnterData/TableEnterData";
import TableResultData1 from "../TableResultData/TableResultData1";
import TableResultData2 from "../TableResultData/TableResultData2";
import ChartResult from "../ChartResult/ChartResult";

const Result = ({enterData, resultData1, resultData2, resultMessage}) => {
  return (
    <div className="border border-dark bg-white container mt-5" id='pdf-to-print'>
      <div className="d-flex flex-column justify-content-center" id='table-to-print'>
        <h3 className="text-center">
          Результат проверки гипотезы нормального распределения
        </h3>
        <span className="fw-bold">Таблицы</span>
        <Row className="ms-5 mt-3">
            <Col>
              <TableEnterData enterData={enterData} />
            </Col>
            <Col>
              <TableResultData1 resultData1={resultData1} />
            </Col>
          </Row>
          <TableResultData2 resultData2={resultData2} />
      </div>
      <div>
        <span className="fw-bold">График</span>
        <div
          className="d-flex flex-column justify-content-center"
          id='chart-to-print'
        >
          <ChartResult dataBar={enterData} dataLine={resultData1}/>
        </div>
      </div>
      <p className="mt-4 fw-bold">По результатам вычислений и по графику мы можем сделать вывод что - {resultMessage}</p>
    </div>
  );
};

export default Result;
