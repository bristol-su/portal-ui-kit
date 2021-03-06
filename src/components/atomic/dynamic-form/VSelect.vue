<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <select
                  :aria-describedby="ariaDescribedBy"
                  :id="id"
                  :name="title"
                  :required="required"
                  v-model="dynamicValue"
                  :aria-invalid="isInvalid"
                  :multiple="multiple"
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  :class=componentStyling
                >
                    <option v-if="showNullOption" :value="nullValue">{{ nullLabel }}</option>
                    <option
                      v-for="option in ungroupedSelectOptions"
                      :value="option.id"
                      v-text="option.value"
                    >
                    </option>
                    <optgroup v-for="(options, group) in groupedSelectOptions">
                        <option
                          v-for="option in options"
                          :value="option.id"
                          v-text="option.value"
                        >
                        </option>
                    </optgroup>
                </select>
            </div>
        </v-form-label>
    </div>
</template>

<script>

import FormInputMixin from './FormInputMixin';

export default {
    name: "VSelect",
    data() {
        return {
            ungroupedKey: 'p-ungrouped-options'
        }
    },
    props: {
        addOwnOptions: {
            required: false, type: Boolean, default: false
        },
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
        },
        showNullOption: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    computed: {
        groupedSelectOptions() {
            let groups = {};
            let addOption = (option) => {
                if (!groups.hasOwnProperty(option.group)) {
                    groups[option.group] = [];
                }
                groups[option.group].push(option);
            }
            this.selectOptions.filter((option) => option.group).forEach((option) => addOption(option));
            return groups;
        },
        ungroupedSelectOptions() {
            return this.selectOptions.filter((option) => !option.group);
        }
    },
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
