import Ember from 'ember';

export default Ember.Controller.extend({
  showMore:false,
  actions: {
    toggleMore: function() {
      this.toggleProperty('showMore');
    }
  }
});
