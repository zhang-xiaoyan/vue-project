<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msgfromfather}}</h1>
    <button v-on:click="onClickMe">click</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello from component a!'
    }
  },
  events:{
     "onAddNew":function (items) {
         console.log(items);
     }
  },
  props:["msgfromfather"],
  methods:{
    onClickMe:function () {
      //console.log(this.msgfromfather);
      //this.$emit("child-tell-me-something",this.msg); // 子组件像父组件传递数据的方法之一
      this.$dispatch("child-tell-me-something", this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
