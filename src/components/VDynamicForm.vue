<template>
    <div>
        <div class="lg:text-center">
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                v-if="form.title" v-text="form.title"></h3>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" v-if="form.subtitle"
               v-text="form.subtitle"></p>
            <p v-if="form.description" v-text="form.description"></p>
        </div>
        <form
            ref="form"
            :action="formUrl"
            :method="formMethod">

            <v-error-summary v-if="hasErrors" :errors="errors" :labels="fieldLabels">

            </v-error-summary>

            <slot name="prepend"></slot>
            <div v-for="group in form.groups">
                <div v-for="formInput in group.fields" :key="formInput.id">
                    <keep-alive>
                        <component
                            :is="getComponentFromType(formInput.type)"
                            :key="formInput.id"
                            v-bind="formInput"
                            @input="updateFormData(formInput.id, $event)">
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
import VErrorSummary from './atomic/VErrorSummary';
import VArray from './atomic/dynamic-form/VArray';
import VDatePicker from './atomic/dynamic-form/VDatePicker';

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
    components: {
        VErrorSummary
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
                html: VWysiwyg,
                array: VArray,
                date: VDatePicker
            },
            errors: {}
        }
    },
    mounted() {
        this.initialiseFormData();
    },
    created() {
        this.$ui.eventBus.$on('errors-updated', () => this.recheckErrors());
        this.recheckErrors();
    },
    methods: {
        recheckErrors() {
            this.errors = this.$ui.errors.all();
        },
        initialiseFormData() {
            let data = Object.assign(this.oldData, this.formData);
            this.form.groups.forEach((g) => g.fields.forEach((f) => (data.hasOwnProperty(f.id) ? null : data[f.id] = f.value)));
            this.formData = data;
        },
        updateFormData(id, value) {
            let data = Object.assign({}, this.formData);
            data[id] = value;
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

            form.schema.groups = form.schema.groups.map(group => {
                group.schema.fields = group.schema.fields.map(field => {
                    if(this.formData && this.formData.hasOwnProperty(field.schema.id)) {
                        field.schema.value = this.formData[field.schema.id];
                    }
                    return field;
                })
                return group;
            });

            return form.asJson();
        },
        formData: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        },
        hasErrors() {
            return !_.isEmpty(this.errors);
        },
        fieldLabels() {
            let labels = {};
            this.form.groups.forEach(group => {
                group.fields.forEach(field => {
                    labels[field.errorKey] = field.label;
                })
            })
            return labels;
        },
        fieldIds() {
            let fieldIds = [];
            this.form.groups.forEach((g) => g.fields.forEach((f) => fieldIds.push(f.id)));
            return fieldIds;
        },
        oldData() {
            let oldData = {};
            this.fieldIds.forEach(fieldId => {
                if(this.$ui.oldData.has(fieldId)) {
                    oldData[fieldId] = this.$ui.oldData.get(fieldId);
                }
            })
            return oldData;
        }
    }
}
</script>

<style scoped>

</style>
