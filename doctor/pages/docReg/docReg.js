const app = getApp()
var httpsUrl = app.globalData.httpsUrl

Page({
    data: {
        sexList: ['男', '女'],
        sexIndex: 0,
        sexNum: 1,
        qrCodeList: ["x10011aa", "sxx111aa", "x122ss", "123ss11"],
        qrNum: 0,
        name: "",
        errorName: "",
        telPhone: "",
        errorTel: "",
        hosList: [],
        hosList2: [],
        hosId: 0,
        hosNum: 0,
        depList: [],
        depList2: [],
        depId: 0,
        depNum: 0,
        docList: ['主治医生', '副主治医生', '专家', '实习医生'],
        docNum: 0,
        addr: "",
        getqrCodeList: [],
        getqrCodeList2: [],
        getQrId: 0,
        yzNum: 90,
        yzType: false,
        validateCode: "",
        focusType: true
    },
    onLoad() {
        this.setData({
            telPhone: wx.getStorageSync("yzTelPhone")
        })
    },
    onShow: function(options) {
        
        wx.setNavigationBarTitle({
            title: '个人注册',
        })
        wx.request({
            url: httpsUrl + "/wxxcx/wxxcxBusi/findQrCodes?nameCondition=&stateCondition=1",
            success: (res) => {
                if (res.data.doctorQrCodes.length == 0) {
                    this.setData({
                        getqrCodeList: []
                    })
                } else {
                    var arr = res.data.doctorQrCodes;
                    var getqrCodeList = [];
                    var getqrCodeList2 = [];
                    for (var i = 0; i < arr.length; i++) {
                        getqrCodeList.push(arr[i].name);
                        getqrCodeList2.push(arr[i])
                    }
                    this.setData({
                        getqrCodeList: getqrCodeList,
                        getqrCodeList2: getqrCodeList2,
                        getQrId: getqrCodeList2[0].id
                    })
                }

            }
        })
        //获取所有医院
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitals?provinceCondition=&cityCondition=&nameCondition=',
            success: (res) => {
                console.log(res)
                if (res.data.hospitals.length == 0) {
                    this.setData({
                        hosList: []
                    })
                } else {
                    var hosList = [];
                    var hosList2 = [];
                    var arr = res.data.hospitals;
                    for (var i = 0; i < arr.length; i++) {
                        hosList.unshift(arr[i].name);
                        hosList2.unshift(arr[i])
                    }
                    this.setData({
                        hosList: hosList,
                        hosList2: hosList2,
                        hosId: hosList2[0].id
                    })
                }

            }
        })
        //查询所有科室
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxBusi/findDepartments?nameCondition=',
            success: (res) => {
                if (res.data.hospitalDepartments.length == 0) {
                    this.setData({
                        depList: []
                    })
                } else {
                    var arr = res.data.hospitalDepartments;
                    var depList = [];
                    var depList2 = [];
                    for (var i = 0; i < arr.length; i++) {
                        depList.unshift(arr[i].name);
                        depList2.unshift(arr[i])
                    }
                    this.setData({
                        depList: depList,
                        depList2: depList2,
                        depId: depList2[0].id
                    })
                }

            }
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
    bindSex: function(e) {
        this.setData({
            sexIndex: e.detail.value,
            sexNum: parseInt(e.detail.value) + 1
        })
    },
    bindHospital: function(e) {
        this.setData({
            hosNum: e.detail.value,
            hosId: this.data.hosList2[e.detail.value].id
        })
    },
    bindDepartment: function(e) {
        this.setData({
            depNum: e.detail.value,
            depId: this.data.depList2[e.detail.value].id
        })
    },
    bindZhiwei: function(e) {
        this.setData({
            docNum: e.detail.value
        })
    },
    yzAddr: function(e) {
        this.setData({
            addr: e.detail.value
        })
    },
    bindQrCode: function(e) {
        this.setData({
            qrNum: e.detail.value,
            getQrId: this.data.getqrCodeList2[e.detail.value].id
        })
    },
    formSubmit(ev) {
        var userInfoList = wx.getStorageSync("userInfoList")
        var _this = this;
        var job = parseInt(this.data.docNum) + 1;
        var salesmanId = wx.getStorageSync("salesmanId");

        var openid = wx.getStorageSync("openid")
        //微信昵称
        var nickName = userInfoList[0].nickName;
        //微信头像
        var avatarUrl = userInfoList[0].avatarUrl;
        //微信性别
        var gender = userInfoList[0].gender;
        //所在国家
        var country = userInfoList[0].country;
        //所在省份
        var province = userInfoList[0].province;
        //所在城市
        var city = userInfoList[0].city;
        //所用语言
        var language = userInfoList[0].language;
        var str = "";
        for (var i = 0; i < 9; i++) {
            str += Math.round(Math.random() * 10);
        }
        //openid
        var token = wx.getStorageSync("token");

        if (this.data.name != "" && this.data.telPhone != "" && this.data.errorName == "" && this.data.errorTel == "" && this.data.validateCode != "") {
            var httpSalesmanId;
            if (wx.getStorageSync("httpSalesmanId") == "undefined") {
                httpSalesmanId = 0;
            } else {
                httpSalesmanId = wx.getStorageSync("httpSalesmanId")
            }
            wx.request({
                method: "POST",
                url: httpsUrl + '/wxxcx/wxxcxDoctor/register?hospitalId=' + this.data.hosId + '&hospitalDepartmentId=' + this.data.depId + '&name=' + this.data.name + '&telPhone=' + this.data.telPhone + '&job=' + job + '&token=' + token + '&nickName=' + nickName + '&avatarUrl=' + avatarUrl + '&gender=' + gender + '&country=' + country + '&province=' + province + '&city=' + city + '&language=' + language + '&unionId=' + str + '&addr=' + this.data.addr + '&salesmanId=' + httpSalesmanId + '&qrCodeId=' + this.data.getQrId + '&integral=0&state=1' + '&validateCode=' + this.data.validateCode,
                success: (res) => {
                    console.log(res)
                    if (res.data.code == 1) {
                        wx.setStorageSync("docQrCode", res.data.hospitalDoctorQrCode.httpPath)
                        wx.setStorageSync("docId", res.data.hospitalDoctor.id)
                        wx.setStorageSync("docTelPhone", this.data.telPhone)
                        _this.setData({
                            name: "",
                            sexNum: 1,
                            telPhone: ""
                        })
                        wx.showToast({
                            title: '注册成功',
                            icon: 'success',
                            duration: 200
                        })
                        setTimeout(function() {
                            wx.reLaunch({
                                url: '../index/index'
                            })
                        }, 300)
                    } else if (res.data.code == -1) {
                        wx.showModal({
                            title: '提示',
                            content: '手机号码已被注册',
                            success(res) {}
                        })
                    } else if (res.data.code == -1001) {
                        wx.showModal({
                            title: '提示',
                            content: '令牌失效，请重新获取',
                            success(res) {}
                        })
                    } else if (res.data.code == -1002) {
                        wx.showModal({
                            title: '提示',
                            content: '验证码不正确',
                            success(res) {}
                        })
                    }
                }
            })
        } else if (this.data.name != '' && this.data.validateCode == "") {
            wx.showModal({
                title: '提示',
                content: '请获取短信验证码',
                success(res) {}
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
    }

})