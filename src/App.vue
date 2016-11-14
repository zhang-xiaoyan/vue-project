<template>
  <div id="app">
      <h1 v-text="title"></h1>
      <input v-model="newItem" v-on:keyup.enter="addNew"/>
      <ul>
          <li v-for="item in items"
              v-bind:class="{finish: item.isFinished}"
              v-on:click="toggle(item)"
          >{{item.label}}</li>
      </ul>
      <p>child tells me:{{ childWords }}</p>
      <component-a msgfromfather="father message"></component-a>
  </div>
</template>

<script>
import Store from "./store.js"
import ComponentA from "./components/ComponentA.vue"
export default {
  data:function () {
     return{
       title:"this is a todo list",
       items:Store.fetch(),
       newItem:"",
       childWords:""
     }
  },
  components:{ComponentA},
  watch:{
    items:{
      handler:function (items) {
        //console.log(val, oldVal)
        Store.save(items)
      },
      deep:true
    }
  },
  events:{
    "child-tell-me-something":function (msg) {
      this.childWords = msg;
    }
  },
  methods:{
    toggle:function (item) {
      //console.log(item)
      item.isFinished = !item.isFinished
    },
    addNew:function () {
      this.items.push({
        label:this.newItem,
        isFinished:false
      });
      this.newItem="";
      this.$broadcast("onAddNew", this.items);
    }
  }
}
</script>

<style>
.finish{
   text-decoration: underline;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
