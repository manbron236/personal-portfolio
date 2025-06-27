// About.js
import React from "react";
import "../styles/About.css";
import profileData from "../json/aboutData.json";

function About() {
  const { profile, career, awards, certifications, education, programs } = profileData;

  return (
    <div className="about-container">
      {/* 프로필 섹션 */}
      <section className="profile-section">
        <img src={profile.photo} alt="프로필 사진" className="profile-photo" />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p>{profile.bio}</p>
          <div className="profile-links">
            {profile.links.github && (
              <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            )}
            {profile.links.email && (
              <a href={`mailto:${profile.links.email}`}>Email</a>
            )}
            {profile.links.blog && (
              <a href={profile.links.blog} target="_blank" rel="noreferrer">Blog</a>
            )}
          </div>
        </div>
      </section>

      {/* 학력 섹션 */}
      <section className="education-section">
        <h2>🎓 EDUCATION</h2>
        <ul>
          {education.map((edu, idx) => (
            <li key={idx}>
              <strong>{edu.school}</strong> - {edu.major}
              <p className="date">{edu.period} ({edu.status})</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 교육 프로그램 섹션 */}
      <section className="programs-section">
        <h2>🏫 TRAINING & PROGRAMS</h2>
        <ul>
          {programs.map((prog, idx) => (
            <li key={idx}>
              <strong>{prog.title}</strong> <span className="date">({prog.period})</span>
              <p>{prog.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 커리어 섹션 */}
      <section className="career-section">
        <h2>🧑‍💻 CAREER</h2>
        {career.map((job, idx) => (
          <div className="career-card" key={idx}>
            <div className="career-header">
              <img src={job.logo} alt={`${job.company} 로고`} className="company-logo" />
              <div>
                <h3>{job.company}</h3>
                <p className="period">{job.period}</p>
                <p className="tagline">{job.tagline}</p>
                <span className="role-tag">{job.role}</span>
              </div>
            </div>
            <ul className="project-list">
              {job.projects.map((proj, pidx) => (
                <li key={pidx}>
                  <strong>{proj.title}</strong> <span className="date">({proj.date}{proj.status ? `, ${proj.status}` : ""})</span>
                  <p>{proj.description}</p>
                </li>
              ))}
            </ul>
            <div className="skill-tags">
              {job.skills.map((skill, sidx) => (
                <span className="skill-pill" key={sidx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 수상 경력 섹션 */}
      <section className="awards-section">
        <h2>🏆 AWARDS</h2>
        <ul>
          {awards.map((award, idx) => (
            <li key={idx}>
              <strong>{award.title}</strong> <span className="date">({award.date})</span>
              <p>{award.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 자격증 섹션 */}
      <section className="certifications-section">
        <h2>📜 CERTIFICATE</h2>
        <ul>
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <strong>{cert.title}</strong> <span className="date">({cert.date})</span>
              <p>{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </section>


    </div>
  );
}

export default About;