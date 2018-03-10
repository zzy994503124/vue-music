<template>
<div id="appLayout">
  <slot name="bar"></slot>
  <div class="app-content">
    <slot name="content"></slot>
  </div>
  <slot name="bottom"></slot>
</div>
</template>
<script>
export default {

}
</script>
<style lang="less">
#appLayout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    .app-bar {
        display: flex;
        position: relative;
        width: 100%;
        height: 46px;
        z-index: 2;
    }
    .app-content {
        position: relative;
        display: flex;
        width: 100%;
        padding-top: 46px;
        padding-bottom: 46px;
    }
    .app-bottom {
        display: flex;
        position: relative;
        width: 100%;
        height: 46px;
        z-index: 2;
    }
}
</style>
