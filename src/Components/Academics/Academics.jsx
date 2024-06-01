import React from "react";
import "./Academics.css";
import profile_1 from '../../assets/img-1.png'
import profile_2 from '../../assets/img-2.png'
import profile_3 from '../../assets/img-3.png'
import profile_4 from '../../assets/img-4.png'
import profile_5 from '../../assets/img-5.png'
import profile_6 from '../../assets/img-6.png'
const Academics = () => {
  return (
    <div className="academics">
      <a href="#">
        ADMISSION ARE OPEN <span>CLICK HERE</span> TO KNOW ABOUT IT
      </a>
      <h3>Curriculum Overview</h3>
      <p>
        Our curriculum blends academic excellence with holistic development,
        fostering critical thinking and creativity. It emphasizes core subjects
        while integrating 21st-century skills and real-world experiences.
        Through differentiated instruction and personalized support, we ensure
        every student reaches their full potential. Regular updates reflect best
        practices, preparing students to thrive in a rapidly changing world.
      </p>
      <div className="profile">
        <h2>FACULTY PROFILE</h2>
        <div className="profile-img">
            <div className="profile-card">
            <img src={profile_1} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
            </div>
            <div className="profile-card">
            <img src={profile_2} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
            </div>
            <div className="profile-card">
            <img src={profile_3} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
            </div>
            <div className="profile-card">
            <img src={profile_4} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
            </div>
            <div className="profile-card">
            <img src={profile_5} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
            </div>
            <div className="profile-card">
            <img src={profile_6} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Academics;
