<template>
  <div>
    <v-form-label v-bind="$props">
      <div class="mt-1 flex rounded-md shadow-sm">
        <select
            :id=id
            :name=title
            @change="$emit('updated', { id: id, value: $event.target.value })"
            autocomplete=""
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
          <option></option>
          <option v-for="option in selectOptions" :id=option.id v-text="option.value"></option>
        </select>
      </div>
    </v-form-label>
  </div>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    "id": { type: String, required: true },
    "title": { type: String, required: true },
    "selectOptions": { type: Array, required: true },
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