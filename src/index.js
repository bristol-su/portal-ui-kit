import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueTippy, { TippyComponent } from "vue-tippy";

export default {
    install(Vue, options) {

        Vue.use(VueTippy);
        Vue.component("tippy", TippyComponent);

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
            Vue.component(
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
