<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <v-vue-select class="w-full"
                      label="name"
                      :options="selectOptions"
                      :clearable="true"
                      :loading="loading"
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
import { mapGetters } from 'vuex'

export default {
    name: "VLogic",
    mixins: [FormInputMixin],
    mounted() {
        this.$ui.loadLogics();
    },
    computed: {
        ...mapGetters('logics', [
            'logics',
            'loaded',
            'loading'
        ]),
        selectOptions() {
            return this.logics;
        }
    }
}
</script>

<style scoped>

</style>
