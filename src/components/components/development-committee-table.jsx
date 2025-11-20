import React from "react";
import "./table.css";

const DevelopmentCommitteeTable = ({ data = [] }) => {
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});

  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Composition</th>
            <th>Name of the Official</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([sectionName, items], idx) => (
            <React.Fragment key={idx}>
              {/* Section Header */}
              <tr className="section-header">
                <td colSpan="4">{sectionName}</td>
              </tr>
              {items.map((item, i) => (
                <tr key={i}>
                  <td data-label="Sr. No.">{item.no}</td>
                  <td data-label="Advisory Board Position">{item.councilPosition}</td>
                  <td data-label="Name of the Official">{item.name}</td>
                  <td data-label="Designation">{item.designation}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DevelopmentCommitteeTable;
