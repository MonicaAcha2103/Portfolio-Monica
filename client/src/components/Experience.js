import React from "react";
import { Table } from "reactstrap";
const edu = [
  ["b.tech -software engineering", "srm university", "2018", "9.1 (cgpa)"],
  ["12th", "Guru Shree Shanthivijai Jain Vidyalaya", "2014", "86.4%"],
  ["10th", "Guru Shree Shanthivijai Jain Vidyalaya", "2012", "89%"],
];

const Experience = () => (
  <div>
    <br />
    <h1 className="subtitle">Experience Details</h1>
    <br />
    <div className="table--style-exp">
      <Table borderless size="xl" responsive>
        <tbody>
          <tr>
            <td>
              <h2 className="edu">Developer Intern</h2>
              <h4 className="company">Ad2pro Media Solutions</h4>
              <h4>
                <i> Dec 2017 - May 2018 </i>
              </h4>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Table borderless size="xl" responsive>
        <tbody>
          <tr>
            <td>
              <h2 className="edu">Junior Product Engineer</h2>
              <h4 className="company">Ad2pro Media Solutions</h4>
              <h4>
                <i> May 2018 - April 2019</i>
              </h4>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Table borderless size="xl" responsive>
        <tbody>
          <tr>
            <td>
              <h2 className="edu">Member Technical Staff</h2>
              <h4 className="company">Ad2pro Media Solutions</h4>
              <h4>
                <i> April 2019 - Present</i>
              </h4>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
);

export default Experience;
