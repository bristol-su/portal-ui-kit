<template>
    <span>
        <span class="hidden hover:block">
            <slot name="onHover"></slot>
        </span>
        <span class="block hover:hidden">
            <slot></slot>
        </span>
    </span>
</template>

<script>
export default {
    name: "VHover"
}
</script>

<style scoped>

</style>
