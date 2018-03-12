<template>
  <div>
    <list-item item_title="本地音乐" item_num=250 item_icon="music_note"></list-item>
    <list-item item_title="最近播放" item_num=150 item_icon="queue_music"></list-item>
    <list-item item_title="下载管理" item_num=200 item_icon="file_download"></list-item>
    <list-item item_title="我的电台" item_num=100 item_icon="radio"></list-item>
    <list-item item_title="我的收藏" item_num=250 item_icon="library_music"></list-item>
    <music-list :musicList="musicList1"></music-list>
    <music-list :musicList="musicList2"></music-list>
  </div>

</template>
<script>
import listItem from './listItem'
import find from './find'
import musicList from './musicList'
import cover from '../../assets/img/cover.jpg'
import cover1 from '../../assets/img/cover1.jpg'
import cover2 from '../../assets/img/cover2.jpg'
import cover3 from '../../assets/img/cover3.jpg'
import cover4 from '../../assets/img/cover4.jpg'
export default {
  name: "",
  data: () => ({
    musicList1: {
      listTitle: '创建的歌单',
      items: [{
          cover: cover,
          itemName: '我喜欢的音乐',
          musicNum: 10,
          downloadNum: 3,
        },
        {
          cover: cover1,
          itemName: '银临',
          musicNum: 50,
          downloadNum: 4,
        },
        {
          cover: cover2,
          itemName: '双笙',
          musicNum: 50,
          downloadNum: 0,
        }
      ]
    },
    musicList2: {
      listTitle: '收藏的歌单',
      items: [{
          cover: cover3,
          itemName: '我喜欢的音乐',
          musicNum: 10,
          downloadNum: 3,
        },
        {
          cover: cover4,
          itemName: '我喜欢的音乐',
          musicNum: 10,
          downloadNum: 3,
        },
        {
          cover: cover,
          itemName: '我喜欢的音乐',
          musicNum: 10,
          downloadNum: 0,
        }
      ]
    }
  }),
  components:{
    'list-item':listItem,
    'find':find,
    'music-list':musicList
  }
}
</script>
<style lang="less" scoped>
div{
  width: 100%;
}
</style>
