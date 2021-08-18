<template>
    <div>
        <div style="border-bottom: 2px solid #eaeaea">
            <ul class="flex cursor-pointer">
                <li class='py-2 px-6 bg-white rounded-t-lg'
                    v-for='(tab, index) in getTabs()'
                    :key='tab.title'
                    @click='selectTab(index)'
                    :class='{"text-gray-500 bg-gray-200": (index != selectedIndex)}'
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
        }
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        selectTab (i) {
            this.selectedIndex = i

            // loop over all the tabs
            this.getTabs().forEach((tab, index) => {
                tab.isActive = (index === i);
            })
        },
        getTabs() {
            if (this.$slots.default) {
                return this.$slots.default.filter(comp => comp.componentOptions)
            }
            return []
        }
    },
    computed: {

    }
}
</script>

<style scoped>
</style>
