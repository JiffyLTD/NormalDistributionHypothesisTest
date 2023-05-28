import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Col, Row } from "react-bootstrap";

const ChartResult = ({ dataBar, dataLine, labels }) => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );
 
  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "График нормального распределения",
        backgroundColor: "indigo",
        borderColor: "indigo",
        borderWidth: 4,
        data: dataLine.theoreticalFrequencies,
        lineTension: 0.4
      },
      {
        type: "bar",
        label: "Гистограмма распределения генеральной совокупности",
        backgroundColor: "MediumVioletRed",
        data: dataBar.frequencyIntervals
      },
    ],
  };
  const options = {
    scales: {
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Количество, шт.',
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Интервалы выборки, гр.',
        },
      },
    }
  }
  return (
    <Row className="w-100 h-100">
      <Col sm="1"></Col>
      <Col sm="10">
        <Chart id="chart-result" data={data} options={options}/>
      </Col>
      <Col sm="1"></Col>
    </Row>
  );
};

export default ChartResult;
