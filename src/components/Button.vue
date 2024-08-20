<template>
  <button
      class="Button btn btn-dark"
      @click="onClick"
      :disabled="isDisabled">
    <p class="Button-label">
      <slot></slot>
    </p>
  </button>
</template>

<script>

console.log("Button");

export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.onClick();
    }
  }
};
</script>

<style scoped>
.Button {
  margin-top: 20px;
}
</style>
