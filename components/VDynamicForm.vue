<template>
  <div>
    <keep-alive>
        <div v-for="formInput in schema">
            <p v-text="formInput.title"></p>
        </div>
    </keep-alive>
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