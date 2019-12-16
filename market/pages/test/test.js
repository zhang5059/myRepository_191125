Page({
    data: {
        vHeight: 0,
        pageSize: 1,
        page: 1,
    },
    onPullDownRefresh(ev) {

    },
    toElse() {
        wx.redirectTo({
            url: '../index/index',
        })
    },
    onReachBottom(ev) {
        this.setData({
            pageSize: this.data.pageSize+1
        })
        if(this.data.pageSize == 4) {
            this.setData({
                page: this.data.page + 1
            })
        }
        wx.showLoading({
            title: 'Please wait...',
        })
        var _this = this;
        setTimeout(function () {
            wx.hideLoading()
            _this.loadDataList()
        }, 1000)
        
    },
    
    onPageScroll(ev) {
    },
    onShow() {
        var height = wx.getSystemInfoSync().windowHeight;
        this.setData({
            vHeight: height
        })
        this.loadDataList()
        
    },
    loadDataList() {
        wx.request({
            url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page='+this.data.page+'&page_size=' + 5 * this.data.pageSize + '&group_id=22192&device_id=7035f560-fba9-11e9-bdaa-3de2bf2fda01',
            success: (res) => {
                console.log(res.data.data.item_list)
                this.setData({
                    qcsList: res.data.data.item_list
                })
            }
        })
    }
})