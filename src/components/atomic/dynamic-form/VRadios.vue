<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div :id="id" v-for="radio in radios">
                <input
                  :aria-describedby="ariaDescribedBy"
                  type="radio"
                  :id="radio.id"
                  :value="radio.id"
                  :checked="optionIsChecked(radio)"
                  :required="required"
                  :aria-invalid="isInvalid"
                  :name="name"
                  v-model="dynamicValue"
                  class="form-checkbox px-4 py-2 mt-2 h-5 w-5"
                  :class=componentStyling
                >
                <label class="ml-2" :for="radio.id">{{radio.text}}</label>
            </div>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VRadios",
    mixins: [FormInputMixin],
    props: {
        radios: {
            required: true,
            type: Array,
            validator: (val) => Array.isArray(val) && val.length > 0 && val.filter((option) => !option.hasOwnProperty('id') || !option.hasOwnProperty('text')).length === 0
        }
    },
    methods: {
        optionIsChecked(radio) {
            return this.value === radio.id;
        }
    }
}
</script>

<style scoped>

</style>
