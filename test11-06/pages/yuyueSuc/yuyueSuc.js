Page({
    data: {
        name: "",
        age: "",
        telPhone: ""
    },
    onLoad(options) {
        console.log(options)
        this.setData({
            name: options.name,
            age: options.age,
            telPhone: options.telPhone
        }),
        wx.setNavigationBarTitle({
            title: '订单详情',
        })
    },
    cancalOrder() {
        wx.showModal({
            title: '提示',
            content: '确认取消订单吗？',
            success(res) {
                if (res.confirm) {
                    wx.navigateBack({
                        delta: 3
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    updateOrder() {
        
    }
})