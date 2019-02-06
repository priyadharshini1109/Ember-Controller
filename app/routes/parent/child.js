import Route from '@ember/routing/route';

export default Route.extend({
//   actions:{
//     message(){
//       // console.log("from parent route");
//     alert("from child route");
//   }
// },
  actions: {
    message() {
       this.send('alertmessage')
    }
  }
});
