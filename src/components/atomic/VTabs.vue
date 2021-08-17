<template>
    <div>
        <div style="border-bottom: 2px solid #eaeaea">
            <ul class="flex cursor-pointer">
                <li class='py-2 px-6 bg-white rounded-t-lg'
                    v-for='(tab, index) in tabs'
                    :key='tab.title'
                    @click='selectTab(index)'
                    :class='{" text-gray-500 bg-gray-200": (index !== selectedIndex)}'
                >
                    {{ tab.title }}
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "VTabs",
    data () {
        return {
            selectedIndex: 0, // the index of the selected tab,
            tabs: []         // all of the tabs
        }
    },
    created () {
        this.tabs = this.$children
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        selectTab (i) {
            this.selectedIndex = i

            // loop over all the tabs
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === i)
            })
        }
    }
}
</script>

<style scoped>
</style>
