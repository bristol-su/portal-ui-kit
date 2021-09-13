<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div :id="id" class="mt-1 flex rounded-md shadow-sm">
                <div v-for="checklist in checklists">
                    <input
                      :aria-describedby="ariaDescribedBy"
                      type="checkbox"
                      :id="checklist.id"
                      :checked="optionIsChecked(checklist.id)"
                      :aria-invalid="isInvalid"
                      :required="required"
                      :name="name"
                      @change="setCheckboxValue(checklist.id, $event.target.checked)"
                      class="form-checkbox px-4 py-2 mt-2 h-5 w-5"
                      :class=componentStyling
                    >
                    <label :for="checklist.id">{{ checklist.text }}</label>
                </div>
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
            validator: (val) => Array.isArray(val) && val.length > 0 && val.filter((option) => !option.hasOwnProperty('id') || !option.hasOwnProperty('text')).length === 0
        }
    },
    methods: {
        setCheckboxValue(id, value) {
            let dynamicValue = (this.dynamicValue ? _.cloneDeep(this.dynamicValue) : []);
            if(!value && dynamicValue.indexOf(id) !== -1) {
                dynamicValue.splice(dynamicValue.indexOf(dynamicValue.filter(d => d === id)), 1);
            } else if(value && dynamicValue.indexOf(id) === -1) {
                dynamicValue.push(id);
            }
            this.dynamicValue = dynamicValue;
        },
        optionIsChecked(id) {
            return this.dynamicValue && this.dynamicValue.indexOf(id) !== -1;
        }
    }
}
</script>

<style scoped>

</style>
