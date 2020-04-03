<template>
  <div>
    <video-card-item v-for="item in getVideoCardList" :videoCard="item"></video-card-item>


  </div>

</template>
<script>
import VideoCardItem from '../components/VideoCardItem.vue'
export default {
  name:"video-card-list",
  components: {
    VideoCardItem

  },
  data () {
    return {
      getVideoCardList:[]
    }

  },
  computed: {},
  methods: {
    //模拟数据
    getVideoCardData(){
      let _this=this;
      this.$http.get('/api/videoCardList')
        .then(function (response) {
          console.log(response);
          _this.getVideoCardList=response.data.data;
          console.log(_this.getVideoCardList);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created () {
    this.getVideoCardData();
  },
  props: {}

}


</script>
<style type="text/scss" lang="scss">

</style>
