export default class {

    constructor() {
        this.schema = {
            title: null,
            subtitle: null,
            description: null,
            groups: []
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

    description(description) {
        this.schema.description = description;
        return this;
    }

    pushGroup(group) {
        this.schema.groups.push(group);
        return this;
    }

    asJson() {
        let schema = Object.assign({}, this.schema);
        schema.groups = schema.groups.map(group => group.asJson());
        return {
            form: this.schema,
            groupFormat: 'single'
        };
    }

}
