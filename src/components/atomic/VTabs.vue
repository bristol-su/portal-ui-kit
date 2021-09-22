<template>
    <div>
        <header class="flex items-center mb-3 whitespace-nowrap" :class="[tabs.length > 1 ? 'justify-end' : '']">
            <div class="flex-none flex items-center"> <!-- ml-auto pl-4 sm:pl-6 -->
                <div :class="{'group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200': tabs.length > 1, 'invisible': tabs.length === 1}" role="tablist"
                     :aria-label="description">
                    <button
                      type="button"
                      :id="getTabButtonId(title)"
                      :ref="getTabButtonId(title)"
                      role="tab"
                      :aria-selected="selectedIndex === index"
                      :aria-controls="getTabPanelId(title)"
                      :tabindex="selectedIndex === index ? '0' : '-1'"
                      v-for='(title, index) in tabs'
                      :key='title'
                      class="ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
                      :class="{'bg-white shadow-sm ring-1 ring-black ring-opacity-5': selectedIndex === index}"
                      @click='selectTab(index)'
                      @keydown.arrow-left="selectTab(selectedIndex - 1)"
                      @keydown.arrow-right="selectTab(selectedIndex + 1)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                            <path fill-rule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <span class="text-gray-600 group-hover:text-gray-900"
                              :class="selectedIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">{{
                                title
                            }}</span>
                    </button>
                </div>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script>
import slugify from 'slugify';

export default {
    name: "VTabs",
    data() {
        return {
            selectedIndex: 0, // the index of the selected tab,
            tabs: []
        }
    },
    props: {
        description: { // A description of the tabs for accessibility
            required: false, type: String, default: 'Page tabs'
        }
    },
    mounted() {
        this.loadTabs();
        this.$nextTick(() => this.selectTab(0));
    },
    methods: {
        selectTab(i) {
            if (i >= 0 && i < this.tabs.length) {
                this.$ui.eventBus.$emit('tab-deselected', this.tabs[this.selectedIndex]);
                this.selectedIndex = i;
                this.$ui.eventBus.$emit('tab-selected', this.tabs[i]);
                this.$refs[this.getTabButtonId(this.tabs[i])][0].focus();
            }
        },
        loadTabs() {
            if (this.$slots.default) {
                this.tabs = this.$slots.default
                  .filter(comp => comp.componentOptions)
                  .map(comp => comp.componentOptions.propsData.title);
            } else {
                this.tabs = [];
            }
        },
        getTabPanelId(title) {
            return slugify('tabs-tab-panel-' + title);
        },
        getTabButtonId(title) {
            return slugify('tabs-button-' + title);
        }
    },
    computed: {}
}
</script>

<style scoped>
</style>
