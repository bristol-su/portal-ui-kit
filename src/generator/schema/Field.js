export default class {

    constructor(type, id) {
        this.schema = {
            id: id,
            type: type,
            label: null,
            value: null,
            visible: true,
            disabled: false,
            required: false,
            hint: null,
            tooltip: null,
            errorKey: id
        }
    }

    id(id) {
        this.schema.id = id;
        return this;
    }

    errorKey(errorKey) {
        this.schema.errorKey = errorKey;
        return this;
    }

    label(label) {
        this.schema.label = label;
        return this;
    }

    value(value) {
        this.schema.value = value;
        return this;
    }

    visible(visible) {
        this.schema.visible = visible;
        return this;
    }

    disabled(disabled) {
        this.schema.disabled = disabled;
        return this;
    }

    required(required) {
        this.schema.required = required;
        return this;
    }

    hint(hint) {
        this.schema.hint = hint;
        return this;
    }

    tooltip(tooltip) {
        this.schema.tooltip = tooltip;
        return this;
    }

    asJson() {
        return this.schema;
    }

}
