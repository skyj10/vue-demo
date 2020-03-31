<template>
  <nav>
    <div class="total-page-div">共{{page}}页</div>
    <ul class="pagination">
      <li  :class="{'disabled': current == 1}" v-if="current!=1"><a class="page-move" href="javascript:;" @click="setCurrent(current - 1)"> 上一页 </a></li>
      <!--<li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>-->
      <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;"
                                                                          @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <!--<li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>-->
      <li :class="{'disabled': current == page}" v-if="current!=page"> <a class="page-move" href="javascript:;" @click="setCurrent(current + 1)"> 下一页</a></li>
    </ul>
  </nav>
</template>

<script type="es6">
export default {
  name: 'pagination',
  data () {
    return {
      current: this.currentPage
    }
  },
  props: {
    total: {// 数据总条数
      type: Number,
      default: 0
    },
    display: {// 每页显示条数
      type: Number,
      default: 10
    },
    currentPage: {// 当前页码
      type: Number,
      default: 1
    },
    pagegroup: {// 分页条数
      type: Number,
      default: 5,
      coerce: function (v) {
        v = v > 0 ? v : 5
        return v % 2 === 1 ? v : v + 1
      }
    }
  },
  computed: {
    page: function () { // 总页数
      return Math.ceil(this.total / this.display)
    },
    grouplist: function () { // 获取分页页码
      var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current
      let totalpage=this.page;
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({text: this.page - len, val: this.page - len})
        }

        return temp
      }
      while (len--) {
        temp.push(this.page - len)
      }

      var idx = temp.indexOf(center);
      (idx < count) && ( center = center + count - idx);
      (this.current > this.page - count) && ( center = this.page - count)
      temp = temp.splice(center - count - 1, this.pagegroup)
      do {
        var t = temp.shift()
        list.push({
          text: t,
          val: t
        })
      } while (temp.length)
      if (this.page > this.pagegroup) {
        (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1})&&list.unshift({text: 1, val:1});
        (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1})&&list.push({text: this.page, val:this.page})
      }
      return list
    }
  },
  methods: {
    setCurrent: function (idx) {
      if (this.current != idx && idx > 0 && idx < this.page + 1) {
        this.current = idx
        this.$emit('pagechange', this.current)
      }
    }
  }
}
</script>

<style type="text/scss" lang="scss">

  nav{
    display: flex;
    justify-content:flex-end;
    .total-page-div{
      font-size: 12px;
      line-height: 20px;
      margin-right: 10px;
    }
  }




  .pagination {
    overflow: hidden;
    /*display: table;*/
    /*margin: 0 auto;*/
    /*width: 100%;*/
    /*height: 50px;*/

    li {
      float: left;
      /*height: 30px;*/
      /*border-radius: 5px;*/
      /*margin: 3px;*/
      color: #666;

      &
      :hover {

        a {
          color: #45A0D7;
        }

      }
      .page-move{
        width: auto;
      }
      a {
        display: block;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        /*border-radius: 5px;*/
        text-decoration: none
      }

    }
    .active {
      a {
        color: #45A0D7;
      }

    }
  }


</style>
