<template>
  <div class="btns" role="group">
    <hr />
    <div>
      <button ref="allBtn" v-bind:class="{selected : allCheck}" class="btn btn-default"
        type="button" v-on:click="showAll">All <span class="badge">{{ sum }}</span></button>
      <button ref="activeBtn" v-bind:class="{selected : activeCheck}" class="btn btn-default"
        type="button" v-on:click="showActive">Active <span class="badge">{{ activelist.length }}</span>
      </button>
      <button ref="completeBtn" v-bind:class="{selected : completeCheck}" 
        class="btn btn-default" type="button" v-on:click="showComplete">
        Completed <span class="badge">{{ completelist.length }}</span>
      </button>
    </div>
    <a href="#" class="btn-clear" @click="removeComplete">Clear completed</a>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: 'statusinfo',
  props: ['sum', 'activelist', 'completelist'],
  data() {
    return {
      allCheck: true,
      activeCheck: false,
      completeCheck: false
    }
  },
  methods: {
    showAll(e){
      eventBus.$emit('onAll');
      this.initButtons();
      this.allCheck = true;
    },
    initButtons(target) {
      this.allCheck = false;
      this.activeCheck = false;
      this.completeCheck = false;
    },
    showActive(e) {
      eventBus.$emit('onActive');
      this.initButtons();
      this.activeCheck = true;
    },
    showComplete(e) {
      eventBus.$emit('onComplete');
      this.initButtons();
      this.completeCheck = true;
    },
    removeComplete(){
      eventBus.$emit('onRemoveAll');
    }
  }
}
</script>


<style>
  .btns {
    margin-top: 35px;
    text-align: center;
  }
  .btn-default {
    border:1px solid transparent;
    background: #fff;
    font-size: .8rem;
    line-height: 1.8;
    outline: none;
  }
  .btn-clear {
    font-size: 12px;
  }
  .selected {
    border-color:rgba(175, 47, 47, 0.2)
  }
  .badge{
    display:inline-block;
    min-width:10px;
    padding:3px 7px;
    font-size:10px;
    font-weight:700;
    line-height:1;
    color:#fff;
    text-align:center;
    white-space:nowrap;
    vertical-align:baseline;
    background-color:#777;
    border-radius:10px
  }
  .badge:empty{
    display:none
  }
  .btn .badge{
    position:relative;
    top:-1px
  }
  .btn.focus, .btn:focus {
    box-shadow: none;
    outline-color: none
  }
</style>