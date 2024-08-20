<template>
  <div class="StoryResults">
    <p>{{ story }}</p>
    <Button :onClick="restart">
      Restart
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

console.log("StoryResult");

export default {
  name: "StoryResult",
  props: {
    story: {
      type: String,
      required: true
    },
    restart: {
      type: Function,
      required: true
    }
  },
  components: {
    Button
  }
};
</script>

<style scoped>
.StoryResults {
  background-color: azure;
  padding: 20px;
  border-radius: 20px;
}
</style>
