<template>
  <form class="DropDownForm" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <div class="d-flex justify-content-between">
        <label for="DropDownForm-selection" hidden>Select a story:</label>
        <select
            id="DropDownForm-selection"
            v-model="formData.selectedStory"
            class="form-control form-control-sm d-inline-flex DropDownForm-selection"
        >
          <option value="">Select a story</option>
          <option v-for="selection in selections" :key="selection" :value="selection">
            {{ selection }}
          </option>
        </select>
      </div>
      <Button :onClick="handleSubmit" :isDisabled="!isSelected">
        Select
      </Button>
    </div>
  </form>
</template>

<script>
import { ref, computed } from 'vue';
import Button from './Button.vue';

console.log("DropDownForm");

export default {
  name: 'DropDownForm',
  props: {
    selections: {
      type: Array,
      default: () => []
    },
    handleSave: {
      type: Function,
      required: true
    }
  },
  components: {
    Button
  },
  setup(props) {
    const formData = ref({ selectedStory: '' });

    const isSelected = computed(() => formData.value.selectedStory.length > 0);

    const handleSubmit = () => {
      props.handleSave(formData.value.selectedStory);
      formData.value.selectedStory = '';
    };

    return {
      formData,
      isSelected,
      handleSubmit
    };
  }
};
</script>

<style scoped>

</style>
