import React from "react";
import Module from "./module";
import { ProgrammeProps } from "../types/interfaces";

const Programme: React.FC<ProgrammeProps> = ({ title, modules }) => {
    
    const list = modules.map((module, index) => (
    <Module key={index} {...module} />
))
    
  return (
    <>
      <h2>{`${title} Modules Table`}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No. of Lectures</th>
            <th>No. of Practicals</th>
          </tr>
        </thead>
          <tbody>{list}</tbody>
      </table>
    </>
  );
};

export default Programme;