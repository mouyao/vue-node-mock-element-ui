<template>
  <div class="dialog">
    <div class="dialog__wrapper" v-if="visible" @clcik="closeModal">
      <div class="dialog">
        <div class="dialog__header">
          <div class="dialog__title">{{titleProps}}</div>
        </div>
        <div class="dialog__body"  @click="sendInfoToParent">{{titleTwo}}
          <slot></slot>
        </div>
        <div class="dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="modal" v-show="visible">modal组件的内容</div>
  </div>
</template>

<script>
  /**
   * @date: 2018-05-17
   * @Desc: Vue中的选项和生命周期钩子函数十分重要；回调函数，绑定事件，钩子函数非常的好；
  */
  export default {
    name: 'dialogTest',
    data(){
      return {
        title:"456",      //这里直接访问的就是父亲组件的数据，十分的方便,在获取数据的时候，要保证数据已经拿来了，顺序很重要
        titleTwo:"点击将数据传给父组件"   //这里直接访问的就是父亲组件的数据，十分的方便；
      }
    },
    props: {  //道具，父亲元素和子元素通信的通道和方法，怎样将其和上边的title建立关系
      titleProps:{
           type:String,
           required:true
      },
      visible: {
        type: Boolean,
        default:true
      }
    },
    methods: {
      close() {
        this.$emit('update:visible', false);// 传递关闭事件
      },
      closeModal(e) {
        if (this.visible) {
          document.querySelector('.dialog').contains(e.target) ? '' : this.close();
          // 判断点击的落点在不在dialog对话框内，如果在对话框外就调用this.close()方法关闭对话框
        }
      },
      sendInfoToParent(){
        let data={a:"子组件出来的数据"};
        this.$emit("getInfoFromSon",data,"lalala");
      }
    }
  }
</script>
<style>
  .dialog{
    width: 800px;
    height: 300px;
    background-color: #00C1DE;
  }
  .dialog__header{
    width:600px;
    height:100px;
    background-color: #d1d9de;
  }
  .dialog__title{
    width:600px;
    height:100px;
    font-size: 20px;
  }
</style>
