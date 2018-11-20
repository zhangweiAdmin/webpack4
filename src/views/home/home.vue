<template lang="pug">
  .home-container
    .home
      .left
        textarea(class="textarea" v-model="textareaval")
        button.button(@click="transform") 转换
      .right
        .result {{result}}

</template>
<script>
  import {Parser} from 'acorn';
  export default {
    data:()=> {
      return {
        textareaval: '',
        result: ''
      }
    },
    methods: {
      transform(){
        this.result = Parser.parse(this.textareaval);
      }
    }
  }
</script>
<style lang="stylus">
  .home-container
    height: 100%;
    width: 100%;
    overflow hidden;
    background: #f5f5f5;
    .home
      display:flex;
      .left
        width:20%;
        height: 100%;
        background:#ccc;
        .textarea
          width:100%;
          height:90%;
          font-size:14px;
          text-align left;
          vertical-align top;
          resize:none;
        .button
          width:100%;
          height:10%;
      .right
        width:80%;
        height: 100%;
        background:#fff;
</style>

