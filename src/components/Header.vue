
<template>
  <header className="Header mt-5">
    <h1>{{ text }}</h1>
  </header>
</template>

<script >
console.log("Header");

export default {
  name: "Header",
  props: {
    text: {
      type: String,
      default: () => "MadLibs Default!"
    }
  }
}
</script>

<style scoped>

</style>