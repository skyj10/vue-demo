<template>
  <div class="uper-info-box">
    <div class="up-avatar"><img class="header-img" src="../assets/img/header.png"/></div>
    <div class="uper-name-div">
      <div>
        <span class="uper-name-span">中国日报</span>

        <a class="point-effect"> <svg-icon iconClass='message' className='message-icon' ></svg-icon> <span>发消息</span></a>
      </div>
      <div class="uper-desc-div">广受年轻人心疼的dddddddddddddddddddd时政网站</div>
      <div class="uper-button-div">
        <div class="charge-button"><span>为TA充电</span></div>
        <div class="follow-button"><span>已关注</span><span>337.6万</span></div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name:"uper-info",
  components: {},
  data () {
    return{

    }

  },
  computed: {},
  methods: {},
  created () {

  },
  props: {}

}


</script>
<style type="text/scss" lang="scss">

  .uper-info-box{
    position: relative;
    width: 100%;
    margin-bottom: 16px;
    height: 80px;
    .up-avatar{
      position: absolute;
      width:auto;
      height: auto;
      margin:7px 0 0 5px;
      left: 0px;
      >img{
        width: 48px;
        height: 48px;
        border-radius: 25px;
      }
    }
    .uper-name-div{
      font-size: 12px;
      text-align: left;
      position: absolute;
      width: 250px;
      right: 0px;
      >div{
        margin-top: 7px;
        >a{

          .message-icon{
            fill:#999;
            font-size: 16px;
            margin-left: 5px;
          }
        }
        >a:hover{
          .message-icon{
            fill:#1890ff;

          }
        }
      }
      .uper-name-span{
        font-size: 14px;
        color: #fb7299!important;
      }
      >a{
        color: #505050;

      }
      .uper-desc-div{
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .uper-button-div{
        display: flex;
        justify-content: space-between;
        >div{
          width:48%;
          text-align: center;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          border-radius: 2px;
          background-color: #FA5A57;
          cursor: pointer;
        }
        .charge-button{
          color: #ffffff;
          background-color: #fb7299;
          transition: all .3s;
        }
        .charge-button:hover{
          background-color: #ff85ad;
        }
        .follow-button{
          background-color: #e7e7e7;
          color: #999;
          >span:last-child{
            margin-left: 5px;
          }
        }
        .follow-button:hover{
          >span:last-child{
            display: none;
          }
        }

      }

    }
  }
</style>
