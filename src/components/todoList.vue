<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
                <label>
                    <input type="checkbox" v-model="todo.completed"/>
                    <span>{{todo.task}}</span>
                    <button type="button" class="del" v-on:click="remove(todo)"></button>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: 'todolist',
  props: ['todos', 'total', 'isactive', 'iscomplete'],
  components: {

  },
  methods: {
      remove(task) {
          eventB
      }
  }
}
</script>

<style>
  .list-group-item label {
    display: block;
    margin-bottom: 0;
    cursor: pointer;
  }
  .list-group-item label input[type="checkbox"] {
    margin-right: 5px;
    vertical-align: 1px;
  }
  .del {
    position:absolute;
    right:5px;
    top:2px;
    width:40px;
    height:45px;
    border:none;
    background: #fff;
  }
  .del:before {
    display:inline-block;
    content:'x';
    font-size:1.6rem;
    color:#cc9a9a;
  }
  input[type="checkbox"]:checked + span {
    text-decoration: line-through;
    color:#999;
  }
</style>