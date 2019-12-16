// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        escortList: ['普通护送', '高级护送', '护理护送', '重症护送'],
        orderStateList: ['预约成功/待支付', '已支付/待派车', '已派车/待用车', '护送中', '护送完成/待评价', '取消预约', '申请取消并退款', '取消并退款']
    },
    onLoad(options) {
        console.log(JSON.parse(options.orderDetailList))
        wx.setNavigationBarTitle({
            title: '运单详情',
        })
        var dataList = JSON.parse(options.orderDetailList);
        console.log(dataList.state)
        var s = dataList.startTime;
        var format1 = s.replace(/T/g, ' ')
        var array = format1.split(".");
        var str = array.join("")
        var str1 = str.split(":00")
        str1.pop();
        array.pop()
        this.setData({
            detailList: dataList,
            waybillType: this.data.escortList[dataList.waybillType - 1],
            startTiem: str1.join(""),
            state: dataList.state
        })
    },
    callKefu() {
        wx.makePhoneCall({
            phoneNumber: '15889873140' //仅为示例，并非真实的电话号码
        })
    },
    returnIndex() {
        wx.navigateBack({
            delta: 3
        })
    },
    callSiji() {
        wx.makePhoneCall({
            phoneNumber: '15889873140' //仅为示例，并非真实的电话号码
        })
    }
    
})