import Form from '../schema/Form';
import Group from '../schema/Group';

export default class {

    constructor(form) {
        this.form = form;
    }

    static newForm(title, subtitle, description) {
        let form = new Form();
        form.title(title);
        form.subtitle(subtitle);
        form.description(description);
        return new this(form);
    }

    withGroup(group) {
        this.form.pushGroup(group);
        return this;
    }

    withField(field) {
        let group = new Group();
        group.pushField(field);
        this.form.pushGroup(group);
        return this;
    }

    generate() {
        return this.form;
    }

}
