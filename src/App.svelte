<script>
  import Header from './components/Header.svelte'
  import Card from './components/Card.svelte'
</script>

<div class="bg-wrapper min-h-screen">
  <div class="container mx-auto min-h-screen">
    <Header />
    <Card>
      <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    </Card>
  </div>
</div>

<style>
.bg-wrapper {
  background-color: #64461F;
}
</style>
