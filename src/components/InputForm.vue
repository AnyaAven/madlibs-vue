<template>
  <form class="InputForm" @submit.prevent="handleSubmit">
    <div v-for="prompt in inputs" :key="prompt" class="mb-3">
      <label :for="`InputForm-${prompt}`" hidden>{{ prompt }}</label>
      <input
          :name="prompt"
          :class="`form-control InputForm-${prompt}`"
          :placeholder="prompt"
          v-model="formData[prompt]"
          :aria-label="prompt"
      />
    </div>
    <Button :onClick="handleSubmit" :isDisabled="!isFilled">
      Get Story!
    </Button>
  </form>
</template>

<script>
import { ref, computed } from "vue";

import { isValsFilled, zipArrToObj } from "../../helpers/utils";
import Button from "@/components/Button.vue";

console.log("InputForm");

export default {
  name: "InputForm",
  components: {Button},
  props: {
    inputs: {
      type: Array,
      default: () => []
    },
    handleSave: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const initialFormData = zipArrToObj(props.inputs);
    const formData = ref(initialFormData);

    const isFilled = computed(() => isValsFilled(formData.value));

    function handleSubmit() {
      props.handleSave(formData.value);
      formData.value = initialFormData;
    }

    return {
      formData,
      isFilled,
      handleSubmit
    };
  }
};
</script>

<style scoped>

</style>
