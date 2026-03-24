import React, { useState } from 'react';
import Typewriter from './Typewriter';

const AboutSection = ({ onBack }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      id: "intro",
      title: "[ INTRODUCTION ]",
      preview: "I’m an engineering student driven by curiosity about how systems work",
      fullText: "I’m an engineering student driven by curiosity about how systems work beneath the surface. My core focus is on programming in C/C++ and building a strong foundation in data structures and operating systems. I enjoy exploring low-level concepts, from understanding how programs interact with the kernel to experimenting with system-level projects.\n\nAlongside development, I work on design and content creation, blending technical thinking with creativity through tools like Figma and digital media. I tend to explore multiple domains, but my long-term goal is to build a solid, disciplined skill set that translates into real-world systems and impactful projects."
    },
    {
      id: "perspective",
      title: "[ PERSPECTIVE ]",
      preview: "I see programming, science, and math as different ways of understanding systems",
      fullText: "I see programming, science, and math as different ways of understanding systems. Programming gives me control over how systems behave, science helps me observe and model reality, and math provides the structure that holds everything together. I’m naturally drawn to what happens beneath the surface, whether it’s how code interacts with the kernel or how patterns emerge in the real world.\n\nLife, though, doesn’t follow the same rules. It’s less predictable, less structured, and harder to break down logically. I approach it the same way I approach systems, trying to find clarity and direction, but it constantly challenges that mindset. That tension pushes me to not just explore ideas, but to go deeper and build something meaningful out of them."
    },
    {
      id: "creative",
      title: "[ CREATIVE ]",
      preview: "I started my creative journey through digital design, experimenting with layouts",
      fullText: "I started my creative journey through digital design, experimenting with layouts, interfaces, and visual structure using tools like Figma. That early focus on design helped me understand balance, spacing, and how visuals communicate ideas. Over time, that curiosity naturally extended into art, where I began exploring more expressive and detailed forms of creation.\n\nAs I moved deeper into digital art, it became less about just making something look good and more about understanding form, color, and composition. My process shifted from casual experimentation to something more intentional. Now, my creative work sits between design and art, where I focus on building a consistent style while still exploring new ideas with purpose."
    },
    {
      id: "music",
      title: "[ MUSIC & AESTHETICS ]",
      preview: "My taste in music leans toward atmospheric, alternative sounds",
      fullText: "My taste in music leans toward atmospheric, alternative sounds with a mix of indie rock and dark pop influences. I’m drawn to tracks that carry a certain mood, whether it’s introspective, slightly melancholic, or quietly intense. Artists like Lana Del Rey, Arctic Monkeys, The Neighbourhood, Artemas, Dominic Fike, BoyWithUke, Twenty One Pilots, and The Dracula Twins shape that space, blending aesthetic, emotion, and storytelling into something that feels personal.\n\nIt’s less about specific tracks and more about the feeling they create, something cinematic, slightly raw, and reflective. That same sense of mood and atmosphere often carries into my creative work as well. If you’re curious, my Spotify is linked in my socials."
    }
  ];

  return (
    <div className="section-padding centered-view">
      <h2><Typewriter text="> WHOAMI / IDENTITY_REPORT" /></h2>
      <div className="bio-box">
        {sections.map((sec) => (
          <p key={sec.id} onClick={() => toggleExpand(sec.id)} style={{ cursor: "pointer", marginBottom: "15px" }}>
            <span className="highlight">{sec.title}</span>:{" "}
            {expanded[sec.id] ? (
              <span style={{ whiteSpace: "pre-wrap" }}>{sec.fullText}</span>
            ) : (
              <span>
                {sec.preview} <span className="dim" style={{ fontSize: "0.85em" }}>... (to view more click here)</span>
              </span>
            )}
          </p>
        ))}
      </div>
      <button className="back-btn mt-20" onClick={onBack}>[ ESC ] RETURN</button>
    </div>
  );
};

export default AboutSection;
