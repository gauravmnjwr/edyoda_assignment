import React from "react";
import calendarimg from "../../assets/calendar.svg";
import clock from "../../assets/clock-blue.svg";

function Assignment() {
  return (
    <div className="assignment_main">
      <div className="assignment_title">
        <div>
          <h2>Assignment-1: Operators | Loops</h2>
          <span>20 December 2021</span>
        </div>
        <div className="assignment_query">
          <div>
            <h3>3</h3>
            <span>Problems</span>
          </div>
          <div>
            <h3>100</h3>
            <span>Total Score</span>
          </div>
        </div>
      </div>
      <div className="quiz_details">
        <h4>Quiz Details</h4>
        <div>
          <div className="quiz_details1" id="assignment1">
            <div>
              <div className="quiz_details1_1">3</div>
              <div className="quiz_details1_2">Problems</div>
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
                <span>20 Dec 2021</span>
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
                <span>20 Dec 2021</span>
              </div>
              <div>
                <img src={clock} alt="" />
                <span>11:59 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
