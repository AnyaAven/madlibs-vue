<template>
  <div class="StoryResults">
    <p>{{ story }}</p>
    <Button :onClick="restart">
      Restart
    </Button>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

console.log("StoryResult");

defineProps({
  story: {
    type: String,
    required: true
  },
  restart: {
    type: Function,
    required: true
  }
});
</script>

<style scoped>
.StoryResults {
  background-color: #2c4040;
  padding: 20px;
  border-radius: 20px;
}
</style>
