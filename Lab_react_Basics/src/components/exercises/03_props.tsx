// src/components/exercises/03_props.tsx
import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

type Module = {
  name: string;
  noLectures: number;
  noPracticals: number;
};

type Props = {
  course: string;
  modules: Module[];
};

const ModuleTable = ({ course, modules }: Props) => {
  return (
    <div>
      <h1>{course}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => (
            <tr key={index}>
              <td>{module.name}</td>
              <td>{module.noLectures}</td>
              <td>{module.noPracticals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModuleTable;
