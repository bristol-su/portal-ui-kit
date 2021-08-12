<template>
  <div>
    <h1>To Do List:</h1>
    <ul>
      <li>Pull Styling properly from previous design,</li>
      <li>Build up other component types,</li>
      <li>Resolve Tooltip! -> Probably just pull in a package to handle this!</li>
      <li>Resolve the ability to put the Slot on FormLabel in the Label element or to put it underneath (For Radio/Checkbox Buttons)</li>
      <li>Build up some example forms that are the same as previously discussed</li>
    </ul>

    <hr>
  <div class="container items-center px-5 py-12 lg:px-20">
    <div class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="schema.title" v-text="schema.title"></p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" v-if="schema.subtitle" v-text="schema.subtitle"></p>
        <p v-if="schema.description" v-text="schema.description"></p>
      </div>
      <form ref="form">
        <div v-for="formInput in schema.fields" :key="formInput.id">
          <keep-alive>
            <component
                :is=formInput.type
                v-bind="formInput"
                @updated="updateFormData"
                @submit="triggerSubmit"
            >
            </component>
          </keep-alive>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "VDynamicForm",
  props: {
    "schema": { type: Object, required: true },
    "settings": { type: Object, required: false, default: () => { return {'form_format': 'single'}; }}
  },
  data() {
    return {
      form_data: {}
    }
  },
  mounted() {
    this.formInit();
  },
  methods: {
    formInit()
    {
      let self = this;
      self.schema.fields.map((f) => self.$set(self.form_data, f.id, f.value));
    },
    updateFormData(e)
    {
      this.$set(this.form_data, e.id, e.value);
    },
    triggerSubmit()
    {
      // Trigger HTML5 Validation:
      if (this.$refs.form.checkValidity()) {
        // Process Submit Process:
        this.processSubmit();
      } else {
        // Notify User of incorrect Input:
        this.$refs.form.reportValidity();
      }
    },
    processSubmit()
    {
      // Process Form Submission to API:
    }
  }
}
</script>

<style scoped>

</style>