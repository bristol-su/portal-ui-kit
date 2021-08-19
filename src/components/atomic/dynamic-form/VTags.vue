<template>
  <div>
    <v-form-label v-bind="labelProps">
      <div class="mt-1 flex rounded-md shadow-sm">
        <input
            type="text"
            :name="name"
            :id="id"
            :placeholder="help"
            v-model="inputValue"
            :required="required"
            @keyup.enter.prevent="addTag"
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
      </div>
    </v-form-label>
    <div class="mt-5 group">
      <div v-for="(tag, index) in tags"
           class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
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
      inputValue: '',
      tags: []
    }
  },
  methods: {
    addTag()
    {
      this.tags.push(this.inputValue);
      this.setValue(this.tags);
      this.inputValue = '';
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
