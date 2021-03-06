import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('select', id);
        this.schema.selectOptions = [];
    }

    withOption(id, value) {
        let options = this.schema.selectOptions;
        options.push({id: id, value: value});
        this.schema.selectOptions = options;
        return this;
    }

    withNullOption(label, value) {
        this.schema.showNullOption = true;
        this.schema.nullLabel = label;
        this.schema.nullValue = value;
    }

    nullLabel(label) {
        this.withNullOption(label, null);
        return this;
    }

    setOptions(options) {
        this.schema.selectOptions = options;
        return this;
    }

    multiple(multiple) {
        this.schema.multiple = multiple;
        return this;
    }

}
