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
    mounted() {
        this.$parent.addTab(this);
    },
    destroyed () {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$parent.removeTab(this);
    },
}
</script>

<style lang="css">

</style>
