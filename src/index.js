import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueTippy, { TippyComponent } from "vue-tippy";
import Vue from 'vue';
import VConfirmationModal from './components/atomic/VConfirmationModal';
import VNotification from './components/atomic/VNotification';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
    install(VueInstance, options) {

        VueInstance.use(VueTippy);
        VueInstance.component('tippy', TippyComponent);

        Vue.component('v-vue-select', vSelect);

        let eventBus = new Vue({});

        let showNotification = (message, type) => {
            let componentClass = Vue.extend(VNotification);
            const notificationModal = new componentClass({
                propsData: {
                    message: message,
                    type: type
                }
            })
            const div = document.createElement('div')
            document.body.appendChild(div)
            notificationModal.$mount(div)
            notificationModal.show();
        }

        if(options.hasOwnProperty('tinyMceKey')) {
            VueInstance.prototype.$tinyMceApiKey = options.tinyMceKey;
        }

        VueInstance.prototype.$ui = {
            userSearcher: options.hasOwnProperty('userSearcher') ? options.userSearcher : (search) => [],
            logics: options.hasOwnProperty('logics') ? options.logics : () => [],
            loadLogics: options.hasOwnProperty('loadLogics') ? options.loadLogics : () => [],
            errors: options.hasOwnProperty('errors') ? options.errors : {
                all: () => {}, has: (key) => false, get: (key) => null
            },
            oldData: options.hasOwnProperty('old') ? options.old : {
                all: () => {}, has: (key) => false, get: (key) => null
            },
            confirm: {
                delete: (title, message) => {

                    let componentClass = Vue.extend(VConfirmationModal);
                    const confirmationModal = new componentClass({
                        propsData: {
                            title: title,
                            message: message,
                            type: 'danger'
                        }
                    })

                    // Return a promise that resolves when hidden, or rejects on destroyed
                    return new Promise((resolve, reject) => {
                        confirmationModal.$on('confirmed', (bvModalEvent) => resolve());
                        confirmationModal.$on('cancel', (bvModalEvent) => reject());

                        // Create a mount point (a DIV) and mount the msgBo which will trigger it to show
                        const div = document.createElement('div')
                        document.body.appendChild(div)
                        confirmationModal.$mount(div)
                        confirmationModal.show();
                    })
                }
            },
            notify: {
                info: (message) => showNotification(message, 'info'),
                alert: (message) => showNotification(message, 'alert'),
                warning: (message) => showNotification(message, 'warning'),
                success: (message) => showNotification(message, 'success'),
            },
            modal: {
                show: (id) => {
                    Vue.prototype.$ui.eventBus.$emit('modal.show', id);
                },
                hide: (id) => {
                    Vue.prototype.$ui.eventBus.$emit('modal.hide', id);
                }
            },
            eventBus: eventBus
        }

        Vue.prototype.$notify = Vue.prototype.$ui.notify;

        const requireComponent = require.context(
          // The relative path of the components folder
          './components',
          // Whether or not to look in subfolders
          true,
          // The regular expression used to match base component filenames. V*.vue
          /V[A-Z]\w+\.(vue|js)$/
        )

        requireComponent.keys().forEach(fileName => {
            // Get component config
            const componentConfig = requireComponent(fileName)

            // Get PascalCase name of component
            const componentName = upperFirst(
              camelCase(
                'P' +
                // Gets the file name regardless of folder depth
                fileName
                  .split('/')
                  .pop()
                  .replace(/\.\w+$/, '')
                  .slice(1)
              )
            )

            // Register component globally
            VueInstance.component(
              // Swap the first letter from V to P
              componentName,
              // Look for the component options on `.default`, which will
              // exist if the component was exported with `export default`,
              // otherwise fall back to module's root.
              componentConfig.default || componentConfig
            )
        })
    },
}
