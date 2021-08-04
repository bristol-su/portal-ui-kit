<template>
  <div>
    <div v-for="formInput in schema" :key="formInput.id">
      {{ formInput }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VDynamicForm",
  props: {
    "schema": { type: Array, required: true },
    "settings": { type: Object, required: false, default: () => { return {'form_format': 'single'}; }}
  }
}
</script>

<style scoped>

</style>