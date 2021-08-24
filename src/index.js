import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueTippy, { TippyComponent } from "vue-tippy";
import Vue from 'vue';
import VConfirmationModal from './components/atomic/VConfirmationModal';

export default {
    install(VueInstance, options) {

        VueInstance.use(VueTippy);
        VueInstance.component("tippy", TippyComponent);

        VueInstance.prototype.$uiEventBus = new Vue({});

        VueInstance.prototype.$confirm = {
            delete: (title, message) => {

                const confirmationModal = new VConfirmationModal({
                    parent: VueInstance,
                    propsData: {
                        title: title,
                        message: message
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
                })
            }
        };

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

    }
}
