<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order, index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }}
                <span>|</span>
                {{ order.receiverName }}
                <span>|</span>
                订单号：{{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div
                  class="good-list"
                  v-for="(item, i) in order.orderItemVoList"
                  :key="i"
                >
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money">
                      {{ item.totalPrice + 'X' + item.quantity }}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{ order.statusDesc }}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{
                  order.statusDesc
                }}</a>
              </div>
            </div>
          </div>
          <el-pagination
            v-if="true"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          >
          </el-pagination>
          <div class="load-more" v-if="false">
            <el-button type="primary" :loading="loading" @click="loadMore"
              >加载更多</el-button
            >
          </div>
          <div
            class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="true"
            infinite-scroll-distance="410"
            v-if="false"
          >
            <img
              src="/imgs/loading-svg/loading-spinning-bubbles.svg"
              alt=""
              v-show="loading"
            />
          </div>
          <no-data v-if="!loading && list.length == 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader';
import Loading from './../components/Loading';
import NoData from './../components/NoData';
import { Pagination, Button } from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll';
export default {
  name: 'order-list',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: {
    infiniteScroll
  },
  data() {
    return {
      loading: false,
      list: [],
      pageSize: 10,
      pageNum: 1,
      total: 0,
      showNextPage: true, //加载更多：是否显示按钮
      busy: false, //滚动加载，是否触发
      fackRes: {
        total: 987,
        list: [
          {
            orderNo: 1590140156190,
            payment: 4797,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 06:35:56',
            orderItemVoList: [
              {
                orderNo: 1590140156190,
                productId: 38,
                productName: 'Redmi K20 Pro 尊享版',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
                currentUnitPrice: 2699,
                quantity: 1,
                totalPrice: 2699,
                createTime: '2020-05-23 06:35:56'
              },
              {
                orderNo: 1590140156190,
                productId: 39,
                productName: 'Redmi Note 7',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
                currentUnitPrice: 1099,
                quantity: 1,
                totalPrice: 1099,
                createTime: '2020-05-23 06:35:56'
              },
              {
                orderNo: 1590140156190,
                productId: 37,
                productName: 'Redmi Note 8',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
                currentUnitPrice: 999,
                quantity: 1,
                totalPrice: 999,
                createTime: '2020-05-23 06:35:56'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590139560660,
            payment: 2398,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 06:26:00',
            orderItemVoList: [
              {
                orderNo: 1590139560660,
                productId: 36,
                productName: 'Redmi Note 8 Pro',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
                currentUnitPrice: 1399,
                quantity: 1,
                totalPrice: 1399,
                createTime: '2020-05-23 06:26:00'
              },
              {
                orderNo: 1590139560660,
                productId: 37,
                productName: 'Redmi Note 8',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
                currentUnitPrice: 999,
                quantity: 1,
                totalPrice: 999,
                createTime: '2020-05-23 06:26:00'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590138660972,
            payment: 3797,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 06:11:00',
            orderItemVoList: [
              {
                orderNo: 1590138660972,
                productId: 37,
                productName: 'Redmi Note 8',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
                currentUnitPrice: 999,
                quantity: 2,
                totalPrice: 1998,
                createTime: '2020-05-23 06:11:01'
              },
              {
                orderNo: 1590138660972,
                productId: 42,
                productName: '小米CC9',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg',
                currentUnitPrice: 1799,
                quantity: 1,
                totalPrice: 1799,
                createTime: '2020-05-23 06:11:01'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590136618556,
            payment: 9896,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 05:36:58',
            orderItemVoList: [
              {
                orderNo: 1590136618556,
                productId: 32,
                productName: '小米CC9 美图定制版',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png',
                currentUnitPrice: 2599,
                quantity: 2,
                totalPrice: 5198,
                createTime: '2020-05-23 05:36:58'
              },
              {
                orderNo: 1590136618556,
                productId: 45,
                productName: '红米Note 7',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551869450.61563110.jpg',
                currentUnitPrice: 999,
                quantity: 1,
                totalPrice: 999,
                createTime: '2020-05-23 05:36:58'
              },
              {
                orderNo: 1590136618556,
                productId: 34,
                productName: '小米9 Pro 5G',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png',
                currentUnitPrice: 3699,
                quantity: 1,
                totalPrice: 3699,
                createTime: '2020-05-23 05:36:58'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590132904903,
            payment: 5198,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 20,
            statusDesc: '已付款',
            paymentTime: '2020-05-22 16:28:44',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 04:35:04',
            orderItemVoList: [
              {
                orderNo: 1590132904903,
                productId: 32,
                productName: '小米CC9 美图定制版',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png',
                currentUnitPrice: 2599,
                quantity: 2,
                totalPrice: 5198,
                createTime: '2020-05-23 04:35:04'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590124650636,
            payment: 2599,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 02:17:30',
            orderItemVoList: [
              {
                orderNo: 1590124650636,
                productId: 33,
                productName: '小米9',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png',
                currentUnitPrice: 2599,
                quantity: 1,
                totalPrice: 2599,
                createTime: '2020-05-23 02:17:30'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590123918876,
            payment: 999,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 02:05:18',
            orderItemVoList: [
              {
                orderNo: 1590123918876,
                productId: 37,
                productName: 'Redmi Note 8',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
                currentUnitPrice: 999,
                quantity: 1,
                totalPrice: 999,
                createTime: '2020-05-23 02:05:18'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590122214312,
            payment: 5297,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 01:36:54',
            orderItemVoList: [
              {
                orderNo: 1590122214312,
                productId: 31,
                productName: '小米CC9e',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png',
                currentUnitPrice: 1299,
                quantity: 1,
                totalPrice: 1299,
                createTime: '2020-05-23 01:36:54'
              },
              {
                orderNo: 1590122214312,
                productId: 33,
                productName: '小米9',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png',
                currentUnitPrice: 2599,
                quantity: 1,
                totalPrice: 2599,
                createTime: '2020-05-23 01:36:54'
              },
              {
                orderNo: 1590122214312,
                productId: 36,
                productName: 'Redmi Note 8 Pro',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
                currentUnitPrice: 1399,
                quantity: 1,
                totalPrice: 1399,
                createTime: '2020-05-23 01:36:54'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590119889609,
            payment: 1998,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 00:58:09',
            orderItemVoList: [
              {
                orderNo: 1590119889609,
                productId: 45,
                productName: '红米Note 7',
                productImage:
                  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551869450.61563110.jpg',
                currentUnitPrice: 999,
                quantity: 2,
                totalPrice: 1998,
                createTime: '2020-05-23 00:58:09'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          },
          {
            orderNo: 1590119525468,
            payment: 17492,
            paymentType: 1,
            paymentTypeDesc: '在线支付',
            postage: 0,
            status: 10,
            statusDesc: '未支付',
            paymentTime: '',
            sendTime: '',
            endTime: '',
            closeTime: '',
            createTime: '2020-05-23 00:52:05',
            orderItemVoList: [
              {
                orderNo: 1590119525468,
                productId: 38,
                productName: 'Redmi K20 Pro 尊享版',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
                currentUnitPrice: 2699,
                quantity: 5,
                totalPrice: 13495,
                createTime: '2020-05-23 00:52:05'
              },
              {
                orderNo: 1590119525468,
                productId: 39,
                productName: 'Redmi Note 7',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
                currentUnitPrice: 1099,
                quantity: 2,
                totalPrice: 2198,
                createTime: '2020-05-23 00:52:05'
              },
              {
                orderNo: 1590119525468,
                productId: 42,
                productName: '小米CC9',
                productImage:
                  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg',
                currentUnitPrice: 1799,
                quantity: 1,
                totalPrice: 1799,
                createTime: '2020-05-23 00:52:05'
              }
            ],
            imageHost: null,
            shippingId: 2143,
            receiverName: 'yy',
            shippingVo: {
              receiverName: 'yy',
              receiverPhone: null,
              receiverMobile: '66666666666',
              receiverProvince: '北京',
              receiverCity: '北京',
              receiverDistrict: '北京',
              receiverAddress: 'hhhh',
              receiverZip: '666666'
            }
          }
        ],
        pageNum: 1,
        pageSize: 10,
        size: 10,
        startRow: 1,
        endRow: 10,
        pages: 99,
        prePage: 0,
        nextPage: 2,
        isFirstPage: true,
        isLastPage: false,
        hasPreviousPage: false,
        hasNextPage: true,
        navigatePages: 8,
        navigatepageNums: [1, 2, 3, 4, 5, 6, 7, 8],
        navigateFirstPage: 1,
        navigateLastPage: 8
      }
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.loading = true;
      this.busy = true;
      // this.axios
      //   .get('/orders', {
      //     params: {
      //       pageSize: 10,
      //       pageNum: this.pageNum
      //     }
      //   })
      //   .then((res) => {
      //     this.fackRes = res;
      //     this.loading = false;
      //     this.list = this.list.concat(res.list);
      //     this.total = res.total;
      //     this.showNextPage = res.hasNextPage;
      //     this.busy = false;
      //   })
      //   .catch(() => {
      //     this.loading = false;
      //   });
      let res=this.fackRes
      this.loading = false;
      this.list = this.list.concat(res.list);
      this.total = res.total;
      this.showNextPage = res.hasNextPage;
      this.busy = false;
    },
    goPay(orderNo) {
      // 三种路由跳转方式
      // this.$router.push('/order/pay')
      /*this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        })*/
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      });
    },
    // 第一种方法：分页器
    handleChange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList();
    },
    // 第二种方法：加载更多按钮
    loadMore() {
      this.pageNum++;
      this.getOrderList();
    },
    // 第三种方法：滚动加载，通过npm插件实现
    scrollMore() {
      this.busy = true;
      setTimeout(() => {
        this.pageNum++;
        this.getList();
      }, 500);
    },
    // 专门给scrollMore使用
    getList() {
      this.loading = true;
      this.axios
        .get('/orders', {
          params: {
            pageSize: 10,
            pageNum: this.pageNum
          }
        })
        .then((res) => {
          this.list = this.list.concat(res.list);
          this.loading = false;
          if (res.hasNextPage) {
            this.busy = false;
          } else {
            this.busy = true;
          }
        });
    }
  }
};
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }

      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
  }
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6600;
}
</style>
