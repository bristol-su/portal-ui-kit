<template>
    <p class="text-red-500 text-xs italic"><span class="sr-only">Validation failed:</span> {{error}}</p>
</template>

<script>
export default {
    name: "VError",
    props: {
        error: {type: String, required: true}
    }
}
</script>

<style scoped>

</style>
