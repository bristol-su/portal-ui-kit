<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input :aria-describedby="ariaDescribedBy"
                       :aria-invalid="isInvalid"
                       type="checkbox" :name="name" :id="id" :value="isTurnedOn" @input="setValue"
                       class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                       :class=componentStyling
                />
                <label :for="id"
                       class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <label :for="id" class="text-xs text-gray-700">{{ switchText }}</label>
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
            return this.isTurnedOn ? this.onText : this.offText;
        },
        isTurnedOn() {
            return this.value || this.value === "1";
        }
    }
}
</script>

<style scoped>
.toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
}

.toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
}
</style>
