const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    name:null,
    age:null,
    movie:null
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(this.name && this.age) return true;
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
    }
  }
});