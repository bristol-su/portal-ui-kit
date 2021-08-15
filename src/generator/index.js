import FormGenerator from './generators/FormGenerator';
import GroupGenerator from './generators/GroupGenerator';
import FieldGenerator from './generators/FieldGenerator';



let form = FormGenerator.newForm('Title', 'Subtitle', 'Description')
  .withGroup(GroupGenerator.newGroup('Group Title', 'Group Subtitle')
    .withField(
      FieldGenerator.radios('radio_example')
        .label('The radio label')
        .required('The required value')
        .tooltip('A tooltip')
        .withOption('one', 'One')
        .withOption('two', 'Two')
        .withOption('three', 'Three')
    ))
  .generate();

console.log(form.asJson());

export default {
    generator: new FormGenerator,
    form: form.asJson()
}

//   .withGroup((groupGenerator) => groupGenerator.newGroup('Title', 'Subtitle')
//     .withField((fieldGenerator) => fieldGenerator.radios('radio_id')
//       .name('name')
//       .required(false)
//     )
//   ).withField((fieldGenerator) => fieldGenerator.radios('radio_id')
//   .name('name')
//   .required(false)
// )
