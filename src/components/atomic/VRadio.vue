<template>
  <div>
    <label class="inline-flex items-center">
      <input
          :id=id
          :name=title
          :checked=value
          @change="$emit('updated', { id: id, value: $event.target.checked })"
          type="radio"
          class="form-radio px-4 py-2 mt-2 h-5 w-5">
      <span class="ml-2" v-text="title"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "VRadio",
  props: {
    "id": { type: String, required: true },
    "title": { type: String, required: true },
    "value": { type: String, required: false },
    "read_only": { type: Boolean, required: false, default: false },
    "disabled": { type: Boolean, required: false, default: false },
    "help": { type: String, required: true },
    "tooltip": { type: String, required: true },
    "compValidation": { type: Array, required: false, default: () => { return []; } },
    "errors": { type: String, required: false, default: '' },
    "compStyle": { type: Object, required: false, default: () => { return {}; } }
  }
}
</script>

<style scoped>

</style>