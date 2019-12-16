const app = getApp()
var httpsUrl = app.globalData.httpsUrl

Page({
    data: {
        name: "",
        errorName: "",
        telPhone: "",
        errorTel: "",
        inputFocusType: true,
        yzNum: 90,
        yzType: false,
        validateCode: ""
    },
    onLoad(options) {
        console.log(options)
        //起始位置
        var startPosition = options.startPosition;
        //结束位置
        var endPosition = options.whereTo
        //公里数
        var mileage = options.mileage;
        //价格
        var amount = options.amount;
        //运单类型
        var waybillType = options.waybillType;
        this.setData({
            startPosition: startPosition,
            endPosition: endPosition,
            mileage: mileage,
            amount: amount,
            waybillType: waybillType,
            type: options.type
        })
    },
    onShow: function(options) {
        this.setData({
            telPhone: wx.getStorageSync("yzTelPhone")
        })
        wx.setNavigationBarTitle({
            title: '用户注册',
        })
    },
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
    getUserInfo() {
        console.log("进来了吗")
        if (this.data.name != "" && this.data.telPhone != "" && this.data.errorName == "" && this.data.errorTel == "" && this.data.validateCode != "") {
            console.log("成功")
            wx.getSetting({
                success: (res) => {
                    console.log(res)
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                        wx.getUserInfo({
                            success: res => {
                                var userInfo = res.userInfo;
                                var _this = this;
                                var token = wx.getStorageSync("token")
                                //微信昵称
                                var nickName = userInfo.nickName;
                                //微信头像
                                var avatarUrl = userInfo.avatarUrl;
                                //微信性别
                                var gender = userInfo.gender;
                                //所在国家
                                var country = userInfo.country;
                                //所在省份
                                var province = userInfo.province;
                                //所在城市
                                var city = userInfo.city;
                                //所用语言
                                var language = userInfo.language;
                                var str = "";
                                for (var i = 0; i < 9; i++) {
                                    str += Math.round(Math.random() * 10);
                                }
                                wx.request({
                                    method: "POST",
                                    url: httpsUrl + '/wxxcx/wxxcxUser/register?token=' + token + "&nickName=" + nickName + "&avatarUrl=" + avatarUrl + "&gender=" + gender + "&country=" + country + "&province=" + province + "&city=" + city + "&language=" + language + "&unionId=" + str + "&name=" + _this.data.name + "&telPhone=" + _this.data.telPhone + "&validateCode=" + _this.data.validateCode,
                                    success: (res) => {
                                        console.log(res)
                                        if (res.data.code == 1) {
                                            wx.showToast({
                                                title: '注册成功',
                                                icon: 'success',
                                                duration: 20
                                            })
                                            wx.setStorageSync("userName", res.data.user.name)
                                            wx.setStorageSync("userTelPhone", res.data.user.telPhone)
                                            setTimeout(function() {
                                                if (_this.data.type == 1) {
                                                    wx.redirectTo({
                                                        url: '../center/center',
                                                    })
                                                } else if (res.data.code == -1001) {
                                                    wx.showModal({
                                                        title: '提示',
                                                        content: '令牌失效，请重新获取',
                                                        success(res) { }
                                                    })
                                                } else if (res.data.code == -1002) {
                                                    wx.showModal({
                                                        title: '提示',
                                                        content: '验证码不正确',
                                                        success(res) { }
                                                    })
                                                } else {
                                                    wx.redirectTo({
                                                        url: '../yuyue/yuyue?startPosition=' + _this.data.startPosition + '&whereTo=' + _this.data.endPosition + '&mileage=' + _this.data.mileage + '&amount=' + _this.data.amount + '&waybillType=' + _this.data.waybillType,
                                                    })
                                                }
                                                

                                            }, 200)
                                        }
                                    }
                                })

                                if (this.userInfoReadyCallback) {
                                    this.userInfoReadyCallback(res)
                                    console.log(res)
                                }
                            },

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
    },
    inputyz(ev) {
        this.setData({
            validateCode: ev.detail.value
        })
    },
    getVerCode() {
        var yzNum = 90;
        var _this = this;
        var timer;
        if (_this.data.telPhone == "") {
            wx.showModal({
                title: '提示',
                content: '请输入手机号码',
                success(res) { }
            })
        } else {
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
            timer = setInterval(function () {
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
    }
})