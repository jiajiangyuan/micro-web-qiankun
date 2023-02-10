<template>
  <input :value="name" @input="$emit('update:name', $event.target.value)" />
  <input :value="age" @input="$emit('update:age', $event.target.value)"  />
</template>

<script>
export default {
  name: "user-info",
  props: {
    name: String,
    age: String
  }
}
</script>

<style scoped>

</style>
