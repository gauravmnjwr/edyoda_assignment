import React, { useState } from "react";
import modulequizimg from "../assets/moduleQuiz.svg";
import assignment from "../assets/assignment.svg";
import topic from "../assets/topic.svg";
import activetopic from "../assets/activeTopic.svg";
import activequiz from "../assets/activeModuleQuiz.svg";
import activeassignment from "../assets/activeAssignment.svg";
import Assignment from "./ModuleComponents/Assignment";
import Quiz from "./ModuleComponents/Quiz";
import PythonLoops from "./ModuleComponents/PythonLoops";

function ModuleComponent() {
  const [module, setModule] = useState("pythonloops");

  const handleOnModuleClick = (query) => {
    setModule(query);
  };

  if (module === "assignment") {
    return (
      <div className="module_main">
        <div className="module_list">
          <div
            className="module_list1"
            onClick={() => handleOnModuleClick("pythonloops")}
          >
            <div>
              <img src={topic} alt="" />
            </div>
            <div>
              <b>Python Loops</b>
            </div>
          </div>
          <div
            className="module_list2"
            onClick={() => handleOnModuleClick("quiz")}
          >
            <div>
              <img src={modulequizimg} alt="" />
            </div>
            <div>
              <b>Quiz-1 Data Types</b>
            </div>
          </div>
          <div
            className="module_list3 module_list_selected"
            onClick={() => handleOnModuleClick("assignment")}
          >
            <div>
              <img src={activeassignment} alt="" />
            </div>
            <div>
              <b>Assignmemt -1: Operators | Loops</b>
            </div>
          </div>
        </div>
        <div className="module_details">
          <Assignment />
        </div>
      </div>
    );
  }
  if (module === "quiz") {
    return (
      <div className="module_main">
        <div className="module_list">
          <div
            className="module_list1"
            onClick={() => handleOnModuleClick("pythonloops")}
          >
            <div>
              <img src={topic} alt="" />
            </div>
            <div>
              <b>Python Loops</b>
            </div>
          </div>
          <div
            className="module_list2 module_list_selected"
            onClick={() => handleOnModuleClick("quiz")}
          >
            <div>
              <img src={activequiz} alt="" />
            </div>
            <div>
              <b>Quiz-1 Data Types</b>
            </div>
          </div>
          <div
            className="module_list3"
            onClick={() => handleOnModuleClick("assignment")}
          >
            <div>
              <img src={assignment} alt="" />
            </div>
            <div>
              <b>Assignmemt -1: Operators | Loops</b>
            </div>
          </div>
        </div>
        <div className="module_details">
          <Quiz />
        </div>
      </div>
    );
  }
  return (
    <div className="module_main">
      <div className="module_list">
        <div
          className="module_list1 module_list_selected"
          onClick={() => handleOnModuleClick("pythonloops")}
        >
          <div>
            <img src={activetopic} alt="" />
          </div>
          <div>
            <b>Python Loops</b>
          </div>
        </div>
        <div
          className="module_list2"
          onClick={() => handleOnModuleClick("quiz")}
        >
          <div>
            <img src={modulequizimg} alt="" />
          </div>
          <div>
            <b>Quiz-1 Data Types</b>
          </div>
        </div>
        <div
          className="module_list3"
          onClick={() => handleOnModuleClick("assignment")}
        >
          <div>
            <img src={assignment} alt="" />
          </div>
          <div>
            <b>Assignmemt -1: Operators | Loops</b>
          </div>
        </div>
      </div>
      <div className="module_details">
        <PythonLoops />
      </div>
    </div>
  );
}

export default ModuleComponent;
