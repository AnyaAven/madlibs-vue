
<template>
  <header className="Header mt-5">
    <h1>{{ text }}</h1>
  </header>
</template>

<script setup >
console.log("Header");
defineProps({
  text: {
    type: String,
    default: () => "MadLibs Default!"
  }
})
</script>

<style scoped>

</style>