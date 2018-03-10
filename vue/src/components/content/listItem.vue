<template>
<div class="list-item">
  <div class="item-icon">
    <mu-icon :value="item_icon" size="26"/>
  </div>
  <div class='list-title'>
    <div>
      <div class="up">
        {{item_title}}
        <span v-if="item_num > 0">({{item_num}})</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({}),
  props: {
    item_title: String,
    item_num: Number,
    item_icon: String
  }
}
</script>
<style lang="less" scoped>
.list-item {
    display: flex;
    width: 100%;
    height: 50px;
    color: rgb(231, 14, 14);
    padding: 0;
    cursor: pointer;
    .item-icon {
      width: 50px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .list-title {
        border-bottom: 1px solid rgb(163, 163, 163);
        margin-left: 10px;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        color: black;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        div {
            width: 100%;
            line-height: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            .up{
              display: flex;
              flex-direction:row;
              justify-content: flex-start;
            }
        }
        span {
            color: rgb(163, 163, 163);
        }
    }
}
</style>
