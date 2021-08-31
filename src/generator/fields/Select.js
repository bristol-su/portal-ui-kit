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

    nullLabel(label) {
        this.schema.nullLabel = label;
    }

    setOptions(options) {
        this.schema.selectOptions = options;
        return this;
    }

}
