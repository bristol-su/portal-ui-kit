<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  :name="name"
                  :id="id"
                  v-model="dynamicValue"
                  :required="required"
                  @enter.prevent="$emit('enter', $event.target.value)"
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            </div>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VTextInput",
    mixins: [FormInputMixin],
    props: {
        autocomplete: {
            required: false, default: 'off', type: String
        }
    }
}
</script>

<style scoped>

</style>
