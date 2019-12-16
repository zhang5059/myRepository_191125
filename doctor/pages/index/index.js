//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        qrCode: ""
    },
    onLoad(options) {
        console.log(options)
        console.log(options.scene)
        //参数keysalesId
        let scene = decodeURIComponent(options.scene);
        wx.setStorageSync("httpSalesmanId", scene)
        var _this = this;
        setTimeout(function() {
            wx.setNavigationBarTitle({
                title: '医生',
            })
            _this.setData({
                qrCode: wx.getStorageSync("docQrCode")
            })
        }, 600)
    },
})