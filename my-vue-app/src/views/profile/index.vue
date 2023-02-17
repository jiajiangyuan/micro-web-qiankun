<template>
  <div>
    <button @click="changeValue">主页面弹窗</button>
  </div>
</template>

<script>
import action from "../../utils/actions";
export default {
  name: "profile",
  created(){
    console.log('VVVVVVVVVVVVVVVVV');
  },
  methods: {
    changeValue() {
      // 修改state
      action.setGlobalState({ show: true, msg: '这是vue子应用'}); //每次执行时都会出发一次mounted
    },
  }
}
</script>

<style scoped>

</style>
