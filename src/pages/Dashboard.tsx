/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
import {SmallBox} from '@app/components';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h5 className="mb-2">Info Box</h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-info">
              <i className="far fa-envelope" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Messages</span>
              <span className="info-box-number">1,410</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-success">
              <i className="far fa-flag" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">410</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-warning">
              <i className="far fa-copy" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Uploads</span>
              <span className="info-box-number">13,648</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-danger">
              <i className="far fa-star" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">93,139</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
