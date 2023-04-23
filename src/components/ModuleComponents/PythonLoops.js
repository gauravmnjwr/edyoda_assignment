import React from "react";
import infoimg from "../../assets/information-circle 1.svg";
import docimg from "../../assets/document.svg";
import playimg from "../../assets/play-circle.svg";
import camimg from "../../assets/videocam.svg";
function PythonLoops() {
  return (
    <div className="loop_main">
      <div className="loop_title">
        <h2>Python Loops</h2>
      </div>
      <div className="loop_date">
        <p>15 December 2021, Wednesday, 7:30 PM</p>
        <div>DAILY FEEDBACK</div>
      </div>
      <div className="loop_details">
        <div className="loop_details1">
          <div className="sessionplan">
            <img src={infoimg} alt="" />
            <span>Session Plan</span>
          </div>
          <div>
            <img src={playimg} alt="" />
            <span>Pre watch videos</span>
          </div>
          <div>
            <img src={camimg} alt="" />
            <span>Session Recording</span>
          </div>
          <div>
            <img src={docimg} alt="" />
            <span>References</span>
          </div>
        </div>
        <div className="loop_details2">
          <div>
            <h2>Session Plan</h2>
            <div>LIVE session is about to start. Please Stay tuned.</div>
            <button>JOIN LIVE SESSION</button>
          </div>
          <div>
            <ol start={1}>
              Sub-Topics
              <li> Sorting and Indexing Dataframe</li>
              <li> Filtering Dataframe</li>
              <li> Usage of loc and iloc functions</li>
            </ol>
            <div>Session Details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PythonLoops;
