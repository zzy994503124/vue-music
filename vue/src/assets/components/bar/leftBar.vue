<template>
    <mu-icon-button>
      <mu-icon :value="icon" :size="size"/>
    </mu-icon-button>
</template>
<script>
export default {
  props:{
    icon:String,
    size:Number
  }
}
</script>
<style scoped>
</style>


