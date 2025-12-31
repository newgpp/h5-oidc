<template>
  <div style="padding: 40px; text-align: center;">
    正在登录，请稍候...
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import request from '../utils/request'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const code = route.query.code

  if (!code) {
    router.replace('/login')
    return
  }

  const res = await request.get('/v1/auth/callback', {
    params: { code }
  })

  console.log("/v1/auth/callback:", res)

  // 保存 token
  localStorage.setItem('token', res.token)

  // 跳转首页
  router.replace('/home')
})
</script>
