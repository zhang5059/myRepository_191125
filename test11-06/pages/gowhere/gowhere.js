var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
    key: 'BYYBZ-7L6C6-B7NSF-EYNXG-MV5LT-IZFWV' // 必填
});
Page({
    data: {
        latitude: "",
        longitude: "",
        detailPosi: [],
        hospList: [],
        suggestion: [],
        markers: [],
        inputShowed: true,
        searchCity: ""
    },
    cancelSearch() {
        if (this.data.tipsType == true) {
            console.log("当前没有显示")
            this.setData({
                tipsType: false
            })
        }else {
            wx.navigateBack({
                changed: true
            })
        }
    },
    bindGetUserInfo(res) {
        console.log(res);
        if (res.detail.userInfo) {
            console.log("点击了同意授权");
        } else {
            console.log("点击了拒绝授权");
        }
    },
    toCity() {
        wx.navigateTo({
            url: '../city/city?currentCity=' + this.data.currentCity,
        })
    },
    onShow() {
        var city = wx.getStorageSync("city");
        if (city != "") {
            this.setData({
                currentCity: city
            })
        } else {
            this.setData({
                currentCity: "广州"
            })
        }
    },
    onLoad() {   
        var _this = this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                // console.log("打开小程序获取用户当前位置的纬度：" + res.latitude)
                // console.log("打开小程序获取用户当前位置的经度：" + res.longitude)
                _this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                })
                _this.getLocal(res.latitude, res.latitude);
                _this.nearby_search();
            },
        })
        
       
    },
    //获取当前位置的具体信息：如省市
    getLocal(longitude, latitude) {
        var that = this;
        qqmapsdk.reverseGeocoder({
            success: function (res) {
                var tempList = [];
                var posiInfo = res.result.address_component;

                that.setData({
                    tipsType: true
                })
                qqmapsdk.getSuggestion({
                    keyword: "医院",
                    region: posiInfo.city,
                    location: "",
                    region_fix: 1,
                    success: function (res) {
                        var sug = [];
                        var searchList = res.data;
                        for (var i = 0; i < searchList.length; i++) {
                            sug.push({
                                title: searchList[i].title,
                                id: searchList[i].id,
                                addr: searchList[i].address,
                                city: searchList[i].city,
                                district: searchList[i].district,
                                latitude: searchList[i].location.lat,
                                longitude: searchList[i].location.lng
                            })
                        }
                        that.setData({
                            suggestion: sug,
                            tipsType: true
                        })
                    }
                })

                //用户的位置：具体到街道
                tempList.push({ "detailProvince": posiInfo.province, "detailCity": posiInfo.city, "detailDistrict": posiInfo.district, "detailStreet": posiInfo.street, "detailStreetNum": posiInfo.street_number })
                that.setData({
                    detailPosi: tempList,
                })
                
            },
            fail: function (res) {
            }
        })
        
        
        
    },
    //搜索附近医院
    nearby_search() {
        var _that = this;
        qqmapsdk.search({
            keyword: "医院",
            success: function (res) {
                var hospInfo = res.data;
                var tempList = [];
                for (var i = 0; i < hospInfo.length; i++) {
                    tempList.push({ "hospName": hospInfo[i].title })
                }
                _that.setData({
                    hospList: tempList
                })
            },
            fail: function (res) {
                console.log(res)
            }
        })
        
    },
    //输入关键字提示
    getsuggest(e) {
        this.setData({
            tipsType: true
        })
        var inputVal = e.detail.value;
        var _this = this;
        qqmapsdk.getSuggestion({
            keyword: inputVal,
            region: this.data.currentCity,
            location: "",
            region_fix: 1,
            success: function (res) {
                var sug = [];
                var searchList = res.data;
                for (var i = 0; i < searchList.length; i++) {
                    sug.push({
                        title: searchList[i].title,
                        id: searchList[i].id,
                        addr: searchList[i].address,
                        city: searchList[i].city,
                        district: searchList[i].district,
                        latitude: searchList[i].location.lat,
                        longitude: searchList[i].location.lng
                    })
                }
                _this.setData({
                    suggestion: sug,
                    tipsType: true
                })
            }
        })
    },
    searchPosition() {
        
    },
    //用户查询到指定的医院后，选择该医院填入输入框中
    backfill(e) {
        //当前选中的医院id值
        var currentId = e.currentTarget.id;
        for (var i = 0; i < this.data.suggestion.length; i++) {
            if (i == currentId) {
                var sug = this.data.suggestion[i];

                this.setData({
                    backfill: sug.title,
                    backfillLat: sug.latitude,
                    backfillLon: sug.longitude,
                    latitude: sug.latitude,
                    longitude: sug.longitude,
                    markers: mks,
                    tipsType: false
                })
                var mks = [];
                mks.push({
                    title: "在这呢！",
                    iconPath: "../../image/address/red.png",
                    id: 0,
                    width: 20,
                    height: 20,
                    latitude: sug.latitude,
                    longitude: sug.longitude,
                    callout: { //在markers上展示地址名称，根据需求是否需要
                        content: sug.address,
                        color: '#000',
                        display: 'ALWAYS'
                    }
                })
                var pages = getCurrentPages(); // 获取页面栈
                var currPage = pages[pages.length - 1]; // 当前页面
                var prevPage = pages[pages.length - 2]; // 上一个页面
                prevPage.setData({
                    whereTo: sug.title,
                    posiTo: { latitude: sug.latitude, longitude: sug.longitude}
                })
                wx.navigateBack({
                    changed: true
                })
                // this.modifyLocation(this.data.suggestion[i].latitude, this.data.suggestion[i].longitude)
            }
        }
    },
    //计算用户当前位置
    formSubmit(e) {
        console.log("起点纬度：" + this.data.latitude);
        console.log("起点经度：" + this.data.longitude);
        console.log("终点纬度：" + this.data.backfillLat);
        console.log("终点经度：" + this.data.backfillLon);
        var _this = this;
        qqmapsdk.calculateDistance({
            from: e.detail.value.start || '',
            to: [{ latitude: this.data.backfillLat, longitude: this.data.backfillLon }],
            success: function (res) {
                var dis = [];
                var res = res.result;
                for (var i = 0; i < res.elements.length; i++) {
                    dis.push(res.elements[i].distance); //将返回数据存入dis数组，
                }
                _this.setData({ //设置并更新distance数据
                    distance: dis
                });
            }
        })
    },
    //用户更改当前位置后进行标识
    modifyLocation(latitude, longitude) {
        qqmapsdk.reverseGeocoder({
            location: { latitude: latitude, longitude: longitude } || "",
            success: function (res) {
                console.log(res)
                var res = res.result;
                var mks = [];
                mks.push({ // 获取返回结果，放到mks数组中
                    title: res.address,
                    latitude: res.location.lat,
                    longitude: res.location.lng,
                    iconPath: '../../image/address/blue.png',//图标路径
                    width: 20,
                    height: 20,
                    callout: { //在markers上展示地址名称，根据需求是否需要
                        content: res.address,
                        color: '#000',
                        display: 'ALWAYS'
                    }
                });
            }
        })
    }
})