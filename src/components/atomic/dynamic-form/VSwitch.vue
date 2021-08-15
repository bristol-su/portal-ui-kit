<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="checkbox"
                  :id="id"
                  :name="name"
                  v-model="dynamicValue"
                  class="form-checkbox px-4 py-2 mt-2 h-5 w-5">
                <label :for="id">{{switchText}}</label>
            </div>
        </v-form-label>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';

export default {
    name: "VSwitch",
    mixins: [FormInputMixin],
    props: {
        onText: {required: false, type: String, default: 'On'},
        offText: {required: false, type: String, default: 'Off'},
    },
    computed: {
        switchText() {
            return this.value ? this.onText : this.offText;
        }
    }
}
</script>

<style scoped>

</style>
