<template>
  <div>
      <h4 v-text="labelTitle"></h4>
      <slot></slot>
      <p v-text="help"></p>
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