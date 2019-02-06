import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    message(){
    this.send('alertmessage');
  }
}
});
