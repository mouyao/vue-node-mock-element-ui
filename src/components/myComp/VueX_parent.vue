<template>
  <div class="home">
    <h1>{{city}}</h1>
    <!-- 按钮导航 -->
    <router-link tag='button' to="/myComp/VueX">获取城市列表</router-link>
    <router-link tag='button' to="/myComp/todo_list">去测试页面获取VueX中选择的城市</router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    computed:{
      city:function(){
        // 通过vuex的getters方法来获取state里面的数据
        return this.$store.getters.getCityFn;
      }
    }
  }
</script>
<style scoped>
</style>


