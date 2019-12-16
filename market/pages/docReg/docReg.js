
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
        getQrId: 0
    },

    onShow: function (options) {
        
        wx.setNavigationBarTitle({
            title: '医生注册',
        })
        wx.request({
            url: httpsUrl + "/wxxcx/wxxcxBusi/findQrCodes?nameCondition=&stateCondition=1",
            success: (res) => {
                if(res.data.doctorQrCodes.length == 0) {
                    this.setData({
                        getqrCodeList: []
                    })
                }else {
                    var arr = res.data.doctorQrCodes;
                    var getqrCodeList = [];
                    var getqrCodeList2 = [];
                    for (var i = 0; i < arr.length; i++) {
                        getqrCodeList.push(arr[i].name);
                        getqrCodeList2.push(arr[i])
                    }
                    this.setData({ getqrCodeList: getqrCodeList, getqrCodeList2: getqrCodeList2, getQrId: getqrCodeList2[0].id })
                }
                
            }
        })
        //获取所有医院
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitals?provinceCondition=&cityCondition=&nameCondition=',
            success: (res) => {
                if(res.data.hospitals.length == 0) {
                    this.setData({ hosList: hosList })
                }else {
                    var arr = res.data.hospitals;
                    var hosList = [];
                    var hosList2 = [];
                    for (var i = 0; i < arr.length; i++) {
                        hosList.unshift(arr[i].name);
                        hosList2.unshift(arr[i])
                    }
                    this.setData({ hosList: hosList, hosList2: hosList2, hosId: hosList2[0].id })
                }
                
            }
        })
        //查询所有科室
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxBusi/findDepartments?nameCondition=',
            success: (res) => {
                if (res.data.hospitalDepartments == 0) {
                    this.setData({ depList: depList})
                }else {
                    var arr = res.data.hospitalDepartments;
                    var depList = [];
                    var depList2 = [];
                    for (var i = 0; i < arr.length; i++) {
                        depList.unshift(arr[i].name);
                        depList2.unshift(arr[i])
                    }
                    this.setData({ depList: depList, depList2: depList2, depId: depList2[0].id })
                }
                
            }
        })
    },
    yzName(ev) {
        this.setData({
            name: ev.detail.value
        })
        if(ev.detail.value == "") {
            this.setData({
                errorName: "姓名不能为空"
            })
        }else {
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
    bindSex: function (e) {
        this.setData({
            sexIndex: e.detail.value,
            sexNum: parseInt(e.detail.value) + 1
        })
    },
    bindHospital: function (e) {
        this.setData({
            hosNum: e.detail.value,
            hosId: this.data.hosList2[e.detail.value].id
        })
    },
    bindDepartment: function (e) {
        this.setData({
            depNum: e.detail.value,
            depId: this.data.depList2[e.detail.value].id
        })
    },
    bindZhiwei: function (e) {
        this.setData({
            docNum: e.detail.value
        })
    },
    yzAddr: function(e) {
        this.setData({
            addr: e.detail.value
        })
    },
    bindQrCode: function (e) {
        console.log(e)
        this.setData({
            qrNum: e.detail.value,
            getQrId: this.data.getqrCodeList2[e.detail.value].id
        })
    },
    formSubmit(ev) {
        var _this = this;
        var job = parseInt(this.data.docNum) + 1;
        console.log(this.data.hosId)
        var arr = []
        var salesmanId = wx.getStorageSync("salesmanId");
        if(this.data.name == "" || this.data.telPhone == "") {
            wx.showModal({
                title: '提示',
                content: '请将信息填写完整',
                success(res) {
                }
            })
            
        }else if(this.data.errorTel != "") {
            wx.showModal({
                title: '提示',
                content: '手机格式填写错误',
                success(res) {
                }
            })
        }else if(wx.getStorageSync("salesmanId") == "") {
            wx.showModal({
                title: '提示',
                content: '业务员未注册',
                success(res) {
                }
            })
        } else if (this.data.getqrCodeList.length == 0) {
            wx.showModal({
                title: '提示',
                content: '二维码已使用完,请联系管理员',
                success(res) {
                }
            })
        }else {
            wx.request({
                method: "POST",
                url: httpsUrl + '/wxxcx/wxxcxBusi/doctorRegister?hospitalId=' + this.data.hosId + '&hospitalDepartmentId=' + this.data.depId + '&name=' + this.data.name + '&telPhone=' + this.data.telPhone + '&job=' + job + '&addr=' + this.data.addr + '&salesmanId=' + salesmanId + '&qrCodeId=' + this.data.getQrId + '&integral=0&state=1',
                success: (res) => {
                    console.log(res)
                    if (res.data.code == 1) {
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
                            wx.switchTab({
                                url: '../index/index'
                            })
                        }, 250)
                    }
                }
            })
        }
    }
})