<template>
  <div>
    <header class="flex items-center mb-3 whitespace-nowrap" :class="[getTabs().length > 1 ? 'justify-end' : '']">
      <div class="flex-none flex items-center"> <!-- ml-auto pl-4 sm:pl-6 -->
        <div v-if="getTabs().length > 1">
          <div class="group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200">
            <button
                type="button"
                v-for='(title, index) in getTabs()'
                :key='title'
                class="ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
                :class="selectedIndex === index ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''"
                @click='selectTab(index)'
                tabindex="-1"
                :tabindex="selectedIndex === index ? '0' : '-1'"
                @keydown.arrow-left="selectTab(index)"
                @keydown.arrow-right="selectTab(index)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                   fill="currentColor">
                <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                <path fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd"/>
              </svg>
              <span class="sr-only lg:not-sr-only text-gray-600 group-hover:text-gray-900"
                    :class="selectedIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">{{
                  title
                }}</span>
            </button>
          </div>
        </div>
        <div v-else>
          <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"
              v-for="title in getTabs()">{{ title }}</h2>
        </div>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VTabs",
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
    }
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.$ui.eventBus.$emit('tab-deselected', this.getTabs()[this.selectedIndex]);
      this.selectedIndex = i;
      this.$ui.eventBus.$emit('tab-selected', this.getTabs()[i]);
    },
    getTabs() {
      if (this.$slots.default) {
        return this.$slots.default
            .filter(comp => comp.componentOptions)
            .map(comp => comp.componentOptions.propsData.title);
      }
      return []
    }
  },
  computed: {}
}
</script>

<style scoped>
</style>
