// pages/sorts/sorts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
sorts:[
  {namme:'方便速食',id:'fbss'},
  { namme: '饮料饮品', id: 'ylyp' },
  { namme: '香烟', id: 'xy' },
  { namme: '休闲商品', id: 'xxsp' },
  { namme: '生活用品', id: 'shyp' },
  { namme: '洗护用品', id: 'xhyp' },
],
curIndex:0,
detail:[],
isScroll:false
  },
  toDetailsTap: function (e){
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {

  },
  switchTab(e){
    console.log(e)
    const self=this;
    this.setData({
   isScroll:true
     })
     setTimeout(function(){
      self.setData({
      toView:e.target.dataset.id,
      curIndex:e.target.dataset.index
})
     }, 0)
    setTimeout(function (){
      self.setData({
        isScroll:false
     })
    },1)
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