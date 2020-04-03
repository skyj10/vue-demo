<template>
  <div class="advice-card-box" @mouseenter="showDanmu" @mouseleave="hideDanmu">
    <div class="card-pic-div" >
      <img src="../assets/img/videoPic.png">
      <div  class="danmu-view" v-show="isShowDanmu">
        <!--<video-card-danmu ref="danmu" v-for="item in videoCard.danmu" :left="item.left" :time="item.time" :text="item.text"></video-card-danmu>-->
        <div ref="danmu"  v-for="item in videoCard.danmu"   class="danmu-item">
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="card-info-div">
      <div class="card-title " ><a class="point-effect"  :href="videoCard.videoUrl">{{videoCard.title}}</a></div>
      <div class="card-uper"><a href="videoCard.uperUrl">{{videoCard.uperName}}</a></div>
      <div class="card-count">
        {{videoCard.reviewCount|formatCount}}播放 · {{videoCard.danmuCount|formatCount}}弹幕
      </div>
    </div>
  </div>

</template>
<script>
import VideoCardDanmu from "../components/VideoCardDanmu.vue"
export default {
  name:'video-card-item',
  components: {
    VideoCardDanmu
  },
  data () {
    return {
      isShowDanmu:false
    }

  },
  computed: {},
  methods: {
    showDanmu(){
      this.isShowDanmu=true;
      let _this=this;
      console.log(this.$refs.danmu[0]);
      this.$refs.danmu[0].style.left='-10px';



    },
    hideDanmu(){
//      this.isShowDanmu=false;
    }

  },
  filters:{
    formatCount(value){
      if(100000000>value&&value>=10000){
        return (value/10000).toFixed(1)+"万";
      }
      else if(value>=100000000){
        return (value/100000000).toFixed(1)+"亿";

      }
      return value

    }
  },
  created () {

  },
  props: ['videoCard']

}


</script>
<style type="text/scss" lang="scss">
  .danmu-view{
    background: rgba(	0,0,0,0.3);
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    .danmu-item{
      color: #fff;
      font-size: 14px;
      text-shadow: 1px 2px 2px  #001;
      position: absolute;
      top: 8px;
      left: 100%;
      transition: left 4s linear;
      white-space: nowrap;
    }


  }



  .advice-card-box{
    display: flex;

    .card-pic-div{
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      width: 141px;
      height: 80px;
      >img{
        width:100%;
        height: 100%;
      }

    }
    .card-info-div{
      flex: 1;
      margin-left: 10px;
      text-align: left;
      .card-title{
        >a{
          color: #222;

        }
        overflow: hidden;
        height: 36px;
        line-height: 18px;
        font-size: 14px;
        text-align: left;
        margin-bottom: 6px;
        text-overflow: ellipsis;
      }
      .card-uper{
        font-size: 12px;
        color: #999;
        margin-bottom: 4px;
        text-overflow: ellipsis;
        height: 16px;
      }
      .card-count{
        height: 16px;
        font-size: 12px;
        color: #999;
      }
    }

  }

</style>
