<template>
<div id="app">
  <app-layout>
    <app-bar slot="bar" size=24></app-bar>
    <demo slot="content"></demo>
    <bottom slot="bottom" :music_info="music"></bottom>
  </app-layout>
</div>
</template>

<script>
import appBar from './components/bar/appBar'
import bottom from './components/bottom/bottom'
import appLayout from './components/layout/appLayout'
import appContent from './components/content/content'
import find from './components/content/find'
import demo from './components/content/routeDemo'
export default {
  name: "app",
  components: {
    'app-bar': appBar,
    'bottom': bottom,
    'app-layout': appLayout,
    'app-content': appContent,
    'demo': demo
  },
  data() {
    return {
      music: {
        music_name: '',
        music_cover_src: '',
        music_author: '',

      }
    };
  },
  mounted() {
    //do something after mounting vue instance
    this.$http.get('http://localhost:3000/music').then((res) => {
      this.music.music_name = res.data.music_name
      this.music.music_cover_src = res.data.music_cover_src
      this.music.music_author = res.data.music_author
    })
  }
};
</script>

<style>
html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding-top: 46px;
  padding-bottom: 46px;
}
body{
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
</style>
