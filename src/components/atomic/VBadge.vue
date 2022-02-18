<template>
    <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none bg-gray-300 rounded-full">
        {{badge}}
    </span>
</template>

<script>
export default {
    name: "VBadge",
    props: {
        badge: {
            required: true,
            type: Number
        }
    }
}
</script>

<style scoped>

</style>
