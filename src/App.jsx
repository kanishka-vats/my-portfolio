import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import WelcomeAnimation from './components/WelcomeAnimation';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import SocialSection from './components/SocialSection';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [view, setView] = useState('terminal');
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [booting, setBooting] = useState(true);
  const terminalEndRef = useRef(null);
  const hasBooted = useRef(false);

  useEffect(() => {
    if (showWelcome || hasBooted.current) return;
    hasBooted.current = true;
    const lines = ["[ OK ] KanishkaOS Kernel Initialized", "[ OK ] Mapping Memory...", "[ OK ] System Secure.", "Welcome. Type 'help' to begin."];
    lines.forEach((l, i) => {
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'system', content: l }]);
        if (i === lines.length - 1) setBooting(false);
      }, i * 400);
    });
  }, [showWelcome]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setView('terminal'); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      if (cmd === 'clear') {
        setHistory(history.filter(l => l.type === 'system'));
      } else {
        setHistory(prev => [...prev, { type: 'user', content: input }]);
        if (['about', 'work', 'skills', 'social', 'blog'].includes(cmd)) setView(cmd);
        else if (cmd === 'help') setHistory(prev => [...prev, { type: 'system-msg', content: "Commands: about, work, skills, blog, social, clear" }]);
        else if (cmd !== '') setHistory(prev => [...prev, { type: 'error', content: `sh: command not found: ${cmd}` }]);
      }
      setInput('');
    }
  };

  return (
    <div className="app-wrapper">
      {showWelcome && <WelcomeAnimation onComplete={() => setShowWelcome(false)} />}
      <div className="scanlines"></div>
      {view === 'terminal' ? (
        <div className="terminal-container" onClick={() => document.getElementById('term-input')?.focus()}>
          <div className="terminal-header">
            <div className="boot-logs">
              {history.filter(l => l.type === 'system').map((l, i) => (
                <div key={i} className="line system">{l.content}</div>
              ))}
            </div>
            <h1 className="brand-title">KANISHKA-PORTFOLIO</h1>
          </div>
          <div className="output-area">
            {history.some(l => l.type === 'user' || l.type === 'error' || l.type === 'system-msg') && (
              <div className="history-label">search history :</div>
            )}
            {history.filter(l => l.type !== 'system').map((l, i) => (
              <div key={i} className={`line ${l.type}`}>
                {l.type === 'user' ? `> ${l.content}` : l.content}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
          {!booting && (
            <div className="centered-input">
              <span className="prompt">kanishka@portfolio:~$ </span>
              <input
                id="term-input"
                className="term-input"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                autoComplete="off"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="view-content">
          {view === 'about' && <AboutSection onBack={() => setView('terminal')} />}
          {view === 'work' && <WorkSection onBack={() => setView('terminal')} />}
          {view === 'skills' && <SkillsSection onBack={() => setView('terminal')} />}
          {view === 'blog' && <BlogSection onBack={() => setView('terminal')} />}
          {view === 'social' && <SocialSection onBack={() => setView('terminal')} />}
        </div>
      )}
    </div>
  );
}
