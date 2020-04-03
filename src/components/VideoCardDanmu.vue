<template>
  <div   :style="{left:left,transition:' left '+time+' linear'}" class="danmu-item">
    <span>{{text}}</span>
  </div>
</template>
<script>
export default {
  name:"video-card-danmu",
  components: {},
  data () {
    return {

    }

  },
  computed: {},
  methods: {
    getLeft(){
      console.log("123");
      return '-90px';
    }
  },
  created () {

  },
  props: ['text','left','time']

}


</script>
<style type="text/scss" lang="scss">
  .danmu-item{
    color: #fff;
    font-size: 14px;
    text-shadow: 1px 2px 2px  #001;
    position: absolute;
    top: 8px;
    left: 100%;
    /*transition: left 4s linear;*/
    white-space: nowrap;
  }

</style>
