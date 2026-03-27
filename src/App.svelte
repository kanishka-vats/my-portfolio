<script>
  import { onMount } from 'svelte';
  import './App.css';

  import WelcomeAnimation from './components/WelcomeAnimation.svelte';
  import AboutSection     from './components/AboutSection.svelte';
  import WorkSection      from './components/WorkSection.svelte';
  import SkillsSection    from './components/SkillsSection.svelte';
  import BlogSection      from './components/BlogSection.svelte';
  import SocialSection    from './components/SocialSection.svelte';

  let showWelcome = true;
  let view = 'terminal';
  let history = [];
  let input = '';
  let booting = true;
  let terminalEnd;
  let hasBooted = false;

  // Boot sequence — runs once after the welcome animation finishes
  $: if (!showWelcome && !hasBooted) {
    hasBooted = true;
    const lines = [
      "[ OK ] KanishkaOS Kernel Initialized",
      "[ OK ] Mapping Memory...",
      "[ OK ] System Secure.",
      "Welcome. Type 'help' to begin."
    ];
    lines.forEach((l, i) => {
      setTimeout(() => {
        history = [...history, { type: 'system', content: l }];
        if (i === lines.length - 1) booting = false;
      }, i * 400);
    });
  }

  // Scroll to bottom of terminal output when history changes
  $: if (terminalEnd) {
    terminalEnd.scrollIntoView({ behavior: 'smooth' });
  }

  // Esc key listener
  onMount(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') view = 'terminal'; };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  });

  function handleCommand(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['about', 'work', 'skills', 'social', 'blog', 'clear', 'help'];
      const match = commands.find(cmd => cmd.startsWith(input.toLowerCase()));
      if (match) input = match;
    } else if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      if (cmd === 'clear') {
        history = history.filter(l => l.type === 'system');
      } else {
        history = [...history, { type: 'user', content: input }];
        if (['about', 'work', 'skills', 'social', 'blog'].includes(cmd)) {
          view = cmd;
        } else if (cmd === 'help') {
          history = [...history, { type: 'system-msg', content: "Commands: about, work, skills, blog, social, clear" }];
        } else if (cmd !== '') {
          history = [...history, { type: 'error', content: `sh: command not found: ${cmd}` }];
        }
      }
      input = '';
    }
  }

  $: hasNonSystem = history.some(l => l.type === 'user' || l.type === 'error' || l.type === 'system-msg');
</script>

<div class="app-wrapper">
  {#if showWelcome}
    <WelcomeAnimation onComplete={() => (showWelcome = false)} />
  {/if}
  <div class="scanlines"></div>
  {#if view === 'terminal'}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="terminal-container" on:click={() => document.getElementById('term-input')?.focus()}>
      <div class="terminal-header">
        <div class="boot-logs">
          {#each history.filter(l => l.type === 'system') as l, i}
            <div class="line system">{l.content}</div>
          {/each}
        </div>
        <h1 class="brand-title">KANISHKA-PORTFOLIO</h1>
      </div>
      <div class="output-area">
        {#if hasNonSystem}
          <div class="history-label">search history :</div>
        {/if}
        {#each history.filter(l => l.type !== 'system') as l, i}
          <div class="line {l.type}">
            {l.type === 'user' ? `> ${l.content}` : l.content}
          </div>
        {/each}
        <div bind:this={terminalEnd}></div>
      </div>
      {#if !booting}
        <div class="centered-input">
          <span class="prompt">kanishka@portfolio:~$ </span>
          <input
            id="term-input"
            class="term-input"
            autofocus
            bind:value={input}
            on:keydown={handleCommand}
            autocomplete="off"
          />
        </div>
      {/if}
    </div>
  {:else}
    <div class="view-content">
      {#if view === 'about'}  <AboutSection  onBack={() => (view = 'terminal')} /> {/if}
      {#if view === 'work'}   <WorkSection   onBack={() => (view = 'terminal')} /> {/if}
      {#if view === 'skills'} <SkillsSection onBack={() => (view = 'terminal')} /> {/if}
      {#if view === 'blog'}   <BlogSection   onBack={() => (view = 'terminal')} /> {/if}
      {#if view === 'social'} <SocialSection onBack={() => (view = 'terminal')} /> {/if}
    </div>
  {/if}
</div>
