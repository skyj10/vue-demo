<template>
  <div class="player-box-div">
    <div class="play-content-div">
      <div class="video-play">
        <div class="danmu-player" ref="danmuView" >
          <div ref="danmu" v-for="(item,index) in showDanmuList"  index="index" @transitionend="clearItem(index,$event,item.text)"   class="danmu-play-item">
            <span >{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="video-danmu-send">
        <div class="danmu-info-box">
          <span>61人正在看，0条实时弹幕</span>
        </div>
        <div class="danmu-switch"></div>
        <div class="danmu-set" @click="showDanmu"></div>
        <div class="danmu-input-box" @click="addDanmu"  >

        </div>
      </div>

    </div>


  </div>

  </div>
</template>
<script>
import index from '../router/index'

export default {
  name: 'video-player',
  components: {},
  data () {
    return {
      showDanmuList:[],
      getDanmuList:[],
      isShowDanmu:false,
      danmuTime:500, //弹幕间隔
      lineCount:4,    //弹幕最大行数
      top:8,           //弹幕行起始坐标
      lineHeight:16,   //弹幕行高
      flyTime:4 ,       //飞行时间
      textSize:16
    }
  },
  computed: {},
  methods: {
    clearItem(index,event,text){
      console.log(event.currentTarget.offsetLeft);
      console.log(-(text.length*this.textSize));
      if (event.currentTarget.offsetLeft==-(text.length*this.textSize)){
        event.currentTarget.style.left="100%";
        event.currentTarget.style.transition="left 0s";
      }

    },
    //模拟数据
    getDanmuData(){
      let _this=this;
      this.$http.get('/api/videoDanmuList')
        .then(function (response) {
          console.log(response);
          _this.getDanmuList=response.data.data;
          console.log(_this.showDanmuList);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addDanmu(){
      this.showDanmuList.push({
        text:"22222",
        showTime:2500,
        sendTime:1585804896
      });

    },

    sortNumber(a,b){
      return parseInt(a) - parseInt(b)
    },
    showDanmu(){
      this.isShowDanmu=true;
      let _this=this;
      let i=0
      let lineSet=new Set();
      let time=0;
      var sendThread=setInterval(function () {
          console.log(i)
        time=time+_this.danmuTime;
        for (let j=0;j<_this.lineCount;j++){
          lineSet.add((_this.top+j*_this.lineHeight)+"px");
        }
        let top=_this.top;
        if (_this.isShowDanmu) {

          let indexCount=0

          if (_this.$refs.danmu){

            _this.$refs.danmu.forEach(item=> {
              //              _this.$refs.danmu.forEach(item=>{
//              let item=_this.$refs.danmu[index];

              if (parseInt(item.offsetLeft)!=parseInt(_this.$refs.danmuView.offsetWidth)){

                if ((parseInt(item.offsetLeft)+parseInt(item.offsetWidth))>5){
                  //算法处理防止弹幕重叠
                  let itemSpeed=(parseInt(_this.$refs.danmuView.offsetWidth)+parseInt(item.offsetWidth))/_this.flyTime;
                  let danmuSpeed=(_this.$refs.danmu[i].textContent.length*_this.textSize+parseInt(_this.$refs.danmuView.offsetWidth))/_this.flyTime;
                  let itemS=parseInt(item.offsetWidth)+parseInt(item.offsetLeft);
                  let danmuS=parseInt(_this.$refs.danmuView.offsetWidth);
                  let itemDismissTime=itemS/itemSpeed;
                  let danmuEndTime=danmuS/danmuSpeed;
//                if (itemDismissTime<danmuEndTime){
                  //判断飞行过程中是否会重叠
                  if((parseInt(item.offsetLeft)+parseInt(item.offsetWidth))>(parseInt(_this.$refs.danmuView.offsetWidth)*1)||itemDismissTime>danmuEndTime){
//                  lineSet.add(item.style.top);
                    lineSet.delete(item.style.top);
                  }

                }

              }
              indexCount++;
//            }
            });

            console.log("lineSet.size"+lineSet.size);
            if(lineSet.size!=0){
              let rows=Array.from(lineSet).sort(_this.sortNumber);
              top=parseInt(rows[0]);
             //发送弹幕
              if (i <=_this.$refs.danmu.length - 1){
                if ( parseInt( _this.$refs.danmu[i].offsetLeft)==parseInt(_this.$refs.danmuView.offsetWidth)){
                  _this.$refs.danmu[i].style.top=top+"px";
                  _this.$refs.danmu[i].style.transition="left "+_this.flyTime+"s linear";
                  _this.$refs.danmu[i].style.fontSize=_this.textSize+"px";
                  _this.$refs.danmu[i].style.left = '-'+_this.$refs.danmu[i].textContent.length*_this.textSize+"px";//根据弹幕字数计算终点坐标
                }
              }

            }
          else {
            let rows=Array.from(lineSet).sort(_this.sortNumber);
            top=parseInt(rows[rows.length-1]);
            console.log(rows);
          }
//            if (_this.$refs.danmu) {
//
//              for (let index = 0; index < _this.$refs.danmu.length; index++) {
//                //重置终点处的弹幕
//                let item=_this.$refs.danmu[index];
//
//                if(-parseInt(item.offsetLeft)==item.textContent.length*_this.textSize){
////              item.style.left="100%";
////              item.style.transition="left 0s";
////              item.style.left="100%";
////              console.log("item.style.left"+item.style.left);
//                  _this.showDanmuList.pop();
//                  indexCount--;
//                  i--;
//                  console.log(i);
//                  console.log(item);
//                }
//              }
//            }


            if (i < _this.$refs.danmu.length - 1) {
              i++;
            }
            else {
//              i = 0
            }
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




  created () {
    this.getDanmuData();
  },
  pops: {}

}


</script>
<style type="text/scss" lang="scss">


  .player-box-div {
    margin-top: 15px;
    width: 100%;
    padding-bottom: 55%;
    background: lightcyan;
    position: relative;

    .play-content-div {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      background: lightpink;
      flex-direction: column;
      .video-play{
        flex: 1;
        position: relative;
        .danmu-player{
          background: rgba(	0,0,0,0.3);
          width: 100%;
          height:100%;
          position: absolute;
          top: 0;
          overflow: hidden;

          .danmu-play-item{
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

      }
      .video-danmu-send{
        height: 46px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;

        .danmu-info-box{
          width: 200px;
          font-size: 12px;
          text-align: left;
          margin-left: 20px;
        }
        .danmu-switch{
          width: 50px;
          height: 100%;
        }
        .danmu-set{
         width: 40px;
          height: 100%;
          background: #fb7299;
        }
        .danmu-input-box{
          flex-grow: 1;
          background: #45A0D7;
          height: 40px;
        }


      }
    }
  }
</style>
