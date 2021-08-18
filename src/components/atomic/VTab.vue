<template>
    <div>
        <div v-if="isActive">
            <slot></slot>
        </div>
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
