<template>
    <div class="relative mt-4">
        <label :for=title class="text-base leading-7 text-blueGray-500">
            {{ title }} <span v-if="required">* <span class="sr-only">Required</span></span>
        </label>
        <slot></slot>
        <v-help-text v-if="hasHelp" :help=help></v-help-text>
        <div v-if="errors" v-for="error in errors" :key="error.id">
            <v-error :error=error></v-error>
        </div>
    </div>
</template>

<script>
import VHelpText from './VHelpText';

export default { // Wrapper Component for Inputs which shows Tooltip and Help text, also will need to handle errors
    name: "VFormLabel",
    components: {
        VHelpText
    },
    props: {
        title: {type: String, required: true},
        required: {type: String, required: false, default: false},
        help: {type: String, required: false},
        tooltip: {type: String, required: false},
        errors: {type: String, required: false, default: ''}
    },
    computed: {
        hasHelp() {
            return this.help !== null;
        }
    }
}
</script>

<style scoped>

</style>
