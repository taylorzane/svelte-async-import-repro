<script>
import Dynamic from './Dynamic.svelte'
</script>

Child 2
<br/>
$$props: {JSON.stringify($$props)}

<br/>
<br/>

<Dynamic name="SubChild" foo={true} bar={'false'} child={2} />
