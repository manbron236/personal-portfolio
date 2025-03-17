import React from "react";
import "../styles/About.css";
import profileimg from "../assets/profile.jpg";

function About() {
  return (
    <div className="about-container">
      {/* 프로필 + 자기소개 */}
      <div className="about-card">
        <div className="profile-picture">
          <img src={profileimg} alt="프로필 사진" onContextMenu={(e) => e.preventDefault()} draggable="false" style={{ userSelect: "none", pointerEvents: "none" }} />
        </div>
        <div className="about-text">
          <h2>MIN JUN CHO</h2>
          <p><strong>AI & Web Developer</strong></p>
          <p><strong>#책임감_강한 #배려심_깊은 #도전하는</strong></p>
        </div>
      </div>

      {/* 커리어 섹션 */}
      <div className="card-section">
        <h2>Career</h2>
        <ul>
          <li>오썸피아 개발부 인턴 (2024 ~ 2025)</li>
          <li>가톨릭 관동대학교 (2019 ~ 2025)</li>
        </ul>
      </div>

      <div className="card-section">
        <h2>Awards</h2>
        <ul>
          <li>2023 ICT 이노베이션스퀘어 AI 해커톤 대회 - 지정과제 부문 3등[wherezit(외국인들을 위한 강릉 관광지 정보 제공 서비스)]</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
