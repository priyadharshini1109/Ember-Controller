import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

let Person = EmberObject.extend({
  firstname: null,
  lastname : null,
    fullname : Ember.computed('firstname', 'lastname', function()
  {
  return `${this.get('firstname')} ${this.get('lastname')}`
})
});
let name = Person.create({
  firstname: 'William',
  lastname : 'Jones'
});
export default Route.extend({
  model(){
    return name;
  }

});
