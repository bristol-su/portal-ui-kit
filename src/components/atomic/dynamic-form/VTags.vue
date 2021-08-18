<template>
    <div>
        <v-text-input
          v-on:enter="addTag"
        >
        </v-text-input>
        <div class="mt-5 group">
          <div v-for="(index, tag) in tags"
              class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
            {{ tag }}
            <div class="ml-1 hidden group-hover:block" @click.prevent="removeTag(index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
          </div>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';
import VTextInput from "./VTextInput";

export default {
  name: "VTags",
  components: { VTextInput },
  mixins: [FormInputMixin],
  data() {
    return {
      tags: []
    }
  },
  methods: {
    addTag(e)
    {
      this.tags.push(e);
      this.setValue(this.tags);
    },
    removeTag(index)
    {
      this.tags.splice(index, 1);
      this.setValue(this.tags);
    }
  }
}
</script>

<style scoped>

</style>
