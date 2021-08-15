export default class {

    constructor() {
        this.title = null;
        this.subtitle = null;
        this.fields = [];
    }

    title(title) {
        this.title = title;
        return this;
    }

    subtitle(subtitle) {
        this.subtitle = subtitle;
        return this;
    }

    pushField(field) {
        this.fields.push = field;
    }

}
