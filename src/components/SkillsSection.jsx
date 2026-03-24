import React from 'react';
import Typewriter from './Typewriter';

const SkillsSection = ({ onBack }) => {
  const skills = [
    { addr: "0x0000", label: "C / C++", type: "Low-Level" },
    { addr: "0x1000", label: "Data Structures", type: "Algorithms" },
    { addr: "0x2000", label: "Linux / OS", type: "Systems" },
    { addr: "0x3000", label: "React / Vite", type: "Frontend" },
    { addr: "0x4000", label: "Operating systems", type: "Conceptual" },
    { addr: "0x5000", label: "Python", type: "Scripting" }
  ];
  return (
    <div className="section-padding centered-view">
      <h2><Typewriter text="> SYSTEM_MEMORY_MAP" /></h2>
      <table className="skills-table">
        <thead><tr><th>ADDRESS</th><th>SKILL_SET</th><th>SECTOR</th></tr></thead>
        <tbody>
          {skills.map(s => (
            <tr key={s.addr}>
              <td className="addr">{s.addr}</td>
              <td className="highlight">{s.label}</td>
              <td>{s.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-btn mt-20" onClick={onBack}>[ ESC ] RETURN</button>
    </div>
  );
};

export default SkillsSection;
