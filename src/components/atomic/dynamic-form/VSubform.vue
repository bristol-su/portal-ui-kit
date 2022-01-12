<template>
    <div>
        <p-dynamic-form :schema="form" v-model="dynamicValue"></p-dynamic-form>
    </div>
</template>

<script>

import FormInputMixin from './FormInputMixin';

export default {
    name: "VSubform",
    mixins: [FormInputMixin],
    props: {
        form: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            logics: [],
            isLoading: false
        }
    },
    mounted() {
        this.isLoading = true;
        this.$ui.logics()
            .then(logics => this.logics = logics)
            .catch(error => this.$notify.alert('Could not load logics: ' + error.message))
            .then(() => this.isLoading = false);
    },
    computed: {
        selectOptions() {
            return this.logics;
        }
    }
}
</script>

<style scoped>

</style>
