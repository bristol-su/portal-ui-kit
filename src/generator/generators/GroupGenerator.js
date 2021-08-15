import Group from '../schema/Group';

export default class {

    constructor(group) {
        this.group = group;
    }

    static newGroup(title, subtitle) {
        let group = new Group();
        group.title(title);
        group.subtitle(subtitle);
        return new this(group);
    }

    withField(field) {
        this.group.pushField(field);
        return this;
    }

}
