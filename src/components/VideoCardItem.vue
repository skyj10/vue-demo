<template>
  <div class="advice-card-box">
    <div class="card-pic-div"  @mouseenter="showDanmu" @mouseleave="hideDanmu" >
      <img src="../assets/img/videoPic.png">
      <div ref="danmuView" class="danmu-view" v-show="isShowDanmu">
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
      isShowDanmu:false,
      danmuTime:1000, //弹幕间隔
      lineCount:4,    //弹幕最大行数
      top:8,           //弹幕行起始坐标
      lineHeight:16   //弹幕行高
    }

  },
  computed: {},
  methods: {
    sortNumber(a,b){
        return parseInt(a) - parseInt(b)
    },
    showDanmu(){
      this.isShowDanmu=true;
      let _this=this;
      let i=0
      let lineSet=new Set();


      var sendThread=setInterval(function () {
        for (let j=0;j<_this.lineCount;j++){
          lineSet.add((_this.top+j*_this.lineHeight)+"px");
        }
        let top=_this.top;
        if (_this.isShowDanmu) {
          console.log( _this.$refs.danmu);

          _this.$refs.danmu.forEach(item=>{
            console.log("1");
            //重置终点处的弹幕
            if(-parseInt(item.offsetLeft)==item.textContent.length*14){
//              item.style.left="100%";
              item.style.transition="left 0s";
              item.style.left="100%";
              console.log("item.style.left"+item.style.left);

            }

            console.log("reset"+(parseInt(item.offsetLeft)+":"+parseInt(_this.$refs.danmuView.offsetWidth)));
            if (parseInt(item.offsetLeft)!=parseInt(_this.$refs.danmuView.offsetWidth)){

              if ((parseInt(item.offsetLeft)+parseInt(item.offsetWidth))>5){

                if((parseInt(item.offsetLeft)+parseInt(item.offsetWidth))<(parseInt(_this.$refs.danmuView.offsetWidth)*0.8)){
//                  lineSet.add(item.style.top);

                }
                else {
                  lineSet.delete(item.style.top);
                }
              }

            }
          });
          if(lineSet.size!=0){
            let rows=Array.from(lineSet).sort(_this.sortNumber);
            top=parseInt(rows[0]);
            console.log(rows);

            if ( parseInt( _this.$refs.danmu[i].offsetLeft)==parseInt(_this.$refs.danmuView.offsetWidth)){
              _this.$refs.danmu[i].style.top=top+"px";
              console.log("offet"+top);
              _this.$refs.danmu[i].style.transition="left 4s linear";
              _this.$refs.danmu[i].style.left = '-'+_this.$refs.danmu[i].textContent.length*14+"px";//根据弹幕字数计算终点坐标
              console.log(_this.$refs.danmu[i].offsetLeft+"width"+_this.$refs.danmu[i].offsetWidth);
            }
          }
//          else {
//            let rows=Array.from(lineSet).sort(_this.sortNumber);
//            top=parseInt(rows[rows.length-1]);
//            console.log(rows);
//          }



          if (i < _this.$refs.danmu.length - 1) {
            i++;
          }
          else {
            i = 0
          }
        }
        else {
          clearInterval(sendThread);
        }


      },this.danmuTime)




    },
    hideDanmu(){
      this.isShowDanmu=false;
      clearInterval();
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
      top: 0px;
      left: 100%;
      /*transition: left 4s linear;*/
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
