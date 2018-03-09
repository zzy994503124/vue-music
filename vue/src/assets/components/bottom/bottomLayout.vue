<template>
  <div id="app-bottom">
    <bottom-left :music_info="music_info"></bottom-left>
    <bottom-right></bottom-right>
  </div>
</template>
<script>
import bottomLeft from './bottomLeft'
import bottomRight from './bottomRight'
export default {
  components:{
    'bottom-left':bottomLeft,
    'bottom-right':bottomRight,
  },
  props:{
    music_info:Object
  }
}
</script>
<style lang="less">
#app-bottom{
  display: flex;
  width: 100%;
  height: 46px;
  background: rgba(253, 253, 253, 0);
  justify-content:space-between;
  position: fixed;
  bottom: 0;
  padding: 4px;
}
</style>
