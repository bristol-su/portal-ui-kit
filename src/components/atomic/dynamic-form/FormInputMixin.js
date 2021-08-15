import VFormLabel from '../VFormLabel';

export default {
    props: {
        id: {type: String, required: true},
        label: {validator: (val) => val === null || val instanceof String, required: true},
        required: {type: Boolean, required: true},
        visible: {type: Boolean, required: true},
        hint: {validator: (val) => val === null || val instanceof String, required: true},
        tooltip: {validator: (val) => val === null || val instanceof String, required: true},
        value: {required: true, default: null}
    },
    components: {
        VFormLabel
    },
    methods: {
        setValue(value) {
            this.$emit('updated', {id: this.id, value: value});
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
                title: this.title,
                required: this.required,
                help: this.help,
                tooltip: this.tooltip
            }
            return Object.keys(props).forEach((key) => props[key] == null && delete props[key]);
        }
    }
}
