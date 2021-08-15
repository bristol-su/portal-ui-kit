<template>
    <button
      @click.prevent="triggerButton"
      type="submit"
      class="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "
    >
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name: "VButton",
    props: {
        buttonText: {type: String, required: false, default: 'Submit'}
    },
    methods: {
        triggerButton() {
            this.$emit('submit');
        }
    }
}
</script>

<style scoped>

</style>
