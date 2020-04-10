<template>
  <div class="float-right">
    <div class="float-totop" @click="toTop">
      <svg-icon iconClass='totop' className='totop-icon ' ></svg-icon>
    </div>
    <div  class="float-mini select" @click="miniON=!miniON">
      <!--优化了文字被选中的bug-->
      <div>mini</div>
      <div>{{miniON?"ON":"OFF"}}</div>
    </div>
    <div class="float-to-help">
      <a href="https://www.bilibili.com/blackboard/help.html#%E5%B8%B8%E8%A7%81%E6%92%AD%E6%94%BE%E9%97%AE%E9%A2%98%E8%87%AA%E6%95%91%E6%96%B9%E6%B3%95"></a>
      <svg-icon iconClass='help' className='help-icon' ></svg-icon>
    </div>


  </div>
</template>
<script>
export default {
  name:"float-nav",
  components: {},
  data () {
    return {
      timer:'',
      miniON:false
    }

  },
  computed: {},
  methods: {
    handleWheel(){
      this.clearTimer();
    },
    toTop(){
      this.timer = setInterval(() => {
        let top = document.documentElement.scrollTop
        let speed = Math.ceil(top / 5)
        document.documentElement.scrollTop = top - speed
        if (top === 0) {
          clearInterval(this.timer)
        }
      }, 20)
    },
    clearTimer(){
      if (this.timer!=''){
        clearInterval(this.timer)

      }
    }
  },
  mounted() {
    //chrome ie 监听鼠标滚轮
    window.addEventListener('mousewheel',this.handleWheel,false)
//// firefox
    window.addEventListener("DOMMouseScroll",this.handleWheel,false)
  },

  created () {


  },
  props: {}

}


</script>
<style type="text/scss" lang="scss">
  .float-right{
    position: fixed;
    right: 10px;
    bottom: 100px;
    >div{
      background: #f7f9fa;
      border: 1px solid #e5e9ef;
      border-radius: 3px;
      width: 45px;
      height: 45px;
      margin-bottom: 8px;
      transition: all .3s;
      cursor: pointer;
      color: #999;
      text-align: center;
    }
    .float-to-help{
      position: relative;
      line-height: 55px;
      >a{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .help-icon{
        fill:#999;
        font-size: 30px;
      }
    }
    >div:hover{
      background-color: #00a1d6;
      border-color: #00a1d6;
      color: #fff;
      .totop-icon{
        fill:#fff;
      }
      .help-icon{
        fill:#fff;
      }
    }

    .float-totop{
      line-height: 45px;
      .totop-icon{
        fill:#999;
      }
    }
    .float-mini{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      font-size: 12px;
    }

  }
</style>
