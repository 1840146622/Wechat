// pages/mine/mine.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
    //跳转到全部订单界面
goToAllList:function(currentType){
    wx:wx.navigateTo({
      url: '/pages/orders/orders?currentType=0',
    
    })
},
//待支付界面
    goToPaying: function (currentType) {
      wx: wx.navigateTo({
        url: '/pages/orders/orders?currentType=1',

      })
    },
//待取货界面
    goToGetting: function (currentType) {
      wx: wx.navigateTo({
        url: '/pages/orders/orders?currentType=2',

      })
    },
    //个人设置界面
    goToSetting: function (currentType) {
      wx: wx.navigateTo({
        url: '/pages/setting/setting',
      })
    },

    goToMine: function (currentType) {
      wx: wx.navigateTo({
        url: '/pages/my/my',
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
if(app.globalData.getUserInfo){
  this.setData({
    userInfo: app.globalData.userInfo
  })
}else{
  wx.getUserInfo({
   success : res=>{
     app.globalData.userInfo = res.userInfo;
     this.setData({
       userInfo : res.userInfo,
       hasUserInfo:true
     })
   }
  })
}
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})