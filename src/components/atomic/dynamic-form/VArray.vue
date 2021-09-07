<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div v-for="(val, index) in dynamicValue"
                 :key="index">
                <v-text-input
                  :id="'v-array-' + index"
                  :required="true"
                  :value="val"
                  @input="updateValue(index, $event)"
                ></v-text-input>
                <a href="#" class="text-warning hover:text-warning-dark" @click.prevent="deleteValue(index)">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor"
                             content="Delete"
                             v-tippy="{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true}"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                        <span class="sr-only">Delete</span>
                    </span>
                </a>
            </div>

            <a href="#" class="text-secondary hover:text-secondary-dark" @click.prevent="addValue">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor"
                         content="Add"
                         v-tippy="{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true}"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </span>
                <span class="sr-only">Add</span>
            </a>

        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';
import * as _ from 'lodash';
import VTextInput from './VTextInput';

export default {
    name: 'VArray',
    components: {VTextInput},
    mixins: [FormInputMixin],
    created() {
        if (!Array.isArray(this.dynamicValue)) {
            this.dynamicValue = [];
        }
    },
    methods: {
        addValue() {
            let val = _.cloneDeep(this.dynamicValue);
            if(!Array.isArray(val)) {
                val = [];
            }
            val.push('');
            this.dynamicValue = val;
        },
        updateValue(index, value) {
            let val = _.cloneDeep(this.dynamicValue);
            val.splice(index, 1, value);
            this.dynamicValue = val;
        },
        deleteValue(index) {
            let val = _.cloneDeep(this.dynamicValue);
            val.splice(index, 1);
            this.dynamicValue = val;
        },
    }
}
</script>

<style scoped>

</style>
