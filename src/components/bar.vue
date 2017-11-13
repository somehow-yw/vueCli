<template>
  <div>
    <horizontal-menu :tabs="tabs" />
    <h1>这是tab</h1>
    <router-view/>
  </div>
</template>
<script>
import horizontalMenu from './horizontalmenu.vue'
export default {
  components: {horizontalMenu},
  name: 'bar',
  data () {
    return {
      tabs: [
        {key: 'user', name: '用户管理'},
        {key: 'role', name: '角色管理'}
      ]
    }
  }
}
</script>
