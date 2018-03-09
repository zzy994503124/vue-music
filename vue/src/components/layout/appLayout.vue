<template>
<div id="appLayout">
    <slot name="bar"></slot>
    <slot name="content"></slot>
    <slot name="bottom"></slot>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
#appLayout{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-content: flex-start;
}
</style>

