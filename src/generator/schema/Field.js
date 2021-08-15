export default class {

    constructor(id) {
        this.schema = {
            id: id,
            label: null,
            value: null,
            visible: true,
            disabled: false,
            required: false,
            hint: null,
            tooltip: null,
        }
    }

    id(id) {
        this.schema.id = id;
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

    addSchemaValue(key, value) {
        this.schema[key] = value;
        return this;
    }

    getSchemaValue(key, defaultOption) {
        if(this.schema.hasOwnProperty(key)) {
            return this.schema[key];
        }
        return defaultOption;
    }

}
