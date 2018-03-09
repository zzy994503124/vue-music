<template>
<div id="bottom-left">
  <div class="music-cover"><img  :src="music_info.music_cover_src"></div>
  <div class="music-info">
  <div class="music-name">{{music_info.music_name}}</div>
  <div class="music-author">{{music_info.music_author}}</div>
  </div>
</div>
</template>
<script>
export default {
  props:{
    music_info:Object
  }
}
</script>
<style lang="less">
#bottom-left{
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    line-height: 100%;
    .music-cover{
      margin:0 10px 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img{
        width: 30px;
        height: 30px;
      }
    }
    .music-info{
      padding: 4px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
      .music-name{
        font-size: 12px;
        font-weight: 500;
        color: black;
      }
      .music-author{
        font-size: 10px;
        font-weight: 500;
        color: gray;
      }
    }
  }
</style>


