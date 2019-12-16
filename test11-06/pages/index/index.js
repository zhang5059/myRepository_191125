//index.js
//获取应用实例
const app = getApp()
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
    key: 'BYYBZ-7L6C6-B7NSF-EYNXG-MV5LT-IZFWV' // 必填
});
var httpsUrl = app.globalData.httpsUrl
Page({
    data: {
        navTitleList: [{
            key: 0,
            name: "普通护送"
        }, {
            key: 1,
            name: "高级护送"
        }, {
            key: 2,
            name: "护理护送"
        }, {
            key: 3,
            name: "重症护送"
        }],
        navKey: 0,
        currentCar: 1,
        shuomingList: [{
                key: 0,
                content: "两个司机，一台车"
            },
            {
                key: 1,
                content: "配备两个拥有护送员资质的司机，一台车"
            },
            {
                key: 2,
                content: "配备两个司机，一台车，一个护士"
            },
            {
                key: 3,
                content: "配备两个司机，一台车，一个护士，一个医生(具有医师执照资质)"
            }
        ],
        boardingPosi: "",
        whereTo: "",
        posiFrom: {
            latitude: "",
            longitude: ""
        },
        posiTo: {
            latitude: "",
            longitude: ""
        },
        qurenType: false,
        args: {
            fee: 1, // 支付金额，单位为分
            paymentArgs: 'A', // 将传递到功能页函数的自定义参数
            currencyType: 'USD' // 货币符号，页面显示货币简写 US$ 
        }
    },
    pay() {
        wx.requestPayment({
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function(res) {
                console.log("成功")
                console.log(res)
            },
            'fail': function(res) {
                console.log("失败")
                console.log(res)
            },
            'complete': function(res) {
                console.log(res)
            }
        })
    },
    getPhoneNumber(e) {
        // console.log(e.detail.errMsg)
        // console.log(e.detail.iv)
        // console.log(e.detail.encryptedData)
    },
    toYuyue(e) {
        var _this = this;
        var waybillType = _this.data.navTitleList[_this.data.navKey].key + 1;
        console.log(_this.data.distance[0].dist / 1000)
        console.log(Math.ceil(_this.data.distance[0].dist / 1000))
        if(wx.getStorageSync("userRegCode") == 1) {
            wx.navigateTo({
                url: '../yuyue/yuyue?startPosition=' + _this.data.boardingPosi + '&whereTo=' + _this.data.whereTo + '&mileage=' + Math.round(_this.data.distance[0].dist / 1000) + '&amount=' + _this.data.amount + '&waybillType=' + waybillType,
            })
        }else {
            wx.navigateTo({
                url: '../userReg/userReg?startPosition=' + _this.data.boardingPosi + '&whereTo=' + _this.data.whereTo + '&mileage=' + Math.round(_this.data.distance[0].dist / 1000) + '&amount=' + _this.data.amount + '&waybillType=' + waybillType,
            })
        }
        
    },
    distance_calculation() {
        var _this = this;
        // console.log(this)
        // console.log(_this.data.posiFrom.latitude)
        // console.log(_this.data.posiFrom.longitude)

        // console.log(_this.data.posiTo.latitude)
        // console.log(_this.data.posiTo.longitude)
        qqmapsdk.calculateDistance({
            mode: "driving",
            from: _this.data.posiFrom.latitude == "" ? "" : {
                latitude: _this.data.posiFrom.latitude,
                longitude: _this.data.posiFrom.longitude
            },
            to: [{
                latitude: _this.data.posiTo.latitude,
                longitude: _this.data.posiTo.longitude
            }],
            success: function(res) {
                var dis = [];
                var res = res.result;
                for (var i = 0; i < res.elements.length; i++) {
                    dis.push({
                        dist: res.elements[i].distance
                    }); //将返回数据存入dis数组，
                }
                // console.log(dis)
                _this.setData({ //设置并更新distance数据
                    distance: dis,
                });
                if (_this.data.posiTo.latitude != "") {
                    _this.calcuPrice();
                }
            },
            fail: function(res) {
                // console.log(res)
            }
        })
    },
    xuanzaCar(ev) {
        var item_carkey = ev.currentTarget.dataset.item_carkey;
        this.setData({
            currentCar: item_carkey
        })
    },
    clickone(ev) {
        var that = this;
        var item_key = ev.currentTarget.dataset.item_key;
        that.setData({
            navKey: item_key
        })
        that.calcuPrice();
        
    },
    //计算费用
    calcuPrice() {
        var _this = this;
        if (_this.data.posiTo.latitude != "") {
            //护送类型
            var waybillType = _this.data.navTitleList[_this.data.navKey].key + 1;
            //公里数
            var mileage = Math.round(_this.data.distance[0].dist / 1000);
            wx.request({
                url: httpsUrl + '/wxxcx/wxxcxUser/operationWaybillAmount?mileage=' + mileage + '&waybillType=' + waybillType + '&carType=1',
                success: (res) => {
                    //返回的价格
                    var price = res.data.amount;
                    _this.setData({
                        amount: price
                    })
                }
            })
        }
    },
    togoWhere() {
        wx.navigateTo({
            url: '../gowhere/gowhere',
        })
    },
    toCenter() {
        var _this = this;
        var waybillType = _this.data.navTitleList[_this.data.navKey].key + 1;
        if (wx.getStorageSync("userRegCode") == 1) {
            wx.navigateTo({
                url: "../center/center"
            })
        } else {
            wx.navigateTo({
                url: '../userReg/userReg?type=1'
            })
        }
    },
    toMap() {

        wx.navigateTo({
            url: '../geocoding/geocoding',
        })

    },
    getPhoneNumber(e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
    },
    onLoad: function(options) {
        console.log(options)
        if(options.scene) {
            console.log("存在")
            wx.setStorageSync("doctorId", options.scene)
        }else {
            console.log("不存在");
            wx.setStorageSync("doctorId", 5)
        }
        var _this = this;
        wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                // console.log("打开小程序获取用户当前位置的纬度：" + res.latitude)
                // console.log("打开小程序获取用户当前位置的经度：" + res.longitude)
                _this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                })
                _this.getLocal(res.latitude, res.longitude);
                _this.distance_calculation();
            },
        })

    },
    onShow: function() {
        var _this = this;
        _this.distance_calculation();
        
        //获取openid
        wx.login({
            success: res => {
                if (res.code) {
                    wx.request({
                        method: "post",
                        url: httpsUrl + '/wxxcx/wxxcxAuth/userCode2Session?jsCode=' + res.code,
                        success: function (res) {
                            wx.setStorageSync("token", res.data.token)
                            wx.request({
                                method: "GET",
                                url: httpsUrl + '/wxxcx/wxxcxUser/loginOn?token=' + res.data.token,
                                success: function (res) {
                                    console.log(res)
                                    wx.setStorageSync("userRegCode", res.data.code)
                                    if (res.data.code == 1) {
                                        wx.setStorageSync("userName", res.data.user.name)
                                        wx.setStorageSync("userTelPhone", res.data.user.telPhone)
                                    } else if (res.data.code == -1) {
                                    }
                                },
                            })
                        }
                    })
                }
            }
        })
    },
    getLocal(longitude, latitude) {
        var that = this;
        qqmapsdk.reverseGeocoder({
            // location: {
            //     latitude: that.data.latitude,
            //     longitude: that.data.longitude
            // },
            success: function(res) {
                var tempList = [];
                var posiInfo = res.result.address_component;
                //用户的位置：具体到街道
                tempList.push({
                    "detailProvince": posiInfo.province,
                    "detailCity": posiInfo.city,
                    "detailDistrict": posiInfo.district,
                    "detailStreet": posiInfo.street,
                    "detailStreetNum": posiInfo.street_number
                })
                that.setData({
                    detailPosi: tempList,
                    boardingPosi: res.result.formatted_addresses.rough
                })
            },
            fail: function(res) {}
        })
    }
})