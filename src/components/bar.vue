<template>
  <div>
    <tab-bar :tabs="tabs" />
  </div>
</template>
<script>
import tabBar from './tabBar.vue'
export default {
  components: {tabBar},
  name: 'bar',
  data () {
    return {
      tabs: [
        {key: 'user', name: '用户管理'},
        {key: 'role', name: '角色管理'}
      ]
    }
  },
  methods: {
  }
}
</script>
