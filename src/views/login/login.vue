<template lang="pug">
  .login-container
    .content
        .logo-container
          img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_-XvfVE4kMdPt3DHh9eB--Hgw_02nqibmbtD2H67JaSRTLyr")
        .form
          .user-container.item
              span 用户名
              input(v-model="username")
          .password-container.item
            span 密码
            input(v-model="password")
          .submit
             .button(@click="commit") 确认
        .nouser
            p
              span 没有账号？
              router-link(:to="{ path: '/home' }") 请注册
</template>
<script>
export default {
  data: ()=> {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    commit(){
      if(this.username!=='' && this.password!==''){
        //
        this.$router.push({
          path:'/home'
        });
      }
    }
  }
}
</script>
<style lang="stylus">
  flex(pos){
    display flex;
    justify-content pos;
    align-items center;
  }
  .login-container
    background:#f5f5f5;
    height:100%;
    flex(center);
    .content
      width:400px;
      height:400px;
      background:#ccc;
      padding:40px 40px;
      border-radius 10px;
      .logo-container
        flex(center);
        margin-bottom:40px;
        margin-top:20px;
        img
          width:80px;
          height:80px;
          border:1px solid #f5f5f5;
          border-radius:50%;
      .item
        width:100%;
        height:60px;
        flex(space-around);
        input
          width:300px;
          height:37px;
          border:1px solid #f5f5f5;
          border-radius 4px;
        span
          width:50px;
          text-align center;
          color:#878787;
      .submit
        width:100%;
        height:80px;
        flex(space-around);
        .button
          width:80px;
          height:40px;
          margin-top:40px;
          border-radius 5px;
          font-size:14px;
          color:#878787;
          background #f5f5f5;
          cursor pointer;
          flex(center);
          transition background ease-in-out .5s;
          &:hover
            background:#fefefe;
      .nouser
        width:100%;
        height:60px;
        color:#878787;
        flex(flex-end)
        a
          color:blue;
</style>
