import React, { useState } from "react";
import StudentDetailsComponent from "./StudentDetailsComponent";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";

function StudentDetails() {
  const [showContent, setShowContent] = useState(false);
  const handleMouse = () => {
    setShowContent(true);
    console.log("heyyyy");
  };
  const handleOutMouse = () => {
    setShowContent(false);
  };
  return (
    <>
      {showContent ? (
        <>
          <div onMouseEnter={handleMouse} onMouseLeave={handleOutMouse}>
            <div className="student_main main_hover">
              <div>
                <p>
                  DS031221 <img src={upArrow} alt="" />
                </p>
                <h3>Data Scientist Program</h3>
              </div>
            </div>
            <StudentDetailsComponent />
          </div>
        </>
      ) : (
        <div
          className="student_main"
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <div>
            <p>
              DS031221 <img src={downArrow} alt="" />
            </p>
            <h3>Data Scientist Program</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentDetails;
