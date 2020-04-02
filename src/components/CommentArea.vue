<template>
  <!--<pagination :total="total" :current-page='current' @pagechange="pagechange"></pagination>-->
  <div class="common-area-box">
    <div><span>{{total}}</span><span>评论</span></div>
    <div class=" common-control-head">
      <ul>
        <li :class="{'common-active':isSortHot}" @click="clickSortHot"  class="point-effect ">按热度排序</li>
        <li :class="{'common-active':!isSortHot}" @click="clickSortTime" class="point-effect" >按时间排序</li>
      </ul>
      <pagination ref="pagination" :total="total" :currentPage='current' @pagechange="pagechange"></pagination>

    </div>

    <comment-send @sendCommentText="sendCommentText" class="comment-send"></comment-send>
    <comment-list ref="commentList"  :CommentShowList="ConcatCommentList"></comment-list>
    <pagination-bottom ref="paginationBottom" :total="total" :currentPage='current' @pagechange="pagechange"></pagination-bottom>
    <comment-send  @sendCommentText="sendCommentText" class="comment-send"></comment-send>




  </div>

</template>
<script>
import Pagination from '../components/Pagination.vue';
import PaginationBottom from '../components/PaginationBottom.vue';
import CommentSend from '../components/CommentSend.vue'
import CommentItem from '../components/CommentItem.vue'
import CommentList from '../components/CommentList.vue'
export default {

  name:'common-area',
  components: {
    Pagination,
    CommentSend,
    CommentItem,
    CommentList,
    PaginationBottom
  },
  data () {
    return{
      total: 150,     // 记录总条数
      display: 10,   // 每页显示条数
      current: 1,   // 当前的页数
      isSortHot:true,
      sendCommentList:[],
      getCommonList:[],
      commentShowList:[]


    }

  },
  computed: {
    ConcatCommentList:function(){
      return this.sendCommentList.concat(this.commentShowList);
    },
    updateSort(){
      let startIndex=(this.current-1)*this.display;
      this.commentShowList=this.getCommonList.slice(startIndex,startIndex+this.display);
      console.log(this.commentShowList)
    }
  },
  methods: {
    getCommentListByTime(){
      let _this=this;
      this.$http.get('/api/commentList')
        .then(function (response) {
          console.log(response);
          _this.getCommonList=response.data.data;
          _this.getCommonList.sort(_this.compare("sendTime"));
          _this.total=_this.getCommonList.length;
          let startIndex=(_this.current-1)*_this.display;
          _this.commentShowList=_this.getCommonList.slice(startIndex,startIndex+_this.display);
          _this.current=1;
          _this.$refs.pagination.setCurrent(_this.current);
          _this.$refs.paginationBottom.setCurrent(_this.current);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCommentList(){
      let _this=this;
      this.$http.get('/api/commentList')
        .then(function (response) {
          console.log(response);
          _this.getCommonList=response.data.data;
          _this.getCommonList.sort(_this.compare("like"));
          _this.total=_this.getCommonList.length;
          let startIndex=(_this.current-1)*_this.display;
          _this.commentShowList=_this.getCommonList.slice(startIndex,startIndex+_this.display);
          _this.current=1;
          _this.$refs.pagination.setCurrent(_this.current);
          _this.$refs.paginationBottom.setCurrent(_this.current);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    sendCommentText(text){
      console.log(text);
      let comment={
        userName:"skyj40",
        like:0,
        commentText:text,
        fromDevice:0,
        sendTime:Date.parse(new Date())/1000,
        level:4
      }
      this.sendCommentList.unshift(comment);
    },
    pagechange:function(currentPage){

      this.current=currentPage;
      this.$refs.pagination.setCurrent(this.current);
      this.$refs.paginationBottom.setCurrent(this.current);
      console.log(this.current);//该参数就是当前点击的页码数
      let startIndex=(currentPage-1)*this.display;
      this.commentShowList=this.getCommonList.slice(startIndex,startIndex+this.display);




    },
    clickSortHot() {
      if(!this.isSortHot){
        this.isSortHot = true;
        this.getCommentList();
      }
    },
    clickSortTime(){
      if ( this.isSortHot){
        this.isSortHot=false;
        this.getCommentListByTime();
      }
    },
    compare (property) {
      return function (a, b) {
        var value1 = a[property]
        var value2 = b[property]
        return value2 - value1
      }
    },

  },
  created () {
    this.getCommentList();
  },
  props: {}

}

</script>
<style type="text/scss" lang="scss">






.comment-send{
  margin-bottom: 30px;
}

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
