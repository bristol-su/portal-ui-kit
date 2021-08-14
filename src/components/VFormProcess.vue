<template>
  <div>
      <slot v-on:submit="process()"></slot>
  </div>
</template>

<script>
export default {
  name: "VFormProcess",
  methods: {
    process(data) {
        // Submit form to endpoint/api
    }
  }
}
</script>

<style scoped>

</style>