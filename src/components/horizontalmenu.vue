<template>
  <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selectIndex">
          <el-menu-item v-for="(tab, i) in tabs" :key="tab.key" :index="tab.key">{{tab.name}}</el-menu-item>
      </el-menu>
  </div>
</template>
<script>
export default {
  props: ['tabs'],
  data () {
    return {
      activeIndex: 'user'
    }
  },
  methods: {
    selectIndex (e) {
      console.log(e)
      window.location.href = '#' + '/' + 'bar' + '/' + e
    }
  }
}
</script>
