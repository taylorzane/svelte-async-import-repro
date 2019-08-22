<script>
  import Dynamic from './Dynamic.svelte'

  let name = 'Child1'

  function toggle() {
    if (name === 'Child1') {
      name = 'Child2'
    }  else {
      name = 'Child1'
    }
  }
</script>

Loaded component: {name}
<br/>
<button on:click={toggle}>toggle</button>
<br/>
<Dynamic {name} />
