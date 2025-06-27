import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* 이름 */}
      <h1 className="name-title">MIN JUN CHO</h1>

      {/* 자기소개 */}
      <p className="intro-text">
        AI & Web Developer
      </p>

      {/* 링크 목록 */}
      <div className="social-links">
        <a href="https://github.com/manbron236" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://manbron.tistory.com/" target="_blank" rel="noopener noreferrer">Blog</a>
        <a href={`mailto:minjuncho@naver.com`}>Email</a>
      </div>

      {/* 포트폴리오 PDF 다운로드 버튼 */}
      <button className="download-btn">
        <a href="/portfolio.pdf" download>Download Portfolio</a>
      </button>
    </div>
  );
}

export default Home;
