<template>
    <div>
        <div class="lg:text-center">
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
               v-if="form.title" v-text="form.title"></p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" v-if="form.subtitle"
               v-text="form.subtitle"></p>
            <p v-if="form.description" v-text="form.description"></p>
        </div>
        <form
          ref="form"
          :action="formUrl"
          :method="formMethod">
            <slot name="prepend"></slot>
            <div v-for="group in form.groups">
                <div v-for="formInput in group.fields" :key="formInput.id">
                    <keep-alive>
                        <component
                          :is="getComponentFromType(formInput.type)"
                          v-bind="formInput"
                          @input="updateFormData">
                        </component>
                    </keep-alive>
                </div>
            </div>
            <slot name="append"></slot>
        </form>
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
import Form from '../generator/schema/Form';
import VNumber from './atomic/dynamic-form/VNumber';
import VTags from './atomic/dynamic-form/VTags';
import VPassword from './atomic/dynamic-form/VPassword';
import VWysiwyg from './atomic/dynamic-form/VWysiwyg';
import FormGenerator from '../generator/generators/FormGenerator';
import FormFactory from '../generator/factory/FormFactory';

export default {
    name: "VDynamicForm",
    props: {
        schema: {
            required: true,
            validator: (val) => typeof val === 'object' && val !== null
        },
        groupFormat: {
            required: false,
            validator: (val) => val === null || (typeof val === 'string' && ['single'].indexOf(val) !== -1)
        },
        value: {
            required: false,
            type: Object,
            default: () => {
            }
        },
        formUrl: {required: false, type: String, default: '#'},
        formMethod: {required: false, type: String, default: 'POST'},

    },
    data() {
        return {
            componentRegistration: {
                checkbox: VCheckbox,
                checklist: VChecklist,
                file: VFileUpload,
                number: VNumber,
                radios: VRadio,
                select: VSelect,
                switch: VSwitch,
                tags: VTags,
                textArea: VTextarea,
                text: VTextInput,
                password: VPassword,
                html: VWysiwyg
            }
        }
    },
    mounted() {
        this.initialiseFormData();
    },
    methods: {
        initialiseFormData() {
            let data = Object.assign({}, this.formData);
            this.form.groups.forEach((g) => g.fields.forEach((f) => (data.hasOwnProperty(f.id) ? null : data[f.id] = f.value)));
            this.formData = data;
        },
        updateFormData(e) {
            let data = Object.assign({}, this.formData);
            data[e.id] = e.value;
            this.formData = data;
        },
        checkValidity() {
            // Trigger HTML5 Validation:
            if (this.$refs.form.checkValidity()) {
                return true;
            }
            this.$refs.form.reportValidity();
            return false;
        },
        getComponentFromType(type) {
            if (this.componentRegistration.hasOwnProperty(type)) {
                return this.componentRegistration[type];
            }
            return type;
        }
    },
    computed: {
        form() {
            let form = null;
            if(this.schema instanceof FormGenerator) {
                form = this.schema.generate();
            } else if (this.schema instanceof Form) {
                form = this.schema;
            } else {
                let factory = new FormFactory();
                form = factory.fromJson(this.schema);
            }

            form.schema.groups.forEach(group => group.schema.fields.forEach(field => {
                if(this.formData && this.formData.hasOwnProperty(field.id)) {
                    field.value = this.formData[field.id];
                }
            }));
            return form.asJson();
        },
        formData: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    }
}
</script>

<style scoped>

</style>
