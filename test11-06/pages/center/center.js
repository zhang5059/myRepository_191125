// pages/center/center.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: ""
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: "个人中心"
        })    
        var telPhone = wx.getStorageSync("userTelPhone");
        var tel = telPhone.substr(0, 3) + "****" + telPhone.substr(7);
        this.setData({
            userTelPhone: tel
        })    
    },
    toxingCheng() {
        wx.navigateTo({
            url: '../order/order',
        })
    },
    tosheZhi() {
        wx.navigateTo({
            url: '../shezhi/shezhi',
        })
    },
    toZhinan() {
        wx.navigateTo({
            url: '../zhinan/zhinan',
        })
    },
    callKefu() {
        wx.makePhoneCall({
            phoneNumber: '15889873140' //仅为示例，并非真实的电话号码
        })
    }
    
})