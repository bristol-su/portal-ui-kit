<template>
  <div>
    <v-form-label v-bind="$props">
      <div class="mt-1 flex rounded-md shadow-sm">
        <input
            :id=id
            :name=title
            :placeholder=help
            :checked=value
            @change="$emit('updated', { id: id, value: $event.target.checked })"
            type="checkbox"
            class="form-checkbox px-4 py-2 mt-2 h-5 w-5">
      </div>
    </v-form-label>
  </div>
</template>

<script>
export default {
  name: "VCheckbox",
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