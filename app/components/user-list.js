import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    moreDetails(user) {
      console.log("Show more details of "+user);
    }
  }
});
