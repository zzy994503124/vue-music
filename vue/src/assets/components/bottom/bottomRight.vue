<template>
  <div id="bottom-right">
      <mu-icon-button class="no-padding" @click="togglePlay">
        <mu-icon :value="currentStatu" size="26"/>
      </mu-icon-button>
      <mu-icon-button class="no-padding">
        <mu-icon value="playlist_play" size="26"/>
      </mu-icon-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      currentStatu:'play_circle_outline'
    }
  },
  methods:{
    togglePlay(){
      if(this.currentStatu === 'play_circle_outline')
        this.currentStatu = 'pause_circle_outline'
      else
        this.currentStatu = 'play_circle_outline'
    }
  }
}
</script>
<style lang="less">
#bottom-right{
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.no-padding{
  padding: 4px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  i{
    align-self: center;
    color: rgb(87, 86, 86);
  }
}
</style>

