//index.js
//获取应用实例

import request from "../../utils/request.js";
const app = getApp()

Page({
  data: {
    autoplay: true,
    // 轮播图
    imgUrls: [],
    // 菜单数据
    menus:[],
    // 产品部分
    floor:[]
  },

  onLoad() {
    // 轮播图部分
    request({
      url: "/home/swiperdata"
    }).then(res => {
      const { message } = res.data

      this.setData({
        imgUrls: message
      })
    })
    // 菜单部分
    request({
      url:"/home/catitems"
    }).then(res=>{
      console.log(res)
      const {message}=res.data

      this.setData({
        menus:message
      })
    })
    // 产品部分
    request({
      url:"/home/floordata"
    }).then(res=>{
      console.log(res)
      const {message}=res.data
      this.setData({
        floor:message
      })
      
    })
  }
})
