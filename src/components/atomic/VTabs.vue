<template>
    <div>
        <header class="flex items-center mb-3 whitespace-nowrap" :class="[tabs.length > 1 ? 'justify-end' : '']">
            <div class="flex-none flex items-center"> <!-- ml-auto pl-4 sm:pl-6 -->
                <div :class="{'group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200': tabs.length > 1, 'invisible': tabs.length === 1}" role="tablist"
                     :aria-label="description">
                    <button
                      type="button"
                      :id="getTabButtonId(props.title)"
                      :ref="getTabButtonId(props.title)"
                      role="tab"
                      :aria-selected="selectedIndex === index"
                      :aria-controls="getTabPanelId(props.title)"
                      :tabindex="selectedIndex === index ? '0' : '-1'"
                      v-for='(props, index) in tabs'
                      :key='props.title'
                      class="ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
                      :class="{'bg-white shadow-sm ring-1 ring-black ring-opacity-5': selectedIndex === index}"
                      @click='selectTab(index)'
                      @keydown.arrow-left="selectTab(selectedIndex - 1)"
                      @keydown.arrow-right="selectTab(selectedIndex + 1)"
                    >
                        <i :class="props.icon ? props.icon : 'fas fa-edit'" class="pr-1"></i>
                        <span class="text-gray-600 group-hover:text-gray-900"
                              :class="selectedIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">
                            {{props.title}} <v-badge v-if="Number.isInteger(props.badge)" :badge="props.badge"></v-badge>
                        </span>
                    </button>
                </div>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script>
import slugify from 'slugify';
import VBadge from './VBadge';

export default {
    name: "VTabs",
    components: {
        VBadge
    },
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
    created() {
        this.$ui.eventBus.$on('refreshTabs', () => this.loadTabs());
    },
    mounted() {
        this.loadTabs();
        this.$nextTick(() => this.selectTab(0));
    },
    methods: {
        selectTab(i) {
            if (i >= 0 && i < this.tabs.length) {
                this.$ui.eventBus.$emit('tab-deselected', this.tabs[this.selectedIndex].title);
                this.selectedIndex = i;
                this.$ui.eventBus.$emit('tab-selected', this.tabs[i].title);
                this.$refs[this.getTabButtonId(this.tabs[i].title)][0].focus();
            }
        },
        loadTabs() {
            if (this.$slots.default) {
                this.tabs = this.$slots.default
                  .filter(comp => comp.componentOptions)
                  .map(comp => comp.componentOptions.propsData);
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
