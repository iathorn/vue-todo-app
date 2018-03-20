<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="content">
      <input-form placeholder="할일을 입력하세요"></input-form>
      <todo-list v-if="count" :todos="filtered, completed, activated" :total="count" :isactive="activated" :iscomplete="completed"></todo-list>

    </div>
  </div>
</template>

<script>
import { eventBus } from './main';
import { storage, getLists, appendList, updateList } from './webstorage'; 
import navHeader from './components/navHeader.vue';
import inputForm from './components/inputForm.vue';
import todoList from './components/todoList.vue';
export default {
  name: 'App',
  data() {
    return {
      chk_all: true,
      chk_active: false,
      chk_complete: false,
      todo_lists: []
    }
  },
  created() {
    this.updateView();
    console.log('created');

    eventBus.$on('add', data => this.addList(data));
  },
  computed: {
    filtered() {
      let self = this;
      console.log("filtered");
      return this.todo_lists.filter((todo, index) => {
        return true;
      })
    },
    count() {
      return this.todo_lists.length;
    }
  },
  components: {
    navHeader,
    inputForm,
    todoList
  },
  methods: {
    updateView(){
      console.log('update');
      this.todo_lists = getLists();

    },
    addList(data) {
      let todo = {'task': data, 'active': true, 'completed': false};
      console.log("추가되었습니다.");
      appendList(todo);
      this.updateView();
      
    }
  }
}

</script>

<style>
body {
  background: #d2e3ed;
}
#app {
  max-width: 375px;
  margin: 0 auto;
  border-radius: 20px;
  background:#fff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

button {
  -webkit-appearance: none;
}

button.focus, button:focus {
  box-shadow: none;
  outline-color: none;
  outline: 0;
}
button:active {
  outline: none;
  border: none;
}

.content {padding:30px 20px;}
</style>
