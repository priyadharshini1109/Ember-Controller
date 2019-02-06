import Route from '@ember/routing/route';
export default Route.extend({
  actions:{
    alertmessage(){
      // console.log("from parent route");
    alert("from parent route");
  }
}
});
