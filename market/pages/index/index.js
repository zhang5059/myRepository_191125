Page({
    data: {
    },
    onLoad(options) {
        
        // wx.getSetting({
        //     success(res) {
        //         if (!res.authSetting['scope.userInfo']) {
        //             wx.authorize({
        //                 scope: 'scope.record',
        //                 success() {
        //                     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        //                     wx.startRecord()
        //                 }
        //             })
        //         }
        //     }
        // })
        // if (wx.getStorageSync("qrCodePath")) {
        //     this.setData({
        //         qrCode: wx.getStorageSync("qrCodePath")
        //     })
        // }
        var _this = this;
        setTimeout(function() {
            if (wx.getStorageSync("qrCodePath") != "") {
                _this.setData({
                    qrCode: wx.getStorageSync("qrCodePath")
                })
                wx.setNavigationBarTitle({
                    title: '业务员',
                })
            } else {
                wx.setNavigationBarTitle({
                    title: '业务员未注册',
                })
                _this.setData({
                    qrCode: ""
                })
            }
        },10)
    },
    // toReg() {
    //     wx.navigateTo({
    //         url: '../ownReg/ownReg',
    //     })
    // }
})