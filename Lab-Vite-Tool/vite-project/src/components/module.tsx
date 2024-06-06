import React from "react"
import {ModuleProps} from "../types/interfaces"

const Module: React.FC<ModuleProps> = (module) => {

    return (
        <tr>
        <td>{module.name}</td>
        <td>{module.noLectures}</td>
        <td>{module.noPracticals}</td>
      </tr>
    );
  };
  
  export default Module;