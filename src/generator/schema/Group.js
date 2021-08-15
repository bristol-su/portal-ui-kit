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
        this.schema.fields.push = field;
    }

    toJson() {
        let schema = Object.assign({}, this.schema);
        schema.fields = schema.fields.map(field => field.toJson());
        return this.schema;
    }

}
