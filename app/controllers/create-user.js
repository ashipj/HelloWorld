import Ember from 'ember';

export default Ember.Controller.extend({
  firstName:'',
  age:0,
  actions:{
    register: function() {
      console.log("firstName:"+this.get('firstName'));
      console.log("lastName:"+this.get('lastName'));
      console.log("age:"+this.get('age'));
    }
  }
});
