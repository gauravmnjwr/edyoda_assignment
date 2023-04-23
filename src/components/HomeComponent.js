import React from "react";
import dataAnalysisimg from "../assets/Data-Analysis.png";
import dataWrangling from "../assets/Data Wrangling.png";
import userImg from "../assets/kindpng.png";

function HomeComponent() {
  return (
    <div className="home_main">
      <h1>Upcoming Certificates</h1>
      <div className="certificate_block">
        <img src={dataAnalysisimg} alt="" />
        <div className="certification_title">
          <div>
            <div>
              <p> Certification </p> <p> | </p>
              <p>Attempt 1 </p>
            </div>
          </div>
          <p>Data Analysis Certification</p>
          <div className="complete_track">
            <div>
              <p> Completed </p> <p> | </p>
              <p>21 Mar 2022 </p>
            </div>
          </div>
        </div>
        <div className="exam_structure">
          <p>Exam Structure</p>
          <div>
            <div>Round 1</div>
            <p> MCQS</p>
            <p>Coding</p>
          </div>
          <div>
            <div>Round 2</div>
            <p>Project</p>
          </div>
        </div>
        <button>View Exam Details</button>
      </div>
      <h1>Continue Learning</h1>
      <div className="learning_block">
        <div className="session_block">
          <div className="session_details">
            <div className="session_img">
              <img src={dataWrangling} alt="" />
            </div>
            <div className="session_tiles">
              <div className="session_topic">
                <h3>Data Wrangling & Visualization</h3>
                <div className="instructor_info">
                  <img src={userImg} alt="" />
                  <h4>Test Instructor</h4>
                </div>
              </div>
              <div className="session_progress">
                <div className="live_session">Live Sessions</div>
                <div className="live_session_progress">
                  <div className="live_session_progress_1">0/13</div>
                  <div className="live_session_progress_2"></div>
                </div>
              </div>
              <div className="session_progress">
                <div className="live_session">Assignments</div>
                <div className="live_session_progress">
                  <div className="live_session_progress_1">0/3</div>
                  <div className="live_session_progress_2"></div>
                </div>
              </div>
              <div className="session_progress">
                <div className="live_session">MCQ Quiz</div>
                <div className="live_session_progress">
                  <div className="live_session_progress_1">0/6</div>
                  <div className="live_session_progress_2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="session_plan">
            <div className="todays_plan">
              <div>Today's Plan</div>
              <p>21 March 2022</p>
            </div>
            <div className="todays_topic">
              Data Transformation using Pandas - 3
            </div>
            <div className="todays_feedback">
              <div>Daily Feedback</div>
              <i>opens at 07:30 PM</i>
            </div>
            <div className="todays_timing">
              <button>Join Live Session</button>
              <p>Begins at 7:30 PM</p>
            </div>
          </div>
        </div>
        <div className="progress_block">
          <h4>Progress Overview</h4>
          <div className="progress_bar">
            <h3>0%</h3>
            <div>Overall Grade</div>
            <div className="absolute_progress_bar"></div>
          </div>
          <div className="progress_bar">
            <h3>0%</h3>
            <div>Overall Grade</div>
            <div className="absolute_progress_bar"></div>
          </div>
          <h5>View Detailed Progress</h5>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
