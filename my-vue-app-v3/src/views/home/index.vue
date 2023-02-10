<template>
  <div class="home">
    <button style="background: #646cff" @click="increment">
      {{ count }}
    </button>
    111111111111
    <div>{{ name }}-- {{ age }}</div>
    <user-info v-model:name="name" v-model:age="age" />
  </div>
</template>

<script setup>
import {reactive, toRefs, getCurrentInstance} from 'vue'
import { useRouter } from 'vue-router'
import UserInfo from "../userInfo/index.vue";
const router = useRouter()
const state = reactive({ count: 0, name: 'jiajiangyuan', age: '28' })
const {count, name, age } = toRefs(state)
console.log(getCurrentInstance())
function increment() {
  state.count++
}

</script>

<style scoped lang="less">
.home{
  width: 100%;
  height: 100vh;
  background: #006b47;
}
</style>
