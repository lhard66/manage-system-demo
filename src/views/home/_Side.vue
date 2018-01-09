<template>
  <el-menu
    class="menu"
    default-active="2"
    @select="setActive"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      
    </el-submenu>
    
  </el-menu>
</template>

<script>
export default {
  name: 'side',
  methods: {
    setActive(index, path) {
      console.log(index, path);
      this.$router.push({
        path: '/coupon/manage/list',
        query: { t: Date.now() },
      });
    },
  }
}
</script>

<style scoped lang="scss">
.menu {
  // margin-top: 72px;
}
</style>