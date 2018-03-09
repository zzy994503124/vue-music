<template>
  <bottom-layout :music_info="music"></bottom-layout>
</template>
<script>
import bottomLayout from './bottomLayout'
export default {
  components:{
    'bottom-layout':bottomLayout
  },
  data () {
    return {
      music:{
        music_name:'music',
        music_cover_src:'./src/assets/img/logo.png',
        music_author:'zzy'
      }
    }
  },
  methods: {
   
  }
}
</script>
<style>

</style>


