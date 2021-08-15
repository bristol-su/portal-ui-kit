import Radio from '../fields/Radio';
import Field from '../schema/Field';

export default class {

    constructor(id) {
        this.field = new Field(id);
    }

    static radios(id) {
        return new Radio(id);
    }

}
