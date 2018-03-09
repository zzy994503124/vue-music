<template>
    <bar-layout id="app-bar">
      <left-bar slot="left" icon="menu" :size="size"></left-bar>
      <center-bar slot="center" left="music_note" center="favorite" right="group" :size="size"></center-bar>
      <right-bar slot="right" icon="search" :size="size"></right-bar>
    </bar-layout>
</template>
<script>
import barLayout from './barLayout'
import leftBar from './leftBar'
import centerBar from './centerBar'
import rightBar from './rightBar'
export default {
  data(){
    return {
      active:'left'
    }
  },
  props:{
      size:Number
    },
  components:{
    'bar-layout':barLayout,
    'left-bar':leftBar,
    'center-bar':centerBar,
    'right-bar':rightBar
  }
}
</script>
<style>

</style>

