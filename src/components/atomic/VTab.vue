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
    },
    methods: {
        setActiveStatus(status) {
            this.isActive = status;
        }
    }
}
</script>

<style lang="css">

</style>
