<template>
    <div style="border: 2px;">
        <h2>{{title}}</h2>
        <slot></slot>
    </div>
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
