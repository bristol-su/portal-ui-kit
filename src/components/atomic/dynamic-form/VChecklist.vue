<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="checkbox"
                  v-for="checklist in checklists"
                  :id="checklist.id"
                  :value="checklist.id"
                  :checked="optionIsChecked(checklist)"
                  :name="name"
                  v-model="dynamicValue"
                  class="form-checkbox px-4 py-2 mt-2 h-5 w-5">
                <label :for="checklist.id">checklist.text</label>
            </div>
    </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VChecklist",
    mixins: [FormInputMixin],
    props: {
        checklists: {
            required: true,
            type: Array,
            validator: (val) => val.length() > 0 && val.filter((option) => !option.hasOwnProperty('id') || !option.hasOwnProperty('text')).count() === 0
        }
    },
    methods: {
        optionIsChecked(checklist) {
            return this.value.indexOf(checklist.id) !== -1;
        }
    }
}
</script>

<style scoped>

</style>
