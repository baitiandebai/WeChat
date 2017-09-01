<template>
  <div class="hello">
     用户名:<input type="text" placeholder="请输入用户名" name="userName"/><br/>
     密&nbsp;码<input type="password" placeholder="请输入密码" name="password"/><br/>
     <input type="submit" value="提交"/>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
