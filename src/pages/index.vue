<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" v-bind:key="i">
                  <li v-for="(sub, j) in item" v-bind:key="j">
                    <a v-bind:href="sub ? '#/product/' + sub.id : ''">
                      <img
                        v-bind:src="sub ? sub.img : 'imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : '小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'#/product/' + item.id"
              ><img v-bind:src="item.img"
            /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a 
          v-bind:href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          v-bind:key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="#/product/35"
              ><img v-lazy="'imgs/mix-alpha.jpg'" alt=""
            /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" v-bind:key="i">
              <div class="item" v-for="(item, j) in arr" v-bind:key="j">
                <span v-bind:class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <button @click="videoFlag=true">video彩蛋</button>
    <div class="video-box" >
      <div class="overlay" v-if="videoFlag"></div>
      <div class="video" :class="{'slide':videoFlag}">
        <span @click="clodeVideo">x</span>
        <video src="imgs/product/video.mp4" controls autoplay ref="videoDom"></video>
      </div>
    </div>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar';
import Modal from './../components/Modal';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: 'imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: 'imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: 'imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: 'imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: 'imgs/slider/slide-1.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: 'imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: 'imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: 'imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: 'imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: 'imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: 'imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: 'imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: 'imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [
        [
          {
            id: 36,
            categoryId: 100012,
            name: 'Redmi Note 8 Pro',
            subtitle: '6400万全场景四摄',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
            price: 1399,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          },
          {
            id: 37,
            categoryId: 100012,
            name: 'Redmi Note 8',
            subtitle: '千元4800万四摄',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
            price: 999,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          },
          {
            id: 38,
            categoryId: 100012,
            name: 'Redmi K20 Pro 尊享版',
            subtitle: '骁龙855 Plus， 弹出全面屏',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
            price: 2699,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          },
          {
            id: 39,
            categoryId: 100012,
            name: 'Redmi Note 7',
            subtitle: '4800万拍照千元机',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
            price: 1099,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          }
        ],
        [
          {
            id: 40,
            categoryId: 100012,
            name: 'Redmi 7 ',
            subtitle: '4000mAh超长续航',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg',
            price: 699,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          },
          {
            id: 41,
            categoryId: 100012,
            name: 'Redmi 7A',
            subtitle: '小巧大电量 持久流畅',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
            price: 579,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          },
          {
            id: 42,
            categoryId: 100012,
            name: '小米CC9',
            subtitle: '3200万自拍，4800万三摄',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg',
            price: 1799,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          },
          {
            id: 43,
            categoryId: 100012,
            name: '小米9 Pro 5G',
            subtitle: '5G双卡全网通，骁龙855Plus',
            mainImage:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg',
            price: 3699,
            status: 1,
            imageHost: 'http://img.springboot.cn'
          }
        ]
      ],
      showModal: false,
      videoFlag:false
    };
  },
  created() {
  },
  mounted() {
    // this.init();
    Object.defineProperty
  },
  methods: {
    // init() {
    //   this.axios
    //     .get('/products', {
    //       params: {
    //         categoryId: 100012,
    //         pageSize: 14
    //       }
    //     })
    //     .then((res) => {
    //       res.list = res.list.slice(6, 14);
    //       this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
    //     });
    // },
    addCart(id) {
      this.axios
        .post('/carts', {
          productId: id,
          selected: true
        })
        .then((res) => {
          this.showModal = true;
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
        });
    },
    goToCart() {
      this.$router.push('/cart');
    },
    clodeVideo(){
      this.videoFlag=false
      this.$refs.videoDom.pause()
    }
  }
};
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@mixin bgImg($w: 0, $h: 0, $img: '', $size: contain) {
  display: inline-block;
  width: $w;
  height: $h;
  background: url($img) no-repeat center;
  background-size: $size;
}
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: ' ';
              @include bgImg(10px, 15px, '../assets/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, '../assets/icon-cart-hover.png');
                  background-image: '../assets/icon-cart-hover.png';
                  content: ' ';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
  .video-box {
    .overlay {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: black;
      opacity: 0.4;
      z-index: 10;
    }
    .video {
      position: fixed;
      left: 50%;
      top: -50%;
      transform: translate(-50%, -50%);
      width: 1000px;
      height: 536px;
      z-index: 11;
      opacity: 0;
      transition: all .4s;
      &.slide{
        top: 50%;
        opacity: 1;
      }
      span {
        display: inline-block;
        font-size: 30px;
        padding: 0 10px;
        border-radius: 50%;
        position: absolute;
        top: 16px;
        right: 42px;
        z-index: 15;
        color: #c8c8c8;
        cursor: pointer;
        &:hover {
          background-color: #e53935;
          color: white;
        }
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: none;
      }
    }
  }
}
</style>
