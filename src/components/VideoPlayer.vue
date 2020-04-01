<template>
  <div class="player-box-div">
    <div class="play-content-div">

    </div>


  </div>

  </div>
</template>
<script>
export default {
  name: 'video-player',
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {

  },
  porps: {}

}


</script>
<style type="text/scss" lang="scss">


  .player-box-div {
    margin-top: 15px;
    width: 100%;
    padding-bottom: 55%;
    background: lightcyan;
    position: relative;

    .play-content-div {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      background: lightpink;
    }
  }
</style>
