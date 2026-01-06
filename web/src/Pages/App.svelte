<script>
  import Counter from "../lib/Counter.svelte";
  const { message } = $props();
</script>

<main class="flex flex-col items-center justify-center min-h-screen gap-4">
  <h1 class="text-4xl font-bold">Actix-Inertia-Svelte</h1>
  <p class="text-lg">{message}</p>
  <Counter />
</main>
