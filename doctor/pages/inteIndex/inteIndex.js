const app = getApp()
var httpsUrl = app.globalData.httpsUrl
Page({
    data: {
        integralSum: 12547,
        show: false,
        duihuan: false
    },
    onShow: function (options) {
        wx.setNavigationBarTitle({
            title: '积分',
        })
        this.getDocList();
    },
    toExchange() {
        wx.navigateTo({
            url: '../exchangeInte/exchangeInte',
        })
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
    toIntegral() {
        wx.navigateTo({
            url: '../integral/integral',
        })
    }
})