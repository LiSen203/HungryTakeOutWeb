<template>
  <div class="headers">
    <div class="content-warp">
      <div class="avatar">
        <img width="64"
             height="64"
             :src="seller.avatar">
      </div>
      <!-- 标题 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="brand-name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support"
             v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <!-- 订单个数 -->
      <div class="supports-count"
           v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
      </div>
    </div>
    <div class="info-warpper">
      <span class="gonggao-title"></span>
      <span class="gonggao-text">{{seller.bulletin}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  props: {
    seller: {
      type: Object
    }

  }

}
</script>
<style>
.headers {
  color: #fff;
  background: #999;
}
.content-warp {
  padding: 24px 12px 18px 24px;
  position: relative;
  font-size: 0;
}
.avatar {
  display: inline-block;
  border-radius: 2px;
  vertical-align: top;
}
.content {
  display: inline-block;
  margin-left: 16px;
  font-size: 14px;
}
.title {
  margin: 2px 0 8px 0;
}
.brand {
  width: 30px;
  height: 18px;
  display: inline-block;
  vertical-align: top;
  background: url(brand@2x.png) no-repeat;
  background-size: 30px 18px;
}
.brand-name {
  font-size: 16px;
  margin-left: 6px;
  font-weight: bold;
  line-height: 18px;
  display: inline-block;
}
.description {
  margin: 8px 0 10px 0;
  font-size: 12px;
  font-weight: 200;
  line-height: 12px;
}
.support .icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-right: 4px;
  background: url(decrease_1@2x.png);
  background-size: 12px 12px;
  vertical-align: middle;
}
.text {
  line-height: 12px;
  font-weight: 200;
  font-size: 10px;
}
.supports-count {
  position: absolute;
  right: 12px;
  bottom: 18px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 14px;

  background: #666;
  text-align: center;
}
.count {
  font-size: 10px;
}
</style>
