import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('file', id);
        this.schema.multiple = false;
    }

    multiple(isMultiple) {
        this.schema.multiple = isMultiple;
        return this;
    }

}
