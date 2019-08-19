// pages/goods_detail/index.js

import request from "../../utils/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {id}=options
    request({
      url:"/goods/detail",
      data:{
        goods_id:id
      }
    }).then(res=>{
      console.log(res)

      const {message}=res.data;

      this.setData({
        detail:message
      })
    })
  },

})