<script>
  import Typewriter from './Typewriter.svelte';

  export let onBack;

  const skills = [
    { addr: "0x0000", label: "C / C++",           type: "Low-Level"  },
    { addr: "0x1000", label: "Data Structures",    type: "Algorithms" },
    { addr: "0x2000", label: "Linux / OS",         type: "Systems"    },
    { addr: "0x3000", label: "Svelte / Vite",      type: "Frontend"   },
    { addr: "0x4000", label: "Operating systems",  type: "Conceptual" },
    { addr: "0x5000", label: "Python",             type: "Scripting"  },
  ];
</script>

<div class="section-padding centered-view">
  <h2><Typewriter text="> SYSTEM_MEMORY_MAP" /></h2>
  <table class="skills-table">
    <thead><tr><th>ADDRESS</th><th>SKILL_SET</th><th>SECTOR</th></tr></thead>
    <tbody>
      {#each skills as s}
        <tr>
          <td class="addr">{s.addr}</td>
          <td class="highlight">{s.label}</td>
          <td>{s.type}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <button class="back-btn mt-20" on:click={onBack}>[ ESC ] RETURN</button>
</div>
