const app = getApp()
var httpsUrl = app.globalData.httpsUrl
Page({
    data: {
        activeNames: ['0'],
        date: '',
        dateEnd: '',
        docName: "",
        dataList: [],
        pageSize: 1,
        integralSum: 0
    },

    onShow: function(options) {
        wx.setNavigationBarTitle({
            title: '积分详情',
        })
        this.integralList();
        this.getDocList();
        
    },
    integralInput(ev) {
        var updateIntegral = ev.detail.value;
        var re = new RegExp("^[0-9]*[1-9][0-9]*$");
        if (updateIntegral > this.data.integralSum) {
            wx.showModal({
                title: '提示',
                content: '您当前的可用积分为'+this.data.integralSum,
                success(res) {
                    
                }
            })
        } else if (!re.test(updateIntegral)) {
            wx.showModal({
                title: '提示',
                content: '只能兑换整数积分',
                success(res) {

                }
            })
        }
        this.setData({
            updateIntegral: updateIntegral,
        })
    },
    getDocList() {
        wx.request({
            url: httpsUrl + "/wxxcx/wxxcxBusi/findHospitalDoctors?nameCondition=&telPhoneCondition=" + wx.getStorageSync("docTelPhone")+"&stateCondition=0",
            success: (res) => {
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
    toDuihuan() {
        var _this = this;
        wx.showModal({
            title: '提示',
            content: '确定兑换吗? 兑换的积分为：' + _this.data.updateIntegral + ' (可手动输入您要兑换的积分额度)',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        method: "POST",
                        url: httpsUrl + "/wxxcx/wxxcxDoctor/exchange?hospitalDoctorId=" + wx.getStorageSync("docId") + "&integral=" + _this.data.updateIntegral,
                        success: (res) => {
                            if (res.data.code == 1) {
                                _this.getDocList();
                                wx.showToast({
                                    title: '申请成功',
                                    icon: 'success',
                                    duration: 1000
                                })

                            } else if (res.data.code == -1) {
                                wx.showModal({
                                    title: '提示',
                                    content: '积分不足',
                                    success(res) {}
                                })
                            } else {
                                wx.showModal({
                                    title: '提示',
                                    content: '兑换积分必须大于0',
                                    success(res) {}
                                })
                            }
                        }
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
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
        setTimeout(function() {
            wx.hideLoading();
            _this.integralList();
        }, 500)

    },
    integralList() {
        var _this = this;
        var dataList = [];
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxDoctor/integralList?start=0&rows=' + _this.data.pageSize *12 + '&hospitalDoctorIdCondition=' + wx.getStorageSync("docId") + '&createTimeStartCondition=' + _this.data.date + '&createTimeEndCondition=' + _this.data.dateEnd,
            success: function(res) {
                console.log(res)
                //获取到医生的ID
                var data = res.data.rows;
                for (var i = 0; i < data.length; i++) {
                    // dataList[i].docName = _this.data.docName;
                    var s = data[i].createTime;
                    var format1 = s.replace(/T/g, ' ')
                    var array = format1.split(".");
                    array.pop()
                    var str = array.join("")
                    var str1 = str.split(":00")
                    str1.pop();
                    // var createTime3 = s.substring(0, s.indexOf('T'))
                    // var createTime3 = s.substring(0, s.indexOf('T'))
                    // var format1= s.replace(/T/g, ' ')
                    // console.log(format1)
                    // var format2 = format1.replace(/.000/g, ' ')
                    
                    // var format3 = format2.replace(/ 0/g, '')
                    // console.log(format2)
                    var d = new Date(data[i].createTime);
                    // console.log(d)
                    var month = d.getMonth() + 1;
                    if (month < 10) {
                        parseInt(month = "0" + month)
                    }else {
                        parseInt(month)
                    }
                    var date = d.getDate();
                    if (date < 10) {
                        parseInt(date = "0" + date)
                    }else {
                        parseInt(date)
                    }
                    var hours = d.getHours();
                    if(hours < 10) {
                        parseInt(hours = "0" + hours)
                    }else {
                        parseInt(hours)
                    }
                    var minutes = d.getMinutes();
                    if (minutes < 10) {
                        parseInt(minutes = "0" + minutes)
                    }else {
                        parseInt(minutes)
                    }
                    var seconds = d.getSeconds();
                    if(seconds < 10) {
                        parseInt(seconds = "0" + seconds)
                    }else {
                        parseInt(seconds)
                    }
                    // var createTime = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                    var createTime1 = d.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
                    var format = createTime1.replace(/-/g, '/')
                    var createTime = Date.parse(new Date(format))
                    // console.log(createTime1)
                    // var format = createTime1.replace(/\-/g, "/")
                    // var createTime = new Date(format).getTime();
                    // console.log(createTime)
                    // var createTime = Date.parse(new Date(format))
                    dataList.push({
                        "createTime": array.join(""),
                        "docIntegral": data[i].integral,
                        "type": data[i].type,
                    })
                }
                _this.setData({
                    dataList: dataList,
                })
            }
        })
    },
    search() {
        var _this = this;
        var integralSum = 0;
        var dataList = [];
        wx.request({
            url: httpsUrl + '/wxxcx/wxxcxDoctor/integralList?start=0&rows=' + _this.data.pageSize * 12 + '&hospitalDoctorIdCondition=' + wx.getStorageSync("docId") + '&createTimeStartCondition=' + _this.data.date + '&createTimeEndCondition=' + _this.data.dateEnd,
            success: function(res) {
                console.log(res)
                var data = res.data.rows;
                for (var i = 0; i < data.length; i++) {
                    var s = data[i].createTime;
                    var format1 = s.replace(/T/g, ' ')
                    var array = format1.split(".");
                    array.pop()
                    var str = array.join("")
                    var str1 = str.split(":00")
                    str1.pop();
                    // var createTime3 = s.substring(0, s.indexOf('T'))
                    var createTime3 = s.substring(0, s.indexOf('T'))
                    var format1 = s.replace(/T/g, ' ')
                    console.log(format1)
                    var format2 = format1.replace(/.000/g, ' ')

                    var format3 = format2.replace(/ 0/g, '')
                    // var createTime = s.substring(0, s.indexOf('T'))
                    var d = new Date(data[i].createTime);
                    console.log(d)
                    var month = d.getMonth() + 1;
                    if (month < 10) {
                        parseInt(month = "0" + month)
                    } else {
                        parseInt(month)
                    }
                    var date = d.getDate();
                    if (date < 10) {
                        parseInt(date = "0" + date)
                    } else {
                        parseInt(date)
                    }
                    var hours = d.getHours();
                    if (hours < 10) {
                        parseInt(hours = "0" + hours)
                    } else {
                        parseInt(hours)
                    }
                    var minutes = d.getMinutes();
                    if (minutes < 10) {
                        parseInt(minutes = "0" + minutes)
                    } else {
                        parseInt(minutes)
                    }
                    var seconds = d.getSeconds();
                    if (seconds < 10) {
                        parseInt(seconds = "0" + seconds)
                    } else {
                        parseInt(seconds)
                    }
                    // var createTime = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                    var createTime = d.getFullYear() + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ':' + seconds
                    dataList.push({
                        "createTime": array.join(""),
                        "docIntegral": data[i].integral
                    })
                }
                _this.setData({
                    activeNames: ['0'],
                    dataList: dataList,
                })
            }
        })
        
    },
    onChange(event) {
        this.setData({
            activeNames: event.detail
        });
    },
    bindDateChange(e) {
        console.log(e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
    bindDateChange2: function(e) {
        this.setData({
            dateEnd: e.detail.value
        })
    },
    changeActiveNames(ev) {
        console.log(ev.target)
        this.setData({
            activeNames: ['0'],
        })
    },
    clearDate() {
        this.setData({
            date: "",
            dateEnd: ""
        })
    },
})