<script>
import { afterUpdate } from 'svelte'
export let name

let klass
let error = null
async function loadComponent() {
  if (name) {
    try {
      const mod = await import(`/${name}.js`)
      klass = mod.default
      error = null
    } catch (e) {
      error = `Couldn't import ${name}: ` + e.message
    }
  }
}

afterUpdate(() => {
  setTimeout(loadComponent, 0)
})
</script>

{#if klass}
<svelte:component this={klass} {...$$props} />
{/if}

{#if error}
{error}
{/if}
