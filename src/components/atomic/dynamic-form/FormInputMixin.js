import VFormLabel from '../VFormLabel';

export default {
    props: {
        id: {type: String, required: true},
        label: {validator: (val) => val === null || typeof val === 'string', required: false},
        required: {type: Boolean, required: false},
        visible: {type: Boolean, required: false},
        hint: {validator: (val) => val === null || typeof val === 'string', required: false},
        tooltip: {validator: (val) => val === null || typeof val === 'string', required: false},
        value: {required: false, default: null}
    },
    components: {
        VFormLabel
    },
    methods: {
        setValue(value) {
            this.$emit('input', value);
        },
        recheckErrors() {
            this.formErrors = this.$ui.errors.has(this.id) ? this.$ui.errors.get(this.id) : [];
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
        }
    }
}
