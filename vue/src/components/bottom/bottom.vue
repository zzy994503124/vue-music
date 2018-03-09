<template>
<div id="app-bottom">
  <div id="bottom-left" :music_info="music_info">
    <div class="music-cover"><img :src="music_info.music_cover_src"></div>
    <div class="music-info">
      <div class="music-name">{{music_info.music_name}}</div>
      <div class="music-author">{{music_info.music_author}}</div>
    </div>
  </div>
  <div id="bottom-right">
    <mu-icon-button class="no-padding" @click="togglePlay">
      <mu-icon :value="currentStatu" size="26" />
    </mu-icon-button>
    <mu-icon-button class="no-padding">
      <mu-icon value="playlist_play" size="26" />
    </mu-icon-button>
  </div>
</div>
</template>
<script>

export default {
  components: {
  },
  props: {
    music_info: Object
  },
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
#app-bottom {
    display: flex;
    width: 100%;
    height: 46px;
    background: rgba(253, 253, 253, 0);
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    padding: 4px;
}
#bottom-left {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    line-height: 100%;
    .music-cover {
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
            width: 30px;
            height: 30px;
        }
    }
    .music-info {
        padding: 2px 0 6px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        .music-name {
            font-size: 14px;
            font-weight: 580;
            color: black;
        }
        .music-author {
            font-size: 10px;
            font-weight: 550;
            color: gray;
        }
    }
}
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
