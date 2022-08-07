/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
import React from 'react';
import {ContentHeader} from '@components';
import { Line } from "react-chartjs-2";
import {ChartData, ScatterDataPoint} from "chart.js"

const Blank = () => {
  const legend: any = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };

  const options: any = {
    plugins:{legend:{position: "bottom"}},
    layout:{padding:10}
  }; 
  return (
    <div>
      <ContentHeader title="Blank Page" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <Line 
                options={options}
                data={{
                  labels: ['Jun', 'Jul', 'Aug'],
                  datasets: [
                    {
                      label: 'X',
                      data: [5, 6, 7],
                      borderColor: '#f7813e'
                    },
                    {
                      label: 'Y',
                      data: [3, 2, 1],
                      borderColor: '#547db4'
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blank;
