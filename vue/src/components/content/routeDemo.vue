<template>
<div class="content">
  <transition leave-active-class="animated zoomOut" enter-active-class="animated zoomIn" mode="out-in" :class="false" duration="1000">
    <router-view></router-view>
  </transition>

  <!-- <router-view name="find"></router-view> -->
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="less" scoped>
.content {
    width: 100%;
}
</style>
