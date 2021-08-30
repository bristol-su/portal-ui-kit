<template>
    <div class="bg-red-600 text-white">
        <ul>
            <li v-for="(errorText, errorId) in this.$ui.errors.all()">{{errorText}} <a class="text-gray-400" :href="'#' + errorId">Goto</a></li>
        </ul>
    </div></template>

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
