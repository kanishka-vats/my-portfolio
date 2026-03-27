<script>
  import Typewriter from './Typewriter.svelte';

  export let onBack;

  const nodes = [
    { name: "GitHub",     link: "https://github.com/kanishka-vats",                                                          status: "ACTIVE"    },
    { name: "LinkedIn",   link: "https://www.linkedin.com/in/kanishka-vats-709402314",                                       status: "CONNECTED" },
    { name: "X (Twitter)",link: "https://x.com/kxnishka_vats",                                                               status: "ACTIVE"    },
    { name: "Codeforces", link: "https://codeforces.com/profile/glitchcorewitch",                                             status: "CONNECTED" },
    { name: "Spotify",    link: "https://open.spotify.com/user/wn14ojvny2bfoefhhayttunfy?si=UaSniU8FRhO4BpKpuTnKMw",        status: "ACTIVE"    },
  ];
</script>

<div class="section-padding centered-view">
  <h2><Typewriter text="> NETWORK_NODES" /></h2>
  <div class="centered-grid">
    {#each nodes as n}
      <a href={n.link} target="_blank" rel="noreferrer" class="memory-block">
        <span>{n.name}</span>
        <span class="addr">[{n.status}]</span>
      </a>
    {/each}
  </div>

  <h2 class="mt-20"><Typewriter text="> CONTACT_ME" /></h2>
  <div class="centered-grid">
    <a href="mailto:kanishkavats479@gmail.com" class="memory-block">
      <span>EMAIL</span>
      <span class="addr">[ kanishkavats479@gmail.com ]</span>
    </a>
    <a href="tel:8882450315" class="memory-block">
      <span>PHONE</span>
      <span class="addr">[ 8882450315 ]</span>
    </a>
  </div>

  <button class="back-btn mt-20" on:click={onBack}>[ ESC ] DISCONNECT</button>
</div>
