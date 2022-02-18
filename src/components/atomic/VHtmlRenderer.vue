<template>
    <div class="html-renderer" v-html="html">

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
div.html-renderer >>> h1 {
    @apply text-4xl font-semibold
}

div.html-renderer >>> h2 {
    @apply text-3xl font-semibold
}

div.html-renderer >>> h3 {
    @apply text-2xl font-semibold
}

div.html-renderer >>> h4 {
    @apply text-xl font-semibold
}

div.html-renderer >>> h5 {
    @apply text-lg font-semibold
}

div.html-renderer >>> h6 {
    @apply font-semibold
}

div.html-renderer >>> ul > li:not([style]), div.html-renderer >>> ul > li[style=""]{
    @apply list-disc;
}

div.html-renderer >>> ol > li:not([style]), div.html-renderer >>> ol > li[style=""]{
    @apply list-decimal;
}

div.html-renderer >>> a {
    @apply underline
}
</style>
