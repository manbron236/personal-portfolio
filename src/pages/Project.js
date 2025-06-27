// Project.js
import React, { useEffect, useState } from "react";
import "../styles/Project.css";
import projectData from "../json/projectData.json";
import ReactMarkdown from "react-markdown";

const PUBLIC_PATH = process.env.PUBLIC_URL || "";

function Project() {
  const [projects] = useState(projectData);
  const [readmeModal, setReadmeModal] = useState(null);
  const [readmeContent, setReadmeContent] = useState("");
  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    if (readmeModal && readmeModal.readme) {
      fetch(`${PUBLIC_PATH}${readmeModal.readme}`)
        .then((res) => res.text())
        .then((text) => setReadmeContent(text));
    }
  }, [readmeModal]);

  return (
    <div className="project-container">
      <h1 className="project-title">PROJECTS</h1>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p className="date">{proj.date}</p>
            <p className="description">{proj.description}</p>
            {proj.domain && (
              <a href={proj.domain} target="_blank" rel="noreferrer" className="domain-link">
                {proj.domain}
              </a>
            )}
            <p className="stack">{proj.stack.join(", ")}</p>
            <div className="button-group">
              <button onClick={() => setReadmeModal(proj)}>📖 README</button>
              <button onClick={() => setImageModal(proj)}>📷 이미지</button>
            </div>
          </div>
        ))}
      </div>

      {/* README 모달 */}
      {readmeModal && (
        <div className="modal-overlay" onClick={() => setReadmeModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>README</h2>
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
            <button onClick={() => setReadmeModal(null)}>닫기</button>
          </div>
        </div>
      )}

      {/* 이미지 모달 */}
      {imageModal && (
        <div className="modal-overlay" onClick={() => setImageModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>이미지</h2>
            {imageModal.images && imageModal.images.map((src, idx) => (
              <img key={idx} src={`${PUBLIC_PATH}${src}`} alt={`프로젝트 이미지 ${idx + 1}`} className="modal-image" />
            ))}
            <button onClick={() => setImageModal(null)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
