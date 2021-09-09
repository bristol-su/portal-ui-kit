<template>
    <div class="bg-warning border-l-4 rounded-t border-warning-dark text-black p-4 text-left" role="alert">
        <p class="font-bold">There are {{errorCount}} errors in the form.</p>
        <ul>
        <li v-for="(errors, errorId) in errors" :key="errorId">
            <a class="mt-5" :href="'#' + errorId">{{ getLabel(errorId) }}:</a>
            <div v-if="errors.length > 1">
                <ul>
                    <li v-for="e in error">{{ e }}</li>
                </ul>
            </div>
            <span v-else>{{ error }}</span>
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
