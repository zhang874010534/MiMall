<template>
  <div class="footerComponent">
    <div class="footer-logo">
      <img src="imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>             
    <div class="footer-link">
      <a href="//github.com/zhang874010534" target="_blank">主页</a><span>|</span>
      <a href="http://zhang874010534.github.io/vue_shop_management/dist" target="_blank">Vue后台管理系统</a><span>|</span>
      <a href="https://github.com/zhang874010534/wechat_yougou" target="_blank">微信小程序</a><span>|</span>
      <a href="https://zhang874010534.github.io/React-Movie" target="_blank">React Movie</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">zhang87010534.github.io</span> All Rights Reserved.</div>
  </div>
</template>
<script>
  export default{
  }
</script>
<style lang="scss" scoped>
  .footerComponent{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:var(--themeColor);
      }
    }
  }
</style>
