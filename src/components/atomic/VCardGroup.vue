<template>
  <section class="text-blueGray-700">
    <div class="container items-center px-5 py-8 mx-auto">
      <div class="flex flex-wrap justify-center mb-12 bg-offWhite rounded-xl shadow-xl">
        <div class="w-full text-center mt-5">
          <h3 v-if="title !== ''" class="mb-6 text-2xl font-semibold tracking-tighter text-black" >{{title}}</h3>
        </div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VCardGroup",
  props: {
    title: {
      required: false, type: String, default: ''
    }
  }
}
</script>

<style scoped>

</style>
