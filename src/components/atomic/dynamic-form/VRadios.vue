<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div :id="id" v-for="radio in radios">
                <input
                  type="radio"
                  :id="radio.id"
                  :value="radio.id"
                  :checked="optionIsChecked(radio)"
                  :name="name"
                  v-model="dynamicValue"
                  class="form-checkbox px-4 py-2 mt-2 h-5 w-5">
                <label class="ml-2" :for="radio.id">{{radio.text}}</label>
            </div>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VRadio",
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
            return this.value.indexOf(radio.id) !== -1;
        }
    }
}
</script>

<style scoped>

</style>
