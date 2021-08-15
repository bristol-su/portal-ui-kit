import Radios from '../fields/Radios';
import Field from '../schema/Field';
import Checklist from '../fields/Checklist';
import Select from '../fields/Select';
import Switch from '../fields/Switch';

export default class {

    constructor(id) {
        this.field = new Field(id);
    }

    static radios(id) {
        return new Radios(id);
    }

    static checkbox(id) {
        return new Field('checkbox', id);
    }

    static file(id) {
        return new Field('file', id);
    }

    static textArea(id) {
        return new Field('textArea', id);
    }

    static text(id) {
        return new Field('text', id);
    }

    static checkList(id) {
        return new Checklist(id);
    }

    static select(id) {
        return new Select(id);
    }

    static switch(id) {
        return new Switch(id);
    }

}
