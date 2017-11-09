<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-container>
        <nav-bar/>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>版权信息</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import './less/index.less'
import navBar from './components/navBar.vue'
export default {
  name: 'app',
  components: {navBar}
}
</script>

<style>

</style>
