<template>
  <div class="comment-list-content">
    <comment-item v-for="item in CommentShowList" :commentData="item"></comment-item>
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

  },
  created () {
  },

  props: ['sendComment','CommentShowList']

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
