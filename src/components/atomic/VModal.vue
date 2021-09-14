<template>
    <div v-if="shouldShow" @keyup.esc.prevent="hide" tabindex="0" ref="modal">
        <div class="fixed z-10 inset-0 overflow-y-auto" :aria-labelledby="id + '-modal-title'" role="dialog"
             aria-modal="true" :aria-describedby="id + '-modal-described-by'">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                 v-if="shouldShow">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                    <div
                        class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                    >
                        <p class="font-semibold text-gray-800" :id="id + '-modal-title'">{{ title }}</p>
                        <svg @click="hide"
                             class="w-6 h-6"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </div>
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div class="mt-5 mb-5" :id="id + '-modal-described-by'">
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import * as focusTrap from 'focus-trap';

export default {
    name: "VModal",
    props: {
        title: {type: String, required: true},
        id: {type: String, required: true}
    },
    created() {
        this.$ui.eventBus.$on('modal.show', (id) => this.shouldShow = (this.id === id ? true : this.shouldShow), this);
        this.$ui.eventBus.$on('modal.hide', (id) => this.shouldShow = (this.id === id ? false : this.shouldShow), this);
    },
    data() {
        return {
            shouldShow: false,
            trap: null
        }
    },
    methods: {
        show() {
            this.shouldShow = true;
            this.$emit('show');
            this.trap = focusTrap.createFocusTrap(this.$refs.modal.$el);
        },
        hide() {
            this.hideWithoutEvents();
            this.$emit('hide');
            this.trap.deactivate();
            this.trap = null;
        },
        hideWithoutEvents() {
            this.shouldShow = false;
        }
    }
}
</script>

<style scoped>

</style>
