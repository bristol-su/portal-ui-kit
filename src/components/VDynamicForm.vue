<template>
    <div>
        <h1>To Do List:</h1>
        <ul>
            <li>Resolve Tooltip! -> Probably just pull in a package to handle this!</li>
            <li>Resolve the ability to put the Slot on FormLabel in the Label element or to put it underneath (For
                Radio/Checkbox Buttons)
            </li>
            <li>Build up some example forms that are the same as previously discussed</li>
        </ul>

        <hr>
        <div class="container items-center px-5 py-12 lg:px-20">
            <div
              class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2">
                <div class="lg:text-center">
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                       v-if="form.title" v-text="form.title"></p>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" v-if="form.subtitle"
                       v-text="form.subtitle"></p>
                    <p v-if="form.description" v-text="form.description"></p>
                </div>
                <form ref="form">
                    <div v-for="group in form.groups">
                        <div v-for="formInput in group.fields" :key="formInput.id">
                            <keep-alive>
                                <component
                                  :is="getComponentFromType(formInput.type)"
                                  v-bind="formInput"
                                  @updated="updateFormData"
                                  @submit="triggerSubmit"
                                >
                                </component>
                            </keep-alive>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import VRadio from './atomic/dynamic-form/VRadios';
import VTextInput from './atomic/dynamic-form/VTextInput';
import VSelect from './atomic/dynamic-form/VSelect';
import VTextarea from './atomic/dynamic-form/VTextarea';
import VSwitch from './atomic/dynamic-form/VSwitch';
import VFileUpload from './atomic/dynamic-form/VFileUpload';
import VChecklist from './atomic/dynamic-form/VChecklist';
import VCheckbox from './atomic/dynamic-form/VCheckbox';

export default {
    name: "VDynamicForm",
    props: {
        schema: {
            required: true,
            validator: (val) => typeof val === 'object' && val !== null
        },
        groupFormat: {
            required: true,
            validator: (val) => val === null || (typeof val === 'string' && ['single'].indexOf(val) !== -1)
        }
    },
    data() {
        return {
            formData: {},
            componentRegistration: {
                checkbox: VCheckbox,
                checklist: VChecklist,
                file: VFileUpload,
                radios: VRadio,
                select: VSelect,
                switch: VSwitch,
                textArea: VTextarea,
                text: VTextInput
            }
        }
    },
    mounted() {
        this.initialiseFormData();
    },
    methods: {
        validateFormSchema(val) {
            // TODO
        },
        initialiseFormData() {
            this.form.groups.map((g) => g.fields.map((f) => this.$set(this.formData, f.id, f.value)));
        },
        updateFormData(e) {
            this.$set(this.formData, e.id, e.value);
        },
        triggerSubmit() {
            // Trigger HTML5 Validation:
            if (this.$refs.form.checkValidity()) {
                // Process Submit Process:
                this.processSubmit();
            } else {
                // Notify User of incorrect Input:
                this.$refs.form.reportValidity();
            }
        },
        processSubmit() {
            // Process Form Submission to API:
        },
        getComponentFromType(type) {
            if(this.componentRegistration.hasOwnProperty(type)) {
                return this.componentRegistration[type];
            }
            return type;
        }
    },
    computed: {
        form() {
            return this.schema;
            // TODO We need to update the value of the field `value` key in the schema to match new values!
        }
    }
}
</script>

<style scoped>

</style>
