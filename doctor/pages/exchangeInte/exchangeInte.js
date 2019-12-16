// pages/exchangeInte/exchangeInte.js
const app = getApp()
var httpsUrl = app.globalData.httpsUrl
Page({

    data: {
        integralSum: 0,
        integralSum2: "",
        inputFocus: true,
        yue: true,
        butType: false
    },
    onShow() {
        this.getDocList();
        wx.setNavigationBarTitle({
            title: '积分兑换',
        })
    },
    quanbu() {
        this.setData({
            integralSum2: this.data.integralSum
        })
    },
    inteInput(ev) {
        if (ev.detail.value > this.data.integralSum) {
            this.setData({
                yue: false
            })
        } else {
            this.setData({
                yue: true
            })
        }
        this.setData({
            integralSum2: ev.detail.value
        })
        // if (this.data.integralSum2 == "" || this.data.integralSum2 == 0) {
        //     this.setData({
        //         butType: false
        //     })
        // }else {
        //     this.setData({
        //         butType: true
        //     })
        // }
        if (this.data.integralSum2 == "") {
            this.setData({
                butType: false
            })
        } else if (this.data.integralSum2 == 0) {
            this.setData({
                butType: true
            })
        } else if (this.data.integralSum2 > 0) {
            this.setData({
                butType: true
            })
        }else {
            this.setData({
                butType: true
            })
        }
    },
    exchangeInte() {
        var _this = this;
        
        _this.tempData();
    },
    tempData() {
        if (this.data.integralSum2 == "") {
            this.setData({
                butType: false
            })
        } else if (this.data.integralSum2 == 0) {
            this.setData({
                butType: true
            })
        } else if (this.data.integralSum2 > 0) {
            this.setData({
                butType: true
            })
            var _this = this;
            console.log(wx.getStorageSync("docId"))
            wx.showModal({
                title: '提示',
                content: '确定兑换吗?',
                success(res) {
                    if (res.confirm) {
                        wx.request({
                            method: "POST",
                            url: httpsUrl + "/wxxcx/wxxcxDoctor/exchange?hospitalDoctorId=" + wx.getStorageSync("docId") + "&integral=" + _this.data.integralSum2,
                            success: (res) => {
                                if (res.data.code == 1) {
                                    _this.getDocList();
                                    wx.showToast({
                                        title: '申请成功',
                                        icon: 'success',
                                        duration: 500
                                    })
                                    _this.setData({
                                        integralSum2: ""
                                    })
                                    setTimeout(function () {
                                        wx.navigateBack({
                                            delta: 1
                                        })
                                    }, 600)

                                } else if (res.data.code == -1) {
                                    wx.showModal({
                                        title: '提示',
                                        content: '积分不足',
                                        success(res) { }
                                    })
                                } else {
                                    wx.showModal({
                                        title: '提示',
                                        content: '兑换积分必须大于0',
                                        success(res) { }
                                    })
                                }
                            }
                        })
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        }
        
    },
    getDocList() {
        wx.request({
            url: httpsUrl + "/wxxcx/wxxcxBusi/findHospitalDoctors?nameCondition=&telPhoneCondition=" + wx.getStorageSync("docTelPhone") + "&stateCondition=0",
            success: (res) => {
                console.log(res.data.hospitalDoctors)
                //医生名称
                var docName = res.data.hospitalDoctors[0].name;
                var integral = res.data.hospitalDoctors[0].integral;
                this.setData({
                    docName: docName,
                    integralSum: integral,
                    updateIntegral: integral
                })
            }
        })
    },
})