<template>
  <div class="comment-list-content">
    <comment-item v-for="item in ConcatCommentList" :commentData="item"></comment-item>
  </div>



</template>
<script>
import CommentItem from '../components/CommentItem.vue'
export default {
  name:'comment-list',
  components: {
    CommentItem
  },
  data () {
    return{
      commentList:[],
      getCommonList:[],


    }

  },
  computed: {
    ConcatCommentList:function(){
      this.commentList=this.getCommonList.concat(this.sendComment)
      return this.sendComment.concat(this.getCommonList);
    }
  },
  methods: {

    getCommentList(){
      let _this=this;
      this.$http.get('/api/commentList')
        .then(function (response) {
          console.log(response);
          _this.getCommonList=response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created () {
    this.getCommentList();
  },

  props: ['sendComment']

}


</script>
<style type="text/scss" lang="scss">
  .comment-list-content{
    >div:last-child{
      >div{
        .comment-content{
          border-bottom: 1px solid #e5e9ef;
        }
      }

    }
  }

</style>
