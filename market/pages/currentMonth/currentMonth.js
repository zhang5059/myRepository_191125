Page({
    data: {
        activeNames: ['1']
    },

    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '本月下单信息',
        })
    },
    onChange(event) {
        console.log(event)
        this.setData({
            activeNames: event.detail
        });
    }
})