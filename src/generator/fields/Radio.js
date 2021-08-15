import Field from '../schema/Field';

export default class extends Field {

    withOption(id, text) {
        let options = this.getSchemaValue('radios', []);
        options.push = {id: id, text: text};
        this.addSchemaValue('radios', options);
        return this;
    }

}
