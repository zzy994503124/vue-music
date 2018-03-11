<template>
  <div>
    <list-item item_title="本地音乐" item_num=250 item_icon="music_note"></list-item>
    <list-item item_title="最近播放" item_num=150 item_icon="queue_music"></list-item>
    <list-item item_title="下载管理" item_num=200 item_icon="cloud_download"></list-item>
    <list-item item_title="我的电台" item_num=100 item_icon="radio"></list-item>
    <list-item item_title="我的收藏" item_num=250 item_icon="library_music"></list-item>
  </div>

</template>
<script>
import listItem from './listItem'
import find from './find'
export default {
  name: "",
  data: () => ({

  }),
  components:{
    'list-item':listItem,
    'find':find
  }
}
</script>
<style lang="less" scoped>
div{
  width: 100%;
}
</style>
