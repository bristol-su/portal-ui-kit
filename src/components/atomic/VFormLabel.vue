<template>
    <div class="relative mt-4">
        <label :content=tooltip :for="id" class="text-base leading-7 text-blueGray-500" v-if="title" tabindex="-1"
               v-tippy="{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true, onShow: () => !!tooltip }"
        >
            <span class="inline-flex">{{ title }}
            <span v-if="required"> * <span class="sr-only">Required</span></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                 v-if="tooltip">
                <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"/>
            </svg>
            </span>
        </label>
        <slot></slot>
        <v-help-text v-if="hasHelp" :help=help></v-help-text>
        <div v-if="errors" v-for="error in errors">
            <v-error :error=error></v-error>
        </div>
    </div>
</template>

<script>
import VHelpText from './VHelpText';
import VError from './VError';

export default { // Wrapper Component for Inputs which shows Tooltip and Help text, also will need to handle errors
    name: "VFormLabel",
    components: {
        VHelpText,
        VError
    },
    props: {
        id: {type: String, required: true},
        title: {type: String, required: false},
        required: {type: Boolean, required: false, default: false},
        help: {type: String, required: false},
        tooltip: {type: String, required: false},
        errors: {type: Array, required: false, default: () => []}
    },
    computed: {
        hasHelp() {
            return !!this.help;
        }
    }
}
</script>

<style scoped>

</style>
