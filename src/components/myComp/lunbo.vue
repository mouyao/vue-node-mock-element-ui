<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index" class="lunbp_li">
          <a href="#">
            <img :src='img' class="lunbo_img">
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bullet">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        timer: null, //定时器
        mark: 0, //比对图片索引的变量
        imgArray: [
          '../../../static/img/img1.jpg',
          '../../../static/img/img2.jpg',
          '../../../static/img/img3.jpg',
          '../../../static/img/img4.jpg'
        ]
      }
    },
    methods: {
      autoPlay () {
        this.mark++;
        if (this.mark === 4) {
          this.mark = 0
        }
      },
      play () {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      },
      stop () {
        clearInterval(this.timer)
      },
      move () {
        this.timer = setInterval(this.autoPlay, 2500)
      }
    },
    created () {
      this.play()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
  *在写组件的样式的时候，因为哥哥组件最后会和父组件拼成一个大的页面，所以命名的时候要带上本页的名字，不然会进行覆盖的；
  *还有更加先进的方法，在style中加入 scoped  字段，表明，样式仅仅应用于当前组件之上；非常的先进；
  *这个知识点一定要记住了；
  */
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width:800px;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 1024px;
    height: 320px;
  }
  li {
    position: absolute;
  }
  img {
    width:800px;
    height: 320px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave{
    transform: translateX(0);
  }
  input{
    width:200px;
    height:60px;
    color: #500a0c;
    background-color: #4A5064;

  }
</style>
