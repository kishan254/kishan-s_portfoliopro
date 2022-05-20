import React from "react";
import Typical from "react-typical";
// import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/kishan254">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/kishan-gosrani/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello, It's me <span className="highlighted-text">Kishan</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Junior Full-Stack Dev 👶",
                  1000,
                  "UI/UX 🖥",
                  1000,
                  "MERN Stack Dev 🗂",
                  1000,
                  "React/React Native Dev 📱",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Everyday we learn something new. I take this apprach in my
              software development.
            </span>
          </span>
        </div>
        <div className="profile-options">
        <a href = "https://linktr.ee/kishan.gosrani" target="_blank" >
          <button className="btn primary-btn"
          > Contact Me </button>
          </a>
          <a href="Kishan_DEV_Resume.pdf" download="Kishan_DEV_Resume.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
