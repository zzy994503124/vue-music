<template>
  <div class="container">
    <div id="bar-left">
      <slot name="left"></slot>
    </div>
    <div id="bar-center">
      <slot name="center"></slot>
    </div>
    <div id="bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style  lang="less">
#bar-left,
#bar-right {
  flex-grow: 1;
  display: flex;
  align-content: center;
}
#bar-left{
  justify-content: flex-start;

}
#bar-right{
  justify-content: flex-end;
}
#center {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-grow: 2;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 46px;
  background: rgb(231, 14, 14);
  color:white;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>
