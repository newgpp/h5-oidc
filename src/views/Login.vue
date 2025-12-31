<template>
  <div class="login">
    <h2>充电管理系统</h2>
    <button @click="login">统一身份登录</button>
  </div>
</template>

<script setup>
const login = () => {
  const jumpUrl = import.meta.env.VITE_API_LOGIN_JUMP_URL
  window.location.href = `${jumpUrl}/v1/auth/login`
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
