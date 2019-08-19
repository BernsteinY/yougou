// pages/search_list/index.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,

    keyword:"",

    goods:[],
    // 当前页数
    pagenum:1,
    // 每页条数
    pagesize:10,

    // 是否有更多
    hasMore:true
  },

  handleChange(event) {
    const { index } = event.currentTarget.dataset

    this.setData({
      current: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 返回url 的参数
    this.setData({
      keyword:options.keyword
    })

    // 请求列表数据
    this.getData()
  },

    getData(){
      const {keyword,pagenum,pagesize} = this.data;
      request({
        url: "/goods/search",
        data:{
          query:keyword,
          pagenum,
          pagesize
        }
      }).then(res => {
        const { goods } = res.data.message

            // 判断是否为最后一页
        if(goods.length<this.data.pagesize){
          this.setData({
            hasMore:false
          })
        }

        // 循环修改价格 保留两位小数点
        const newGoods= goods.map(v=>{
          v.goods_price=Number(v.goods_price).toFixed(2);
          return v;
        })

        this.setData({
          goods:[...this.data.goods,...newGoods]
        })
      })
    },

    // 加载下一页的数据
    onReachBottom(){
      // 没有更多 直接返回
      if(!this.data.hasMore){
        return;
      }

      // 页数 加1
      this.setData({
        pagenum:this.data.pagenum+1
      })

      this.getData()
    },

  
})