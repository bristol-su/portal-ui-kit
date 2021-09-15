<template>
    <div v-html="html">

    </div>
</template>

<script>
export default {
    name: "VHtmlRenderer",
    props: {
        html: {
            type: String, required: false, default: '<p>Please set some HTML to render</p>'
        }
    }
}
</script>

<style scoped>
h1 {
    @apply text-4xl font-semibold
}

h2 {
    @apply text-3xl font-semibold
}

h3 {
    @apply text-2xl font-semibold
}

h4 {
    @apply text-xl font-semibold
}

h5 {
    @apply text-lg font-semibold
}

h6 {
    @apply font-semibold
}

ul > li:not([style]), ul > li[style=""] {
    @apply list-disc;
}

ol > li:not([style]), ol > li[style=""] {
    @apply list-decimal;
}

</style>
