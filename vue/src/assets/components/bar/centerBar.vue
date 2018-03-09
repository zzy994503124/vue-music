<template>
  <div>
    <mu-icon-button @click="changeActive('left')">
      <mu-icon :value="left" :size="size" :class="active=='left'?'':'inactive'"/>
    </mu-icon-button>
    <mu-icon-button @click="changeActive('center')">
      <mu-icon :value="center" :size="size" :class="active=='center'?'':'inactive'"/>
    </mu-icon-button>
    <mu-icon-button @click="changeActive('right')">
      <mu-icon :value="right" :size="size" :class="active=='right'?'':'inactive'"/>
    </mu-icon-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:'left'
    }
  },
  props:{
    left:String,
    center:String,
    right:String,
    size:Number
  },
  methods:{
    changeActive(e){
      this.active = e
    }
  }
}
</script>
<style scoped>
.inactive{
  color: rgb(209, 209, 209);
}
</style>


