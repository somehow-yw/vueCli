<template>
    <div>
        <h1>这是首页</h1>
        <el-button type="success" @click="addPlus">成功按钮</el-button>
        <el-button type="success" @click="addPlus2">成功按2</el-button>
        <h1>{{data.user_infos.name}}</h1>
        <my-btn   @click="btnClick">
          按钮e
        </my-btn> 
         <h1>这是首页</h1>
        <dcm-serach placeholder="  请输入搜索内容" v-model="iptVal" @click="sosoClick">搜索</dcm-serach>
    </div>
</template>
<script>
// import {mapActions} from 'vuex'
import simple from './../components/my-btn/mybtn.vue'
import dcmSearch from './../components/DCM-search/DCM-search.vue'
export default {
  name: 'inidex',
  components: {myBtn: simple, dcmSerach: dcmSearch},
  data () {
    return {
      // dataByParent: false,
      iptVal: '123333',
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
    },
    btnClick () {
      console.log('引入btn时的点击事件', 123)
    },
    sosoClick () {
      console.log('iptVal', this.iptVal)
      console.log('点击搜索')
    }
  }
}
</script>