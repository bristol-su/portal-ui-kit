<template>
    <div tabindex="-1">
        <a v-if="href" :href="href"
            type="button"
            class="inline-flex items-center w-full px-16 py-2 my-2 mr-2 text-center transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            :class="styles"
            :disabled="disabled"
        >
            <slot>
                {{ buttonText }}
            </slot>
        </a>
        <button v-else
                v-on="$listeners"
                :type="type"
                class="w-full px-16 py-2 my-2 mr-2 text-center transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                :class="styles"
                :disabled="disabled"
        >
            <slot>
                {{ buttonText }}
            </slot>
        </button>
    </div>
</template>

<script>
export default {
  name: "VButton",
  props: {
    buttonText: {type: String, required: false, default: 'Submit'},
    href: {type: String, required: false},
    variant: {type: String, required: false, default: 'primary'},
    disabled: {type: Boolean, required: false, default: false},
    type: {type: String, required: false, default: 'submit'}
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
        'bg-warning border-warning-light hover:bg-warning-dark': this.variant === 'danger',
        'bg-info border-info-light hover:bg-info-dark': this.variant === 'info',
        'bg-white border-white hover:bg-white text-black': this.variant === 'white',
        'bg-black border-black hover:bg-black text-white': this.variant === 'black',
      }
    }
  }
}
</script>

<style scoped>

</style>
