<template>
  <div class="header">
    <!-- 头部导航 -->
    <div class="nav-top">
      <div class="container">
        <!-- 左边的menu -->
        <div class="topbar-nav">
          <a href="">小米商城</a>
          <a href="">MUI</a>
          <a href="">云服务</a>
          <a href="">协议规则</a>
        </div>
        <!-- 右边的用户 -->
        <div class="user-info">
          <a href="">登录</a>
          <a href="">注册</a>
          <a href="" class="cart"><span class="cart-icon"></span>购物车</a>
        </div>
      </div>
    </div>
    <!-- 中间导航 -->
    <div class="nav-main"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.header {
  .nav-top {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .cart-icon {
          width: 16px;
          height: 12px;
          background: url('../../public/imgs/icon-cart-checked.png') no-repeat;
          background-size: contain;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
