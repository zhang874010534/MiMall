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
          <a href=""></a>
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
    <div class="nav-main">
      <div class="container">
        <!-- 左边logo -->
        <div class="logo">
          <a href="https://github.com/zhang874010534" target="_blank"></a>
        </div>
        <!-- 中间menu -->
        <div class="menu">
          <div class="menu-item">
            <span>小米手机</span>
            <div class="children">
              <div class="chidren-item">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90"
                  alt=""
                />
                <span class="title">小米10 Pro</span>
                <span class="price">4999元起</span>
              </div>
              <div class="chidren-item">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138&f=webp&q=90"
                  alt=""
                />
                <span class="title">小米10 Pro</span>
                <span class="price">4999元起</span>
              </div>
              <div class="chidren-item">
                <img
                  src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138"
                  alt=""
                />
                <span class="title">小米10 Pro</span>
                <span class="price">4999元起</span>
              </div>
              <div class="chidren-item">
                <img
                  src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=200&h=138  "
                  alt=""
                />
                <span class="title">小米10 Pro</span>
                <span class="price">4999元起</span>
              </div>
              <div class="chidren-item">
                <img
                  src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=200&h=138 "
                  alt=""
                />
                <span class="title">小米10 Pro</span>
                <span class="price">4999元起</span>
              </div>
              <div class="chidren-item">
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=200&h=138&f=webp&q=90"
                  alt=""
                />
                <span class="title">小米10 Pro</span>
                <span class="price">4999元起</span>
              </div>
            </div>
          </div>
          <div class="menu-item">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <!-- 右边搜索框 -->
        <div class="search">
          <input type="text" />
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  created() {
    // this.getProductList();
  },
  methods: {
    // async getProductList() {
    //   let res = await this.axios.get("/products", {
    //     params: {
    //       categoryId: "100012"
    //     }
    //   });
    // }
  }
};
</script>
<style lang="scss">
@mixin beforeAfter($url) {
  content: "";
  display: inline-block;
  width: 55px;
  height: 55px;
  background: url($url) no-repeat;
  background-size: contain;
}
@mixin container() {
  width: 1226px;
  margin: 0 auto;
}
.header {
  .nav-top {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include container();
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        margin-right: 15px;
        color: #b0b0b0;
      }
      .cart {
        width: 110px;
        height: 39px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .cart-icon {
          width: 16px;
          height: 12px;
          background: url("../../public/imgs/icon-cart-checked.png") no-repeat;
          background-size: contain;
          margin-right: 5px;
        }
      }
    }
  }
  .nav-main {
    .container {
      @include container();
      height: 112px;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        width: 55px;
        height: 55px;
        background: var(--themeColor);
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          transition: all 0.3s linear;
          &::before {
            @include beforeAfter("../../public/imgs/mi-logo.png");
          }
          &::after {
            @include beforeAfter("../../public/imgs/mi-home.png");
          }
          &:hover {
            margin-left: -55px;
          }
        }
      }
      .menu {
        padding-left: 209px;
        flex-grow: 1;
        .menu-item {
          display: inline-block;
          font-weight: bold;
          margin-left: 15px;
          height: 112px;
          span {
            cursor: pointer;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          &:hover {
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            width: 1226px;
            height: 0;
            position: absolute;
            left: 0;
            top: 105px;
            transition: all 0.6s ease;
            display: flex;
            align-items: center;
            overflow: hidden;
            opacity: 0;
            border-top: 1px solid #e0e0e0;
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
            .chidren-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: normal;
              font-size: 12px;
              flex: 1;
              position: relative;
              &::before {
                content: "";
                width: 1px;
                height: 100px;
                background: #e0e0e0;
                position: absolute;
                top: 0;
                left: 0;
              }
              img {
                width: 160px;
                height: auto;
              }
              .title {
                margin-top: 30px;
              }
              .price {
                margin-top: 5px;
                color: var(--themeColor);
              }
            }
          }
        }
      }
      .search {
        width: 319px;
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          width: 264px;
          height: 50px;
          border: none;
          border-right: 1px solid #e0e0e0;
          padding-left: 14px;
          box-sizing: border-box;
        }
        a {
          width: 18px;
          height: 18px;
          background: url("../../public/imgs/icon-search.png") no-repeat;
          background-size: contain;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
