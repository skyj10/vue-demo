<template>
  <div class="comment-list-box">
    <div class="comment-list-item">

      <div class="comment-avatar">
        <img class="header-img" src="../assets/img/header.png"/>
      </div>
      <div class="comment-content">
        <div class="comment-user-info">
          <a >{{commentData.userName}}</a>
          <a href="https://www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3">
            <i class="level " :class="{'lv1':commentData.level==1,'lv2':commentData.level==2,'lv3':commentData.level==3,'lv4':commentData.level==4,'lv5':commentData.level==5,'lv6':commentData.level==6}"></i>
          </a>
        </div>
        <div class="comment-text" v-html="commentData.commentText">
          lihail5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
          <br>
          sdfsdf
        </div>
        <div class="comment-bottom">
          <span v-if="commentData.fromDevice!=0" >{{commentData.fromDevice|formatDevice}}</span>
          <span>{{commentData.sendTime|formatDate}}</span>
          <span class="like"><i></i><span>{{commentData.like}}</span></span>
          <span class="hate"><i></i></span>
          <span class="comment-back" @click="isShowSend=!isShowSend">回复</span>
          <div class="comment-menu" v-click-outside="clickoutside">
            <div class="spot" @click="isShowMenu=true" ></div>
            <div v-if="isShowMenu"  class="comment-menu-list-div"  @mouseleave="isShowMenu=true" >
              <div class="menu-item" >加入黑名单</div>
              <div class="menu-item">举报</div>
            </div>
          </div>
        </div>
        <comment-send @sendCommentText="sendCommentText" v-if="isShowSend" class="item-comment-send"></comment-send>
      </div>

    </div>
  </div>
</template>
<script>
import Common from '../components/Common.vue'
import common from '../assets/js/common.js'
import CommentSend from '../components/CommentSend.vue'
export default {
  name:'comment-item',
  components: {
    Common,
    CommentSend

  },
  data () {
    return{
      isShowMenu:false,
      isMouseIn:false,
      isShowSend:false

    }

  },
  computed: {},
  methods: {
    sendCommentText(text){
      console.log(text);

    },
    clickoutside(){
      this.isShowMenu=false;
    }
  },
  filters:{
    formatDate:function (value) {
//      this.Common.formatDateAgo(value);
     return common.formatDateAgo(value);
    },
    formatDevice:function(value){
      switch(value){
        case 0:return "";
        case 1:return"来自安卓设备";
        case 2:return"来自IOS设备";
      }

    }
  },
  created () {

  },
  props: ['commentData']

}


</script>
<style type="text/scss" lang="scss" >
  .item-comment-send{
    margin-bottom: 30px;
  }

  .comment-menu-list-div{
    visibility: visible;
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    width: 100px;
    right: 0;
    top: 20px;
    z-index: 10;
    height: 100px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 4px;
    color: #222;
    font-size: 14px;
    z-index: 999;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.28);
    .menu-item{
      width: 100%;
      height: 40%;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    .menu-item:hover{
      background: #F4F4F4;
      color: #45A0D7;
      cursor: pointer;
      transition: color .3s;
      /*transition-property: color;*/
      /*transition-duration: 0.3s;*/
      /*transition-timing-function: ease;*/
      /*transition-delay: 0s;*/
    }
  }


  .comment-menu{
    position: relative;
    width: 18px;
    float: right;
    margin-top: 5px;
    margin-right: 0;
    .spot{
      width: 18px;
      height: 18px;
      cursor: pointer;
      background: url(../assets/img/icons-comment.png) no-repeat;
      background-position: -151px -280px;
    }
    .spot:hover{
      background-position: -216px -280px;
    }

  }


  .comment-list-item{
    width: 100%;

    .comment-avatar{
      float: left;
      margin: 24px 0 0 5px;
      >img{
        width: 48px;
        height: 48px;
        border-radius: 25px;
      }
    }

    .comment-content{
      width: auto;
      margin-left: 85px;
      border-top: 1px solid #e5e9ef;
      padding: 22px 0 14px;

    }

  }

  .level{
    display: inline-block;
    width: 19px;
    height: 9px;
    vertical-align: middle;
    margin: 0 8px;
    background:url(../assets/img/icons-comment.png) no-repeat;;
  }
  //雪碧图 等级标志

  .lv1{
    background-position: -23px -92px;
  }
  .lv2{
    background-position: -23px -156px;
  }
  .lv3{
    background-position: -23px -220px;
  }
  .lv4{
    background-position: -23px -284px;
  }
  .lv5{
    background-position: -23px -348px;
  }
  .lv6{
    background-position: -23px -412px;
  }


  .comment-user-info{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 4px;

    >a{
      color: #6d757a;
      font-size: 12px;
      font-weight: 700;
    }
  }
  .comment-text{
    font-size: 14px;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    line-height: 20px;
    margin: 2px 0;
  }

  .comment-bottom{
    text-align: left;
    font-size: 12px;
    color: #99a2aa;
    line-height: 26px;
    >span{
      margin-right: 10px;
    }
    >.comment-back{
      padding: 0 5px;
      border-radius: 4px;
      margin-right: 15px;
      font-size: 12px;
      cursor: pointer;
      display: inline-block;
    }
    >.comment-back:hover{
      color: #00a1d6;
      background: #e5e9ef;
    }
    .like{
      cursor: pointer;
      >i{
        display: inline-block;
        width: 14px;
        height: 14px;
        vertical-align: text-top;
        margin-right: 5px;
        background: url(../assets/img/icons-comment.png) no-repeat;
        background-position: -153px -25px;
      }
      >i:hover{
        background-position: -218px -25px;
      }
    }
    .hate{
      cursor: pointer;
      >i{
        display: inline-block;
        width: 14px;
        height: 14px;
        vertical-align: text-top;
        margin-right: 5px;
        background: url(../assets/img/icons-comment.png) no-repeat;
        background-position: -153px -153px;
      }
      >i:hover{
        background-position: -217px -153px;
      }
    }
  }


</style>
