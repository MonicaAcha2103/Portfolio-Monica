import React from "react";
import { Table } from "reactstrap";
const edu = [
  ["b.tech -software engineering", "srm university", "2018", "9.1 (cgpa)"],
  ["12th", "Guru Shree Shanthivijai Jain Vidyalaya", "2014", "86.4%"],
  ["10th", "Guru Shree Shanthivijai Jain Vidyalaya", "2012", "89%"]
];

const Education = () => (
  <div>
    <br />
    <h1 className="subtitle">Education Details</h1>
    <br />
    <div className="table--style">
      <Table borderless size="xl" responsive>
        <tbody>
          <tr>
            <td width="30%" className="left">
              <h5 className="company">2014-2018</h5>
              <h2 className="edu">Bachelors Degree</h2>
            </td>
            <td width="10%"> </td>
            <td width="60%" className="right">
              <h2 className="edu">SRM Institute of Science and Technology</h2>
            </td>
          </tr>
          <tr />
          <tr>
            <td width="30%" className="left">
              <h5 className="company">2012-2014</h5>
              <h2 className="edu">Senior Secondary School</h2>
            </td>
            <td width="10%" />
            <td width="60%" className="right">
              <h2 className="edu">G.S.S.J.V School</h2>
            </td>
          </tr>
          <tr />
          <tr>
            <td width="30%" className="left">
              <h5 className="company">2012</h5>
              <h2 className="edu">Higher Secondary School</h2>
            </td>
            <td width="10%" />
            <td width="60%" className="right">
              <h2 className="edu">G.S.S.J.V School</h2>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
);

export default Education;
