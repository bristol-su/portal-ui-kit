<template>
  <button
      @click.prevent="triggerButton"
      type="submit"
      class="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "
  >
    {{ title }} - test
  </button>
</template>

<script>
export default {
  name: "VButton",
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
  },
  methods: {
      triggerButton()
      {
          this.$emit('submit');
      }
  },
  computed: {
    buttonText() {
      return  'Submit';
    }
  }
}
</script>

<style scoped>

</style>
