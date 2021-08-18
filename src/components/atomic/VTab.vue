<template>
    <div v-show='isActive'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "VTab",
    props: {
        title: {
            type: String,
            default: 'VTab'
        }
    },
    data () {
        return {
            isActive: false
        }
    }
}
</script>

<style lang="css">

</style>
