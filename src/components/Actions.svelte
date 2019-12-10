<script>
import Button from './Button.svelte'
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

const onAcceptClicked = () => dispatch('accepted')
const onRejectClicked = () => dispatch('rejected')
</script>

<div class="w-0
  bg-green-700 hover:bg-green-500
  bg-red-700 hover:bg-red-500">
</div>
<div class="sm:flex justify-between max-w-md mx-auto">
  <Button
    color="green"
    on:clicked={onAcceptClicked}>
    美味しそう、作り方教えて〜
  </Button>
  <Button
    color="red"
    on:clicked={onRejectClicked}>
    これはちょっと。。。
  </Button>
</div>
