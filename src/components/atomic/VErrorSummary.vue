<template>
  <div class="bg-danger border-l-4 rounded-t border-danger-dark text-black p-4 text-left" role="alert">
    <p class="font-bold">Error!</p>
    <div v-for="(errors, errorId) in this.$ui.errors.all()">
      <ul>
        <li v-for="error in errors" v-text="error"></li>
      </ul>
      <a class="mt-5" :href="'#' + errorId">Goto</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VError",
  props: {
    errors: {type: Object, required: true}
  }
}
</script>

<style scoped>

</style>
