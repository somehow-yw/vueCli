<template>
    <div>
        <h1>这是首页</h1>
        <el-button type="success" @click="addPlus">成功按钮</el-button>
        <el-button type="success" @click="addPlus2">成功按2</el-button>
    </div>
</template>
<script>
// import {mapActions} from 'vuex'
export default {
  methods: {
    // ...mapActions('modules1', {addPlus: 'plus'})
    // ...mapActions({addPlus: 'plus', addPlus2: 'add'})
    addPlus () {
      this.$store.dispatch('plus', {a: 1})
    },
    addPlus2 () { // 请求数据
      this.axios({
        method: 'GET',
        url: '/static/mock/test.json',
        params: {a: 123}
      }).then(responce => {
        console.log(responce.data)
      })
    }
  },
  created () {
    console.log('state', this.$store.state)
  }
}
</script>