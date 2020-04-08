<template>
  <div class="player-box-div">
    <div class="play-content-div">
      <div class="video-play"></div>
      <div class="video-danmu-send">
        <div class="danmu-info-box">
          <span>61人正在看，0条实时弹幕</span>
        </div>
        <div class="danmu-switch"></div>
        <div class="danmu-set"></div>
        <div class="danmu-input-box">

        </div>
      </div>

    </div>


  </div>

  </div>
</template>
<script>
export default {
  name: 'video-player',
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {

  },
  porps: {}

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
