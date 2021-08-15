import Field from '../schema/Field';

export default class extends Field {

    constructor(id) {
        super('switch', id);
        this.schema.onText = 'On';
        this.schema.offText = 'Off';
    }

    onText(text) {
        this.schema.onText = text;
        return this;
    }

    offText(text) {
        this.schema.offText = text;
        return this;
    }

}
