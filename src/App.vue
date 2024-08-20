<template>
  <main>
    <MadlibApp></MadlibApp>
  </main>
</template>

<script>
import MadlibApp from "@/components/MadlibApp.vue";

console.log("App")

export default {
  name: "App",
  components: {
    MadlibApp
  }
};

</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
