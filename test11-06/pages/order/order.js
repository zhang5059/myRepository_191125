// pages/order/order.js
const app = getApp()
var httpsUrl = app.globalData.httpsUrl
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderList: [{ key: 0, titleName: "待出行" }, { key: 1, titleName: "全部订单" }],
        titleKey: 0,
        orderList: [],
        escortList: ['普通护送', '高级护送', '护理护送', '重症护送'],
        pageSize: 1,
    },
    //title切换
    choiceKey(ev) {
        var titleKey = ev.currentTarget.dataset.item_key;
        this.setData({
            titleKey: titleKey
        })
    },
    onReachBottom(ev) {
        this.setData({
            pageSize: this.data.pageSize + 1
        })
        wx.showLoading({
            title: '',
        })
        var _this = this;
        setTimeout(function () {
            wx.hideLoading();
            _this.getDataList();
        }, 500)

    },
    onShow() {
        wx.setNavigationBarTitle({
            title: '运单',
        })
        this.getDataList();
    },
    getDataList() {
        var _this = this;
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxUser/findWaybills?start=0&rows=' + _this.data.pageSize * 4 + '&token=' + wx.getStorageSync("token"),
            success: (res) => {
                console.log(res)
                var list = res.data.rows
                if(list.length > 0) {
                    var arr = [];
                    for (var i = 0; i < list.length; i++) {
                        var s = list[i].startTime;
                        var format1 = s.replace(/T/g, ' ')
                        var array = format1.split(".");
                        array.pop()
                        var str = array.join("")
                        var str1 = str.split(":00")
                        str1.pop();
                        // console.log(format1)
                        // var format2 = format1.replace(/.000/g, ' ')
                        // console.log(format2)
                        // var createTime = format2.replace(/ 0/g, '')
                        arr.push({
                            waybillType: list[i].waybillType,
                            startTime: str1.join(""),
                            startPosition: list[i].startPosition,
                            endPosition: list[i].endPosition,
                            state: list[i].state
                        })
                    }
                    _this.setData({
                        orderList: arr,
                        orderDetailList: list,
                        orderType: true
                    })
                }else {
                    _this.setData({
                        orderType: false
                    })
                }
                
            }
        })
    },
    toOrderDetail() {
        wx.navigateTo({
            url: '../yuyueSuc/yuyueSuc',
        })
    },
    toOrderDetail(ev) {
        console.log(ev)
        var _this = this;
        var dataList1 = _this.data.orderDetailList[ev.currentTarget.dataset.item_key]
        var dataList = JSON.stringify(dataList1)
        wx.navigateTo({
            url: '../orderDetail/orderDetail?orderDetailList=' + dataList,
        })
    },
    callKefu() {
        wx.makePhoneCall({
            phoneNumber: '15889873140' //仅为示例，并非真实的电话号码
        })
    }
})