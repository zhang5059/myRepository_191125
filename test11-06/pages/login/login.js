// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    bindGetUserInfo(res) {
        console.log(res);
        if (res.detail.userInfo) {
            console.log("点击了同意授权");
        } else {
            console.log("点击了拒绝授权");
        }
    },
    data: {
        loginType: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var get = wx.getStorageSync("login");
        if(get != "") {
            wx.redirectTo({
                url: '../index/index',
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