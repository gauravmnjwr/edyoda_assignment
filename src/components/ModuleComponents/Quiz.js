import React from "react";
import calendarimg from "../../assets/calendar.svg";
import clock from "../../assets/clock-blue.svg";
function Quiz() {
  return (
    <div className="quiz_main">
      <div className="quiz_title">
        <h2>Quiz-1: Data Types</h2>
        <span>16 December 2021, Thursday</span>
      </div>
      <div className="quiz_details">
        <h4>Quiz Details</h4>
        <div>
          <div className="quiz_details1">
            <div>
              <div className="quiz_details1_1">10</div>
              <div className="quiz_details1_2">Questions</div>
            </div>
            <div>
              <div className="quiz_details1_1">-</div>
              <div className="quiz_details1_2">Duration</div>
            </div>
            <div>
              <div className="quiz_details1_1">125</div>
              <div className="quiz_details1_2">Total Score</div>
            </div>
          </div>
          <div className="quiz_details2">
            <div className="quiz_details2_1">
              <h5>Start: </h5>
              <div>
                <img src={calendarimg} alt="" />
                <span>16 Dec 2021</span>
              </div>
              <div>
                <img src={clock} alt="" />
                <span>07:30 PM</span>
              </div>
            </div>
            <div className="quiz_details2_2">
              <h5>Due: </h5>
              <div>
                <img src={calendarimg} alt="" />
                <span>16 Dec 2021</span>
              </div>
              <div>
                <img src={clock} alt="" />
                <span>07:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
