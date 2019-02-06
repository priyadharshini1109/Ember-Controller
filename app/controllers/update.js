import Controller from '@ember/controller';
// function setName(key, value) {
//       let [firstname, lastname] = value.split(' ');
//
//       this.set('firstname', firstname);
//       this.set('lastname', lastname);
//
//       return value;
//     }
export default Controller.extend({

  actions:{
    change(){
      var n=this.get('model')
    console.log(n);
    console.log(n.fullname);
    n.set('firstname','Steeve');
    n.set('lastname','Smith');
    console.log(n);
    console.log(n.fullname);
  }
}
});
