<template>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        <th v-for="column in fullColumns"
                            @click="setSort(column.key)"
                            scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <slot :name="'head(' + column.key + ')'" v-bind:column="column">
                                <slot name="head()" v-bind:column="column">
                                    <div>{{ column.label }}</div>
                                </slot>
                            </slot>
                        </th>
                        <th scope="col" class="relative px-6 py-3" v-if="editable || deletable">
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody v-if="busy">
                    <td colspan="100">
                        <div class="flex justify-center">
                            <svg class="animate-spin h-20 w-20 mr-3 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span class="sr-only">Loading Data</span>
                        </div>
                    </td>
                    </tbody>
                    <tbody v-else-if="filteredRows.length === 0">
                    <td colspan="100" class="text-center">
                        No data to display.
                    </td>
                    </tbody>
                    <tbody class="bg-white divide-y divide-gray-200" v-else>
                    <tr v-for="row in filteredRows" :id="row.id">
                        <td class="px-6 py-4 whitespace-nowrap" v-for="column in fullColumns">
                            <slot :name="'cell(' + column.key + ')'" v-bind:row="row" v-bind:column="column">
                                <slot name="cell()" v-bind:row="row" v-bind:column="column">
                                    <div class="text-sm text-gray-900">{{ dataGet(row, column.key) }}</div>
                                </slot>
                            </slot>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                            v-if="editable || deletable || viewable">
                           <span class="flex justify-between">
                                <a v-if="editable" href="#" class="text-primary hover:text-primary-dark"
                                   @click.prevent="$emit('edit', row)" @keydown.enter.prevent="$emit('edit', row)" @keydown.space.prevent="$emit('edit',  row)" role="button">
                                    <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor"
                                                 content="Edit"
                                                 v-tippy="{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true}"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                            </svg>
                                            <span class="sr-only">Edit</span>
                                    </span>
                                </a>
                                <a v-if="deletable" href="#" class="text-danger hover:text-danger-dark"
                                   @click.prevent="$emit('delete', row)" @keydown.enter.prevent="$emit('delete', row)" @keydown.space.prevent="$emit('delete', row)" role="button">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor"
                                             content="Delete"
                                             v-tippy="{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true}"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                        <span class="sr-only">Delete</span>
                                    </span>
                                </a>
                                <a v-if="viewable" href="#" class="text-secondary hover:text-secondary-dark"
                                   @click.prevent="$emit('view', row)" @keydown.enter.prevent="$emit('view', row)" @keydown.space.prevent="$emit('view', row)" role="button">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor"
                                             content="View"
                                             v-tippy="{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true}"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                        </svg>
                                    </span>
                                    <span class="sr-only">View</span>
                                </a>
                                <slot name="actions" v-bind:row="row"></slot>
                           </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <v-pagination
            :totalCount=totalRowCount
            :pageSize=pageSize
            :page=page
            v-on:updatePageSize="updatePageSize"
            v-on:changePage="updatePage"
        ></v-pagination>
    </div>
</template>

<script>
import VPagination from './atomic/VPagination';
import _ from 'lodash';

export default {
    name: "VTable",
    components: {
        VPagination
    },
    props: {
        items: {type: Array, required: true},
        columns: {type: Array, required: true},
        editable: {type: Boolean, default: false},
        deletable: {type: Boolean, default: false},
        viewable: {type: Boolean, default: false},
        totalCount: {type: Number, required: false},
        busy: {type: Boolean, required: false, default: false}
    },
    data() {
        return {
            page: 1,
            pageSize: 5,
            sort: {
                dir: true,
                by: ''
            },
            search: '',
        }
    },
    methods: {
        setSort(column) {
            // If already to set to current column then invert order:
            if (this.sort.by === column) {
                this.sort.dir = !this.sort.dir;
                return;
            }
            // Set to clicked Column:
            this.sort.by = column;
        },
        updatePageSize(e) {
            this.pageSize = e;
            // Reset Page so it goes back to page 1:
            this.page = 1;
            if(this.totalCount) {
                this.$emit('changePage', {'page': this.page, 'size': this.pageSize});
            }
        },
        updatePage(e) {
            this.page = e.page;
            if (this.totalCount) {
                this.$emit('changePage', {'page': this.page, 'size': this.pageSize});
            }
        },
        dataGet(row, key) {
            return _.get(row, key, '')
        }
    },
    computed: {
        filteredRows() {
            // Omit any Data not included in Columns array:
            let rows = _.cloneDeep(this.items);

            // Filter Data if all presented to FE:
            if (!this.totalCount) {
                let start = this.page > 1 ? (this.page - 1) * this.pageSize : 0;
                rows = rows.splice(start, this.pageSize);
            }


            // Order Data:

            return rows;
        },
        fullColumns() {
            return this.columns.map(column => {
                if (typeof column === 'string') {
                    return {key: column, label: column}
                }
                return column;
            });
        },
        totalRowCount() {
            if (this.totalCount) {
                return this.totalCount;
            }
            return this.items.length;
        }


    }
}
</script>

<style scoped>

</style>
