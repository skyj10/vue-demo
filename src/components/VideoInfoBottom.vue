<template>
  <div class="video-info-bottom-box">
    <div class="video-info-sanlian">
      <div class="video-sanlian-button-content">
        <div class="sanlian-button">
          <svg-icon iconClass='like' className='sanlian-icon '></svg-icon>
          <span>15</span>
        </div>
        <div class="sanlian-button">
          <svg-icon iconClass='coin' className='sanlian-icon '></svg-icon>
          <span>23</span>
        </div>
        <div class="sanlian-button">
          <svg-icon iconClass='collect' className='sanlian-icon '></svg-icon>
          <span>12</span>
        </div>
        <div class="sanlian-button">
          <svg-icon iconClass='share' className='sanlian-icon '></svg-icon>
          <span>32</span>
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
        <div ref="describe" :class="{'describe-show':isHideDes}" class="describe-content">
          Hello,大家好吖~
          这次给大家带来的是《我的三体罗辑传》的ED《黑暗森林》
          1. 这首作品是送给所有支持我的观众姥爷们的！《夜航星》 av96387480 能够达到两万多的播放量，荣登我的三体话题榜的热门作品，离不开各位的三连与支持！为感谢大家，特意再翻弹一曲《我的三体罗辑传》中的ED《黑暗森林》！
          2. 还能会想起曾经还是乱纪元时追《我的三体罗辑传》的体验。每次片尾曲《黑暗森林》想起时，都会被深深地震撼到。
          3. 这次翻弹的曲目难度非常大，高过之前所有作品的难度。截止发稿时，中间有一段仍然不够完美，up主已经尽力了，在这里给大家谢罪了。
          4. up到现在还清晰地记着《三体》小说中对黑暗森林的精彩生动的描写：宇宙就是一座黑暗森林，每个文明都是带枪的猎人，像幽灵般潜行于林间，轻轻拨开挡路的树枝，竭力不让脚步发出一点儿声音，连呼吸都必须小心翼翼：他必须小心，因为林中到处都有与他一样潜行的猎人，如果他发现了别的生命，能做的只有一件事：开枪消灭之。在这片森林中，他人就是地狱，就是永恒的威胁，任何暴露自己存在的生命都将很快被消灭，这就是宇宙文明的图景，这就是对费米悖论的解释。
          5. 谨以此曲献给《三体》、《我的三体》和黑暗森林
          6. up之后还会继续更新更多的钢琴翻弹作品，喜欢的朋友们可以一键三连或关注来支持up哦~~~一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连一键三连

          黑暗森林（《我的三体罗辑传》ED SIZE）

          钢琴：童嘎
          剪辑：童嘎
          原唱：雲翼星辰
          原曲：《Schwarzer Regen》
          作曲 : regulus
          作词 : lnine=小九
          演奏乐器：Yamaha cp88
          钢琴音源：Yamaha Studio Grand C7
          曲谱：耀雪_DraXon av96212986
          剪辑素材：黑暗森林MV av6585316
        </div>
        <div v-if="isHideDescribe"   class="describe-hidden-button">
          <span class="point-effect" @click="isHideDes=!isHideDes">{{isHideDes?"收起":"展开更多"}}</span>
        </div>

      </div>
      <div class="video-tag-box">
        <ul>

          <li v-for="item of tagList" class="point-effect tag-div"><span>{{item.tagText}}</span></li>

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
          tagText:"演奏"
        }, {
          tagText:"三体"
        }, {
          tagText:"我的三体"
        },{
          tagText:"罗辑"
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
        line-height: 25px;
        padding-right: 8px;
        padding-left: 8px;
        background-color: #F4F4F4;
        border-radius: 14px;
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
        border-radius: 14px;
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
      .tag-div{
        border: 1px solid #F4F4F4;
        transition: all .3s;
      }
      .tag-div:hover{
        border: 1px solid #45A0D7;
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
      font-size: 12px;
      margin-right: 16px;
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
    width: 80px;
    height: auto;
    font-size: 14px;
    padding: 10px 0;
    top: 30px;
    right: 0px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.28);
    .menu-item{
      color: #222;
      width: 100%;
      height: 34px;
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
