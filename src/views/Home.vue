<template>
  <div class="home">
    <h2>充电管理系统</h2>

    <div v-if="user">
      <p><b>用户ID：</b>{{ user.userId }}</p>
      <p><b>用户名：</b>{{ user.username }}</p>
      <p><b>邮箱：</b>{{ user.email }}</p>
    </div>

    <button @click="logout">退出登录</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import request from '../utils/request'

const router = useRouter()
const user = ref(null)

onMounted(async () => {
  try {
    const res = await request.get('/v1/home/user')
    user.value = res
  } catch (e) {
    console.error(e)
  }
})

const logout = async () => {
  try {
    // 1. 调用后端退出接口，通知服务器销毁 Token 或 Session
    await request.post('/v1/auth/logout') 
  } catch (e) {
    console.error('退出登录失败:', e)
  } finally {
    // 2. 无论后端接口是否成功，前端都应清除本地数据并跳转
    localStorage.removeItem('token')
    // 如果有 Vuex 或 Pinia，记得在这里重置 user store
    // user.value = null 
    
    router.replace('/login')
  }
}
</script>

<style scoped>
.home {
  padding: 30px;
}
button {
  margin-top: 20px;
  padding: 8px 20px;
}
</style>
