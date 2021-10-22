<template>
    <div>
        <h1 class="mx-auto mb-12 text-2xl font-semibold leading-none tracking-normal text-black lg:text-3xl title-font" v-if="title" v-text="title"></h1>
        <slot name="actions"></slot>
        <h2 class="mx-auto mb-4 text-xl font-semibold leading-none tracking-normal text-black title-font" v-if="subtitle">
            <v-html-renderer :html="subtitle"></v-html-renderer>
        </h2>
        <div class="mx-auto text-base font-medium leading-relaxed text-blueGray-700">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import VHtmlRenderer from './../atomic/VHtmlRenderer';

export default {
  name: "VPageContent",
  props: {
    title: { type: String, required: false },
    subtitle: { type: String, required: false }
  },
    components: {
        VHtmlRenderer
    }
}
</script>

<style scoped>

</style>
