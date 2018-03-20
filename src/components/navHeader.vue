<template>
  <div class="header">
      <h1 class="title">{{ title }}</h1>
      <p class="txts" v-html="msg"></p>
  </div>
</template>

<script>
export default {
  name: 'navheader',
  data() {
      return {
          title: 'My Todo App',
          msg: '할 일을 등록하세요. <br/> 하루가 즐거워 집니다.'
      }
  }
}
</script>


<style>
.header {
    height: 170px;
    padding-top:35px;
    border-radius: 20px 20px 0 0;
    background: linear-gradient(135deg, rgba(158, 15, 184, 0.7) -10%, rgba(5, 232, 255, 0.8) 180%),
      url('https://static.vecteezy.com/system/resources/previews/000/101/253/non_2x/vector-free-abstract-background-1.jpg');
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align:center;
  }
  .header .title {
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
  }
  .header .txts {
    margin-top: 15px;
    font-size: 1.1rem;
    color: #fff;
  }
</style>

