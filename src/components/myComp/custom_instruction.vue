<template>
  <el-row class="warp">
    <!-- 让input元素在打开页面的时候就获得焦点 -->
    <p>v-autoFocus指令绑定的input元素,修改其中的默认值查看效果：</p>
    <input  type="text" id="testInput"   v-autoFocus>
    <el-input type="text"   auto-complete="off"   v-autoFocus ></el-input>
      <el-form>
        <el-form-item>
          <el-button type="primary" v-on:click="addNumber">点击下方的值自加1</el-button>
        </el-form-item>
      </el-form>
    <!--两个属性，前者是自定义的，后者是element-UI自己的，使用单引号引起来-->
    <div  class="static" v-bind:class="{active:isActive,borderTest:hasBorder}">{{message}}</div>
    </el-row>
</template>
<script>
  export default {
    data (){
      return{
         message:1,
         isActive:false,
         hasBorder:false,
      }
    },
    props:[],
    methods:{
      addNumber(){
        this.message=++this.message; //这里的顺序是先进行自加1，在进行赋值
        this.hasBorder=!this.hasBorder; //通过改变这里的值，来修改元素是否有相应的class值
        this.isActive=!this.isActive;
      }
    },
    created(){

    },
    mounted(){

    },
    components:{

    },
    //自定义指令(directtive)在Vue2.0推荐写法中的使用demo,它一共有五个钩子函数，在绑定的元素在相应的
    // 生命周期时触发相应的函数
    directives:{
      // 自定义指令的名字autoFocus
      autoFocus:{
        // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
        inserted(el){
          el.focus();
          el.value ="默认值为0";
        },
        // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
        bind(el,binding){
          console.log('bind');
          el.handler = function () {
            el.value ="通过inserted钩子函数插入值1";
          };
          el.addEventListener('input', el.handler);
        },
        // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
        // 指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
        update(){
          console.log('update');
        },
        // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
        componentUpdated(){
          console.log('componentUpdated');
        },
        // 只调用一次，指令与元素解绑时调用。
        unbind(el){
          console.log('unbind');
          el.removeEventListener('input', el.handler);
        }
      }
    },
    component:{

    },
  }
</script>

<style scoped>
  #testInput{
    width:600px;
    height:30px;
    border:1px solid #00C1DE;
    margin: 20px 0;
  }
  .borderTest{
    border: 1px dashed  #d6161c;
  }
  .active{
    color: #fffb58;
    font-size: 30px;
  }

</style>
