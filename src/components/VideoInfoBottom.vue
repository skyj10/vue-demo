<template>
  <div class="video-info-bottom-box">
    <div class="video-info-sanlian">
      <div class="video-sanlian-button-content">
        <div class="sanlian-button">
          <svg-icon iconClass='like' className='sanlian-icon '></svg-icon>
          <span>1962</span>
        </div>
        <div class="sanlian-button">
          <svg-icon iconClass='coin' className='sanlian-icon '></svg-icon>
          <span>1962</span>
        </div>
        <div class="sanlian-button">
          <svg-icon iconClass='collect' className='sanlian-icon '></svg-icon>
          <span>1962</span>
        </div>
        <div class="sanlian-button">
          <svg-icon iconClass='share' className='sanlian-icon '></svg-icon>
          <span>1962</span>
        </div>
        <div class="video-sanlian-right">
          <span class="point-effect">
            稿件投诉
          </span>
          <svg-icon iconClass='menu-dot' className='menu-icon '></svg-icon>
          <div class="menu-list-div">
            <div class="menu-item">用手机看</div>
            <div class="menu-item">稍后再看</div>
          </div>
        </div>

      </div>
    </div>
    <div class="video-describe-box">
      <div class="video-describe-content">
        <div ref="describe" :class="{'describe-show':isHideDes}" class="describe-content">教程出自黑马程序员http://yun.itheima.com/course/609.html?bili
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
          教程出自黑马程序员
        </div>
        <div v-if="isHideDescribe"   class="describe-hidden-button">
          <span class="point-effect" @click="isHideDes=!isHideDes">{{isHideDes?"收起":"展开更多"}}</span>
        </div>

      </div>
      <div class="video-tag-box">
        <ul>

          <li v-for="item of tagList" class="point-effect"><span>{{item.tagText}}</span></li>

          <!--<li class="point-effect add-tag"><svg-icon iconClass='add' className='add-icon '></svg-icon></li>-->
          <li class="input-tag">
               <input type="text" ref="taginput" placeholder="按回车键完成输入" @focus="isTagInputFocus=true" @blur="isTagInputFocus=false" :class="{'input-hover':isTagInputFocus}"  @mouseenter="tagInputFocus($event)" @mouseout="cleanTagInputFocus($event)" @keyup.enter="submitTag($event)" >
            <svg-icon iconClass='close' className='close-icon ' @click="inputBlur"></svg-icon>
          </li>

        </ul>


      </div>



    </div>

  </div>

</template>
<script>
export default {
  name:'video-info-bottom',
  components: {},
  data () {
    return{
      isHideDes:false,
      isTagInputFocus:false,
      tagList:[
        {
          tagText:"黑马程序员"
        }, {
          tagText:"黑马程序员"
        }, {
          tagText:"黑马程序员"
        },{
          tagText:"黑马程序员"
        },

      ]
    }
  },
  computed: {

  },
  mounted () {
    this.isHideDescribe();
  },
  methods: {
    inputBlur(){
      this.$refs.taginput.blur();
    },
    tagInputFocus(e){
//      this.$refs.tagInput.focus();
      e.currentTarget.focus();
    },
    cleanTagInputFocus(e){
      e.currentTarget.value="";
    },
    submitTag(e){
      console.log(e.currentTarget.value)
      this.tagList.push({
        tagText:e.currentTarget.value
      })
    },
    isHideDescribe(){
      let describeHight= window.getComputedStyle(this.$refs.describe).height.match(/\d+\.\d+/g);

      if(describeHight>62){
        this.isHideDes=true;
      }
      else {
        this.isHideDes=false;
      }
      console.log( window.getComputedStyle(this.$refs.describe).height);
    },
    showDescribe(){

    }


  },
  created () {

  },
  porps: {}

}


</script>
<style type="text/scss" lang="scss">
  .video-tag-box{
    width:100%;
    min-height: 50px;

    >ul{
      font-size: 12px;
      margin: 10px 0px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;

      >li{
        padding: 8px;
        background-color: #F4F4F4;
        border-radius: 12px;
        margin-right: 10px;
        margin-top: 5px;
      }
      .add-tag{
        font-size: 20px;
        padding: 2px 4px;
        .add-icon{
          font-size: 18px;
        }
        .add-icon:hover{
          fill:#45A0D7;
        }
      }
      .input-tag{
        padding: 4px 10px;
        background-color: #F4F4F4;
        border-radius: 12px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        >input{
          background: none;
          width: 0px;
          transition: width .3s;
          outline: none;

        }

        .close-icon{
          font-size: 12px;
          cursor: pointer;
          transform:rotate(45deg);
          transition: transform .3s;

        }
        .close-icon:hover{
          fill:#45A0D7;
        }
        .input-hover{
          width: 120px;
          + .close-icon{
            transform: rotate(90deg);
          }
        }
      }
      .input-tag:hover{
        >input{
          width: 120px;
        }
        .close-icon{
          transform: rotate(90deg);
        }

      }





    }

  }









  .video-describe-box{
    width: 100%;
    height: auto;
    border: 1px solid #E6E9F0;
    border-width:  1px 0px ;
    .video-describe-content{
    }
    .describe-show{
      max-height: none !important;
    }
    .describe-content{
      max-height: 63px;
      text-align: left;
      margin-top: 20px;
      white-space: pre-line;
      transition: all .3s;
      font-size: 12px;
      color: #212121;
      letter-spacing: 0;
      line-height: 18px;
      height: auto;
      width: 573px;
      overflow: hidden;
    }
    .describe-hidden-button{
      text-align: left;
      padding-top: 20px;
      font-size: 12px;

      >span{
        cursor: pointer;

      }
    }
  }







  .video-info-bottom-box{
    width: 100%;
    background: white;

    .video-info-sanlian{
      width: 100%;
      height: 30px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .video-sanlian-button-content{
      height: 100%;

    }
    .sanlian-button{
      float: left;
      height:100%;
      display: flex;
      align-items: center;
      margin-right: 30px;
      cursor: pointer;
    }

    .sanlian-icon{
      font-size: 25px;
      fill:#757575;
    }
    .sanlian-button{
      >span{
        margin-top: 7px;
        margin-left: 5px;
        font-size: 14px;
      }
    }
    .sanlian-button:hover{
      line-height: 30px;
      .sanlian-icon{
        fill:#45A0D7;
      }
      >span{

        cursor: pointer;
        transition: color .3s;
        transition-property: color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        transition-delay: 0s;
        color: #45A0D7;
      }
    }
  }


  .video-sanlian-right{
    position: relative;
    float: right;
    height:100%;
    display: flex;
    align-items: center;
    >span{
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
    }
    .menu-icon{
      cursor: pointer;
      height: 100%;
    }
    .menu-icon:hover{
      + .menu-list-div{
        visibility: visible;
      }
    }
  }

  .menu-list-div:hover{
    visibility: visible;
  }

  .menu-list-div{
    z-index: 10;
    visibility: hidden;
    background: white;
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    width: 100px;
    height: 120px;
    top: 30px;
    right: 0px;
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


</style>
