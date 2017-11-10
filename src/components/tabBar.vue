<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(tab, i) in tabs" :key="tab.key" :label="tab.name" :name="tab.key">{{tab.name}}</el-tab-pane>
      </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: this.tabs[1].key
    }
  },
  props: ['tabs'],
  methods: {
    handleClick (tab) {
      console.log('tab', tab.name)
    }
  }
}
</script>
