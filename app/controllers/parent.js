import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    alertmessage() {
      // console.log("from parent controllers");
      alert("from parent controller")
    }
  }
});
