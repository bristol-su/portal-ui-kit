<template>
    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" v-if="page > 1" @click.prevent="updatePage(page - 1)"
               class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
            </a>
            <a href="#" v-if="pageShowing.to < pageShowing.total" @click.prevent="updatePage(page + 1)"
               class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
            </a>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <v-select
                  id="tableSelect"
                  title="Select Page Size"
                  :selectOptions="[{id: 5, value: 5}, {id: 10, value: 10}, {id: 25, value: 25}]"
                  :value="5"
                  help="Select the number of records to show in the table"
                  tooltip="Select the number of records to show in the table"
                  v-on:updated="updatePageSize"
                ></v-select>
            </div>

            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium" v-text="pageShowing.start"></span>
                    to
                    <span class="font-medium" v-text="pageShowing.to"></span>
                    of
                    <span class="font-medium" v-text="pageShowing.total"></span>
                    results
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#"
                       class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                       v-if="page > 1" @click.prevent="updatePage(page - 1)">
                        <span class="sr-only">Previous</span>
                        <!-- Heroicon name: solid/chevron-left -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <a href="#" aria-current="page"
                       class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        1
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        2
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                        3
                    </a>
                    <span
                      class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                        8
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        9
                    </a>
                    <a href="#"
                       class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        {{ totalCount / pageSize }}
                    </a>
                    <a href="#"
                       class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                       v-if="pageShowing.to < pageShowing.total" @click.prevent="updatePage(page + 1)">
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: solid/chevron-right -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VPagination",
    props: {
        "totalCount": {type: Number, required: true},
        "pageSize": {type: [String, Number], required: true},
        "page": {type: Number, required: true}
    },
    methods: {
        updatePageSize(e) {
            console.log(e);
            this.$emit('updatePageSize', e.value)
        },
        updatePage(number) {
            this.$emit('changePage', {"page": number});
        }
    },
    computed: {
        pageShowing() {
            return {
                'start': this.page > 1 ? this.page * Number(this.pageSize) : this.page,
                'to': this.page > 1 ? (this.page + 1) * Number(this.pageSize) : Number(this.pageSize) + 1,
                'total': this.totalCount
            };
        }
    }
}
</script>

<style scoped>

</style>
