<template>
  <div class="relative mt-4">
      <label :for=title class="text-base leading-7 text-blueGray-500">
          {{ labelTitle }}
      </label>
      <slot></slot>
      <v-help-text :help=help ></v-help-text>
      <div v-if="errors" v-for="error in errors" :key="error.id">
          <v-error :error=error ></v-error>
      </div>
  </div>
</template>

<script>
export default { // Wrapper Component for Inputs which shows Tooltip and Help text, also will need to handle errors
  name: "VFormLabel",
  props: {
    "title": { type: String, required: true },
    "required": { type: Boolean, required: false, default: false },
    "help": { type: String, required: true },
    "tooltip": { type: String, required: true },
    "errors": { type: String, required: false, default: '' }
  },
  computed: {
      labelTitle()
      {
          return this.required ? this.title : this.title + ' *';
      }
  }
}
</script>

<style scoped>

</style>