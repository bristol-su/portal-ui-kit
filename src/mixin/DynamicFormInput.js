export default {
    props: {
        schema: {
            type: Object,
            required: true,
            validator: function (value) {
                // To validate against the finalised schema
                return true;
            }
        }
    },
    computed: {
        id() {
            return this.schema.id;
        },
        label() {
            return this.schema.title;
        },
        title() {
            return this.label
        },
        required() {
            return this.schema.required;
        },
        hasTooltip() {
            return this.schema.tooltip === null;
        },
        tooltip() {
            return this.schema.tooltip ?? null;
        },
        value: {
            get() {
                return this.schema.value;
            },
            set(updatedValue) {
                this.$emit('updated', {id: this.id, value: updatedValue});
            }
        },
        visible() {
            return this.schema.visible;
        }
    }
}
