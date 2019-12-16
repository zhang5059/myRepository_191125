//app.js
App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        wx.setStorageSync("yzNumber", 0)
        wx.getSetting({
                success: res => {
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
                    } else {
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
            // 获取openid
            wx.login({
                success: res => {
                    if (res.code) {
                        wx.request({
                            method: "POST",
                            url: 'https://wx.hongdi120.com/wxxcx/wxxcxAuth/doctorCode2Session?jsCode=' + res.code,
                            success: function(res) {
                                wx.setStorageSync("openid", res.data.openid);
                                wx.setStorageSync("session_key", res.data.session_key);
                                wx.setStorageSync("token", res.data.token)
                                wx.request({
                                    method: "POST",
                                    url: 'https://wx.hongdi120.com/wxxcx/wxxcxDoctor/loginOn?token=' + res.data.token,
                                    success: function(res) {
                                        console.log(res)
                                        
                                        if(res.data.code == 1) {
                                            console.log("已经存在")
                                            wx.setStorageSync("docQrCode", res.data.hospitalDoctorQrCode.httpPath)
                                            wx.setStorageSync("docId", res.data.hospitalDoctor.id)
                                            wx.setStorageSync("docTelPhone", res.data.hospitalDoctor.telPhone)
                                            // wx.reLaunch({
                                            //     url: '../index/index',
                                            // })
                                            wx.switchTab({
                                                url: '../index/index',
                                            })
                                        }else {
                                            console.log("未注册，跳转至手机验证页")
                                            wx.redirectTo({
                                                url: '../yzTel/yzTel',
                                            })
                                        }
                                    },
                                    fail: function(res) {
                                        console.log("访问接口失败")
                                    }
                                })
                            }
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
    },
    onLoad: function(options) {
 
    }
})