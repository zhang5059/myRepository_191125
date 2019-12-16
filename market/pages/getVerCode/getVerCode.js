Page({
    data: {
        inputVal1: "",
        inputVal2: "",
        inputVal3: "",
        inputVal4: "",
        focusType: false,
        inputLength: 4,
        inputVal: "",
        inputDisabled: ['', '', '', ''],
        focusList: [true, false, false, false]
    },
    onShow(ev) {
        const query = wx.createSelectorQuery()
        var str = query.select('.test').boundingClientRect()
        query.exec((res) => {
            console.log(res)
        })
    },
    bindVal(ev) {
        console.log(ev)
        var _this = this;
        var index = ev.currentTarget.dataset.item_index;
        if(ev.detail.value.length == 1) {
            console.log("有数据")
            // _this.data.inputDisabled[index] 
            var list = _this.data.inputDisabled;
            for(var i = 0; i < list.length; i++) {
                if(i == index) {
                    list[i] = "true"
                }
            }
            _this.setData({
                inputDisabled: list
            })
        }
    }
})

