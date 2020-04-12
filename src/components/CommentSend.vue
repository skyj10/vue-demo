<template>
  <div class="common-send" ref="commonSend" >
    <button class="send-button-button" @click="sendComment($event)">发表评论<span class="toast-no-text" v-if="toastNoText"  :class="{'toast-notext':toastNoText}">你还没有评论!</span></button>

    <div class="send-edit-div">
      <textarea ref="textarea"  :class="{'textarea-hover':isTextAreaFocus,'textarea-red':textAreaRed}" @focus="isTextAreaFocus=true" @blur="isTextAreaFocus=false" class="send-textarea" cols="80" name="msg" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" ></textarea>
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
      isTextAreaFocus:false,
      toastNoText:false,
      textAreaRed:false


    }
  },
  computed: {


  },
  methods: {

    sendComment(e){

      if (this.$refs.textarea.value.length<=0){
        if (!this.toastNoText){
          let _this=this
          this.toastNoText=true;
          this.textAreaRed=true;
          setTimeout(function () {
            _this.toastNoText=false;
          },3000)
          console.log( this.toastNoText);
          return
        }


      }
      else {
        this.$emit('sendCommentText', this.$refs.textarea.value);
        this.$refs.textarea.value="";
        this.textAreaRed=false;
      }

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
      .textarea-red{
        border: 1px solid #ff0000;
      }
      .textarea-red:hover{
        border: 1px solid #ff0000;
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
      position: relative;
      cursor: pointer;
      outline: none;

      .toast-no-text{
        visibility: hidden;
        animation: toast 3s;
        position: absolute;
        width: 130px;
        line-height: 40px;
        top: -30px;
        left: -35px;
        border-radius: 4px;
        cursor: auto;
        background-color:rgba(255,0,0,0.8);
      }
      @keyframes toast
      {
        0%   {opacity: 0;top:-30px;visibility: visible;}
        5%  {opacity: 1;top:-45px;visibility: visible;}
        95%  {opacity: 1;top:-45px;visibility: visible;}
        100% {opacity: 0;top:-45px;visibility: visible;}
      }



      &:hover{
        background-color: #00b5e5;
        border: 1px solid #00b5e5;
        + .send-edit-div{
          >textarea{
            border: 1px solid #00a1d6;
          }
          .textarea-red{
            border: 1px solid #ff0000 !important;
            background-color: #ffffff;
          }
        }
      }
    }
  }

</style>
