import React from 'react';
import { CSVLink } from 'react-csv';

function Download(props) {
  const { name, Customer_No, Brand, Channel } = props;
  const headers = [{ label: 'Plant Name', key: 'name' },
  { label: "Customer ID", key: 'Customer_No' },
  { label: "Brand", key: 'Brand' },
  { label: "Channel", key: 'Channel' }
  ]
  const Plant = [
    { name, Customer_No, Brand, Channel }
  ]

  const csvReport = {
    data: Plant,
    headers: headers,
    filename: 'Report.csv'
  };
  console.log(name, Customer_No, Brand, Channel)
  return (
    <div>
      <button><CSVLink style={{ textDecoration: "none" }}{...csvReport}>Download</CSVLink></button>
    </div>
  );
}
export default Download;