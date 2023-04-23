import React, { useState } from "react";
import lightHome from "../assets/house.svg";
import darkHome from "../assets/house1.svg";
import lightModule from "../assets/books1.svg";
import darkModule from "../assets/books.svg";
import lightInstructor from "../assets/instructor.svg";
import darkInstructor from "../assets/instructor1.svg";
import HomeComponent from "./HomeComponent";
import ModuleComponent from "./ModuleComponent";
import InstructorComponent from "./InstructorComponent";

function Pages({ handleDataPage }) {
  const [currentPage, setCurrentPage] = useState("home");
  const handlePAgeClick = (query) => {
    handleDataPage(query);
    setCurrentPage(query);
  };

  if (currentPage === "instructor") {
    return (
      <div className="main_page">
        <div className="sidebar_main">
          <div
            onClick={() => {
              handlePAgeClick("home");
            }}
          >
            <img src={lightHome} alt="" />
            <p>Home</p>
          </div>
          <div
            onClick={() => {
              handlePAgeClick("modules");
            }}
          >
            {" "}
            <img src={lightModule} alt="" />
            <p>Modules</p>
          </div>
          <div
            className="activesidebar"
            onClick={() => {
              handlePAgeClick("instructor");
            }}
          >
            <img src={darkInstructor} alt="" />
            <p>Instructors</p>
          </div>
        </div>
        <div>
          <InstructorComponent />
        </div>
      </div>
    );
  }

  if (currentPage === "modules") {
    return (
      <div className="main_page">
        <div className="sidebar_main">
          <div
            onClick={() => {
              handlePAgeClick("home");
            }}
          >
            <img src={lightHome} alt="" />
            <p>Home</p>
          </div>
          <div
            className="activesidebar"
            onClick={() => {
              handlePAgeClick("modules");
            }}
          >
            {" "}
            <img src={darkModule} alt="" />
            <p>Modules</p>
          </div>
          <div
            onClick={() => {
              handlePAgeClick("instructor");
            }}
          >
            <img src={lightInstructor} alt="" />
            <p>Instructors</p>
          </div>
        </div>
        <div>
          <ModuleComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="main_page">
      <div className="sidebar_main">
        <div
          className="activesidebar"
          onClick={() => {
            handlePAgeClick("home");
          }}
        >
          <img src={darkHome} alt="" />
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            handlePAgeClick("modules");
          }}
        >
          {" "}
          <img src={lightModule} alt="" />
          <p>Modules</p>
        </div>
        <div
          onClick={() => {
            handlePAgeClick("instructor");
          }}
        >
          <img src={lightInstructor} alt="" />
          <p>Instructors</p>
        </div>
      </div>
      <div>
        <HomeComponent />
      </div>
    </div>
  );
}

export default Pages;
