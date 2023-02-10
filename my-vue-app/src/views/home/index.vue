<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="Logo" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>Vite + Vue</h1>
  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>
</template>

<script setup>
import {reactive, toRefs} from 'vue'
import { useRouter } from 'vue-router'
import Logo from '@/assets/vue.svg'

const router = useRouter()
const state = reactive({ count: 0 })
const { count } = toRefs(state)
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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
