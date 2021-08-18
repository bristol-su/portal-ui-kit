<template>
    <div>
        <div v-show="isActive">
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
            required: true
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
