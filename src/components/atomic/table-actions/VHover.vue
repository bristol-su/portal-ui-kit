<template>
    <span>
        <span class="ml-1 hidden group-hover:block">
            <slot name="onHover"></slot>
        </span>
        <span class="ml-1 block group-hover:hidden">
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
