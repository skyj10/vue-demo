<template>
  <div class="comment-list-content">
    <comment-item @showItemCommentSend="showItemCommentSend" v-for="item,idx in CommentShowList" :key="idx" :commentData="item" :index="idx" ref="commentItem"></comment-item>
  </div>


</template>
<script>
import CommentItem from '../components/CommentItem.vue'

export default {
  name: 'comment-list',
  components: {
    CommentItem
  },
  data () {
    return {
      commentList: [],
      getCommonList: [],

    }

  },
  computed: {

  },
  methods: {
    clearCommentSend(){
      this.$refs.commentItem.forEach(item=>{
        item.hideCommentSend();
      })
    },
    showItemCommentSend(index){
      this.clearCommentSend();
      this.$refs.commentItem[index].showCommentSend();
    }



  },
  created () {
  },

  props: ['sendComment', 'CommentShowList']

}


</script>
<style type="text/scss" lang="scss">
  .comment-list-content {
    > div:last-child {
      > div {
        .comment-content {
          border-bottom: 1px solid #e5e9ef;
        }
      }

    }
  }

</style>
