<template>
  <div class="todo">
    <h2>todoList demo</h2>
    <div class="t_input">
      <span><input type="text"  class="t_titles"  placeholder="请输入" v-model="text" @keyup.13="add()"></span>
      <span><button class="t_add" @click="add()">添加</button></span>
    </div>
    <div class="t-cont">
      <ul>
        <li v-for="(item,index) in todoList" track-by = "$index">
          <input type="checkbox" v-model="item.state" class="checkbox"/>
          {{`${index+1}. `}}  {{item.value}}
          <span @click = "del(index)">删除</span>
          <span @click = "edit(index)">编辑</span>
        </li>
        <div class="check_che" @click="remove()" v-show="select.length > 0" >删除选中</div>
        <p v-show="todoList.length == 0">暂无数据！</p>
      </ul>
    </div>
    <input type="button" @click="getCityName()" value="点击获取vuex中的值"/>
  </div>

</template>
<script type="text/ecmascript-6">
  /*
  * vue2.0和Vue1.0还是存在很大的区别是，在1.0中存在new Vue的语法，
  * 2.0中直接建议换成export default的形式来组织代码；在这个项目中，多将看到的例子引入进来，在事件中学习是最快的；
  * */
  export default {
    name: 'todo',
    data() {   //专门用于存储页面上的数据的仓库
      return {
        todoList:[],
        text:'',
        state: false,
      }
    },
    methods:{ //处理页面数据的方法，在操控data中的对象的同时，框架帮我们主动同步到页面上；
      //添加
      add(){
        if(this.text ===''){
          return
        }else{
          this.todoList.push ({
            value:this.text,
            state: false,
          })
        }
        this.text='';
      },
      //删除
      del(index){
        this.todoList.splice(index,1);
      },
      //删除选中
      remove(){
        this.todoList = this.todoList.filter((index) => !index.state);
      },
      //编辑
      edit(index){
        this.text = this.todoList[index].value;
        this.todoList.splice(index,1);
      },
      getCityName(){
        // 调用vuex的ations设置城市的值，调用VueX中存储的数据
        alert(this.$store.getters.getCityFn);
      }
    },
    //计算属性,当数据变化时，会触发的函数全部写在这里；生命周期函数
    computed: {
      select() {
        return this.todoList.filter((index) => index.state == true)
      }
    }
  }
  /**
   * @date: 2018-05-16
   * @Desc: Vue中的生命周期函数有哪些？钩子函数有哪些？之间有什么关系？
  */
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .t_titles{ width: 400px; height: 35px; font-size: 16px; padding-left: 10px;}
  .t_add{ width: 60px; height:40px; font-size: 16px; vertical-align: middle;}
  .t-cont{ width:100%; margin-top: 20px; margin: 0 auto;}
  .t-cont ul li{list-style: none; height: 30px; border: 1px solid #ccc; line-height: 30px; text-align: left; padding-left: 10px;}
  .t-cont ul li span{float: right; cursor: pointer; padding-right: 10px;}
  .t-cont ul li input{padding-top: 5px;}
  .checks{ width: 15px; height: 15px; border-radius:50%; border: 1px solid #ccc; display: inline-block;margin-top: 5px; cursor: pointer; }
  .checkbox { width: 18px; height: 18px;border: 1px solid #ccc; border-radius: 100%; position: relative; margin-right: 6px; vertical-align: middle;  }
  .checkbox:checked {border-color: deepskyblue;}
  .checkbox:checked:before { content: ''; display: block; width: 80%; height: 80%; position: absolute; left: 50%; top: 50%;transform: translate(-50%, -50%); background: deepskyblue; border-radius: 100%;}
  .check_che{border: 1px solid #ccc; padding:10px;}
</style>
