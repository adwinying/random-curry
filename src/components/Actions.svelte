<script>
import Button from './Button.svelte'
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

const onAcceptClicked = () => dispatch('accepted')
const onRejectClicked = () => dispatch('rejected')
</script>

<div class="flex justify-between max-w-md mx-auto">
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
