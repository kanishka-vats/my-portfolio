import React from 'react';
import Typewriter from './Typewriter';

const SocialSection = ({ onBack }) => {
  const nodes = [
    { name: "GitHub", link: "https://github.com/kanishka-vats", status: "ACTIVE" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/kanishka-vats-709402314", status: "CONNECTED" },
    { name: "X (Twitter)", link: "https://x.com/kxnishka_vats", status: "ACTIVE" },
    { name: "Codeforces", link: "https://codeforces.com/profile/glitchcorewitch", status: "CONNECTED" },
    { name: "Spotify", link: "https://open.spotify.com/user/wn14ojvny2bfoefhhayttunfy?si=UaSniU8FRhO4BpKpuTnKMw", status: "ACTIVE" },
  ];
  return (
    <div className="section-padding centered-view">
      <h2><Typewriter text="> NETWORK_NODES" /></h2>
      <div className="centered-grid">
        {nodes.map(n => (
          <a key={n.name} href={n.link} target="_blank" rel="noreferrer" className="memory-block">
            <span>{n.name}</span>
            <span className="addr">[{n.status}]</span>
          </a>
        ))}
      </div>

      <h2 className="mt-20"><Typewriter text="> CONTACT_ME" /></h2>
      <div className="centered-grid">
        <a href="mailto:kanishkavats479@gmail.com" className="memory-block">
          <span>EMAIL</span>
          <span className="addr">[ kanishkavats479@gmail.com ]</span>
        </a>
        <a href="tel:8882450315" className="memory-block">
          <span>PHONE</span>
          <span className="addr">[ 8882450315 ]</span>
        </a>
      </div>

      <button className="back-btn mt-20" onClick={onBack}>[ ESC ] DISCONNECT</button>
    </div>
  );
};

export default SocialSection;
