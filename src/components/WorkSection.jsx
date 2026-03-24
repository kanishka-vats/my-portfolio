import React, { useState } from 'react';
import Typewriter from './Typewriter';

const WorkSection = ({ onBack }) => {
  const [selectedPid, setSelectedPid] = useState(null);
  const [pidInput, setPidInput] = useState('');

  const projects = [
    { pid: "1024", name: "OS_KERNEL_SIM", cpu: "45.2", mem: "128MB", status: "SLEEPING", tech: "C / Assembly" },
    { pid: "2048", name: "CLI_BASED_GAME", cpu: "12.1", mem: "64MB", status: "SLEEPING", tech: "Python / Rich" },
    { pid: "4096", name: "PORTFOLIO", cpu: "98.5", mem: "256MB", status: "RUNNING", tech: "React / Vite" },
  ];

  const handleAccess = (e) => {
    if (e.key === 'Enter') {
      const found = projects.find(p => p.pid === pidInput);
      if (found) setSelectedPid(found);
      else alert("PID NOT FOUND");
      setPidInput('');
    }
  };

  return (
    <div className="section-padding centered-view">
      <h2><Typewriter text="> ACTIVE_PROCESSES" /></h2>
      {!selectedPid ? (
        <>
          <table className="process-table">
            <thead><tr><th>PID</th><th>NAME</th><th>CPU%</th><th>MEM</th><th>STATUS</th><th>TECH</th></tr></thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.pid}>
                  <td>{p.pid}</td>
                  <td className="highlight">{p.name}</td>
                  <td>{p.cpu}</td>
                  <td>{p.mem}</td>
                  <td className={p.status === 'RUNNING' ? 'green' : 'dim'}>{p.status}</td>
                  <td>{p.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="input-line centered-input mt-20">
            <span>Enter PID to access project: </span>
            <input className="term-input" autoFocus value={pidInput}
              onChange={(e) => setPidInput(e.target.value)} onKeyDown={handleAccess} />
          </div>
        </>
      ) : (
        <div className="bio-box">
          <h3>ACCESSING: {selectedPid.name} (PID: {selectedPid.pid})</h3>
          <p className="dim">[ System: File empty. Content pending transmission... ]</p>
          <button className="back-btn mt-20" onClick={() => setSelectedPid(null)}>[ CLOSE FILE ]</button>
        </div>
      )}
      <button className="back-btn mt-20" onClick={onBack}>[ ESC ] BACK</button>
    </div>
  );
};

export default WorkSection;
