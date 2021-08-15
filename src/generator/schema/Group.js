import GroupGenerator from '../generators/GroupGenerator';
import FieldGenerator from '../generators/FieldGenerator';

export default class {

    constructor() {
        this.schema = {
            title: null,
            subtitle: null,
            fields: []
        };
    }

    title(title) {
        this.schema.title = title;
        return this;
    }

    subtitle(subtitle) {
        this.schema.subtitle = subtitle;
        return this;
    }

    pushField(field) {
        if(field instanceof FieldGenerator) {
            field = field.generate();
        }
        this.schema.fields.push = field;
        return this;
    }

    asJson() {
        let schema = Object.assign({}, this.schema);
        schema.fields = schema.fields.map(field => field.asJson());
        return this.schema;
    }

}
