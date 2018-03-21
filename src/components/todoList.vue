<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
                <label>
                    <input type="checkbox" v-model="todo.completed"/>
                    <span>{{todo.task}}</span>
                </label>
                    <button type="button" class="del" v-on:click="remove(todo)"></button>
            </li>
        </ul>
        <status-info :sum="total" :activelist="isactive" :completelist="iscomplete"></status-info>
    </div>
</template>

<script>
import { eventBus } from '../main';
import statusInfo from './statusInfo';
export default {
  name: 'todolist',
  props: ['todos', 'total', 'isactive', 'iscomplete'],
  components: {
    statusInfo
  },
  methods: {
      remove(task) {
          eventBus.$emit('onRemove', task);
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