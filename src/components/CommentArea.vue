<template>
  <!--<pagination :total="total" :current-page='current' @pagechange="pagechange"></pagination>-->
  <div class="common-area-box">
    <div><span>{{total}}</span><span>评论</span></div>
    <div class=" common-control-head">
      <ul>
        <li :class="{'common-active':isSortHot}" @click="clickSortHot"  class="point-effect ">按热度排序</li>
        <li :class="{'common-active':!isSortHot}" @click="clickSortTime" class="point-effect">按时间排序</li>
      </ul>
      <pagination :total="total" :current-page='current' @pagechange="pagechange"></pagination>

    </div>

    <comment-send @sendCommentText="sendCommentText"></comment-send>




  </div>

</template>
<script>
import Pagination from '../components/Pagination.vue';
import CommentSend from '../components/CommentSend.vue'
export default {

  name:'common-area',
  components: {
    Pagination,
    CommentSend
  },
  data () {
    return{
      total: 150,     // 记录总条数
      display: 10,   // 每页显示条数
      current: 1,   // 当前的页数
      isSortHot:true,

    }

  },
  computed: {},
  methods: {
    sendCommentText(text){
      console.log(text);
    },
    pagechange:function(currentPage){
      console.log(currentPage);//该参数就是当前点击的页码数
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据


    },
    clickSortHot() {
      this.isSortHot = true;
    },
    clickSortTime(){
      this.isSortHot=false;
    }


  },
  created () {

  },
  porps: {}

}

</script>
<style type="text/scss" lang="scss">




  .common-control-head{
    display: flex;
    height: 40px;
    margin-top: 30px;
    justify-content: space-between;
    border-bottom: 1px solid #e5e9ef;
    align-items: center;
    margin-bottom: 24px;
    >ul{
      display: flex;
      flex-direction: row;

      >li{
        height: 20px;
        padding: 10px 0px 10px 0px;
        margin-right: 20px;
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
      }
      .common-active{
        position: relative;
        border-bottom: 1px solid #45A0D7;
      }
      .common-active:after{
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translateX(-50%);
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-bottom: 4px solid #45A0D7;
      }
    }
  }
  .common-area-box{
    margin-top: 20px;
    >div:first-child{
      text-align: left;
      font-size: 18px;
      >span:first-child{
        margin-right: 10px;
      }
    }
  }



</style>
