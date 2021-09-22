<template>
    <div class="container flex flex-wrap px-5 py-24 mx-auto items-center md:w-1/3">
        <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">{{ title }}</h2>
            <nav class="flex flex-wrap list-none -mb-1">
                <li class="lg:w-1/3 mb-1 w-1/2" v-for="link in links">
                    <a
                      v-if="link.href"
                      :href="link.href"
                      @click="click(link, false)"
                      class="hover:text-gray-800"
                      :class="[link === selectedLink ? 'text-blue-600' : 'text-gray-600']"
                    >
                        {{ link.text }}
                    </a>
                    <a
                      v-else
                      class="hover:text-gray-800"
                      :class="[link === selectedLink ? 'text-blue-600' : 'text-gray-600']"
                      @click.prevent="click(link, true)">{{ link.text }}</a>
                </li>
            </nav>
        </div>
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
            required: false, type: Object, default: () => {
            }
        }
    },
    methods: {
        click(link, fireEvent) {
            this.selectedLink = link;
            if (fireEvent) {
                this.$emit('click', link);
            }
            if (link.href) {
                window.location.href = link.href;
            }
            if (link.onClick) {
                link.onClick();
            }
        }
    },
    data() {
        return {
            selectedLink: null
        }
    }
}
</script>

<style scoped>

</style>
