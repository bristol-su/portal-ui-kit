import Form from '../schema/Form';
import Group from '../schema/Group';
import Field from '../schema/Field';

export default class {
    fromJson(json) {
        let form = new Form();
        form.title(json.form.title);
        form.subtitle(json.form.subtitle);
        form.description(json.form.description);

        form.setGroups(json.form.groups.map(groupSchema => {
            let group = new Group();
            group.title( groupSchema.title);
            group.subtitle(  groupSchema.subtitle);

            group.setFields(groupSchema.fields.map(fieldSchema => {
                let field = new Field(fieldSchema.type, fieldSchema.id);
                field.schema = fieldSchema;
                return field;
            }))

            return group;
        }))

        return form;
    }
}
