<template>
    <div>
        <v-form-label v-bind="labelProps">
            <input
              :id="id"
              :name="title"
              v-model="dynamicValue"
              type="radio"
              class="form-radio px-4 py-2 mt-2 h-5 w-5">
            <span class="ml-2" v-text="title"></span>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VRadio",
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
