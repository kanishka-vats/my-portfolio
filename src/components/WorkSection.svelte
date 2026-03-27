<script>
  import Typewriter from './Typewriter.svelte';

  export let onBack;

  let selectedPid = null;
  let pidInput = '';

  const projects = [
    { pid: "1024", name: "OS_KERNEL_SIM",  cpu: "45.2", mem: "128MB",  status: "SLEEPING", tech: "C / Assembly" },
    { pid: "2048", name: "CLI_BASED_GAME", cpu: "12.1", mem: "64MB",   status: "SLEEPING", tech: "Python / Rich" },
    { pid: "4096", name: "PORTFOLIO",      cpu: "98.5", mem: "256MB",  status: "RUNNING",  tech: "Svelte / Vite" },
  ];

  function handleAccess(e) {
    if (e.key === 'Enter') {
      const found = projects.find(p => p.pid === pidInput);
      if (found) selectedPid = found;
      else alert("PID NOT FOUND");
      pidInput = '';
    }
  }
</script>

<div class="section-padding centered-view">
  <h2><Typewriter text="> ACTIVE_PROCESSES" /></h2>
  {#if !selectedPid}
    <table class="process-table">
      <thead><tr><th>PID</th><th>NAME</th><th>CPU%</th><th>MEM</th><th>STATUS</th><th>TECH</th></tr></thead>
      <tbody>
        {#each projects as p}
          <tr>
            <td>{p.pid}</td>
            <td class="highlight">{p.name}</td>
            <td>{p.cpu}</td>
            <td>{p.mem}</td>
            <td class={p.status === 'RUNNING' ? 'green' : 'dim'}>{p.status}</td>
            <td>{p.tech}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="input-line centered-input mt-20">
      <span>Enter PID to access project: </span>
      <input class="term-input" autofocus bind:value={pidInput} on:keydown={handleAccess} />
    </div>
  {:else}
    <div class="bio-box">
      <h3>ACCESSING: {selectedPid.name} (PID: {selectedPid.pid})</h3>
      <p class="dim">[ System: File empty. Content pending transmission... ]</p>
      <button class="back-btn mt-20" on:click={() => (selectedPid = null)}>[ CLOSE FILE ]</button>
    </div>
  {/if}
  <button class="back-btn mt-20" on:click={onBack}>[ ESC ] BACK</button>
</div>
