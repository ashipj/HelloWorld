import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleMore(user) {
      this.sendAction("toggleMore");
    },
    moreDetails(user) {
      console.log("Age of "+user.firstName+" is "+user.age);
    }
  }
});
