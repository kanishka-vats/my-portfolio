# KANISHKA_OS : SYSTEM_PORTFOLIO_V1

### PROJECT_MANIFEST
This repository contains the source code for a terminal-emulated portfolio environment. Built with React and Vite, the application abstracts the traditional personal website into a high-fidelity Unix-style CLI. It is designed to reflect a deep-seated interest in low-level systems, memory management, and algorithmic efficiency.

The interface serves as a functional "User-Space" for exploring professional milestones, technical competencies, and academic research in computer organization and operating systems.

---

### ARCHITECTURAL_OVERVIEW
The system is built on a modular architecture to ensure scalability and maintainability.

--> Kernel Emulation: The main App.jsx serves as the kernel, managing system state, command history, and view-switching logic.
--> Reactive Terminal: A custom-built CLI that processes string inputs and maps them to specific component-level "sectors."
--> Memory-Mapped Data: Skills and projects are treated as memory addresses (0x0000) and active processes (PIDs), reinforcing the systems-centric aesthetic.
--> Style Layer: A CSS-heavy implementation featuring scanline overlays and CRT-flicker effects to simulate vintage hardware terminal output.

---

### OPERATIONAL_INSTRUCTIONS
To interact with the environment, users must treat the interface as a standard shell.

**System Initialization**
Upon landing, the system undergoes a mandatory boot sequence. This is a simulated decryption and memory-mapping phase. No user input is accepted until the [ OK ] sequence completes and the prompt appears.

**Navigation Commands**
--> about  : Accesses the identity report and personal perspective.
--> work   : Opens the Process Manager to view active and sleeping projects.
--> skills : Loads the system memory map containing technical proficiencies.
--> blog   : Accesses archived research notes and technical articles.
--> social : Displays active network nodes for external connection.
--> clear  : Flushes the current terminal session history.

**Component Interaction**
--> Process Access: In the work view, projects are listed by PID. Users must input the specific 4-digit PID into the prompt to "Access File Contents."
--> Memory Reading: In the blog view, entries are indexed by Hexadecimal addresses. Inputting the address allows the user to read the full data buffer.
--> Return to Root: The [ ESC ] key is globally mapped to terminate any active view and return the user to the core terminal prompt.

---

### INSPIRATIONS_AND_PHILOSOPHY
The project is heavily inspired by the brutalist efficiency of Debian GNU/Linux and the aesthetic of early VAX/VMS systems. It is born from a desire to move away from the "flatness" of modern web design in favor of something that feels like it has weight, heat, and history.

The choice of a terminal interface is a nod to the countless hours spent in Neovim and Zsh, where productivity is found in the absence of a cursor. It represents a commitment to the "Command Line First" philosophy—the belief that the most powerful tools don't need buttons, just the right commands.

---

### SYSTEM_REQUIREMENTS_AND_DEPLOYMENT
The portfolio is optimized for modern web browsers with high-performance JavaScript engines.

**Local Deployment**
--> Clone the repository to your local machine.
--> Run npm install to provision dependencies.
--> Execute npm run dev to initialize the local development server.
--> Build for production using npm run build for Vercel or similar static hosting.

---

### END_OF_TRANSMISSION
