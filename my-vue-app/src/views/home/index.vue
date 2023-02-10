<template>
  <div class="home">
    <button style="background: #646cff" @click="increment">
      {{ state.count }}
    </button>
    111111111111
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({ count: 0 })
function increment() {
  state.count++
}
</script>

<style scoped lang="less">
.home{
  width: 100%;
  height: 100vh;
  background: aquamarine;
}
</style>
