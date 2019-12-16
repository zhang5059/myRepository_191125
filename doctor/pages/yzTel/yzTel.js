const app = getApp()
var httpsUrl = app.globalData.httpsUrl

Page({
    data: {
        telPhone: "",
        errorTel: "",
        focusType: true
    },

    onShow: function(options) {
        wx.setNavigationBarTitle({
            title: '手机验证',
        })
    },
    show: function() {
        this.setData({
            flag: false
        })
    },
    // 遮罩层隐藏
    conceal: function() {
        this.setData({
            flag: true
        })
    },

    getUserInfo() {
        if (this.data.telPhone != "" && this.data.errorTel == "") {
            wx.getSetting({
                success: (res) => {
                    console.log(res)
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                        wx.getUserInfo({
                            success: res => {
                                var userInfo = res.userInfo;
                                var _this = this;
                                var telPhone = wx.getStorageSync("telPhone");
                                var yzNumber = wx.getStorageSync("yzNumber");
                                yzNumber++;
                                wx.setStorage({
                                    key: 'yzNumber',
                                    data: yzNumber,
                                })
                                wx.setStorage({
                                    key: 'yzTelPhone',
                                    data: _this.data.telPhone
                                })
                                var openid = wx.getStorageSync("openid")
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
                                wx.setStorageSync("userInfoList", [{
                                    nickName: nickName,
                                    avatarUrl: avatarUrl,
                                    gender: gender,
                                    country: country,
                                    province: province,
                                    city: city,
                                    language: language
                                }])

                                //openid
                                var token = wx.getStorageSync("token");
                                wx.request({
                                    url: httpsUrl + "/wxxcx/wxxcxDoctor/telPhoneValidate?telPhone=" + _this.data.telPhone + "&token=" + token + "&nickName=" + nickName + "&avatarUrl=" + avatarUrl + "&gender=" + gender + "&country=" + country + "&province=" + province + "&city=" + city + "&language=" + language + "&unionId=" + str,
                                    success: (res) => {
                                        console.log(res)
                                        if (res.data.code == 1) {
                                            console.log("当前手机号已经存在")
                                            wx.showToast({
                                                title: '登录成功',
                                                icon: 'success',
                                                duration: 400
                                            })
                                            wx.setStorageSync("docQrCode", res.data.hospitalDoctorQrCode.httpPath)
                                            setTimeout(function() {
                                                wx.switchTab({
                                                    url: '../index/index',
                                                })
                                            }, 500)

                                        } else {
                                            console.log("当前手机号不存在")
                                            wx.navigateTo({
                                                url: '../docReg/docReg',
                                            })
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
})