<template>
  <div class="container">
    <div class="header">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>

    <div class="aside">
      <span>aside</span>
    </div>

    <div class="main-content">
      <span>content</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  // background: blue;
  .header {
    background: blue;
  }
  .aside {
    background: red;
  }
  .main-content {
    background: black;
  }
}
</style>