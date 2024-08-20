<template>
  <div class="MadlibApp">
    <Header :text="story ? 'Madlibs!' : 'Pick a Madlib Story!'"/>
    <DropDownForm v-if="!story" :selections="titles" :handleSave="saveSelection"/>
    <InputForm v-if="story && !hasResult" :inputs="story.prompts" :handleSave="saveStory"/>
    <StoryResult v-if="hasResult" :story="story.result" :restart="restart"/>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { Story } from "../../models/story";
import Header from "./Header.vue";
import DropDownForm from "./DropDownForm.vue";
import InputForm from "./InputForm.vue";
import StoryResult from "./StoryResult.vue";
import { defaultMadLibStories } from "../../models/default-stories";

console.log("MadlibApp");

export default {
  name: "MadlibApp",
  components: {
    Header,
    DropDownForm,
    InputForm,
    StoryResult
  },
  props: {
    stories: {
      type: Object,
      default: () => defaultMadLibStories
    }
  },
  setup(props) {
    const story = ref(null)
    const titles = Object.keys(props.stories);

    const hasResult = computed(() => story.value?.result?.length > 0);

    function saveSelection(title) {
      console.log("MadlibApp saveSelection", {title, story: story.value})

      const {prompts, text} = props.stories[title];
      story.value = new Story({
        title,
        prompts,
        template: text
      });

      console.log("Updated selection:", {story: story.value })
    }

    function saveStory(formData) {
      story.value = {
        ...story.value,
        result: story.value.getResultText(formData)
      };
    }

    function restart() {
      story.value = null;
    }

    return {
      story,
      titles,
      hasResult,
      saveSelection,
      saveStory,
      restart
    };
  }
};
</script>

<style scoped>
.MadlibApp {
  background-color: #4c4c4a;
  padding: 40px;
  border-radius: 20px;
  margin: 20px;
}
</style>
