<template>
    <div>
      <v-form-label v-bind="$props">
        <div class="mt-1 flex rounded-md shadow-sm">
          <textarea
              :id=id
              :name=title
              :placeholder=help
              @blur="$emit('updated', { id: id, value: $event.target.value })"
              class="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"></textarea>
        </div>
      </v-form-label>
    </div>
</template>

<script>
export default {
  name: "VTextarea",
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