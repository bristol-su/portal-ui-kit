<template>
    <div class="container items-center px-5 py-12 lg:px-20">
        <div
          class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg xl:w-1/2">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "VFormPadding"
}
</script>

<style scoped>

</style>
