export default class {

    constructor() {
        this.title = null;
        this.subtitle = null;
        this.description = null;
        this.groups = [];
    }

    title(title) {
        this.title = title;
        return this;
    }

    subtitle(subtitle) {
        this.subtitle = subtitle;
        return this;
    }

    description(description) {
        this.description = description;
        return this;
    }

    pushGroup(group) {
        this.groups.push(group);
    }

}
