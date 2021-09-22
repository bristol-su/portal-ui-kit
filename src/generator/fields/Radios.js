import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('radios', id);
        this.schema.radios = [];
    }

    withOption(id, text) {
        let options = this.schema.radios;
        options.push({id: id, text: text});
        this.schema.radios = options;
        return this;
    }

}
