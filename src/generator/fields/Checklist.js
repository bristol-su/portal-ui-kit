import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('checklist', id);
        this.schema.checklists = [];
    }

    withOption(id, text) {
        let options = this.schema.checklists;
        options.push({id: id, text: text});
        this.schema.checklists = options;
        return this;
    }

    setOptions(options) {
        this.schema.checklists = options;
        return this;
    }


}
