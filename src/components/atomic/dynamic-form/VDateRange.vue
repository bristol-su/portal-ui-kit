<template>
    <v-form-label v-bind="labelProps">
        <v-date-picker
            :id="id + '-lower'"
            :required="isRequired"
            :visible="visible"
            v-model="lowerValue"
        >
        </v-date-picker>

        <v-date-picker
            :id="id + '-upper'"
            :required="isRequired"
            :visible="visible"
            v-model="upperValue"
        >
        </v-date-picker>
    </v-form-label>
</template>

<script>
import FormInputMixin from './FormInputMixin';
import VDatePicker from './VDatePicker';

export default {
    name: "VDateRange",
    components: {VDatePicker},
    mixins: [FormInputMixin],
    computed: {
        isRequired() {
            return this.dynamicValue?.lower && this.dynamicValue?.upper === null
                || this.dynamicValue?.upper && this.dynamicValue?.lower === null
        },
        lowerValue: {
            get() {
                return this.dynamicValue?.lower ?? null;
            },
            set(val) {
                this.dynamicValue = {
                    lower: val,
                    upper: this.dynamicValue?.upper ?? null
                }
            }
        },
        upperValue: {
            get() {
                return this.dynamicValue?.upper ?? null;
            },
            set(val) {
                this.dynamicValue = {
                    lower: this.dynamicValue?.lower ?? null,
                    upper: val
                }
            }
        },
    }
}
</script>

<style scoped>

</style>
