<template>
  <p class="text-red-500 text-xs italic" v-text="error"></p>
</template>

<script>
export default {
  name: "VError",
  props: {
    "error": { type: String, require: true }
  }
}
</script>

<style scoped>

</style>