import React from "react";
import "./table.css";

function TablePage() {
  return (
    <div className="table-page">
      <h1 className="page-title">TGBS – Placement Data</h1>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Company</th>
              <th>Role</th>
              <th>Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>Infosys</td>
              <td>Software Engineer</td>
              <td>7 LPA</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>TCS</td>
              <td>System Analyst</td>
              <td>6 LPA</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Wipro</td>
              <td>Developer</td>
              <td>5 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePage;
