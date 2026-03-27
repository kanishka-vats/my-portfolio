<script>
  import { onMount } from 'svelte';

  export let onComplete;

  let text = '';
  let slideOut = false;
  let spinner = '';

  const targetText = "WELCOME TO\nKANISHKA PORTFOLIO";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*&%!?/";
  const spinnerChars = ['\\', '|', '/', '-'];

  onMount(() => {
    let spinIdx = 0;
    const spinInterval = setInterval(() => {
      spinner = spinnerChars[spinIdx];
      spinIdx = (spinIdx + 1) % spinnerChars.length;
    }, 100);

    let iterations = 0;
    const interval = setInterval(() => {
      text = targetText.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '\n') return '\n';
        if (index < iterations) return targetText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      if (iterations >= targetText.length) {
        clearInterval(interval);
        setTimeout(() => (slideOut = true), 1500);
        setTimeout(() => onComplete(), 2300);
      }
      iterations += 1 / 3;
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(spinInterval);
    };
  });
</script>

<div class="welcome-container" class:slide-up={slideOut}>
  <div class="welcome-content">
    <div class="welcome-spinner">[{spinner}] INITIATING SEQUENCE [{spinner}]</div>
    <h1 class="welcome-text" style="white-space: pre-wrap">{text}</h1>
    <div class="welcome-spinner">[{spinner}] ESTABLISHING CONNECTION [{spinner}]</div>
  </div>
</div>
