<template>
    <div class="bg-warning border-l-4 rounded-t border-warning-dark text-black p-4 text-left" role="alert">
        <p class="font-bold">There are {{errorCount}} errors in the form.</p>
        <div v-for="(errors, errorId) in errors">
            <ul>
                <li v-for="error in errors" v-text="error">
                    <a class="mt-5" :href="'#' + errorId">{{getLabel(errorId)}}</a>
                    <div v-if="errors.length > 1">
                        <ul>
                            <li v-for="e in error">{{e}}</li>
                        </ul>
                    </div>
                    <div v-else>{{error}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "VError",
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
