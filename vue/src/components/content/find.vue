<template>
<div class="nav">
  <div class="item-container">
    <div class="nav-item" @click="toggleNav('left')">
      <div class="item-title" :class="activeItem=='left'?'active':''">
        音乐
      </div>
    </div>
    <div class="nav-item" @click="toggleNav('center')">
      <div class="item-title" :class="activeItem=='center'?'active':''">
        视频
      </div>
    </div>
    <div class="nav-item" @click="toggleNav('right')">
      <div class="item-title" :class="activeItem=='right'?'active':''">
        电台
      </div>
    </div>
  </div>
  <div class="bottom-bar-container" ref="bottomBar">
    <div class="bottom-bar">
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    activeItem: 'left'
  }),
  methods: {
    toggleNav(v) {
      this.activeItem = v
      console.log(this.$refs.bottomBar)
      if (v == 'left')
        Velocity(this.$refs.bottomBar, {
          marginLeft: '0px'
        }, {
          duration: 400
        })
      else if (v == 'center')
        Velocity(this.$refs.bottomBar, {
          marginLeft: '33.3333333333%'
        }, {
          duration: 400
        })
      else
        Velocity(this.$refs.bottomBar, {
          marginLeft: '66.6666666666%'
        }, {
          duration: 400
        })
    }
  }
}
</script>
<style lang="less" scoped>
.nav {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    padding: 8px 10px;
    cursor: pointer;
    .bottom-bar-container {
        display: flex;
        position: relative;
        bottom: 0;
        width: 33.333333%;
        height: 2px;
        margin-top: 6px;
        justify-content: center;
        .bottom-bar {
            width: 50px;
            background: red;
        }
    }
    .item-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        .nav-item {
            width: 30%;
            color: gray;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            .item-title {
                margin: 0 auto;
            }
        }
    }

}

.active {
    color: red;
}
</style>
