<template>
    <span @mouseover="hovering = true" @mouseout="hovering = false">
        <span v-if="! hovering">
            <slot name="onHover">
                {{hoverText}}
            </slot>
        </span>
        <span v-else>
            <slot>{{text}}</slot>
        </span>
    </span>
</template>

<script>
export default {
    name: "VHover",
    props: {
        text: { type: String, required: false },
        hoverText: { type: String, required: false }
    },
    data() {
      return {
        hovering: false
      }
    }
}
</script>

<style scoped>

</style>
