<script setup>
</script>

<template>
  <el-button type="primary">Primary</el-button>
  <!-- <button class="btn">
    按钮
  </button> -->
  <router-view></router-view>
</template>

<style scoped>
.btn {
  @apply bg-purple-800 text-indigo-50 px-4 py-2 rounded-3xl hover:( bg-purple-900)
    transition-all dureation-500 focus:(ring-8);
}
</style>
