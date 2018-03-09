<template>
  <div id="app">
      <app-layout>
        <app-bar slot="bar" size=24></app-bar>
        <bottom slot="bottom"></bottom>
      </app-layout>
  </div>  
</template>

<script>
import appBar from './assets/components/bar/appBar'
import bottom from './assets/components/bottom/bottom'
import appLayout from './assets/components/layout/appLayout'

export default {
  name: "app",
  components:{
    'app-bar':appBar,
    'bottom':bottom,
    'app-layout':appLayout
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.mt8 {
  margin-top: 8px;
}
.flex-demo {
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
}
</style>
