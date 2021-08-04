<template>
  <div>
    <input>
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    "id": { type: String, required: true },
    "title": { type: String, required: true },
    "default_value": { type: String, required: false },
    "read_only": { type: Boolean, required: false, default: false },
    "disabled": { type: Boolean, required: false, default: false },
    "help": { type: String, required: true },
    "tooltip": { type: String, required: true },
    "validation": { type: Array, required: false, default: [] },
    "errors": { type: String, required: false, default: '' },
    "style": { type: Object, required: false, default: {} }
  }
}
</script>

<style scoped>

</style>