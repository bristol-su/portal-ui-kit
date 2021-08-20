<template>
    <span>
        <a v-if="href" :href="href">
        <button
          type="button"
          class="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
          :class="styles"
        >
            <slot>
                {{ buttonText }}
            </slot>
        </button>
        </a>
        <button v-else
              v-on="$listeners"
              type="submit"
              class="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
              :class="styles"
            >
            <slot>
                {{ buttonText }}
            </slot>
        </button>
    </span>
</template>

<script>
export default {
    name: "VButton",
    props: {
        buttonText: {type: String, required: false, default: 'Submit'},
        href: {type: String, required: false},
        variant: {type: String, required: false, default: 'primary'}
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
                'bg-blue-600 border-blue-600 hover:bg-blue-800': this.type === 'primary',
                'bg-gray-600 border-gray-600 hover:bg-gray-800': this.type === 'secondary',
                'w-full px-16 py-2 my-2 text-base font-medium text-blueGray-600 transition duration-500 ease-in-out transform rounded-md border-blueGray-50 bg-blueGray-50 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100': this.type === 'white',
                'w-full px-16 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900': this.type === 'black',
            }
        }
    }
}
</script>

<style scoped>

</style>
