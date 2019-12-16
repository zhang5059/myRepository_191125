const app = getApp()
var httpsUrl = app.globalData.httpsUrl

Page({
    data: {
        time: "12:01",
        date: '',
        dateEnd: '',
        activeNames: ['0'],
        searchCondition: "",
        resultList: [],
        pageSize: 1,
        

    },
    changeActiveNames(ev) {
        console.log(ev.target)
        this.setData({
            activeNames: ['0'],
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
            wx.hideLoading()
            _this.loadList()
        }, 600)
    },
    clearDate() {
        this.setData({
            date: "",
            dateEnd: ""
        })
    },
    search() {
        if(this.data.date == "开始时间") {
            wx.showModal({
                title: '提示',
                content: '结束时间',
                success(res) {
                }
            })
        }else if(this.data.dateEnd == "请选择结束时间") {
            var salesmanId = wx.getStorageSync("salesmanId");
            var jine = 0;
            var resultList = [];
            var hospitalIdList = [];
            var docNameList = [];
            var objList = [];
            wx.request({
                url: httpsUrl + "wxxcx/wxxcxBusi/findWaybillItems?start=0&rows=" + this.data.pageSize * 11 + "&salesmanIdCondition=" + salesmanId + '&createTimeStartCondition=' + this.data.date + '&createTimeEndCondition=' + this.data.dateEnd,
                success: (res) => {
                    var arr = res.data.rows;
                    var docIdList = [];
                    for (var i = 0; i < arr.length; i++) {
                        docIdList.push(arr[i].hopistalDoctorId)
                        jine = arr[i].amount;
                        var s = arr[i].createTime;
                        var createTime = s.substring(0, s.indexOf('T'))
                        objList.push({
                            amount: arr[i].amount,
                            createTime: createTime
                        })
                    }
                    wx.request({
                        url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitalDoctors?stateCondition=0',
                        success: (res) => {
                            var list = res.data.hospitalDoctors;
                            var docInfoList = [];
                            for (var k = 0; k < docIdList.length; k++) {
                                for (var j = 0; j < list.length; j++) {
                                    if (list[j].id == docIdList[k]) {
                                        docInfoList.push(list[j])
                                    }
                                }
                            }
                            var hospName = '';
                            for (var s = 0; s < docInfoList.length; s++) {
                                hospitalIdList.push(docInfoList[s].hospitalId)
                                docNameList.push(docInfoList[s].name);
                                objList[s].docName = docInfoList[s].name;
                                var endList = []
                            }
                            wx.request({
                                url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitals?provinceCondition=&cityCondition=&nameCondition=',
                                success: (res) => {
                                    var array = res.data.hospitals;
                                    for (var b = 0; b < hospitalIdList.length; b++) {
                                        for (var a = 0; a < array.length; a++) {
                                            if (array[a].id == hospitalIdList[b]) {
                                                objList[b].hospName = array[a].name
                                            }
                                        }
                                    }
                                    this.setData({
                                        resultList: objList,
                                        activeNames: ['0'],
                                    })
                                }
                            })
                        }
                    })

                }
            })
        }else {
            this.searchDataList();
        }
    },
    searchDataList() {
        var salesmanId = wx.getStorageSync("salesmanId");
        var jine = 0;
        var resultList = [];
        var hospitalIdList = [];
        var docNameList = [];
        var objList = [];
        wx.request({
            url: httpsUrl + "/wxxcx/wxxcxBusi/findWaybillItems?start=0&rows=" + this.data.pageSize * 11 + "&salesmanIdCondition=" + salesmanId + '&createTimeStartCondition=' + this.data.date + '&createTimeEndCondition=' + this.data.dateEnd,
            success: (res) => {
                var arr = res.data.rows;
                var docIdList = [];
                for (var i = 0; i < arr.length; i++) {
                    docIdList.push(arr[i].hopistalDoctorId)
                    jine = arr[i].amount;
                    var s = arr[i].createTime;
                    var createTime = s.substring(0, s.indexOf('T'))
                    objList.push({
                        amount: arr[i].amount,
                        createTime: createTime
                    })
                }
                wx.request({
                    url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitalDoctors?stateCondition=0',
                    success: (res) => {
                        var list = res.data.hospitalDoctors;
                        var docInfoList = [];
                        for (var k = 0; k < docIdList.length; k++) {
                            for (var j = 0; j < list.length; j++) {
                                if (list[j].id == docIdList[k]) {
                                    docInfoList.push(list[j])
                                }
                            }
                        }
                        var hospName = '';
                        for (var s = 0; s < docInfoList.length; s++) {
                            hospitalIdList.push(docInfoList[s].hospitalId)
                            docNameList.push(docInfoList[s].name);
                            objList[s].docName = docInfoList[s].name;
                            var endList = []
                        }
                        wx.request({
                            url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitals?provinceCondition=&cityCondition=&nameCondition=',
                            success: (res) => {
                                var array = res.data.hospitals;
                                for (var b = 0; b < hospitalIdList.length; b++) {
                                    for (var a = 0; a < array.length; a++) {
                                        if (array[a].id == hospitalIdList[b]) {
                                            objList[b].hospName = array[a].name
                                        }
                                    }
                                }
                                this.setData({
                                    resultList: objList,
                                    activeNames: ['0'],
                                })
                            }
                        })
                    }
                })

            }
        })
    },
    onShow: function (options) {
        wx.setNavigationBarTitle({
            title: '历史下单信息',
        })
        if(wx.getStorageSync("salesmanId") == "") {
            wx.showModal({
                title: '提示',
                content: '业务员未注册',
                success(res) {
                }
            })
        }else {
            this.loadList();
        }
        
        
    },
    loadList() {
        var salesmanId = wx.getStorageSync("salesmanId");
        var jine = 0;
        var resultList = [];
        var hospitalIdList = [];
        var docNameList = [];
        var objList = [];
        wx.request({
            url: httpsUrl + "/wxxcx/wxxcxBusi/findWaybillItems?start=0&rows=" + this.data.pageSize * 11 + "&salesmanIdCondition=" + salesmanId + '&createTimeStartCondition=2010-01-01&createTimeEndCondition=2020-01-01',
            success: (res) => {
                var arr = res.data.rows;
                var docIdList = [];
                for (var i = 0; i < arr.length; i++) {
                    docIdList.push(arr[i].hopistalDoctorId)
                    jine = arr[i].amount;
                    var s = arr[i].createTime;
                    console.log(s)
                    var createTime = s.substring(0, s.indexOf('T'))
                    console.log(createTime)
                    objList.push({
                        amount: arr[i].amount,
                        createTime: createTime
                    })
                }
                wx.request({
                    url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitalDoctors?stateCondition=0',
                    success: (res) => {
                        var list = res.data.hospitalDoctors;
                        var docInfoList = [];
                        for (var k = 0; k < docIdList.length; k++) {
                            for (var j = 0; j < list.length; j++) {
                                if (list[j].id == docIdList[k]) {
                                    docInfoList.push(list[j])
                                }
                            }
                        }
                        var hospName = '';
                        for (var s = 0; s < docInfoList.length; s++) {
                            hospitalIdList.push(docInfoList[s].hospitalId)
                            docNameList.push(docInfoList[s].name);
                            objList[s].docName = docInfoList[s].name;
                            var endList = []
                        }
                        wx.request({
                            url: httpsUrl + '/wxxcx/wxxcxBusi/findHospitals?provinceCondition=&cityCondition=&nameCondition=',
                            success: (res) => {
                                var array = res.data.hospitals;
                                for (var b = 0; b < hospitalIdList.length; b++) {
                                    for (var a = 0; a < array.length; a++) {
                                        if (array[a].id == hospitalIdList[b]) {
                                            objList[b].hospName = array[a].name
                                        }
                                    }
                                }
                                this.setData({
                                    resultList: objList,
                                })
                            }
                        })
                    }
                })

            }
        })
    },
    yzCond(ev) {
        this.setData({
            searchCondition: ev.detail.value
        })
    },
    
    bindTimeChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindDateChange2: function (e) {
        this.setData({
            dateEnd: e.detail.value
        })
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    onChange(event) {
        this.setData({
            activeNames: event.detail
        });
    }
})