<template>
  <div class="div-title-bar">
    <div class="div-title-bar-content">
      <div class="div-title-bar-left">
        <div>

          <ul class="ul-title-bar-left">
            <li><svg-icon iconClass='BILIBILI_LOGO' className='bilibili-icon ' ></svg-icon></li>
            <li class="li-logo point-effect" >
              <span>主站</span>
            </li>
            <li class="point-effect" >
              <span>番剧</span>
            </li>
            <li class="point-effect" >
              <span>游戏中心</span>
            </li>
            <li class="point-effect" >
              <span>直播</span>
            </li>
            <li class="point-effect" >
              <span>会员购</span>
            </li>
            <li class="point-effect" >
              <span>漫画</span>
            </li>
            <li class="point-effect" >
              <span>赛事</span>
            </li>
            <li class="point-effect" >
              <span>下载APP</span>
            </li>
          </ul>
        </div>

      </div>
      <div class="div-title-bar-middle">
        <div class="search-box">
          <input type="text" class="search-input">
          <div class="search-button-div">
            <svg-icon iconClass='search' className='search-icon '></svg-icon>
          </div>
        </div>
      </div>
      <div class="title-bar-right-div">
        <div>
          <div class="header-div"><img class="header-img" src="../assets/img/header.png"/></div>
          <div><span>大会员</span></div>
          <div>
            <div class="num-div"><span>18</span></div>
            <span>消息</span>
          </div>
          <div><span>动态</span></div>
          <div><span>收藏</span></div>
          <div><span>历史</span></div>
          <div><span>创作中心</span></div>
          <div class="up-thing-div"><span>投稿</span></div>

        </div>
      </div>
    </div>

  </div>


</template>
<script>
export default {
  name:'title-bar',
  components: {},
  data() {
    return{

    }

  },
  computed: {},
  methods: {},
  created() {

  },
  porps: {}

}



</script>

<style  type="text/scss" lang="scss">
  .div-title-bar{
    font-size: 14px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    background: #ffffff;
    z-index: 1;
    width: 100%;
    height: 56px;
    >div{
      background: white;
      line-height: 36px;
      height: 36px;
      padding: 10px 24px;
      display:flex;
      justify-content: space-between;
      >div{
        display: flex;
      }
    }
    .bilibili-icon{
      /*width: 100px !important;*/
      font-size: 70px;
      position: absolute;
      top: -7px;
      left: 25px;
      fill: #45A0D7;
      cursor: pointer;
    }
    .li-logo{
      margin-left: 80px !important;
    }

    .div-title-bar-left{
      width:1200px;
      min-width: 450px;
    }
    .ul-title-bar-left{
      display: flex;
      flex-direction: row;

      >li{
        margin-left: 15px;
        white-space: nowrap;
      }

    }
    .title-bar-right-div{
      width:1000px;
      min-width: 470px;
      align-items: center;
      line-height: 36px;
      >div{
        float: right;
        display: flex;
        .header-div{
          height: 36px;
          width: 36px;
          cursor: pointer;
          .header-img{
            height: 100%;
            width: 100%;
            border-radius: 25px;
          }
        }

        > div{
          margin-left: 15px;
          cursor: pointer;
          position: relative;
          white-space: nowrap;
          .num-div{
            position: absolute;
            background: #FA5A57;
            width: 20px;
            height: 15px;
            line-height: 15px;
            top: -3px;
            right:-10px;
            text-align: center;
            color: white;
            font-size: 12px;
            border-radius: 8px;
          }
        }

        .up-thing-div{
          background: #FB7299;
          width: 100px;
          height:36px;
          border-radius: 2px;
          color: #FFFFFF;
          line-height: 36px;
        }
      }



    }
    .search-box{
      margin: 0 50px;
      width: 100%;
      max-width: 450px;
      background: #F4F4F4;
      border: 1px solid #E7E7E7;
      padding: 0px 10px;
      position: relative;
      display: flex;
      .search-button-div{
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 2px;
        background: #E7E7E7;
        line-height: 26px;
        width: 48px;
        height: 100%;
        .search-icon{
          position: absolute;
          top: 8px;
          left: 15px;
          fill: #515151;
          font-size: 19px;
          line-height: 36px;
          cursor: pointer;
          transition: fill .3s;
          transition-property: fill;
          transition-duration: 0.3s;
          transition-timing-function: ease;
          transition-delay: 0s;

        }
        .search-icon:hover{
          fill:#1890ff;
        }
      }
      .search-input{
        width: 100%;
        background: #F4F4F4;
        outline: none;

      }
    }
    .div-title-bar-middle{
      width: 100%;
      justify-content: center;
    }

    .icon {
      width: 100px;
      height: 100px;
      color: red;
    }


    .point-effect{
      cursor: pointer;
      transition: color .3s;
      transition-property: color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
    .point-effect:hover{
      color: #1890ff;
    }


  }


</style>
