<template>
    <span>
        <tippy :arrow="true" animation="fade" placement="top-start" :interactive="true">
            <template v-slot:trigger>
                <slot>{{ text }}</slot>
           </template>
            <slot name="onHover">
                {{ hoverText }}
            </slot>
        </tippy>
    </span>
</template>

<script>
export default {
    name: "VHover",
    props: {
        text: {type: String, required: false},
        hoverText: {type: String, required: false}
    }
}
</script>

<style scoped>

</style>
