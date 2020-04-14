<template>
  <div class="player-box-div">
    <div class="play-content-div">
      <div class="video-play">
        <div class="danmu-player" ref="danmuView">
          <div ref="danmu" v-for="(item,index) in showDanmuList" index="index"
               @transitionend="clearItem(index,$event,item)" :sendStatus="item.sendStatus" class="danmu-play-item">
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="video-danmu-send">
        <div class="danmu-info-box">
          <span>61人正在看，{{showDanmuList.length}}条实时弹幕</span>
        </div>
        <div class="danmu-switch " :class="{'danmu-switch-on':danmuSwitch}" @click="danmuSwitch=!danmuSwitch">
          <span class="switch-btn select">弹</span>
        </div>
        <div class="danmu-set" @click="addDanmu">
          <svg-icon iconClass='danmu' className='danmu-icon'></svg-icon>
        </div>
        <div class="danmu-input-box">
          <div class="danmu-input">
            <input type="text" placeholder="发个友善的弹幕见证当下" ref="inputArea" class="input-area">
            <div class="send-btn" @click="sendDanmu">发送</div>
          </div>
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
      isStartDanmu: false,
      danmuSwitch: false,
      showDanmuList: [],
      getDanmuList: [],
      danmuTime: 100, //弹幕间隔
      lineCount: 10,    //弹幕最大行数
      top: 8,           //弹幕行起始坐标
      lineHeight: 24,   //弹幕行高
      flyTimeBase: 8,       //基础飞行时间
      flyTimeFloat:3 ,   //飞行时间浮动（字数与飞行时间成反比）
      textSize: 22,      //弹幕大小（px）
      danmuMaxCount: 100 //最大同屏弹幕数


    }
  },
  computed: {},

  methods: {
    getFlyTime(text){
      return this.flyTimeBase+(this.flyTimeFloat/text.length)
    },
    getRamdonStr (m,n,char){
      var num = Math.floor(Math.random()*(m - n) + n);
      let str="";
      for(let i=0;i<=num;i++){
        str+=char;
      }
      return str;
    },
    clearItem (index, event, item) {
      if (event.currentTarget.offsetLeft == -(item.text.length * this.textSize)) {
//        event.currentTarget.style.left="100%";
//        event.currentTarget.style.top="1px";
//        event.currentTarget.style.transition="left 0s";
        item.sendStatus = 3
        this.refreshList()
      }
    },
    //模拟数据
    getDanmuData () {
      let _this = this
      this.$http.get('/api/videoDanmuList')
        .then(function (response) {
          console.log(response)
          _this.getDanmuList = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    sendDanmu () {
      this.$refs.inputArea.value
      if (this.$refs.inputArea.value.trim().length > 0 && this.danmuSwitch) {
        let emptyShotIndex = this.findEmptyShot()
        if (emptyShotIndex >= 0) {
          this.showDanmuList[emptyShotIndex] = {
            text: this.$refs.inputArea.value,
            showTime: 1000,
            sendTime: 1585804896,
            sendStatus: 1  //1待发 2 正在发 3 已发待重新利用
          }
          this.showDanmuList[emptyShotIndex].sendStatus = 1
          this.$refs.danmu[emptyShotIndex].style.transition = 'left 0s'
          this.$refs.danmu[emptyShotIndex].style.left = '100%'
          this.$refs.danmu[emptyShotIndex].style.top = '0'
          this.refreshList()
        }
        else {
          if (this.showDanmuList.length <= this.danmuMaxCount) {
            this.showDanmuList.push({
              text: this.$refs.inputArea.value,
              showTime: 1000,
              sendTime: 1585804896,
              sendStatus: 1  //1待发 2 正在发 3 已发待重新利用
            })
          }

        }
      }
      this.$refs.inputArea.value = ''
      this.$refs.inputArea.focus()

    },
    addDanmu () {
      if (!this.danmuSwitch) {
        return
      }
      let emptyShotIndex = this.findEmptyShot()
      if (emptyShotIndex >= 0) {
        this.showDanmuList[emptyShotIndex] = {
          text: this.getRamdonStr(1,20,"3"),
          showTime: 2500,
          sendTime: 1585804896,
          sendStatus: 1  //1待发 2 正在发 3 已发待重新利用
        }
        this.showDanmuList[emptyShotIndex].sendStatus = 1
        this.$refs.danmu[emptyShotIndex].style.transition = 'left 0s'
        this.$refs.danmu[emptyShotIndex].style.left = '100%'
        this.$refs.danmu[emptyShotIndex].style.top = '0'
        this.refreshList()
      }
      else {
        if (this.showDanmuList.length <= this.danmuMaxCount) {
          this.showDanmuList.push({
            text: this.getRamdonStr(1,20,"2"),
            showTime: 2500,
            sendTime: 1585804896,
            sendStatus: 1  //1待发 2 正在发 3 已发待重新利用
          })
        }
      }
    },
    refreshList () {
      this.showDanmuList.push({})
      this.showDanmuList.pop()
    },

    findEmptyShot () {
      for (let i = 0; i < this.showDanmuList.length; i++) {
        if (this.showDanmuList[i].sendStatus == 3) {
          return i
        }
      }
      return -1
    },
    sortNumber (a, b) {
      return parseInt(a) - parseInt(b)
    },
    showDanmu () {
      let _this = this
      let i = 0
      let lineSet = new Set()
      let time = 0
      var sendThread = setInterval(function () {
        if (_this.danmuSwitch) {
          time = time + _this.danmuTime
          for (let j = 0; j < _this.lineCount; j++) {
            lineSet.add((_this.top + j * _this.lineHeight) + 'px')
          }
          let top = _this.top
          for (let i = 0; i < _this.showDanmuList.length; i++) {
            if (_this.showDanmuList[i].sendStatus == 1) {
//              if (_this.$refs.danmu) {
              let index = 0
              _this.$refs.danmu.forEach(item => {

                if (parseInt(item.offsetLeft) != parseInt(_this.$refs.danmuView.offsetWidth)) {

                  if ((parseInt(item.offsetLeft) + parseInt(item.offsetWidth)) > 5) {
                    //算法处理防止弹幕重叠
                    let itemSpeed = (parseInt(_this.$refs.danmuView.offsetWidth) + parseInt(item.offsetWidth)) /_this.getFlyTime(_this.showDanmuList[index].text)
                    let danmuSpeed = (_this.$refs.danmu[i].textContent.length * _this.textSize + parseInt(_this.$refs.danmuView.offsetWidth)) / _this.getFlyTime(_this.showDanmuList[i].text)
                    let itemS = parseInt(item.offsetWidth) + parseInt(item.offsetLeft)
                    let danmuS = parseInt(_this.$refs.danmuView.offsetWidth)
                    let itemDismissTime = itemS / itemSpeed
                    let danmuEndTime = danmuS / danmuSpeed
                    //判断飞行过程中是否会重叠
                    if ((parseInt(item.offsetLeft) + parseInt(item.offsetWidth)) > (parseInt(_this.$refs.danmuView.offsetWidth) * 1) || itemDismissTime > danmuEndTime) {
                      lineSet.delete(item.style.top)
                    }
                  }
                }
                else {
                  //如果弹幕处于正在飞行状态，该行不可用
                  if (_this.showDanmuList[index].sendStatus == 2) {
                    lineSet.delete(item.style.top)
                  }
                }
                index++
              })
              if (lineSet.size != 0) {
                let rows = Array.from(lineSet).sort(_this.sortNumber)
                top = parseInt(rows[0])
                //发送弹幕
                if (i <= _this.$refs.danmu.length - 1) {
                  //判断弹幕初始位置是否在起点,是否处于待发状态
                  if (parseInt(_this.$refs.danmu[i].offsetLeft) == parseInt(_this.$refs.danmuView.offsetWidth) && _this.showDanmuList[i].sendStatus == 1) {
                    _this.showDanmuList[i].sendStatus = 2
                    _this.refreshList()
                    _this.$refs.danmu[i].style.top = top + 'px'
                    _this.$refs.danmu[i].style.transition = 'left ' + _this.getFlyTime(_this.showDanmuList[i].text) + 's linear'
                    _this.$refs.danmu[i].style.fontSize = _this.textSize + 'px'
                    _this.$refs.danmu[i].style.left = '-' + _this.$refs.danmu[i].textContent.length * _this.textSize + 'px'//根据弹幕字数计算终点坐标
                  }
                }

              }
              else {
                console.log('没有空间')
                _this.showDanmuList[i].sendStatus = 3
                return;
              }
//              }
            }

          }
        }
      }, this.danmuTime)

    },
  },

  created () {
    this.getDanmuData()
  },
  mounted () {
    this.showDanmu()
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
      justify-content: center;
      .video-play {
        flex: 1;
        position: relative;
        .danmu-player {
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          overflow: hidden;

          .danmu-play-item {
            color: #fff;
            font-size: 14px;
            text-shadow: 1px 2px 2px #001;
            position: absolute;
            top: 0px;
            left: 100%;
            /*transition: left 4s linear;*/
            white-space: nowrap;
          }

        }

      }
      .video-danmu-send {
        height: 46px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;

        .danmu-info-box {
          width: 200px;
          font-size: 12px;
          text-align: left;
          margin-left: 20px;
        }
        .danmu-switch {
          margin: 0;
          display: inline-block;
          position: relative;
          width: 30px;
          height: 20px;
          outline: none;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          background: #757575;
          border-radius: 11px;
          cursor: pointer;
          vertical-align: middle;
          color: #757575;
          transition: all .3s;
          > span {
            position: absolute;
            left: 1px;
            top: 1px;
            font-size: 12px;
            transform: scale(0.85);
            background: #fff;
            padding: 3px;
            border-radius: 8px;
            color: #757575;
            transition: all .3s;
          }
        }
        .danmu-switch-on {
          background: #00a1d6 !important;
          > span {
            left: 11px;
            color: #00a1d6 !important;
          }
        }
        .danmu-set {
          width: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .danmu-icon {
            cursor: pointer;
            font-size: 25px;
            fill: #757575;
            transition: all .3s;
          }
          .danmu-icon:hover {
            fill: #00a1d6;
          }
        }
        .danmu-input-box {
          flex-grow: 1;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          .danmu-input {
            width: 100%;
            margin: 10px;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            position: relative;
            height: 30px;
            line-height: 30px;
            background: #f4f4f4;
            color: #999;
            border-radius: 2px;
          }
          .input-area {
            flex: 1;
            border: 1px solid #e7e7e7;
            background: #f4f4f4;
            padding: 10px;
            outline: none;
          }
          .send-btn {
            z-index: 13;
            font-size: 14px;
            height: 30px;
            width: 60px;
            min-width: 60px;
            line-height: 30px;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-radius: 0 2px 2px 0;
            background-color: #00a1d6;
            color: #fff;
            cursor: pointer;
          }
        }

      }
    }
  }
</style>
