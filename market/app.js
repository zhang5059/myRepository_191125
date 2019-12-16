//app.js

App({
    onLaunch: function(options) {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        wx.setStorageSync("qrCodePath", "")
        // 获取用户信息
        wx.getSetting({
            success: res => {
                //判断用户是否已经授权用户信息
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            this.globalData.encryptedData = res.encryptedData
                            this.globalData.iv = res.iv
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo
                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }else {
                    var _this = this;
                    // _this.showSettingToast("请授权")
                    // wx.authorize({
                    //     scope: 'scope.userInfo',
                    //     success() {
                    //         // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                    //         // wx.getUserInfo()
                    //     },
                    //     fail() {
                    
                    //         console.log("授权失败")
                    //     }
                    // })
                    // console.log("拒绝授权")
                    
                    // wx.authorize({
                    //     scope: 'scope.record',
                    //     success() {
                    //         // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                    //         wx.startRecord()
                    //     }
                    // })
                }
            }
        }),
        //获取openid
        wx.login({
            success: res => {
                if (res.code) {
                    wx.request({
                        method: "POST",
                        url: 'https://wx.hongdi120.com/wxxcx/wxxcxAuth/salesmanCode2Session?jsCode=' + res.code,
                        success: function(res) {
                            wx.setStorageSync("openid", res.data.openid);
                            wx.setStorageSync("session_key", res.data.session_key);
                            wx.setStorageSync("token", res.data.token);
                            wx.request({
                                url: 'https://wx.hongdi120.com/wxxcx/wxxcxBusi/findSalesmanByToken?token=' + res.data.token,
                                success: function (res) {
                                    console.log(res)
                                    
                                    if(res.data.salesman == null) {
                                        wx.setStorageSync("qrCodePath", "")
                                        wx.setStorageSync("salesmanId", "")
                                        
                                        // wx.reLaunch({
                                        //     url: '../ownReg/ownReg'
                                        // })
                                        // wx.navigateTo({
                                        //     url: '../ownReg/ownReg',
                                        // })
                                        wx.redirectTo({
                                            url: '../ownReg/ownReg',
                                        })
                                    }else {
                                        wx.setStorageSync("qrCodePath", res.data.salesman.qrCodePath)
                                        wx.setStorageSync("salesmanId", res.data.salesman.id)
                                        wx.setStorageSync("nickName", res.data.salesman.nickName)
                                        wx.reLaunch({
                                            url: '../index/index',
                                        })
                                    }
                                },
                                fail() {
                                }
                            })
                        }
                    })
                    
                }
            }
        })
    },
    showSettingToast: function (e) {
        console.log(e)
        wx.showModal({
            title: '提示！',
            confirmText: '去设置',
            showCancel: false,
            content: e,
            success: function (res) {
                if (res.confirm) {
                    wx.navigateTo({
                        url: '../shouquan/shouquan',
                    })
                }
            }
        })
    },
    globalData: {
        userInfo: null,
        encryptedData: "",
        iv: "",
        openid: "",
        httpsUrl: "https://wx.hongdi120.com"
    }
})