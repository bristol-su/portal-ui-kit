<template>
    <div tabindex="-1">
        <a v-if="href"
           :href="href"
           type="button"
           role="button"
           :class="styles"
           class="inline-grid align-middle w-full px-16 py-2 my-2 mr-2 text-center transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
           :aria-live="busy ? 'polite' : undefined"
           :aria-busy="busy"
           :disabled="disabled || busy"
        >
            <span>
                <slot v-if="!busy">
                    {{ buttonText }}
                </slot>
                <slot name="busyContent" v-else>
                    <div class="flex justify-center">
                        <svg class="animate-spin h-4 w-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ busyText }}
                    </div>
                </slot>
            </span>
        </a>
        <button v-else
                v-on="$listeners"
                :type="type"
                class="w-full px-16 py-2 my-2 mr-2 text-center transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                :class="styles"
                :aria-live="busy ? 'polite' : undefined"
                :aria-busy="busy"
                :disabled="disabled || busy"
        >
            <span>
                <slot v-if="!busy">
                    {{ buttonText }}
                </slot>
                <slot name="busyContent" v-else>
                    <div class="flex justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ busyText }}
                    </div>
                </slot>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "VButton",
    props: {
        buttonText: {type: String, required: false, default: 'Submit'},
        busyText: {type: String, required: false, default: 'Loading...'},
        href: {type: String, required: false},
        variant: {type: String, required: false, default: 'primary'},
        disabled: {type: Boolean, required: false, default: false},
        type: {type: String, required: false, default: 'submit'},
        busy: {type: Boolean, required: false, default: false}
    },
    methods: {
        clickButton() {
            if (this.href) {
                window.location.href = this.href;
            }
            this.$emit('click');
        }
    },
    computed: {
        styles() {
            return {
                'bg-primary border-primary-light text-black hover:bg-primary-dark hover:text-white': this.variant === 'primary',
                'bg-secondary border-secondary-light text-black hover:bg-secondary-dark hover:text-white': this.variant === 'secondary',
                'bg-success border-success-light hover:bg-success-dark': this.variant === 'success',
                'bg-danger border-danger-light hover:bg-danger-dark': this.variant === 'danger',
                'bg-info border-info-light hover:bg-info-dark': this.variant === 'info',
                'bg-warning border-info-light hover:bg-info-dark': this.variant === 'warning',
                'bg-white border-white hover:bg-white text-black': this.variant === 'white',
                'bg-black border-black hover:bg-black text-white': this.variant === 'black',
                'opacity-70 cursor-not-allowed pointer-events-none': this.busy || this.disabled
            }
        }
    }
}
</script>

<style scoped>

</style>
