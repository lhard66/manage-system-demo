<template>
  <div class="container">
    <div class="top">上</div>
    <div class="main">
      <div class="main-left">
        <v-side></v-side>
      </div>
      <div class="main-content">
        <transition name="move" mode="out-in">
          <router-view :key="$route.path + $route.query.t"></router-view>
        </transition>
      </div>
    </div>
    <div class="foot">下</div>
  </div>
</template>

<script>
import vSide from '@/views/home/_Side.vue';
import vHeader from './_Header';

export default {
  name: 'home',
  components: {
    vSide,
    vHeader,
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
  }
}
</script>
<style scoped lang="scss">
.container {
  .top{
    width: 100%;
    position: fixed;
    top:0;
    z-index: 1;
    height:60px;
    background:#ffd777;
  }
  .main{
    .main-left{
      position: fixed;
      top:60px;
      left: 0;
      bottom: 0;
      background: #424a5d;
      width: 200px;
      z-index: 9;
    }
    .main-content{
      margin-top:60px;
      padding-bottom: 100px;
      /*height: 100%;*/
      margin-left: 200px;
      background: #2aabd2;
    }
  }
  .foot{
    position:fixed;//页面内容不足屏幕高度时
    //position:relative;//页面内容高度大于屏幕高度时
    width: 100%;
    z-index: 1;
    bottom: 0;
    height: 30px;
    background: #3c3c3c;
  }
}
</style>