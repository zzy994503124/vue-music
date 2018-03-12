<template>
<div class="music-list">
  <div class="list-bar">
    <mu-icon @click="show = !show" :value="show ? 'expand_more':'chevron_right'" size=12 ref="expandIcon" />
    <div class="list-title">
      {{musicList.listTitle}} ({{itemsNum}})
    </div>
    <mu-icon value="settings" size=12 />
  </div>
  <ul v-show="show">
    <li v-for="(item,index) in musicList.items" class="list-item">
      <div class="cover">
        <img :src="item.cover" />
      </div>
      <div class="right">
        <div class="info">
          <div class="item-name">
            {{item.itemName}}
          </div>
          <div class="download-info">
            <mu-icon v-show="item.downloadNum != 0" value="done" size=10 style="color:rgb(0, 130, 245);font-weight:600;" /> {{item.musicNum}} 首
            <span v-show="item.downloadNum != 0">,已下载{{item.downloadNum}}首</span>
          </div>
        </div>
        <mu-icon value="more_vert" size=20 />
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    show: true,
  }),
  props: {
    musicList: Object,
  },
  computed: {
    itemsNum() {
      return this.musicList.items.length;
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.music-list {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: gray;
    font-size: 12px;
    cursor: pointer;
    .list-bar {
        position: relative;
        top: 0;
        padding: 0 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 24px;
        align-items: center;
        background: rgb(241, 240, 240);
        .list-title {
            flex-grow: 1;
            margin-left: 16px;
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        background: white;
        padding: 0 8px;
        width: 100%;
        margin: 0;
        li {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            height: 60px;
            .right {
                flex-grow: 1;
                height: 60px;
                padding: 8px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgb(238, 238, 238);
                .info {
                    flex-grow: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-bottom: 4px;
                    .download-info {
                        font-size: 8px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-end;
                    }

                }
            }
            .cover {
                margin: 8px;
            }
            img {
                width: 40px;
            }

        }
    }
}
</style>
