<script>
  import { onMount } from 'svelte';

  export let text;
  export let speed = 35;

  let displayedText = '';

  onMount(() => {
    let index = 0;
    const interval = setInterval(() => {
      displayedText = text.substring(0, index + 1);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  });
</script>

{displayedText}{#if displayedText.length < text.length}<span style="opacity: 0.7">█</span>{/if}
