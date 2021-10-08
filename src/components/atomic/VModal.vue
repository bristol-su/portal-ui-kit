<template>
  <div :id="id + '-modal'">
    <div :id="id + '-modal-container'">
      <div v-if="shouldShow" @keyup.esc.prevent="hide">
        <div class="fixed z-10 inset-0 overflow-y-auto" :aria-labelledby="id + '-modal-title'" role="dialog" aria-modal="true" :aria-describedby="id + '-modal-described-by'">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <!--                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">-->
                  <!--                          <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
                  <!--                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />-->
                  <!--                          </svg>-->
                  <!--                        </div>-->
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div class="flex flex-row justify-between p-6 pl-0 bg-white rounded-tl-lg rounded-tr-lg">
                      <h3 class="text-lg leading-6 font-medium text-gray-900" :id="id + '-modal-title'">
                        {{ title }}
                      </h3>
                      <a href="#" @click="hide" tabindex="0" role="button">
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
                        <span class="sr-only">Close</span>
                      </a>
                    </div>
                    <div class="mt-5 mb-5" :id="id + '-modal-described-by'">
                      <slot></slot>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" v-if="buttons">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-black hover:bg-primary-dark focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                  {{ action }}
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:border-blueGray-500 focus:bg-primary-dark focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click.prevent="hide">
                  Cancel
                </button>
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
        id: {type: String, required: true},
        buttons: {type: Boolean, required: false, default: false},
        action: {type: String, required: false, default: 'Submit'}
    },
    created() {
        this.$ui.eventBus.$on('modal.show', (id) => {
            if (this.id === id && this.shouldShow === false) {
                this.show();
            }
        }, this);
        this.$ui.eventBus.$on('modal.hide', (id) => {
            if (this.id === id && this.shouldShow === true) {
                this.hide();
            }
        }, this);
    },
    data() {
        return {
            shouldShow: false,
            trap: null
        }
    },
    mounted() {
        this.trap = focusTrap.createFocusTrap('#' + this.id + '-modal', {
            fallbackFocus: () => '#' + this.id + '-modal-container',
            onPostDeactivate: () => this.hide()
        });
    },
    methods: {
        show() {
            this.shouldShow = true;
            this.$emit('show');
            this.$nextTick(() => {
                this.trap.activate();
            })
        },
        hide() {
            this.$emit('hide');
            this.hideWithoutEvents();
        },
        hideWithoutEvents() {
            this.shouldShow = false;
            this.trap.deactivate();
        }
    }
}
</script>

<style scoped>

</style>
