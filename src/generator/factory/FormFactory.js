import Form from '../schema/Form';

export default class {
    fromJson(json) {
        console.log(json);
        let form = new Form();
        form.title(json.title);
        form.subtitle(json.subtitle);
        form.description(json.description);

        return form;
    }
}
