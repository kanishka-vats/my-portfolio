<script>
  import Typewriter from './Typewriter.svelte';

  export let onBack;

  let selectedPost = null;
  let addressInput = '';

  const blogPosts = {
    "0x4000": {
      title: "My OS learning journey",
      content: "I don't remember deciding to get into operating systems. It wasn't a deliberate choice. It began quietly — almost accidentally. One evening, while browsing through GitHub, I came across a small project: a self-hosted operating system running within Linux itself. It wasn't particularly popular or widely discussed, but it carried a certain weight. The idea felt paradoxical — an operating system living inside another — and yet it worked. That was enough to trigger something. It felt like glimpsing a layer of computing that most people never bother to question. Around that time, I had been watching Milen Patel's explanations of how computers work. Not in the usual abstract way, but with an emphasis on what is actually happening beneath the surface — how instructions move, how memory is used, how execution unfolds at a fundamental level. Those explanations didn't just inform; they unsettled my assumptions. The questions that followed were not about writing better code, but about understanding existence at a deeper level within the machine. How does a program transition from something written in a high-level language into something the system can execute? Where exactly does the kernel intervene? What defines the boundary between user space and system space? And perhaps more fundamentally — how does assembly interpret a program? What does computation look like when stripped of all abstraction? These questions did not have immediate answers. They led instead to a period of scattered exploration — lectures, articles, fragmented explanations — each offering a partial view. It was neither efficient nor structured, but it built something more valuable: a persistent sense of incompleteness. At some point, curiosity stopped being passive. I began looking for a more structured approach, which led me to Jian Huang's CS360 course (Fall 2022). It provided a framework — processes, memory, scheduling, file systems — not as isolated topics, but as interdependent components of a larger system. For the first time, the pieces began to connect. Alongside this, I turned to foundational texts such as *Operating System Concepts* and *The Linux Programming Interface*. These works demand patience. They are not meant to be rushed through; they reward slow, repeated engagement. Each revisit reveals something that was previously invisible. Currently, I am working through *Operating Systems: Three Easy Pieces*. Despite its title, it does not simplify the subject so much as clarify it. It presents complex ideas with a certain precision — removing unnecessary noise while preserving the depth. What this journey has changed, more than anything else, is perspective. A program is no longer just a sequence of instructions written to achieve an outcome. It is an interaction with a system — a structured negotiation between user intent and machine capability. Every abstraction conceals a layer beneath it, and studying operating systems is, in essence, the process of uncovering those layers. This is still an ongoing exploration. There is no sense of completion, only progression. But once you begin to ask how systems truly function, surface-level understanding stops being satisfying. And that shift — from using systems to questioning them — is what makes the pursuit meaningful."
    },
    "0x5000": {
      title: "What are neural networks? And mathematics behind it.",
      content: "Neural networks are essentially mathematical functions designed to map inputs to outputs by learning patterns from data, rather than being truly brain-like systems. At their core, each neuron performs a simple operation: it takes input values, multiplies them by weights, adds a bias, and passes the result through a non-linear activation function, allowing the network to capture complex relationships. When multiple neurons are arranged in layers, the network becomes a composition of functions, where each layer progressively transforms the input into more abstract representations. The learning process begins with random weights and improves through optimization, where a loss function measures prediction error and gradient descent adjusts the weights to minimize that error. This adjustment relies on back-propagation, which uses the chain rule from calculus to efficiently compute gradients across layers. Mathematically, neural networks work because they act as universal function approximators, meaning they can model a wide range of patterns given sufficient data and structure. In essence, their power comes not from complexity in individual components, but from the combination of simple mathematical operations, layered transformations, and iterative optimization working together to produce behavior that appears intelligent."
    }
  };

  function handleRead(e) {
    if (e.key === 'Enter') {
      if (blogPosts[addressInput]) selectedPost = blogPosts[addressInput];
      else alert("Invalid Memory Address");
      addressInput = '';
    }
  }
</script>

<div class="section-padding centered-view">
  <h2><Typewriter text="> BLOG_FILES_SECTOR" /></h2>
  {#if !selectedPost}
    <div class="centered-grid">
      {#each Object.keys(blogPosts) as addr}
        <div class="memory-block">
          <span class="addr">{addr}</span>
          <span>{blogPosts[addr].title.substring(0, 25)}...</span>
        </div>
      {/each}
    </div>
    <div class="input-line centered-input mt-20">
      <span>Enter address to read full blog: </span>
      <input class="term-input" autofocus bind:value={addressInput} on:keydown={handleRead} />
    </div>
  {:else}
    <div class="bio-box">
      <h3 class="highlight">{selectedPost.title}</h3>
      <p>{selectedPost.content}</p>
      <button class="back-btn mt-20" on:click={() => (selectedPost = null)}>[ BACK TO LIST ]</button>
    </div>
  {/if}
  <button class="back-btn mt-20" on:click={onBack}>[ ESC ] EXIT BLOG</button>
</div>
