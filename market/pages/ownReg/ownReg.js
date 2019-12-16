const app = getApp()
var httpsUrl = app.globalData.httpsUrl

Page({
    data: {
        sexList: ['男', '女'],
        index: 0,
        sexNum: 1,
        name: "",
        errorName: "",
        telPhone: "",
        errorTel: "",
        inputShowed: true,
        yzNum: 90,
        yzType: false,
        validateCode: ""
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: '个人注册',
        })
        console.log(app.globalData.userInfo)
    },
    bindPickerChange: function(e) {
        console.log(typeof e.detail.value)
        this.setData({
            index: e.detail.value,
            sexNum: parseInt(e.detail.value) + 1
        })
        console.log(this.data.sexNum)
    },
    // ownName(ev) {
    //     this.setData({
    //         name: ev.detail.value
    //     })
    // },
    // ownTel(ev) {
    //     this.setData({
    //         telPhone: ev.detail.value
    //     })
    // },
    yzName(ev) {
        this.setData({
            name: ev.detail.value
        })
        if (ev.detail.value == "") {
            this.setData({
                errorName: "姓名不能为空"
            })
        } else {
            this.setData({
                errorName: ""
            })
        }
    },
    yzTel(ev) {
        this.setData({
            telPhone: ev.detail.value
        })
        var yanzheng = /^[1][1,3,4,5,7,8,9][0-9]{9}$/;
        if (this.data.telPhone == "") {
            this.setData({
                errorTel: "联系方式不能为空"
            })
        } else if (!yanzheng.test(this.data.telPhone)) {
            this.setData({
                errorTel: "手机格式不正确"
            })
        } else {
            this.setData({
                errorTel: ""
            })
        }
    },
    getVerCode() {
        var yzNum = 90;
        var _this = this;
        var timer;
        var yanzheng = /^[1][1,3,4,5,7,8,9][0-9]{9}$/;
        if (_this.data.telPhone == "") {
            wx.showModal({
                title: '提示',
                content: '请输入手机号码',
                success(res) {}
            })
        } else if (!yanzheng.test(_this.data.telPhone)) {
            wx.showModal({
                title: '提示',
                content: '手机格式输入错误',
                success(res) { }
            })
        }
        else {
            wx.request({
                url: httpsUrl + '/wxxcx/wxxcxBusi/getValidateCode?telPhone=' + this.data.telPhone,
                success: (res) => {
                    //验证码
                    var validateCode = res.data.validateCode
                    console.log("验证码：" + validateCode)
                    
                }
            })
            _this.setData({
                yzType: true
            })
            timer = setInterval(function() {
                if (yzNum > 0) {
                    yzNum -= 1;
                    _this.setData({
                        yzNum: yzNum
                    })
                } else {
                    _this.setData({
                        yzType: false
                    })
                    clearInterval(timer)
                }
            }, 1000)
        } 
    },
    inputyz(ev) {
        this.setData({
            validateCode: ev.detail.value
        })
    },
    getUserInfo(ev) {
        // /^(13[0-9]\d{8}|15[0-35-9]\d{8}|18[0-9]\{8}|14[57]\d{8})$/;
        var yanzheng = /^[1][1,3,4,5,7,8,9][0-9]{9}$/;
        if (this.data.name != "" && this.data.telPhone != "" && this.data.errorName == "" && this.data.errorTel == "" && this.data.validateCode != "") {
            wx.getSetting({
                success: (res) => {
                    console.log(res)
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                        wx.getUserInfo({
                            success: res => {
                                console.log(res)
                                console.log(res.userInfo.gender)
                                var token = wx.getStorageSync("token")
                                //微信昵称
                                var nickName = res.userInfo.nickName;
                                //微信头像
                                var avatarUrl = res.userInfo.avatarUrl;
                                //微信性别
                                var gender = res.userInfo.gender;
                                //所在国家
                                var country = res.userInfo.country;
                                //所在省份
                                var province = res.userInfo.province;
                                //所在城市
                                var city = res.userInfo.city;
                                //所用语言
                                var language = res.userInfo.language;
                                var str = "";
                                for (var i = 0; i < 9; i++) {
                                    str += Math.round(Math.random() * 10);
                                }

                                var _this = this;
                                wx.request({
                                    method: "POST",
                                    url: httpsUrl + '/wxxcx/wxxcxBusi/register?token=' + token + '&nickName=' + nickName + '&avatarUrl=' + avatarUrl + '&gender=' + gender + '&country=' + country + '&province=' + province + '&city=' + city + '&language=' + language + '&unionId=' + str + '&name=' + this.data.name + '&telPhone=' + this.data.telPhone + '&state=' + 1 + '&examineState=' + 1 + '&validateCode=' + this.data.validateCode,
                                    success: (res) => {
                                        console.log(res)
                                        
                                        if (res.data.code == 1) {
                                            wx.setStorageSync("qrCodePath", res.data.salesman.qrCodePath)
                                            wx.setStorageSync("salesmanId", res.data.salesman.id)
                                            wx.setStorageSync("nickName", res.data.salesman.nickName)
                                            wx.showToast({
                                                title: '注册成功',
                                                icon: 'success',
                                                duration: 10
                                            })
                                            setTimeout(function() {
                                                wx.reLaunch({
                                                    url: '../index/index?qrCodePath=' + res.data.salesman.qrCodePath
                                                })
                                            }, 10)
                                        } else if (res.data.code == -1) {
                                            wx.showModal({
                                                title: '提示',
                                                content: '当前账号已经注册',
                                                success(res) {}
                                            })
                                        } else if (res.data.code == -1001) {
                                            wx.showModal({
                                                title: '提示',
                                                content: '令牌失效，请重新获取',
                                                success(res) { }
                                            })
                                        }else if (res.data.code == -1002) {
                                            wx.showModal({
                                                title: '提示',
                                                content: '验证码不正确',
                                                success(res) { }
                                            })
                                        }
                                    }
                                })
                                if (this.userInfoReadyCallback) {
                                    this.userInfoReadyCallback(res)
                                    console.log(res)
                                }
                            },
                            fail: (res) => {
                                console.log(res)
                            }
                        })
                    }
                }
            })
        } else if (this.data.name != '' && this.data.validateCode == "") {
            wx.showModal({
                title: '提示',
                content: '请获取短信验证码',
                success(res) { }
            })
        } 


    }



    // }

})