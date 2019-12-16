const app = getApp()
var httpsUrl = app.globalData.httpsUrl

Page({
    data: {
        time: "",
        date: '',
        index: 0,
        array: ['妇科', '骨科', '肿瘤科', '儿科'],
        escortList: ['普通护送', '高级护送', '护理护送', '重症护送'],
        index1: 0,
        name: "",
        telPhone: "",
        mark: ""
    },
    name(e) {
        this.setData({ name: e.detail.value})
    },
    
    telPhone(e) {
        this.setData({ telPhone: e.detail.value })
    },
    onLoad: function (options) {
        var date = new Date();
        this.setData({
            date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            time: date.getHours() + ":" + date.getMinutes()
        })
        //用户姓名
        var userName = wx.getStorageSync("userName");
        //用户联系方式
        var telPhone = wx.getStorageSync("userTelPhone");
        //预约时间
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
            name: userName,
            telPhone: telPhone,
            startPosition: startPosition,
            endPosition: endPosition,
            mileage: mileage,
            amount: amount,
            waybillType: waybillType
        })
        wx.setNavigationBarTitle({
            title: '预约用车',
        })
    },
    yuyueSuccess() {
        var _this = this;
        var startTime = _this.data.date + ' ' + _this.data.time;
        if (_this.data.name == "" || _this.data.age == "" || _this.data.telPhone == "") {
            wx.showModal({
                title: '提示',
                content: '请将信息填写完整',
                success(res) {
                    
                }
            })
        }else {
            var token = wx.getStorageSync("token");
            wx.request({
                method: "POST",
                url: httpsUrl + '/wxxcx/wxxcxUser/addWaybill?doctorId='+wx.getStorageSync("doctorId")+'&token=' + token + '&name=' + _this.data.name + '&telPhone=' + _this.data.telPhone + '&startTime=' + startTime + '&startPosition=' + _this.data.startPosition + '&endPosition=' + _this.data.endPosition + '&mileage=' + _this.data.mileage + '&amount=0&waybillType=' + _this.data.waybillType + '&carType=1&state=1' + '&mark=' + _this.data.mark,
                success: (res) => {
                    if(res.data.code == 1) {
                        wx.showToast({
                            title: '预约成功',
                            icon: 'success',
                            duration: 500
                        })
                        setTimeout(function() {
                            wx.redirectTo({
                                url: '../order/order',
                            })
                        },600)
                    }
                }
            })
        }
        
       
    },
    bindTextAreaBlur(e) {
        this.setData({
            mark: e.detail.value
        })
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value
        })
    },
    bindPickerChange2: function (e) {
        this.setData({
            index1: e.detail.value
        })
    }
})