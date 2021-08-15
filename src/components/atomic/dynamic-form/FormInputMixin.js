import VFormLabel from '../VFormLabel';

export default {
    props: {
        id: {type: String, required: true},
        label: {type: String, required: true},
        required: {type: Boolean, required: false, default: false},
        visible: {type: Boolean, required: false, default: true},
        hint: {type: String, required: false},
        tooltip: {type: String, required: false},
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
            return {
                title: this.title,
                required: this.required,
                help: this.help,
                tooltip: this.tooltip
            }
        }
    }
}
