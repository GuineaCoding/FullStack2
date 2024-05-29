import React from 'react';

type Module = {
  name: string;
  noLectures: number;
};

type Props = {
  title: string;
  modules: Module[];
};

const CourseModulesCollection = ({ title, modules }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No of Lectures</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => (
            <tr key={index}>
              <td>{module.name}</td>
              <td>{module.noLectures}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseModulesCollection;
