import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('text', id);
        this.schema.autocomplete = 'off';
    }

    autocomplete(autocomplete) {
        this.schema.autocomplete = autocomplete;
        return this;
    }

}
