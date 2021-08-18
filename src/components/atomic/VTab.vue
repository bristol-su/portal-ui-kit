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
    created() {
        this.$uiEventBus.$on('tab-selected', function callback(i) {
            console.log(this.title, i);
            this.isActive = this.title === i;
        }, this);
    }
}
</script>

<style lang="css">

</style>
