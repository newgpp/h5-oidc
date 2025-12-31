<template>
  <div class="login">
    <h2>充电管理系统</h2>
    <button @click="login">统一身份登录</button>
  </div>
</template>

<script setup>
const login = () => {
  window.location.href = import.meta.env.VITE_API_REDIECT_URL + '/api/v1/auth/login'
}
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  padding: 12px 30px;
  font-size: 16px;
}
</style>
