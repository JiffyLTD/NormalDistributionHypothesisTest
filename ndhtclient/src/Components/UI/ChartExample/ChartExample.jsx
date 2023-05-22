import React, { MouseEvent, useRef } from 'react';
import  { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const ChartExample = () => {
    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip
      );
      const labels = ['Менее 975', '975-1000', '1000-1025', '1025-1050', 'более 1050'];
      const data = {
        labels,
        datasets: [
          {
            type: 'line',
            label: 'График нормального распределения',
            backgroundColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            data: [7.76, 31.6, 49.7, 31.6, 7.76]
          },
          {
            type: 'bar',
            label: 'Гистограмма распределения генеральной совокупности',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [6, 38, 44, 34, 8]
          }
        ],
      };
  return (
    <Chart
      data={data}
    />
  )
}

export default ChartExample