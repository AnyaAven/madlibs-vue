<template>
  <button
      class="Button btn btn-dark"
      :disabled="isDisabled"
      @click="onClick">
    <!--removing on -click gives an error:
      Element button doesn't have required attribute on-click -->
    <!--Removing @click removes the console warning:
      Form submission canceled because the form is not connected-->
    <p class="Button-label">
      <slot>Select</slot>
    </p>
  </button>
</template>

<script setup lang="ts">

console.log("Button");

defineProps({
  onClick: {
    type: Function,
    required: true
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.Button {
  margin-top: 20px;
}
</style>
