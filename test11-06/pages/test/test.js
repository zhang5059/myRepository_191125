Page({
    data: {
        city: ''
    },
    onLoad: function (options) {
        this.loadInfo();
    },
    loadInfo: function () {
        var page = this
        wx.getLocation({
            type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 
            success: function (res) {
                // success 
                var longitude = res.longitude
                var latitude = res.latitude
                page.loadCity(longitude, latitude)
            },
            fail: function () {
                // fail 
            },
            complete: function () {
                // complete 
            }
        })
    },

    loadCity: function (longitude, latitude) {
        var page = this
        wx.request({
            url: 'http://api.map.baidu.com/geocoder/v2/?ak=3yXiIIrpQKN3vMjkEDuwsq0YyGiyFysW&location=' + latitude + ',' + longitude + '&output=json&pois=1',
            //这里的ak 是去百度地图api获取的需要自己登陆获取一下 地址：https://lbsyun.baidu.com/index.php?title=wxjsapi
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                // success 
                console.log(res);
                var city = res.data.result.addressComponent.city;

                console.log("城市为" + city)
                page.setData({ city: city });
            },
            fail: function () {
                console.log("失败")
                // fail 
            },
            complete: function () {
                // complete 
            }
        })
    }
});