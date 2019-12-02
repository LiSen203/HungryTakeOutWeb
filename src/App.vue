
<template>
  <div id="app">
    <headerIndex :seller='seller'>我是头部</headerIndex>

    <div class="tabList border-1px">
      <div class="tab-item">
        <router-link to='/goods'
                     active-class="active">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!-- <div class="content">
      我是内容
    </div> -->

  </div>
</template>

<script>
import headerIndex from './components/header/headers.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
        console.log(this.seller)
      }
    })
  },
  components: { 'headerIndex': headerIndex }
}
</script>
<style>
.tabList {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab-item {
  flex: 1;
  text-align: center;
}
.tab-item a {
  display: block;
  color: #5c636a;
  font-size: 14px;
}
.tab-item a.active {
  color: #f00;
}
</style>
