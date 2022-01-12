import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('subform', id);
        this.schema.form = false;
    }

    form(form) {
        this.schema.form = form;
        return this;
    }

}
