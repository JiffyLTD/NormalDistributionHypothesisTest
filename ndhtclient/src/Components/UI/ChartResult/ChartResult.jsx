import React from 'react'
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
import { Col, Row } from 'react-bootstrap';

const ChartResult = ({dataBar, dataLine}) => {
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
        labels: dataLine.middleIntervals,
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
            data: dataBar.frequencyIntervals,
          },
        ],
      };
      var options = {
        responsive: true, // Автоматически подстраивать размер графика под элемент холста
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true // Начинать ось y с нуля
              }
            }
          ]
        }
      };
  return (
    <Row className='w-100 h-50'>
        <Col sm='1'></Col>
        <Col sm='10'><Chart data={data} options={options}/></Col>
        <Col sm='1'></Col>
    </Row>
  )
}

export default ChartResult