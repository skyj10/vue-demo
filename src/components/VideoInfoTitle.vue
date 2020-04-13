<template>
  <div class="video-title-info">
    <h1 class="video-title"><span>【钢琴】戴上耳机！超震撼演奏《黑暗森林》-《我的三体罗辑传》ED</span></h1>
    <div class="video-info">
      <span class="area-span">音乐</span>
      <svg-icon iconClass='arrow' className='arrow-icon '></svg-icon>
      <span>演奏</span>
      <span class="up-date-span">2019-10-03 12:13:11</span>

    </div>
    <div class="video-info">
      <span class="area-span">1.2万播放</span>
      <span> &nbsp·&nbsp</span>
      <span>27弹幕</span>
      <svg-icon iconClass='stop' className='stop-icon '></svg-icon>
      <span>未经作者授权，禁止转载</span>
    </div>
  </div>

</template>
<script>
export default {
  name:'video-info-title',
  components: {},
  data () {
    return{

    }

  },
  computed: {},
  methods: {},
  created () {

  },
  porps: {}

}


</script>
<style type="text/scss" lang="scss">
.video-title-info {
  > div {
    font-size: 12px;
    .up-date-span {
      margin-left: 20px;
    }

  }
  > h1 {

    font-size: 18px;
    font-weight: 500;
    color: #212121;
    line-height: 26px;
    height: 26px;
    margin-bottom: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    text-align: left;
    margin-bottom: 10px;
  }
  .video-info {
    color: #999;
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .arrow-icon {
    font-size: 10px;
    fill: #999;
  }
  .stop-icon {
    fill: #fd676f;
    font-size: 15px;
    margin-left: 15px;
    margin-right: 10px;
  }
}
  .video-title{
    font-size: 18px;
    font-weight: 500;
    color: #212121;
    line-height: 26px;
    height: 26px;
    margin-bottom: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    margin-bottom: 10px;
  }
</style>
