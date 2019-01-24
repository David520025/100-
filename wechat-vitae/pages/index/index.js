//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  // 绑定点击事件后跳转页面
  tiaozhuan1:function(){
    wx.navigateTo({
      url: '../profile1/profile1'  
    })
  },
  tiaozhuan2: function () {
    wx.navigateTo({
      url: '../profile2/profile2'
    })
  },
  tiaozhuan3: function () {
    wx.navigateTo({
      url: '../profile3/profile3'
    })
  },
  tiaozhuan4: function () {
    wx.navigateTo({
      url: '../profile4/profile4'
    })
  },
  tiaozhuan5: function () {
    wx.navigateTo({
      url: '../profile5/profile5'
    })
  },
  tiaozhuan6: function () {
    wx.navigateTo({
      url: '../profile6/profile6'
    })
  }
})
