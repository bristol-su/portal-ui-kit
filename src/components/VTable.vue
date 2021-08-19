<template>
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr>
            <th v-for="column in columns"
                v-text="column"
                @click="setSort(column)"
                scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            </th>
            <th scope="col" class="relative px-6 py-3" v-if="editable">
              <span class="sr-only">Edit</span>
            </th>
            <th scope="col" class="relative px-6 py-3" v-if="deletable">
              <span class="sr-only">Delete</span>
            </th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="row in filteredRows" :id="row.id">
            <td class="px-6 py-4 whitespace-nowrap" v-for="(value, key, index) in row" v-if="upperColumns.indexOf(key.toUpperCase()) > -1">
              <div class="text-sm text-gray-900">{{ value }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" v-if="editable">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" v-if="deletable">
              <a href="#" class="text-red-600 hover:text-red-900" @click.prevent="$emit('deleted', row)">Delete</a>
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

export default {
  name: "VTable",
  components: {
    VPagination
  },
  props: {
    data: { type: Array, required: true },
    columns: { type: Array, required: true },
    editable: { type: Boolean, default: false },
    deletable: { type: Boolean, default: false },
    totalCount: { type: Number, required: false }
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
    setSort(column)
    {
      // If already to set to current column then invert order:
      if(this.sort.by === column) {
        this.sort.dir = ! this.sort.dir;
        return;
      }
      // Set to clicked Column:
      this.sort.by = column;
    },
    updatePageSize(e)
    {
      this.pageSize = e;
      // Reset Page so it goes back to page 1:
      this.page = 0;
    },
    updatePage(e)
    {
      this.page = e.page;
      if(this.totalCount) {
        this.$emit('changePage', {'page': this.page, 'size': this.pageSize});
      }
    }
  },
  computed: {
    filteredRows()
    {
      // Omit any Data not included in Columns array:
      let rows = this.data;

      // Filter Data if all presented to FE:
      if(! this.totalCount) {
        let start = this.page > 1 ? this.page * this.pageSize : this.page;
        rows.splice(start, this.pageSize);
      }


      // Order Data:

      return rows;
    },
    upperColumns()
    {
      return this.columns.map(col => col.toUpperCase());
    },
    totalRowCount() {
      if(this.totalCount) {
        return this.totalCount;
      }
      return this.data.length;
    }


  }
}
</script>

<style scoped>

</style>
