<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <v-vue-select class="w-full"
                      label="display"
                      :options="selectOptions"
                      :clearable="true"
                      :loading="isLoading"
                      :inputId="id"
                      :name="title"
                      :required="required"
                      v-model="dynamicValue"
                      :reduce="option => option.id"
                      :filterable="true">

                </v-vue-select>

            </div>
        </v-form-label>
    </div>
</template>

<script>

import FormInputMixin from './FormInputMixin';

export default {
    name: "VLogic",
    mixins: [FormInputMixin],
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
