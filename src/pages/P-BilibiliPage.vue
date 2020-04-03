<template>
  <div id="body">
    <title-bar></title-bar>
    <div class="content-box-div">
      <div class="content-div">
        <div class="content-left-div">
          <video-info-title></video-info-title>
          <video-player></video-player>
          <video-info-bottom></video-info-bottom>
          <common-area></common-area>
        </div>
        <div @click="test" class="content-right-div">
         <uper-info></uper-info>
          <video-card-list></video-card-list>


        </div>

      </div>



    </div>


  </div>
</template>


<script>
import TitleBar from "../components/TitleBar.vue";
import VideoInfoTitle from "../components/VideoInfoTitle.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import VideoInfoBottom from "../components/VideoInfoBottom.vue";
import Pagination from '../components/Pagination.vue'
import CommonArea from '../components/CommentArea.vue'
import UperInfo from '../components/UperInfo.vue'
import VideoCardList from '../components/VideoCardList.vue'
export default {
  name: 'HelloWorld',
  components: {
    TitleBar,
    VideoInfoTitle,
    VideoPlayer,
    VideoInfoBottom,
    Pagination,
    CommonArea,
    UperInfo,
    VideoCardList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  computed: {},
  methods: {
    test(){
      this.common.test();
    }

  },
  created() {

  },
  porps: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" lang="scss">









  #body{
    background: #ffffff;
  }

  .content-box-div{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
   .content-div{
     width: 100%;
     max-width: 1400px;
     margin: 28px 80px;
     display: flex;
     justify-content: flex-end;



     .content-left-div{
       flex: 1;
       min-width: 0;
     }
     .content-right-div{
       margin-left: 30px;
       width: 320px;
       height: 2000px;
     }
   }
  }








</style>
