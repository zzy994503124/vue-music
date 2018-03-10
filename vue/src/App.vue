<template>
<div id="app">
  <app-layout>
    <app-bar slot="bar" size=24></app-bar>
    <app-content slot="content"></app-content>
    <bottom slot="bottom" :music_info="music"></bottom>
  </app-layout>
</div>
</template>

<script>
import appBar from './components/bar/appBar'
import bottom from './components/bottom/bottom'
import appLayout from './components/layout/appLayout'
import appContent from './components/content/cotent'
export default {
  name: "app",
  components: {
    'app-bar': appBar,
    'bottom': bottom,
    'app-layout': appLayout,
    'app-content': appContent
  },
  data() {
    return {
      music: {
        music_name: '',
        music_cover_src: '',
        music_author: ''
      }
    };
  },
  mounted() {
    //do something after mounting vue instance
    this.$http.get('http://localhost:3000/music').then((res) => {
      console.log(res.data.music_author)
      this.music.music_name = res.data.music_name
      this.music.music_cover_src = res.data.music_cover_src
      this.music.music_author = res.data.music_author
      console.log(res.data.music_author)
    })
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
}
</style>
