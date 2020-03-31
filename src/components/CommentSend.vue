<template>
  <div class="common-send">
    <button class="send-button-button" @click="sendComment($event)">发表评论</button>

    <div class="send-edit-div">
      <textarea ref="textarea" :class="{'textarea-hover':isTextAreaFocus}" @focus="isTextAreaFocus=true" @blur="isTextAreaFocus=false" class="send-textarea" cols="80" name="msg" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" ></textarea>
    </div>
    <div class="send-avatar"><img class="header-img" src="../assets/img/header.png"/></div>
  </div>
</template>
<script>
export default {
  name:'comment-send',
  components: {},
  data () {

    return{
      isTextAreaFocus:false
    }
  },
  computed: {},
  methods: {
    sendComment(e){
      this.$emit('sendCommentText', this.$refs.textarea.value);
      this.$refs.textarea.value="";
    }
  },
  created () {

  },
  porps: {

  }

}


</script>
<style type="text/scss" lang="scss">


  .common-send{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 10px;
    .send-avatar{
      width:auto;
      height: auto;
      margin:7px 0 0 5px;
      >img{
        width: 48px;
        height: 48px;
        border-radius: 25px;
      }
    }
    .send-edit-div{
      width: 100%;
      margin: 0 24px;
      >textarea{
        font-size: 12px;
        display: inline-block;
        box-sizing: border-box;
        background-color: #f4f5f7;
        border: 1px solid #e5e9ef;
        overflow: auto;
        border-radius: 4px;
        color: #555;
        width: 100%!important;
        height: 65px;
        transition: 0s;
        padding: 5px 10px;
        line-height: normal;
        flex: 1;
        resize: none;
        outline: none;
      }
      >textarea:hover{
        border: 1px solid #00a1d6;
        background-color: #ffffff;
      }
      .textarea-hover{
        border: 1px solid #00a1d6;
        background-color: #ffffff;
      }

    }

    .send-button-button{
      width: 70px;
      height: 64px;
      padding:4px 15px;
      border-radius: 4px;
      background-color: #00a1d6;
      border:1px solid #00a1d6;
      color: #ffffff;
      cursor: pointer;
      &:hover{
        background-color: #00b5e5;
        border: 1px solid #00b5e5;
        + .send-edit-div{
          >textarea{
            border: 1px solid #00a1d6;
          }
        }
      }
    }
  }

</style>
