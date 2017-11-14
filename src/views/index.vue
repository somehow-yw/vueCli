<template>
    <div>
        <h1>这是首页</h1>
        <el-button type="success" @click="addPlus">成功按钮</el-button>
        <el-button type="success" @click="addPlus2">成功按2</el-button>
        <h1>{{data.user_infos.name}}</h1>
    </div>
</template>
<script>
// import {mapActions} from 'vuex'
export default {
  data () {
    return {
      data: {
        user_infos: {
          name: 'default'
        }
      }
    }
  },
  methods: {
    // ...mapActions('modules1', {addPlus: 'plus'})
    // ...mapActions({addPlus: 'plus', addPlus2: 'add'})
    addPlus () {
      this.$store.dispatch('plus', {a: 1})
    },
    addPlus2 () { // 请求数据
      window.req.getUserInfo(this, {a: 13}, (res) => {
        if (res.code === 0) {
          this.data = res.data
          console.log(this.data)
        }
      })
    }
  },
  created () {
    console.log('state', this.$store.state)
  }
}
</script>