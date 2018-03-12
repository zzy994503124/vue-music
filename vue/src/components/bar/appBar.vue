<template>
<bar-layout id="app-bar">
  <mu-icon-button slot="left">
    <mu-icon value="menu" :size="size" />
  </mu-icon-button>
  <div class="center-container" slot="center">
    <div>
      <mu-icon-button @click="changeActive($event,'left')">
        <mu-icon value="music_note" :size="size" :class="active=='left'?'':'inactive'" />
      </mu-icon-button>
    </div>
    <div>
      <mu-icon-button @click="changeActive($event,'center')">
        <mu-icon value="favorite" :size="size" :class="active=='center'?'':'inactive'" />
      </mu-icon-button>
    </div>
    <div>
      <mu-icon-button @click="changeActive($event,'right')">
        <mu-icon value="group" :size="size" :class="active=='right'?'':'inactive'" />
        <div class="badge">5</div>
      </mu-icon-button>
    </div>
  </div>
  <mu-icon-button slot="right">
    <mu-icon value="search" :size="size" />
  </mu-icon-button>
</bar-layout>
</template>
<script>
import barLayout from './barLayout'

export default {
  data() {
    return {
      active: 'left'
    }
  },
  props: {
    size: Number
  },
  components: {
    'bar-layout': barLayout,
  },
  methods: {
    changeActive(e,active) {
      this.active = active
      if (this.active === 'left') {
        this.$router.push({
          path: 'content',
          name:'content'
        })
      } else if (this.active === 'center') {
        this.$router.push({
          path: 'find',
          name:'find'
        })
      }

      // this.$router.go(1)
      console.log(this.$router)
    }
  }
}
</script>
<style lang="less">
.center-container {
    display: flex;
    justify-content: space-between;
}
.inactive {
    color: rgb(209, 209, 209);
}
.badge {
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    top: 10px;
    right: 4px;
    line-height: 10px;
    text-align: center;
    font-size: 12px;
    color: rgba(231, 14, 14, 0.788);
    font-weight: bold;
}
</style>
