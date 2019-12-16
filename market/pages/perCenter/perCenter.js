const app = getApp();
Page({

    data: {

    },

    onShow: function (options) {
        wx.setNavigationBarTitle({
            title: '个人中心',
        })
        var nickName = wx.getStorageSync("nickName")
        this.setData({
            nickName: nickName
        })
    },
    toCurrentMonth() {
        wx.navigateTo({
            url: '../currentMonth/currentMonth',
        })
    },
    toHistory() {
        wx.navigateTo({
            url: '../history/history',
        })
    }

})