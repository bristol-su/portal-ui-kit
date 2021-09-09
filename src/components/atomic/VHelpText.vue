<template>
  <p class="mt-2 text-gray-600 text-xs italic" v-text="help" :aria-describedby="id"></p>
</template>

<script>
export default {
  name: "VHelpText",
  props: {
      id: {type: String, required: true},
      help: {type: String, required: true}
  }
}
</script>
