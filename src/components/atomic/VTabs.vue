<template>
    <div>
        <div style="border-bottom: 2px solid #eaeaea">
            <ul class="flex cursor-pointer">
                <li class='py-2 px-6 bg-white rounded-t-lg'
                    v-for='(tab, index) in tabs'
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
            tabs: []
        }
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        removeTab(tab) {
            const tabs = this.tabs;
            const index = tabs.indexOf(tab);
            if (index > -1) {
                tabs.splice(index, 1);
            }
        },
        selectTab (i) {
            this.selectedIndex = i

            // loop over all the tabs
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === i);
            })
        },
        addTab(tab) {
            this.tabs.push(tab);
        }
    },
    computed: {

    }
}
</script>

<style scoped>
</style>
