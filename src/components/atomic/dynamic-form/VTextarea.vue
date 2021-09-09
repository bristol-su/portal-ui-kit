<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
          <textarea
            :aria-describedby="ariaDescribedBy"
            :required="required"
            :id="id"
            :name="name"
            v-model="dynamicValue"
            class="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"></textarea>
            </div>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VTextarea",
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
