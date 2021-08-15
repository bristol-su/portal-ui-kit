<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <select
                  :id="id"
                  :name="title"
                  v-model="dynamicValue"
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    <option value=""></option>
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
            validator: (val) => Array.isArray(val) && val.length > 0 && val.filter((option) => !option.hasOwnProperty('id') || !option.hasOwnProperty('value')).count() === 0
        }
    },
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
