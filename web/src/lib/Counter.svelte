<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<button onclick={increment} class="bg-blue-500 px-12 py-3 text-white uppercase">
  count is {count}
</button>
