import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    moreDetails(user) {
      console.log("Age of "+user.firstName+" is "+user.age);
    }
  }
});
