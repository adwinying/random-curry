<script>
import { createEventDispatcher } from 'svelte'

export let color = 'blue'

const dispatch = createEventDispatcher()

const handleClick = () => dispatch('clicked')

</script>

<button
  class="bg-{color}-700 hover:bg-{color}-500
    text-white font-bold
    px-4 py-2 my-1
    w-full sm:w-auto
    rounded shadow-md"
  on:click|preventDefault={handleClick}>
  <slot></slot>
</button>
