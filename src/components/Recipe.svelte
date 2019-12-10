<script>
export let title
export let author
export let description
export let href
export let img
export let ingredients

$: ingredientsList = ingredients.join('、')
</script>

<div class="flex">
  <img src={img} alt={title} />
  <div class="p-3">
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="text-xs text-gray-600">{description}</p>
    <p class="mt-2 text-sm">{ingredientsList}</p>
  </div>
</div>
