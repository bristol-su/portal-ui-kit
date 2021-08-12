<template>
  <p class="mt-2 text-gray-600 text-xs italic" v-text="help"></p>
</template>

<script>
export default {
  name: "VHelpText",
  props: {
    "help": { type:String, required: true }
  }
}
</script>