/* eslint-disable no-unused-vars */
/* eslint-disable  react/button-has-type */
/* eslint-disable  prettier/prettier */
/* eslint-disable  import/newline-after-import */
/* eslint-disable  react/no-unused-prop-types */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/state-in-constructor */
/* eslint-disable  no-console */
/* eslint-disable  no-underscore-dangle */
/* eslint-disable  prefer-const */
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useQuery} from "react-query";
import { Bar } from "react-chartjs-2";
import {getChartData} from '@app/services/visit';
import Spinner from 'react-bootstrap/Spinner';

const VisitorChart = ({short}: any) => {
  const user = useSelector((state: any) => state.auth.currentUser);
  const [groupBy, setGroupBy] = useState('date');
  const {data,isSuccess,isLoading} = useQuery(
    ["visit-chart-data", groupBy, user.email, short],
    getChartData
  );

  const options: any = {
    plugins:{legend:{position: "bottom"}},
    layout:{padding:10}
  }; 
  return (
    <>
      <div className="card">
        <div className="card-header">
          <select 
            className="form-control"
            onChange={(e)=>{
              setGroupBy(e.target.value)
            }}
          >
            <option value="date">Day</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div className="card-body">
        {isLoading&&
          <Spinner
            className="ml-2"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        }
        { isSuccess &&
          <Bar 
            options={options}
            data={{
              labels: data.map((item)=>{
                let elements = Object.keys(item._id).map(function(key) {
                  return(item._id[key]);
                });
                return elements.join('-')
              }) ,
              datasets: [
                {
                  label: 'Clicks',
                  data: data.map((item)=> item.count),
                  backgroundColor: '#f7813e',
                  
                }
              ],
            }}
          />
        }
        </div>
      </div>
    </>
  )
};

export default VisitorChart;
