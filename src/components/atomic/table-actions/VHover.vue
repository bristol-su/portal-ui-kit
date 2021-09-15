<template>
    <span @mouseover="hovering = true" @mouseout="hovering = false">
        <span v-if="! hovering">
            {{ before }}
        </span>
        <span v-else>
            {{ after }}
        </span>
    </span>
</template>

<script>
export default {
    name: "VHover",
    props: {
        before: { type: String, required: true },
        after: { type: String, required: true }
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
