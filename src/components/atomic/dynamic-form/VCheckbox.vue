<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  :aria-describedby="ariaDescribedBy"
                  type="checkbox"
                  :id="id"
                  :name="name"
                  v-model="dynamicValue"
                  class="form-checkbox px-4 py-2 mt-2 h-5 w-5">
            </div>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VCheckbox",
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
