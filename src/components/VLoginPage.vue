<template>
  <v-featured-card
      title="Login to the Portal"
      subtext="If you need help etc"
      bg="login-page"
  >
    <p>Login Form - Ideally you should be able to use DynamicForm here?</p>
  </v-featured-card>
</template>

<script>
import VFeaturedCard from "./atomic/VFeaturedCard";

export default {
  name: "VLoginPage",
  components: { VFeaturedCard }
}
</script>

<style scoped>

</style>