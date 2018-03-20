<template>
  <div class="input-group-lg">
    <input type="text" 
        v-model="task" 
        v-on:keydown.enter="register"
        :placeholder="placeholder"
        class="form-control"/>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: 'inputform',
  data() {
      return {
          task: '',
      }
  },
  props: ['placeholder'],
  methods: {
      register(e) {
          if(this.task.length > 0) {
              console.log("Adding..");
              eventBus.$emit('add', this.task);
              this.task = '';
          }
          e.preventDefault();
      }
  },
  computed: {
      filtered() {
          var self = this;
          console.log('filtered');

      }
  }
}
</script>

<style>
 .input-group-lg {
    margin-bottom: 10px;
  }
</style>


