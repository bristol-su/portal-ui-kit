<template>
  <div class="bg-danger border-l-4 rounded-t border-danger-dark text-black p-4 text-left" role="alert" v-if="errorCount > 0">
    <p class="font-bold" v-if="errorCount === 1">There is 1 error in the form.</p>
    <p class="font-bold" v-else-if="errorCount > 1">There are {{errorCount}} errors in the form.</p>
    <ul>
      <li v-for="(fieldErrors, errorId) in errors" :key="errorId">
        <a class="mt-5 underline" :href="'#' + errorId">{{ getLabel(errorId) }}:</a>
        <div v-if="fieldErrors.length > 1">
          <ul class="ml-5 list-disc">
            <li v-for="error in fieldErrors">{{ error }}</li>
          </ul>
        </div>
        <span v-else>{{ fieldErrors[0] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "VErrorSummary",
    props: {
        errors: {type: Object, required: true},
        labels: {type: Object, required: false}
    },
    computed: {
        errorCount() {
            return Object.keys(this.errors).length;
        }
    },
    methods: {
        getLabel(id) {
            if(this.labels.hasOwnProperty(id)) {
                return this.labels[id];
            }
            return id;
        }
    }
}
</script>

<style scoped>

</style>
