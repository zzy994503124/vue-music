<template>
<div class="content">
  <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn" mode="out-in" :class="false" duration="500">
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
    height: 100%;
}
</style>
