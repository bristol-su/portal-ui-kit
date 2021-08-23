<template>
    <div class="container flex flex-wrap px-5 py-24 mx-auto items-center md:w-1/3">
        <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">{{ title }}</h2>
            <nav class="flex flex-wrap list-none -mb-1">
                <slot></slot>
                <li class="lg:w-1/3 mb-1 w-1/2" v-for="link in links">
                    <a class="hover:text-gray-800" :class="[category === selectedCategory ? 'text-blue-600' : 'text-gray-600']" @click.prevent="selectedCategory = category">{{ category }}</a>
                </li>
            </nav>
        </div>
</template>

<script>
export default {
    name: "VLinks",
    props: {
        title: {
            required: false, type: String, default: ''
        },
        links: {
            required: false, type: Object, default: () => {}
        }
    }
}
</script>

<style scoped>

</style>
