/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {ContentHeader} from '@components';
import {useSelector} from 'react-redux';
import {useQuery} from "react-query";
import {getLink} from '@app/services/link';
import Spinner from 'react-bootstrap/Spinner';
import GenerateLink from '@modules/generate-link/GenerateLink';
import {ModalLinkDelete, VisitorChart, ModalLinkDetail} from '@modules/link';

const LinkPage = () => {
  const user = useSelector((state: any) => state.auth.currentUser);
  let linkTableHeader = {
    host_short: 'Short',
    redirect: 'Redirect',
  }
  const {data: links,isSuccess,isLoading} = useQuery(
    ["link", user.email],
    getLink
  );

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
      <ContentHeader title="Links" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div  className="table-responsive ">
                {isLoading?
                    <Spinner
                      className="ml-2"
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  :
                  links.docs.length === 0 ?
                  'No Data'
                  :
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        {
                          Object.keys(linkTableHeader).map(function(key, index) {
                            return(<th key={index} >{linkTableHeader[key]}</th>);
                          })
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {
                          links.docs.map(function(item, index) {
                            return(
                              <tr key={index}>
                                <td>{index+1}</td>
                                {
                                  Object.keys(linkTableHeader).map(function(key) {
                                    return(<td>{item[key]}</td>);
                                  })
                                }
                                <td>
                                  <ModalLinkDetail item={item} name="Detail"/>
                                  {" "}
                                  <ModalLinkDelete item={item} name="Delete Link"/>
                                </td>
                              </tr>
                            );
                          })
                      }
                    </tbody>
                  </table>
                }
              </div>
            </div>
          </div>
          <VisitorChart/>
        </div>
      </section>
    </div>
  );
};

export default LinkPage;
