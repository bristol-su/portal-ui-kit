<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <select
                  :id="id"
                  :name="title"
                  v-model="dynamicValue"
                  :multiple="multiple"
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    <option v-if="nullLabel !== null" :value="nullValue">{{nullLabel}}</option>
                    <option v-for="option in selectOptions" :value="option.id" v-text="option.value"></option>
                </select>
            </div>
        </v-form-label>
    </div>
</template>

<script>

import FormInputMixin from './FormInputMixin';

export default {
    name: "VSelect",
    props: {
        selectOptions: {
            required: true,
            type: Array,
            validator: (val) => Array.isArray(val) && val.filter((option) => !option.hasOwnProperty('id') || !option.hasOwnProperty('value')).length === 0
        },
        multiple: {
            required: false,
            type: Boolean,
            default: false
        },
        nullLabel: {
            required: false,
            type: String,
            default: null
        },
        nullValue: {
            required: false,
            default: null
        }
    },
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
