import VFormLabel from '../VFormLabel';

export default {
    props: {
        id: {type: String, required: true},
        errorKey: {type: String, required: false},
        label: {validator: (val) => val === null || typeof val === 'string', required: false},
        required: {type: Boolean, required: false},
        visible: {type: Boolean, required: false, default: true},
        hint: {validator: (val) => val === null || typeof val === 'string', required: false},
        tooltip: {validator: (val) => val === null || typeof val === 'string', required: false},
        value: {required: false, default: null},
        errors: {required: false, type: Array}
    },
    components: {
        VFormLabel
    },
    methods: {
        setValue(value) {
            this.$emit('input', value);
        },
        recheckErrors() {
            this.formErrors = this.$ui.errors.has(this.errorKeyValue) ? this.$ui.errors.get(this.errorKeyValue) : [];
            if(this.errors) {
                this.formErrors = this.formErrors.concat(this.errors);
            }
        },
    },
    created() {
        this.$ui.eventBus.$on('errors-updated', () => this.recheckErrors());
        this.recheckErrors();
    },
    data() {
        return {
            formErrors: []
        }
    },
    computed: {
        ariaDescribedBy() {
            let describedBy = [];
            if(this.hasHelp) {
                describedBy.push(this.id + '-help-text')
            }
            if(this.errors && this.errors.length > 0) {
                describedBy.push(this.id + '-errors')
            }
            if(describedBy.length === 0) {
                return null;
            }
            return describedBy.join(' ');
        },
        isInvalid() {
            return !this.isValid;
        },
        isValid() {
            return this.formErrors.length === 0;
        },
        name() {
            return this.id;
        },
        title() {
            return this.label
        },
        hasTooltip() {
            return this.tooltip !== null;
        },
        hasHint() {
            return this.hint !== null;
        },
        help() {
            return this.hint;
        },
        dynamicValue: {
            get() {
                return this.value;
            },
            set(updatedValue) {
                this.setValue(updatedValue);
            }
        },
        labelProps() {
            let props = {
                id: this.id,
                title: this.title,
                required: this.required,
                help: this.help,
                tooltip: this.tooltip,
                errors: this.formErrors
            }

            return Object.fromEntries(Object.entries(props).filter(([_, v]) => v !== null)); // Only return non-empty values
        },
        errorKeyValue() {
            return this.errorKey ? this.errorKey : this.id;
        },
        componentStyling()
        {
            return {
                'border-warning-dark border-2': this.isInvalid,
                'border-2': !this.isInvalid
            }
        }
    }
}
