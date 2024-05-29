import React from 'react';

const ModuleTable = () => {
  const modules = [
    { name: 'DevOps', noLectures: 2, noPracticals: 2 },
    { name: 'Enterprise Web Dev', noLectures: 3, noPracticals: 2 },
  ];

  return (
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
  );
}

export default ModuleTable;
