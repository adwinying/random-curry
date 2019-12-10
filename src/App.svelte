<script>
import { onMount } from 'svelte'

import Header from './components/Header.svelte'
import Card from './components/Card.svelte'
import Loading from './components/Loading.svelte'
import Recipe from './components/Recipe.svelte'
import Actions from './components/Actions.svelte'
import { fetchRecipe } from './logic/api'

let recipe = {}

$: isRecipeEmpty = Object.keys(recipe).length === 0

const refreshData = async () => {
  recipe = await fetchRecipe()
}

const redirectToRecipe = () => {
  const { href } = recipe

  if (!href) return

  window.location = `//cookpad.com${href}`
}

onMount(refreshData)

const handleAccept = redirectToRecipe

const handleReject = () => {
  recipe = {}
  refreshData()
}
</script>

<div class="bg-wrapper min-h-screen px-3">
  <div class="container mx-auto min-h-screen">
    <Header />

    <Card>
      {#if isRecipeEmpty}
        <Loading />
      {:else}
        <Recipe {...recipe} />
      {/if}
    </Card>

    <Actions
      on:accepted={handleAccept}
      on:rejected={handleReject} />
  </div>
</div>

<style>
.bg-wrapper {
  background-color: #64461F;
}
</style>
