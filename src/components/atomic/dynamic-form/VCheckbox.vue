<template>
    <div>
      <div class="mt-1 flex rounded-md shadow-sm">
        <v-form-label v-bind="labelProps">
          <template v-slot:preLabel>
            <input
                :aria-describedby="ariaDescribedBy"
                type="checkbox"
                :id="id"
                :aria-invalid="isInvalid"
                :required="required"
                :name="name"
                v-model="dynamicValue"
                class="form-checkbox px-4 py-2 mt-2 h-5 w-5"
                :class=componentStyling
            >
          </template>
        </v-form-label>
      </div>
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
