import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {firstName:'Ashish', lastName:'Joseph', age:27},
      {firstName:'Tina', lastName:'Bastin', age:40},
      {firstName:'Nikhil', lastName:'K', age:32},
      {firstName:'Nimi', lastName:'Manoharan', age:26}];
  }
});
