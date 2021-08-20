<template>
    <h1 class="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font" v-if="pageTitle" v-text="pageTitle"></h1>
    <h2 class="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter text-black title-font" v-if="pageSubtitle" v-text="pageSubtitle"></h2>
    <div class="mx-auto text-base font-medium leading-relaxed text-blueGray-700">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "VLayout",
  props: {
    pageTitle: { type: String, required: false },
    pageSubtitle: { type: String, required: false }
  }
}
</script>

<style scoped>

</style>
