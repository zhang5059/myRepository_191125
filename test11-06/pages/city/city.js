var app = getApp();
app.globalData.ggData = "123";

Page({
            data: {
                cityList: [],
                lettarArr: [],
                cityCurrent: "",
                cityType: true,
                cityContent: [],
                tempList: [],
                data: [{
                        "id": 1,
                        "nm": "北京",
                        "py": "beijing"
                    },
                    {
                        "id": 10,
                        "nm": "上海",
                        "py": "shanghai"
                    },
                    {
                        "id": 20,
                        "nm": "广州",
                        "py": "guangzhou"
                    },
                    {
                        "id": 30,
                        "nm": "深圳",
                        "py": "shenzhen"
                    },
                    {
                        "id": 42,
                        "nm": "西安",
                        "py": "xian"
                    },
                    {
                        "id": 40,
                        "nm": "天津",
                        "py": "tianjin"
                    },
                    {
                        "id": 44,
                        "nm": "福州",
                        "py": "fuzhou"
                    },
                    {
                        "id": 45,
                        "nm": "重庆",
                        "py": "chongqing"
                    },
                    {
                        "id": 51,
                        "nm": "宁波",
                        "py": "ningbo"
                    },
                    {
                        "id": 50,
                        "nm": "杭州",
                        "py": "hangzhou"
                    },
                    {
                        "id": 55,
                        "nm": "南京",
                        "py": "nanjing"
                    },
                    {
                        "id": 52,
                        "nm": "无锡",
                        "py": "wuxi"
                    },
                    {
                        "id": 59,
                        "nm": "成都",
                        "py": "chengdu"
                    },
                    {
                        "id": 57,
                        "nm": "武汉",
                        "py": "wuhan"
                    },
                    {
                        "id": 56,
                        "nm": "合肥",
                        "py": "hefei"
                    },
                    {
                        "id": 62,
                        "nm": "厦门",
                        "py": "xiamen"
                    },
                    {
                        "id": 60,
                        "nm": "青岛",
                        "py": "qingdao"
                    },
                    {
                        "id": 70,
                        "nm": "长沙",
                        "py": "changsha"
                    },
                    {
                        "id": 65,
                        "nm": "大连",
                        "py": "dalian"
                    },
                    {
                        "id": 66,
                        "nm": "沈阳",
                        "py": "shenyang"
                    },
                    {
                        "id": 76,
                        "nm": "石家庄",
                        "py": "shijiazhuang"
                    },
                    {
                        "id": 73,
                        "nm": "郑州",
                        "py": "zhengzhou"
                    },
                    {
                        "id": 84,
                        "nm": "保定",
                        "py": "baoding"
                    },
                    {
                        "id": 81,
                        "nm": "淄博",
                        "py": "zibo"
                    },
                    {
                        "id": 80,
                        "nm": "苏州",
                        "py": "suzhou"
                    },
                    {
                        "id": 83,
                        "nm": "南昌",
                        "py": "nanchang"
                    },
                    {
                        "id": 82,
                        "nm": "南通",
                        "py": "nantong"
                    },
                    {
                        "id": 93,
                        "nm": "桂林",
                        "py": "guilin"
                    },
                    {
                        "id": 92,
                        "nm": "佛山",
                        "py": "foshan"
                    },
                    {
                        "id": 95,
                        "nm": "葫芦岛",
                        "py": "huludao"
                    },
                    {
                        "id": 94,
                        "nm": "海口",
                        "py": "haikou"
                    },
                    {
                        "id": 89,
                        "nm": "常州",
                        "py": "changzhou"
                    },
                    {
                        "id": 88,
                        "nm": "蚌埠",
                        "py": "bengbu"
                    },
                    {
                        "id": 91,
                        "nm": "东莞",
                        "py": "dongguan"
                    },
                    {
                        "id": 90,
                        "nm": "大庆",
                        "py": "daqing"
                    },
                    {
                        "id": 102,
                        "nm": "芜湖",
                        "py": "wuhu"
                    },
                    {
                        "id": 103,
                        "nm": "新乡",
                        "py": "xinxiang"
                    },
                    {
                        "id": 101,
                        "nm": "太原",
                        "py": "taiyuan"
                    },
                    {
                        "id": 98,
                        "nm": "锦州",
                        "py": "jinzhou"
                    },
                    {
                        "id": 99,
                        "nm": "南宁",
                        "py": "nanning"
                    },
                    {
                        "id": 96,
                        "nm": "济南",
                        "py": "jinan"
                    },
                    {
                        "id": 97,
                        "nm": "焦作",
                        "py": "jiaozuo"
                    },
                    {
                        "id": 110,
                        "nm": "泉州",
                        "py": "quanzhou"
                    },
                    {
                        "id": 111,
                        "nm": "三亚",
                        "py": "sanya"
                    },
                    {
                        "id": 108,
                        "nm": "珠海",
                        "py": "zhuhai"
                    },
                    {
                        "id": 109,
                        "nm": "齐齐哈尔",
                        "py": "qiqihaer"
                    },
                    {
                        "id": 106,
                        "nm": "廊坊",
                        "py": "langfang"
                    },
                    {
                        "id": 107,
                        "nm": "贵阳",
                        "py": "guiyang"
                    },
                    {
                        "id": 104,
                        "nm": "烟台",
                        "py": "yantai"
                    },
                    {
                        "id": 105,
                        "nm": "哈尔滨",
                        "py": "haerbin"
                    },
                    {
                        "id": 119,
                        "nm": "徐州",
                        "py": "xuzhou"
                    },
                    {
                        "id": 117,
                        "nm": "汕头",
                        "py": "shantou"
                    },
                    {
                        "id": 116,
                        "nm": "长春",
                        "py": "changchun"
                    },
                    {
                        "id": 115,
                        "nm": "九江",
                        "py": "jiujiang"
                    },
                    {
                        "id": 114,
                        "nm": "昆明",
                        "py": "kunming"
                    },
                    {
                        "id": 113,
                        "nm": "中山",
                        "py": "zhongshan"
                    },
                    {
                        "id": 112,
                        "nm": "温州",
                        "py": "wenzhou"
                    },
                    {
                        "id": 127,
                        "nm": "沧州",
                        "py": "cangzhou"
                    },
                    {
                        "id": 126,
                        "nm": "承德",
                        "py": "chengde"
                    },
                    {
                        "id": 125,
                        "nm": "张家口",
                        "py": "zhangjiakou"
                    },
                    {
                        "id": 124,
                        "nm": "邢台",
                        "py": "xingtai"
                    },
                    {
                        "id": 123,
                        "nm": "邯郸",
                        "py": "handan"
                    },
                    {
                        "id": 122,
                        "nm": "秦皇岛",
                        "py": "qinhuangdao"
                    },
                    {
                        "id": 121,
                        "nm": "唐山",
                        "py": "tangshan"
                    },
                    {
                        "id": 120,
                        "nm": "扬州",
                        "py": "yangzhou"
                    },
                    {
                        "id": 137,
                        "nm": "临汾",
                        "py": "linfen"
                    },
                    {
                        "id": 136,
                        "nm": "忻州",
                        "py": "xinzhou"
                    },
                    {
                        "id": 139,
                        "nm": "呼和浩特",
                        "py": "huhehaote"
                    },
                    {
                        "id": 138,
                        "nm": "吕梁",
                        "py": "lvliang"
                    },
                    {
                        "id": 141,
                        "nm": "乌海",
                        "py": "wuhai"
                    },
                    {
                        "id": 140,
                        "nm": "包头",
                        "py": "baotou"
                    },
                    {
                        "id": 143,
                        "nm": "通辽",
                        "py": "tongliao"
                    },
                    {
                        "id": 142,
                        "nm": "赤峰",
                        "py": "chifeng"
                    },
                    {
                        "id": 129,
                        "nm": "大同",
                        "py": "datong"
                    },
                    {
                        "id": 128,
                        "nm": "衡水",
                        "py": "hengshui"
                    },
                    {
                        "id": 131,
                        "nm": "长治",
                        "py": "changzhi"
                    },
                    {
                        "id": 130,
                        "nm": "阳泉",
                        "py": "yangquan"
                    },
                    {
                        "id": 133,
                        "nm": "朔州",
                        "py": "shuozhou"
                    },
                    {
                        "id": 132,
                        "nm": "晋城",
                        "py": "jincheng"
                    },
                    {
                        "id": 135,
                        "nm": "运城",
                        "py": "yuncheng"
                    },
                    {
                        "id": 134,
                        "nm": "晋中",
                        "py": "jinzhong"
                    },
                    {
                        "id": 152,
                        "nm": "抚顺",
                        "py": "fushun"
                    },
                    {
                        "id": 153,
                        "nm": "本溪",
                        "py": "benxi"
                    },
                    {
                        "id": 154,
                        "nm": "丹东",
                        "py": "dandong"
                    },
                    {
                        "id": 155,
                        "nm": "营口",
                        "py": "yingkou"
                    },
                    {
                        "id": 156,
                        "nm": "阜新",
                        "py": "fuxin"
                    },
                    {
                        "id": 157,
                        "nm": "辽阳",
                        "py": "liaoyang"
                    },
                    {
                        "id": 158,
                        "nm": "盘锦",
                        "py": "panjin"
                    },
                    {
                        "id": 159,
                        "nm": "铁岭",
                        "py": "tieling"
                    },
                    {
                        "id": 144,
                        "nm": "鄂尔多斯",
                        "py": "eerduosi"
                    },
                    {
                        "id": 145,
                        "nm": "呼伦贝尔",
                        "py": "hulunbeier"
                    },
                    {
                        "id": 146,
                        "nm": "巴彦淖尔",
                        "py": "bayannaoer"
                    },
                    {
                        "id": 147,
                        "nm": "乌兰察布",
                        "py": "wulanchabu"
                    },
                    {
                        "id": 148,
                        "nm": "兴安盟",
                        "py": "xinganmeng"
                    },
                    {
                        "id": 149,
                        "nm": "锡林郭勒",
                        "py": "xilinguolemeng"
                    },
                    {
                        "id": 150,
                        "nm": "阿拉善盟",
                        "py": "alashanmeng"
                    },
                    {
                        "id": 151,
                        "nm": "鞍山",
                        "py": "anshan"
                    },
                    {
                        "id": 171,
                        "nm": "双鸭山",
                        "py": "shuangyashan"
                    },
                    {
                        "id": 170,
                        "nm": "鹤岗",
                        "py": "hegang"
                    },
                    {
                        "id": 169,
                        "nm": "鸡西",
                        "py": "jixi"
                    },
                    {
                        "id": 168,
                        "nm": "延边",
                        "py": "yanbian"
                    },
                    {
                        "id": 175,
                        "nm": "牡丹江",
                        "py": "mudanjiang"
                    },
                    {
                        "id": 174,
                        "nm": "七台河",
                        "py": "qitaihe"
                    },
                    {
                        "id": 173,
                        "nm": "佳木斯",
                        "py": "jiamusi"
                    },
                    {
                        "id": 172,
                        "nm": "伊春",
                        "py": "yichunyc"
                    },
                    {
                        "id": 163,
                        "nm": "辽源",
                        "py": "liaoyuan"
                    },
                    {
                        "id": 162,
                        "nm": "四平",
                        "py": "siping"
                    },
                    {
                        "id": 161,
                        "nm": "吉林",
                        "py": "jilin"
                    },
                    {
                        "id": 160,
                        "nm": "朝阳",
                        "py": "chaoyang"
                    },
                    {
                        "id": 167,
                        "nm": "白城",
                        "py": "baicheng"
                    },
                    {
                        "id": 166,
                        "nm": "松原",
                        "py": "songyuan"
                    },
                    {
                        "id": 165,
                        "nm": "白山",
                        "py": "baishan"
                    },
                    {
                        "id": 164,
                        "nm": "通化",
                        "py": "tonghua"
                    },
                    {
                        "id": 186,
                        "nm": "湖州",
                        "py": "huzhou"
                    },
                    {
                        "id": 187,
                        "nm": "绍兴",
                        "py": "shaoxing"
                    },
                    {
                        "id": 184,
                        "nm": "宿迁",
                        "py": "suqian"
                    },
                    {
                        "id": 185,
                        "nm": "嘉兴",
                        "py": "jiaxing"
                    },
                    {
                        "id": 190,
                        "nm": "舟山",
                        "py": "zhoushan"
                    },
                    {
                        "id": 191,
                        "nm": "台州",
                        "py": "taizhoutz"
                    },
                    {
                        "id": 188,
                        "nm": "金华",
                        "py": "jinhua"
                    },
                    {
                        "id": 189,
                        "nm": "衢州",
                        "py": "quzhou"
                    },
                    {
                        "id": 178,
                        "nm": "大兴安岭",
                        "py": "daxinganling"
                    },
                    {
                        "id": 179,
                        "nm": "连云港",
                        "py": "lianyungang"
                    },
                    {
                        "id": 176,
                        "nm": "黑河",
                        "py": "heihe"
                    },
                    {
                        "id": 177,
                        "nm": "绥化",
                        "py": "suihua"
                    },
                    {
                        "id": 182,
                        "nm": "镇江",
                        "py": "zhenjiang"
                    },
                    {
                        "id": 183,
                        "nm": "泰州",
                        "py": "taizhou"
                    },
                    {
                        "id": 180,
                        "nm": "淮安",
                        "py": "huaian"
                    },
                    {
                        "id": 181,
                        "nm": "盐城",
                        "py": "yancheng"
                    },
                    {
                        "id": 205,
                        "nm": "池州",
                        "py": "chizhou"
                    },
                    {
                        "id": 204,
                        "nm": "亳州",
                        "py": "bozhou"
                    },
                    {
                        "id": 207,
                        "nm": "莆田",
                        "py": "putian"
                    },
                    {
                        "id": 206,
                        "nm": "宣城",
                        "py": "xuancheng"
                    },
                    {
                        "id": 201,
                        "nm": "宿州",
                        "py": "suzhousz"
                    },
                    {
                        "id": 200,
                        "nm": "阜阳",
                        "py": "fuyang"
                    },
                    {
                        "id": 203,
                        "nm": "六安",
                        "py": "liuan"
                    },
                    {
                        "id": 202,
                        "nm": "巢湖",
                        "py": "chaohu"
                    },
                    {
                        "id": 197,
                        "nm": "安庆",
                        "py": "anqing"
                    },
                    {
                        "id": 196,
                        "nm": "铜陵",
                        "py": "tongling"
                    },
                    {
                        "id": 199,
                        "nm": "滁州",
                        "py": "chuzhou"
                    },
                    {
                        "id": 198,
                        "nm": "黄山",
                        "py": "huangshan"
                    },
                    {
                        "id": 193,
                        "nm": "淮南",
                        "py": "huainan"
                    },
                    {
                        "id": 192,
                        "nm": "丽水",
                        "py": "lishui"
                    },
                    {
                        "id": 195,
                        "nm": "淮北",
                        "py": "huaibei"
                    },
                    {
                        "id": 194,
                        "nm": "马鞍山",
                        "py": "maanshan"
                    },
                    {
                        "id": 220,
                        "nm": "抚州",
                        "py": "fuzhoufz"
                    },
                    {
                        "id": 221,
                        "nm": "上饶",
                        "py": "shangrao"
                    },
                    {
                        "id": 222,
                        "nm": "枣庄",
                        "py": "zaozhuang"
                    },
                    {
                        "id": 223,
                        "nm": "东营",
                        "py": "dongying"
                    },
                    {
                        "id": 216,
                        "nm": "鹰潭",
                        "py": "yingtan"
                    },
                    {
                        "id": 217,
                        "nm": "赣州",
                        "py": "ganzhou"
                    },
                    {
                        "id": 218,
                        "nm": "吉安",
                        "py": "jian"
                    },
                    {
                        "id": 219,
                        "nm": "宜春",
                        "py": "yichun"
                    },
                    {
                        "id": 212,
                        "nm": "宁德",
                        "py": "ningde"
                    },
                    {
                        "id": 213,
                        "nm": "景德镇",
                        "py": "jingdezhen"
                    },
                    {
                        "id": 214,
                        "nm": "萍乡",
                        "py": "pingxiang"
                    },
                    {
                        "id": 215,
                        "nm": "新余",
                        "py": "xinyu"
                    },
                    {
                        "id": 208,
                        "nm": "三明",
                        "py": "sanming"
                    },
                    {
                        "id": 209,
                        "nm": "漳州",
                        "py": "zhangzhou"
                    },
                    {
                        "id": 210,
                        "nm": "南平",
                        "py": "nanping"
                    },
                    {
                        "id": 211,
                        "nm": "龙岩",
                        "py": "longyan"
                    },
                    {
                        "id": 239,
                        "nm": "鹤壁",
                        "py": "hebi"
                    },
                    {
                        "id": 238,
                        "nm": "安阳",
                        "py": "anyang"
                    },
                    {
                        "id": 237,
                        "nm": "平顶山",
                        "py": "pingdingshan"
                    },
                    {
                        "id": 236,
                        "nm": "洛阳",
                        "py": "luoyang"
                    },
                    {
                        "id": 235,
                        "nm": "开封",
                        "py": "kaifeng"
                    },
                    {
                        "id": 234,
                        "nm": "菏泽",
                        "py": "heze"
                    },
                    {
                        "id": 233,
                        "nm": "滨州",
                        "py": "binzhou"
                    },
                    {
                        "id": 232,
                        "nm": "聊城",
                        "py": "liaocheng"
                    },
                    {
                        "id": 231,
                        "nm": "德州",
                        "py": "dezhou"
                    },
                    {
                        "id": 230,
                        "nm": "临沂",
                        "py": "linyi"
                    },
                    {
                        "id": 229,
                        "nm": "莱芜",
                        "py": "laiwu"
                    },
                    {
                        "id": 228,
                        "nm": "日照",
                        "py": "rizhao"
                    },
                    {
                        "id": 227,
                        "nm": "威海",
                        "py": "weihai"
                    },
                    {
                        "id": 226,
                        "nm": "泰安",
                        "py": "taian"
                    },
                    {
                        "id": 225,
                        "nm": "济宁",
                        "py": "jining"
                    },
                    {
                        "id": 224,
                        "nm": "潍坊",
                        "py": "weifang"
                    },
                    {
                        "id": 254,
                        "nm": "鄂州",
                        "py": "ezhou"
                    },
                    {
                        "id": 255,
                        "nm": "荆门",
                        "py": "jingmen"
                    },
                    {
                        "id": 252,
                        "nm": "宜昌",
                        "py": "yichang"
                    },
                    {
                        "id": 253,
                        "nm": "襄阳",
                        "py": "xiangyang"
                    },
                    {
                        "id": 250,
                        "nm": "黄石",
                        "py": "huangshi"
                    },
                    {
                        "id": 251,
                        "nm": "十堰",
                        "py": "shiyan"
                    },
                    {
                        "id": 248,
                        "nm": "驻马店",
                        "py": "zhumadian"
                    },
                    {
                        "id": 249,
                        "nm": "济源",
                        "py": "jiyuan"
                    },
                    {
                        "id": 246,
                        "nm": "信阳",
                        "py": "xinyang"
                    },
                    {
                        "id": 247,
                        "nm": "周口",
                        "py": "zhoukou"
                    },
                    {
                        "id": 244,
                        "nm": "南阳",
                        "py": "nanyang"
                    },
                    {
                        "id": 245,
                        "nm": "商丘",
                        "py": "shangqiu"
                    },
                    {
                        "id": 242,
                        "nm": "漯河",
                        "py": "luohe"
                    },
                    {
                        "id": 243,
                        "nm": "三门峡",
                        "py": "sanmenxia"
                    },
                    {
                        "id": 240,
                        "nm": "濮阳",
                        "py": "puyang"
                    },
                    {
                        "id": 241,
                        "nm": "许昌",
                        "py": "xuchang"
                    },
                    {
                        "id": 275,
                        "nm": "湘西",
                        "py": "xiangxi"
                    },
                    {
                        "id": 274,
                        "nm": "娄底",
                        "py": "loudi"
                    },
                    {
                        "id": 273,
                        "nm": "怀化",
                        "py": "huaihua"
                    },
                    {
                        "id": 272,
                        "nm": "永州",
                        "py": "yongzhou"
                    },
                    {
                        "id": 279,
                        "nm": "茂名",
                        "py": "maoming"
                    },
                    {
                        "id": 278,
                        "nm": "湛江",
                        "py": "zhanjiang"
                    },
                    {
                        "id": 277,
                        "nm": "江门",
                        "py": "jiangmen"
                    },
                    {
                        "id": 276,
                        "nm": "韶关",
                        "py": "shaoguan"
                    },
                    {
                        "id": 283,
                        "nm": "汕尾",
                        "py": "shanwei"
                    },
                    {
                        "id": 282,
                        "nm": "梅州",
                        "py": "meizhou"
                    },
                    {
                        "id": 281,
                        "nm": "惠州",
                        "py": "huizhou"
                    },
                    {
                        "id": 280,
                        "nm": "肇庆",
                        "py": "zhaoqing"
                    },
                    {
                        "id": 287,
                        "nm": "潮州",
                        "py": "chaozhou"
                    },
                    {
                        "id": 286,
                        "nm": "清远",
                        "py": "qingyuan"
                    },
                    {
                        "id": 285,
                        "nm": "阳江",
                        "py": "yangjiang"
                    },
                    {
                        "id": 284,
                        "nm": "河源",
                        "py": "heyuan"
                    },
                    {
                        "id": 258,
                        "nm": "黄冈",
                        "py": "huanggang"
                    },
                    {
                        "id": 259,
                        "nm": "咸宁",
                        "py": "xianning"
                    },
                    {
                        "id": 256,
                        "nm": "孝感",
                        "py": "xiaogan"
                    },
                    {
                        "id": 257,
                        "nm": "荆州",
                        "py": "jingzhou"
                    },
                    {
                        "id": 263,
                        "nm": "株洲",
                        "py": "zhuzhou"
                    },
                    {
                        "id": 260,
                        "nm": "随州",
                        "py": "suizhou"
                    },
                    {
                        "id": 261,
                        "nm": "恩施",
                        "py": "enshi"
                    },
                    {
                        "id": 266,
                        "nm": "邵阳",
                        "py": "shaoyang"
                    },
                    {
                        "id": 267,
                        "nm": "岳阳",
                        "py": "yueyang"
                    },
                    {
                        "id": 264,
                        "nm": "湘潭",
                        "py": "xiangtan"
                    },
                    {
                        "id": 265,
                        "nm": "衡阳",
                        "py": "hengyang"
                    },
                    {
                        "id": 270,
                        "nm": "益阳",
                        "py": "yiyang"
                    },
                    {
                        "id": 271,
                        "nm": "郴州",
                        "py": "chenzhou"
                    },
                    {
                        "id": 268,
                        "nm": "常德",
                        "py": "changde"
                    },
                    {
                        "id": 269,
                        "nm": "张家界",
                        "py": "zhangjiajie"
                    },
                    {
                        "id": 305,
                        "nm": "德阳",
                        "py": "deyang"
                    },
                    {
                        "id": 304,
                        "nm": "泸州",
                        "py": "luzhou"
                    },
                    {
                        "id": 307,
                        "nm": "广元",
                        "py": "guangyuan"
                    },
                    {
                        "id": 306,
                        "nm": "绵阳",
                        "py": "mianyang"
                    },
                    {
                        "id": 309,
                        "nm": "内江",
                        "py": "neijiang"
                    },
                    {
                        "id": 308,
                        "nm": "遂宁",
                        "py": "suining"
                    },
                    {
                        "id": 311,
                        "nm": "南充",
                        "py": "nanchong"
                    },
                    {
                        "id": 310,
                        "nm": "乐山",
                        "py": "leshan"
                    },
                    {
                        "id": 313,
                        "nm": "宜宾",
                        "py": "yibin"
                    },
                    {
                        "id": 312,
                        "nm": "眉山",
                        "py": "meishan"
                    },
                    {
                        "id": 315,
                        "nm": "达州",
                        "py": "dazhou"
                    },
                    {
                        "id": 314,
                        "nm": "广安",
                        "py": "guangan"
                    },
                    {
                        "id": 317,
                        "nm": "巴中",
                        "py": "bazhong"
                    },
                    {
                        "id": 316,
                        "nm": "雅安",
                        "py": "yaan"
                    },
                    {
                        "id": 319,
                        "nm": "阿坝",
                        "py": "aba"
                    },
                    {
                        "id": 318,
                        "nm": "资阳",
                        "py": "ziyang"
                    },
                    {
                        "id": 288,
                        "nm": "揭阳",
                        "py": "jieyang"
                    },
                    {
                        "id": 289,
                        "nm": "云浮",
                        "py": "yunfu"
                    },
                    {
                        "id": 290,
                        "nm": "柳州",
                        "py": "liuzhou"
                    },
                    {
                        "id": 291,
                        "nm": "梧州",
                        "py": "wuzhou"
                    },
                    {
                        "id": 292,
                        "nm": "北海",
                        "py": "beihai"
                    },
                    {
                        "id": 293,
                        "nm": "防城港",
                        "py": "fangchenggang"
                    },
                    {
                        "id": 294,
                        "nm": "钦州",
                        "py": "qinzhou"
                    },
                    {
                        "id": 295,
                        "nm": "贵港",
                        "py": "guigang"
                    },
                    {
                        "id": 296,
                        "nm": "玉林",
                        "py": "yulin"
                    },
                    {
                        "id": 297,
                        "nm": "百色",
                        "py": "baise"
                    },
                    {
                        "id": 298,
                        "nm": "贺州",
                        "py": "hezhou"
                    },
                    {
                        "id": 299,
                        "nm": "河池",
                        "py": "hechi"
                    },
                    {
                        "id": 300,
                        "nm": "来宾",
                        "py": "laibin"
                    },
                    {
                        "id": 301,
                        "nm": "崇左",
                        "py": "chongzuo"
                    },
                    {
                        "id": 302,
                        "nm": "自贡",
                        "py": "zigong"
                    },
                    {
                        "id": 303,
                        "nm": "攀枝花",
                        "py": "panzhihua"
                    },
                    {
                        "id": 343,
                        "nm": "怒江",
                        "py": "nujiang"
                    },
                    {
                        "id": 342,
                        "nm": "德宏",
                        "py": "dehong"
                    },
                    {
                        "id": 341,
                        "nm": "大理",
                        "py": "dali"
                    },
                    {
                        "id": 340,
                        "nm": "西双版纳",
                        "py": "xishuangbanna"
                    },
                    {
                        "id": 339,
                        "nm": "文山",
                        "py": "wenshan"
                    },
                    {
                        "id": 338,
                        "nm": "红河",
                        "py": "honghe"
                    },
                    {
                        "id": 337,
                        "nm": "楚雄",
                        "py": "chuxiong"
                    },
                    {
                        "id": 336,
                        "nm": "临沧",
                        "py": "lincang"
                    },
                    {
                        "id": 351,
                        "nm": "林芝",
                        "py": "linzhi"
                    },
                    {
                        "id": 348,
                        "nm": "日喀则",
                        "py": "rikaze"
                    },
                    {
                        "id": 345,
                        "nm": "拉萨",
                        "py": "lasa"
                    },
                    {
                        "id": 344,
                        "nm": "迪庆",
                        "py": "diqing"
                    },
                    {
                        "id": 326,
                        "nm": "黔西南",
                        "py": "qianxinan"
                    },
                    {
                        "id": 327,
                        "nm": "毕节",
                        "py": "bijiediqu"
                    },
                    {
                        "id": 324,
                        "nm": "安顺",
                        "py": "anshun"
                    },
                    {
                        "id": 325,
                        "nm": "铜仁",
                        "py": "tongrendiqu"
                    },
                    {
                        "id": 322,
                        "nm": "六盘水",
                        "py": "liupanshui"
                    },
                    {
                        "id": 323,
                        "nm": "遵义",
                        "py": "zunyi"
                    },
                    {
                        "id": 320,
                        "nm": "甘孜",
                        "py": "ganzi"
                    },
                    {
                        "id": 321,
                        "nm": "凉山",
                        "py": "liangshan"
                    },
                    {
                        "id": 334,
                        "nm": "丽江",
                        "py": "lijiang"
                    },
                    {
                        "id": 335,
                        "nm": "普洱",
                        "py": "puer"
                    },
                    {
                        "id": 332,
                        "nm": "保山",
                        "py": "baoshan"
                    },
                    {
                        "id": 333,
                        "nm": "昭通",
                        "py": "zhaotong"
                    },
                    {
                        "id": 330,
                        "nm": "曲靖",
                        "py": "qujing"
                    },
                    {
                        "id": 331,
                        "nm": "玉溪",
                        "py": "yuxi"
                    },
                    {
                        "id": 328,
                        "nm": "黔东南",
                        "py": "qiandongnan"
                    },
                    {
                        "id": 329,
                        "nm": "黔南",
                        "py": "qiannan"
                    },
                    {
                        "id": 373,
                        "nm": "甘南",
                        "py": "gannan"
                    },
                    {
                        "id": 372,
                        "nm": "临夏",
                        "py": "linxia"
                    },
                    {
                        "id": 375,
                        "nm": "海东",
                        "py": "haidong"
                    },
                    {
                        "id": 374,
                        "nm": "西宁",
                        "py": "xining"
                    },
                    {
                        "id": 369,
                        "nm": "庆阳",
                        "py": "qingyang"
                    },
                    {
                        "id": 368,
                        "nm": "酒泉",
                        "py": "jiuquan"
                    },
                    {
                        "id": 371,
                        "nm": "陇南",
                        "py": "longnan"
                    },
                    {
                        "id": 370,
                        "nm": "定西",
                        "py": "dingxi"
                    },
                    {
                        "id": 381,
                        "nm": "海西",
                        "py": "haixi"
                    },
                    {
                        "id": 380,
                        "nm": "玉树",
                        "py": "yushu"
                    },
                    {
                        "id": 383,
                        "nm": "石嘴山",
                        "py": "shizuishan"
                    },
                    {
                        "id": 382,
                        "nm": "银川",
                        "py": "yinchuan"
                    },
                    {
                        "id": 377,
                        "nm": "黄南",
                        "py": "huangnan"
                    },
                    {
                        "id": 378,
                        "nm": "海南州",
                        "py": "hainanzhou"
                    },
                    {
                        "id": 356,
                        "nm": "延安",
                        "py": "yanan"
                    },
                    {
                        "id": 357,
                        "nm": "汉中",
                        "py": "hanzhong"
                    },
                    {
                        "id": 358,
                        "nm": "榆林",
                        "py": "yulinyl"
                    },
                    {
                        "id": 359,
                        "nm": "安康",
                        "py": "ankang"
                    },
                    {
                        "id": 352,
                        "nm": "铜川",
                        "py": "tongchuan"
                    },
                    {
                        "id": 353,
                        "nm": "宝鸡",
                        "py": "baoji"
                    },
                    {
                        "id": 354,
                        "nm": "咸阳",
                        "py": "xianyang"
                    },
                    {
                        "id": 355,
                        "nm": "渭南",
                        "py": "weinan"
                    },
                    {
                        "id": 364,
                        "nm": "天水",
                        "py": "tianshui"
                    },
                    {
                        "id": 365,
                        "nm": "武威",
                        "py": "wuwei"
                    },
                    {
                        "id": 366,
                        "nm": "张掖",
                        "py": "zhangye"
                    },
                    {
                        "id": 367,
                        "nm": "平凉",
                        "py": "pingliang"
                    },
                    {
                        "id": 360,
                        "nm": "商洛",
                        "py": "shangluo"
                    },
                    {
                        "id": 361,
                        "nm": "兰州",
                        "py": "lanzhou"
                    },
                    {
                        "id": 362,
                        "nm": "金昌",
                        "py": "jinchang"
                    },
                    {
                        "id": 363,
                        "nm": "白银",
                        "py": "baiyin"
                    },
                    {
                        "id": 408,
                        "nm": "石河子",
                        "py": "shihezi"
                    },
                    {
                        "id": 409,
                        "nm": "嘉峪关",
                        "py": "jiayuguan"
                    },
                    {
                        "id": 412,
                        "nm": "仙桃",
                        "py": "xiantao"
                    },
                    {
                        "id": 403,
                        "nm": "昆山",
                        "py": "kunshan"
                    },
                    {
                        "id": 400,
                        "nm": "阿勒泰",
                        "py": "aletai"
                    },
                    {
                        "id": 406,
                        "nm": "顺德",
                        "py": "shunde"
                    },
                    {
                        "id": 404,
                        "nm": "江阴",
                        "py": "jiangyin"
                    },
                    {
                        "id": 405,
                        "nm": "义乌",
                        "py": "yiwu"
                    },
                    {
                        "id": 394,
                        "nm": "阿克苏",
                        "py": "akesu"
                    },
                    {
                        "id": 393,
                        "nm": "巴州",
                        "py": "bazhou"
                    },
                    {
                        "id": 392,
                        "nm": "博尔塔拉",
                        "py": "boertala"
                    },
                    {
                        "id": 399,
                        "nm": "塔城",
                        "py": "tacheng"
                    },
                    {
                        "id": 398,
                        "nm": "伊犁",
                        "py": "yili"
                    },
                    {
                        "id": 397,
                        "nm": "和田",
                        "py": "hetian"
                    },
                    {
                        "id": 396,
                        "nm": "喀什地区",
                        "py": "kashi"
                    },
                    {
                        "id": 387,
                        "nm": "乌鲁木齐",
                        "py": "wulumuqi"
                    },
                    {
                        "id": 386,
                        "nm": "中卫",
                        "py": "zhongwei"
                    },
                    {
                        "id": 385,
                        "nm": "固原",
                        "py": "guyuan"
                    },
                    {
                        "id": 384,
                        "nm": "吴忠",
                        "py": "wuzhong"
                    },
                    {
                        "id": 391,
                        "nm": "昌吉",
                        "py": "changji"
                    },
                    {
                        "id": 390,
                        "nm": "哈密",
                        "py": "hami"
                    },
                    {
                        "id": 389,
                        "nm": "吐鲁番",
                        "py": "tulufan"
                    },
                    {
                        "id": 388,
                        "nm": "克拉玛依",
                        "py": "kelamayi"
                    },
                    {
                        "id": 440,
                        "nm": "石狮",
                        "py": "shishi"
                    },
                    {
                        "id": 443,
                        "nm": "武夷山",
                        "py": "wuyishan"
                    },
                    {
                        "id": 432,
                        "nm": "太仓",
                        "py": "taicang"
                    },
                    {
                        "id": 433,
                        "nm": "吴江",
                        "py": "wujiang"
                    },
                    {
                        "id": 434,
                        "nm": "敦煌",
                        "py": "dunhuang"
                    },
                    {
                        "id": 439,
                        "nm": "靖江",
                        "py": "jingjiang"
                    },
                    {
                        "id": 425,
                        "nm": "桐乡",
                        "py": "tongxiang"
                    },
                    {
                        "id": 424,
                        "nm": "海宁",
                        "py": "haining"
                    },
                    {
                        "id": 427,
                        "nm": "涪陵",
                        "py": "fuling"
                    },
                    {
                        "id": 426,
                        "nm": "涿州",
                        "py": "zhuozhou"
                    },
                    {
                        "id": 428,
                        "nm": "万州",
                        "py": "wanzhou"
                    },
                    {
                        "id": 431,
                        "nm": "丹阳",
                        "py": "danyang"
                    },
                    {
                        "id": 430,
                        "nm": "迁安",
                        "py": "qianan"
                    },
                    {
                        "id": 417,
                        "nm": "峨眉山",
                        "py": "emeishan"
                    },
                    {
                        "id": 416,
                        "nm": "富阳",
                        "py": "fuyangfy"
                    },
                    {
                        "id": 419,
                        "nm": "张家港",
                        "py": "zhangjiagang"
                    },
                    {
                        "id": 418,
                        "nm": "琼海",
                        "py": "qionghai"
                    },
                    {
                        "id": 421,
                        "nm": "从化",
                        "py": "conghua"
                    },
                    {
                        "id": 420,
                        "nm": "晋江市",
                        "py": "jinjiangshi"
                    },
                    {
                        "id": 422,
                        "nm": "常熟",
                        "py": "changshu"
                    },
                    {
                        "id": 478,
                        "nm": "东台",
                        "py": "dongtai"
                    },
                    {
                        "id": 479,
                        "nm": "婺源",
                        "py": "wuyuan"
                    },
                    {
                        "id": 476,
                        "nm": "兰溪",
                        "py": "lanxi"
                    },
                    {
                        "id": 477,
                        "nm": "大丰",
                        "py": "dafeng"
                    },
                    {
                        "id": 475,
                        "nm": "仁怀",
                        "py": "renhuai"
                    },
                    {
                        "id": 472,
                        "nm": "惠阳",
                        "py": "huiyang"
                    },
                    {
                        "id": 473,
                        "nm": "凯里",
                        "py": "kaili"
                    },
                    {
                        "id": 470,
                        "nm": "乐清",
                        "py": "yueqing"
                    },
                    {
                        "id": 471,
                        "nm": "惠东",
                        "py": "huidong"
                    },
                    {
                        "id": 468,
                        "nm": "诸暨",
                        "py": "zhuji"
                    },
                    {
                        "id": 469,
                        "nm": "瑞安",
                        "py": "ruian"
                    },
                    {
                        "id": 466,
                        "nm": "阳朔",
                        "py": "yangshuo"
                    },
                    {
                        "id": 467,
                        "nm": "德清",
                        "py": "deqing"
                    },
                    {
                        "id": 465,
                        "nm": "章丘区",
                        "py": "zhangqiuqu"
                    },
                    {
                        "id": 463,
                        "nm": "长乐",
                        "py": "changle"
                    },
                    {
                        "id": 462,
                        "nm": "福清",
                        "py": "fuqing"
                    },
                    {
                        "id": 461,
                        "nm": "临海",
                        "py": "linhai"
                    },
                    {
                        "id": 460,
                        "nm": "金坛",
                        "py": "jintan"
                    },
                    {
                        "id": 459,
                        "nm": "余姚",
                        "py": "yuyao"
                    },
                    {
                        "id": 458,
                        "nm": "永康",
                        "py": "yongkang"
                    },
                    {
                        "id": 457,
                        "nm": "温岭",
                        "py": "wenling"
                    },
                    {
                        "id": 456,
                        "nm": "上虞",
                        "py": "shangyu"
                    },
                    {
                        "id": 455,
                        "nm": "东阳",
                        "py": "dongyang"
                    },
                    {
                        "id": 454,
                        "nm": "宜兴",
                        "py": "yixing"
                    },
                    {
                        "id": 453,
                        "nm": "兖州",
                        "py": "yanzhou"
                    },
                    {
                        "id": 452,
                        "nm": "长兴",
                        "py": "changxing"
                    },
                    {
                        "id": 451,
                        "nm": "慈溪",
                        "py": "cixi"
                    },
                    {
                        "id": 450,
                        "nm": "溧阳",
                        "py": "liyang"
                    },
                    {
                        "id": 449,
                        "nm": "武安",
                        "py": "wuan"
                    },
                    {
                        "id": 508,
                        "nm": "邹平",
                        "py": "zouping"
                    },
                    {
                        "id": 509,
                        "nm": "耒阳",
                        "py": "leiyang"
                    },
                    {
                        "id": 510,
                        "nm": "江山",
                        "py": "jiangshan"
                    },
                    {
                        "id": 504,
                        "nm": "鹤山",
                        "py": "heshan"
                    },
                    {
                        "id": 505,
                        "nm": "桦甸",
                        "py": "huadian"
                    },
                    {
                        "id": 506,
                        "nm": "海城",
                        "py": "haicheng"
                    },
                    {
                        "id": 507,
                        "nm": "曲阜",
                        "py": "qufu"
                    },
                    {
                        "id": 500,
                        "nm": "启东",
                        "py": "qidong"
                    },
                    {
                        "id": 501,
                        "nm": "如皋",
                        "py": "rugao"
                    },
                    {
                        "id": 502,
                        "nm": "开平",
                        "py": "kaiping"
                    },
                    {
                        "id": 503,
                        "nm": "台山",
                        "py": "taishan"
                    },
                    {
                        "id": 496,
                        "nm": "青州",
                        "py": "qingzhou"
                    },
                    {
                        "id": 497,
                        "nm": "荣成",
                        "py": "rongcheng"
                    },
                    {
                        "id": 498,
                        "nm": "文登",
                        "py": "wendeng"
                    },
                    {
                        "id": 499,
                        "nm": "乳山",
                        "py": "rushan"
                    },
                    {
                        "id": 493,
                        "nm": "邳州",
                        "py": "pizhou"
                    },
                    {
                        "id": 492,
                        "nm": "龙口",
                        "py": "longkou"
                    },
                    {
                        "id": 495,
                        "nm": "寿光",
                        "py": "shouguang"
                    },
                    {
                        "id": 494,
                        "nm": "枣阳",
                        "py": "zaoyang"
                    },
                    {
                        "id": 489,
                        "nm": "嘉善",
                        "py": "jiashan"
                    },
                    {
                        "id": 491,
                        "nm": "当阳",
                        "py": "dangyang"
                    },
                    {
                        "id": 490,
                        "nm": "安吉",
                        "py": "anji"
                    },
                    {
                        "id": 485,
                        "nm": "井冈山",
                        "py": "jinggangshan"
                    },
                    {
                        "id": 484,
                        "nm": "香格里拉",
                        "py": "xianggelila"
                    },
                    {
                        "id": 487,
                        "nm": "神农架",
                        "py": "shennongjia"
                    },
                    {
                        "id": 486,
                        "nm": "武当山",
                        "py": "wudangshan"
                    },
                    {
                        "id": 480,
                        "nm": "凤凰",
                        "py": "fenghuang"
                    },
                    {
                        "id": 482,
                        "nm": "腾冲",
                        "py": "tengchong"
                    },
                    {
                        "id": 550,
                        "nm": "潜江",
                        "py": "qianjiang"
                    },
                    {
                        "id": 551,
                        "nm": "乌镇",
                        "py": "wuzhen"
                    },
                    {
                        "id": 548,
                        "nm": "新沂",
                        "py": "xinyi"
                    },
                    {
                        "id": 549,
                        "nm": "滕州",
                        "py": "tengzhou"
                    },
                    {
                        "id": 546,
                        "nm": "普宁",
                        "py": "puning"
                    },
                    {
                        "id": 547,
                        "nm": "南沙",
                        "py": "nansha"
                    },
                    {
                        "id": 544,
                        "nm": "晋州",
                        "py": "jinzhoushi"
                    },
                    {
                        "id": 545,
                        "nm": "肥城",
                        "py": "feicheng"
                    },
                    {
                        "id": 558,
                        "nm": "庄河",
                        "py": "zhuanghe"
                    },
                    {
                        "id": 559,
                        "nm": "扬中",
                        "py": "yangzhong"
                    },
                    {
                        "id": 556,
                        "nm": "新密",
                        "py": "xinmi"
                    },
                    {
                        "id": 557,
                        "nm": "荥阳",
                        "py": "xingyang"
                    },
                    {
                        "id": 554,
                        "nm": "桐庐",
                        "py": "tonglu"
                    },
                    {
                        "id": 555,
                        "nm": "新郑",
                        "py": "xinzheng"
                    },
                    {
                        "id": 552,
                        "nm": "登封",
                        "py": "dengfeng"
                    },
                    {
                        "id": 553,
                        "nm": "巩义",
                        "py": "gongyishi"
                    },
                    {
                        "id": 567,
                        "nm": "陆丰",
                        "py": "lufeng"
                    },
                    {
                        "id": 566,
                        "nm": "密山",
                        "py": "mishan"
                    },
                    {
                        "id": 564,
                        "nm": "华阴",
                        "py": "huayin"
                    },
                    {
                        "id": 563,
                        "nm": "漠河",
                        "py": "mohe"
                    },
                    {
                        "id": 562,
                        "nm": "兴宁",
                        "py": "xingning"
                    },
                    {
                        "id": 561,
                        "nm": "莱阳",
                        "py": "laiyang"
                    },
                    {
                        "id": 560,
                        "nm": "西塘",
                        "py": "xitang"
                    },
                    {
                        "id": 575,
                        "nm": "霸州",
                        "py": "hbbazhou"
                    },
                    {
                        "id": 574,
                        "nm": "新民",
                        "py": "xinmin"
                    },
                    {
                        "id": 573,
                        "nm": "海阳",
                        "py": "haiyang"
                    },
                    {
                        "id": 572,
                        "nm": "满洲里",
                        "py": "manzhouli"
                    },
                    {
                        "id": 571,
                        "nm": "儋州",
                        "py": "danzhou"
                    },
                    {
                        "id": 570,
                        "nm": "桂平",
                        "py": "guiping"
                    },
                    {
                        "id": 569,
                        "nm": "韶山",
                        "py": "shaoshan"
                    },
                    {
                        "id": 568,
                        "nm": "额尔古纳",
                        "py": "eerguna"
                    },
                    {
                        "id": 516,
                        "nm": "伊川",
                        "py": "yichuan"
                    },
                    {
                        "id": 517,
                        "nm": "兴化",
                        "py": "xinghua"
                    },
                    {
                        "id": 518,
                        "nm": "泰兴",
                        "py": "taixing"
                    },
                    {
                        "id": 519,
                        "nm": "海门",
                        "py": "haimen"
                    },
                    {
                        "id": 512,
                        "nm": "宁海",
                        "py": "ninghai"
                    },
                    {
                        "id": 513,
                        "nm": "乐昌",
                        "py": "lechang"
                    },
                    {
                        "id": 514,
                        "nm": "英德",
                        "py": "yingde"
                    },
                    {
                        "id": 515,
                        "nm": "句容",
                        "py": "jurong"
                    },
                    {
                        "id": 524,
                        "nm": "平湖",
                        "py": "pinghu"
                    },
                    {
                        "id": 525,
                        "nm": "湘阴",
                        "py": "xiangyin"
                    },
                    {
                        "id": 526,
                        "nm": "诸城",
                        "py": "zhucheng"
                    },
                    {
                        "id": 527,
                        "nm": "昌邑",
                        "py": "changyi"
                    },
                    {
                        "id": 520,
                        "nm": "宁乡",
                        "py": "ningxiang"
                    },
                    {
                        "id": 521,
                        "nm": "高邮",
                        "py": "gaoyou"
                    },
                    {
                        "id": 522,
                        "nm": "仪征",
                        "py": "yizheng"
                    },
                    {
                        "id": 523,
                        "nm": "新泰",
                        "py": "xintai"
                    },
                    {
                        "id": 533,
                        "nm": "滨海",
                        "py": "binhai"
                    },
                    {
                        "id": 532,
                        "nm": "射阳",
                        "py": "sheyang"
                    },
                    {
                        "id": 535,
                        "nm": "阜宁",
                        "py": "funing"
                    },
                    {
                        "id": 534,
                        "nm": "响水",
                        "py": "xiangshui"
                    },
                    {
                        "id": 529,
                        "nm": "莱州",
                        "py": "laizhou"
                    },
                    {
                        "id": 528,
                        "nm": "偃师",
                        "py": "yanshi"
                    },
                    {
                        "id": 531,
                        "nm": "沭阳",
                        "py": "shuyang"
                    },
                    {
                        "id": 530,
                        "nm": "嵊州",
                        "py": "shengzhou"
                    },
                    {
                        "id": 541,
                        "nm": "广饶",
                        "py": "guangrao"
                    },
                    {
                        "id": 540,
                        "nm": "奉化",
                        "py": "fenghua"
                    },
                    {
                        "id": 543,
                        "nm": "辛集",
                        "py": "xinji"
                    },
                    {
                        "id": 542,
                        "nm": "临安",
                        "py": "linan"
                    },
                    {
                        "id": 537,
                        "nm": "临清",
                        "py": "linqing"
                    },
                    {
                        "id": 536,
                        "nm": "建湖",
                        "py": "jianhu"
                    },
                    {
                        "id": 539,
                        "nm": "东港",
                        "py": "donggang"
                    },
                    {
                        "id": 538,
                        "nm": "三河",
                        "py": "sanhe"
                    },
                    {
                        "id": 610,
                        "nm": "明光",
                        "py": "mingguang"
                    },
                    {
                        "id": 611,
                        "nm": "乐陵",
                        "py": "laoling"
                    },
                    {
                        "id": 608,
                        "nm": "禹城",
                        "py": "yucheng"
                    },
                    {
                        "id": 609,
                        "nm": "禹州",
                        "py": "yuzhou"
                    },
                    {
                        "id": 614,
                        "nm": "湘乡",
                        "py": "xiangxiang"
                    },
                    {
                        "id": 612,
                        "nm": "钟祥",
                        "py": "zhongxiang"
                    },
                    {
                        "id": 613,
                        "nm": "沙河",
                        "py": "shahe"
                    },
                    {
                        "id": 618,
                        "nm": "龙海",
                        "py": "longhai"
                    },
                    {
                        "id": 619,
                        "nm": "醴陵",
                        "py": "liling"
                    },
                    {
                        "id": 616,
                        "nm": "汝州",
                        "py": "ruzhou"
                    },
                    {
                        "id": 617,
                        "nm": "浏阳",
                        "py": "liuyang"
                    },
                    {
                        "id": 622,
                        "nm": "伊宁",
                        "py": "yining"
                    },
                    {
                        "id": 623,
                        "nm": "海安",
                        "py": "haian"
                    },
                    {
                        "id": 620,
                        "nm": "莱西",
                        "py": "laixi"
                    },
                    {
                        "id": 621,
                        "nm": "南安",
                        "py": "nanan"
                    },
                    {
                        "id": 627,
                        "nm": "长葛",
                        "py": "changge"
                    },
                    {
                        "id": 626,
                        "nm": "天长",
                        "py": "tianchang"
                    },
                    {
                        "id": 625,
                        "nm": "宜城",
                        "py": "yicheng"
                    },
                    {
                        "id": 624,
                        "nm": "苍南",
                        "py": "cangnan"
                    },
                    {
                        "id": 631,
                        "nm": "高州",
                        "py": "gaozhou"
                    },
                    {
                        "id": 630,
                        "nm": "个旧",
                        "py": "gejiu"
                    },
                    {
                        "id": 629,
                        "nm": "高碑店",
                        "py": "gaobeidian"
                    },
                    {
                        "id": 628,
                        "nm": "廉江",
                        "py": "lianjiang"
                    },
                    {
                        "id": 635,
                        "nm": "东兴",
                        "py": "dongxing"
                    },
                    {
                        "id": 634,
                        "nm": "阆中",
                        "py": "langzhong"
                    },
                    {
                        "id": 633,
                        "nm": "四会",
                        "py": "sihui"
                    },
                    {
                        "id": 632,
                        "nm": "乐平",
                        "py": "leping"
                    },
                    {
                        "id": 639,
                        "nm": "瑞金",
                        "py": "ruijin"
                    },
                    {
                        "id": 638,
                        "nm": "盖州",
                        "py": "gaizhou"
                    },
                    {
                        "id": 637,
                        "nm": "原平",
                        "py": "yuanping"
                    },
                    {
                        "id": 636,
                        "nm": "介休",
                        "py": "jiexiu"
                    },
                    {
                        "id": 576,
                        "nm": "都江堰",
                        "py": "dujiangyan"
                    },
                    {
                        "id": 577,
                        "nm": "永城",
                        "py": "yongcheng"
                    },
                    {
                        "id": 578,
                        "nm": "天门",
                        "py": "tianmen"
                    },
                    {
                        "id": 579,
                        "nm": "侯马",
                        "py": "houma"
                    },
                    {
                        "id": 580,
                        "nm": "项城",
                        "py": "xiangcheng"
                    },
                    {
                        "id": 581,
                        "nm": "公主岭",
                        "py": "gongzhuling"
                    },
                    {
                        "id": 582,
                        "nm": "平度",
                        "py": "pingdu"
                    },
                    {
                        "id": 583,
                        "nm": "胶州",
                        "py": "jiaozhou"
                    },
                    {
                        "id": 584,
                        "nm": "梅河口",
                        "py": "meihekou"
                    },
                    {
                        "id": 585,
                        "nm": "彭州",
                        "py": "pengzhou"
                    },
                    {
                        "id": 586,
                        "nm": "招远",
                        "py": "zhaoyuan"
                    },
                    {
                        "id": 587,
                        "nm": "蓬莱",
                        "py": "penglai"
                    },
                    {
                        "id": 588,
                        "nm": "安丘",
                        "py": "anqiu"
                    },
                    {
                        "id": 589,
                        "nm": "高密",
                        "py": "gaomi"
                    },
                    {
                        "id": 590,
                        "nm": "汨罗",
                        "py": "miluo"
                    },
                    {
                        "id": 591,
                        "nm": "遵化",
                        "py": "zunhua"
                    },
                    {
                        "id": 593,
                        "nm": "广汉",
                        "py": "guanghan"
                    },
                    {
                        "id": 592,
                        "nm": "吴川",
                        "py": "wuchuan"
                    },
                    {
                        "id": 595,
                        "nm": "藁城",
                        "py": "gaocheng"
                    },
                    {
                        "id": 594,
                        "nm": "建德",
                        "py": "jiande"
                    },
                    {
                        "id": 597,
                        "nm": "永济",
                        "py": "yongji"
                    },
                    {
                        "id": 596,
                        "nm": "灵宝",
                        "py": "lingbao"
                    },
                    {
                        "id": 599,
                        "nm": "大石桥",
                        "py": "dashiqiao"
                    },
                    {
                        "id": 598,
                        "nm": "河津",
                        "py": "hejin"
                    },
                    {
                        "id": 601,
                        "nm": "高平",
                        "py": "gaoping"
                    },
                    {
                        "id": 600,
                        "nm": "大冶",
                        "py": "daye"
                    },
                    {
                        "id": 603,
                        "nm": "库尔勒",
                        "py": "kuerle"
                    },
                    {
                        "id": 602,
                        "nm": "宝应",
                        "py": "baoying"
                    },
                    {
                        "id": 605,
                        "nm": "简阳",
                        "py": "jianyang"
                    },
                    {
                        "id": 604,
                        "nm": "孝义",
                        "py": "xiaoyi"
                    },
                    {
                        "id": 607,
                        "nm": "文昌",
                        "py": "wenchang"
                    },
                    {
                        "id": 606,
                        "nm": "冷水江",
                        "py": "lengshuijiang"
                    },
                    {
                        "id": 687,
                        "nm": "南雄",
                        "py": "nanxiong"
                    },
                    {
                        "id": 686,
                        "nm": "东方",
                        "py": "dongfang"
                    },
                    {
                        "id": 685,
                        "nm": "海林",
                        "py": "hailin"
                    },
                    {
                        "id": 684,
                        "nm": "舞钢",
                        "py": "wugang"
                    },
                    {
                        "id": 683,
                        "nm": "连州",
                        "py": "lianzhou"
                    },
                    {
                        "id": 682,
                        "nm": "讷河",
                        "py": "nehe"
                    },
                    {
                        "id": 681,
                        "nm": "北流",
                        "py": "beiliu"
                    },
                    {
                        "id": 680,
                        "nm": "万宁",
                        "py": "wanning"
                    },
                    {
                        "id": 679,
                        "nm": "大通",
                        "py": "datongshi"
                    },
                    {
                        "id": 678,
                        "nm": "集安",
                        "py": "jianshi"
                    },
                    {
                        "id": 677,
                        "nm": "汾阳",
                        "py": "fenyang"
                    },
                    {
                        "id": 675,
                        "nm": "灵山",
                        "py": "lingshan"
                    },
                    {
                        "id": 674,
                        "nm": "滦南",
                        "py": "luannan"
                    },
                    {
                        "id": 673,
                        "nm": "桐城",
                        "py": "tongcheng"
                    },
                    {
                        "id": 672,
                        "nm": "化州",
                        "py": "huazhou"
                    },
                    {
                        "id": 702,
                        "nm": "格尔木",
                        "py": "geermu"
                    },
                    {
                        "id": 700,
                        "nm": "承德县",
                        "py": "chengdexian"
                    },
                    {
                        "id": 701,
                        "nm": "鄱阳",
                        "py": "poyang"
                    },
                    {
                        "id": 698,
                        "nm": "博爱",
                        "py": "boai"
                    },
                    {
                        "id": 699,
                        "nm": "安岳",
                        "py": "anyue"
                    },
                    {
                        "id": 696,
                        "nm": "温县",
                        "py": "wenxian"
                    },
                    {
                        "id": 697,
                        "nm": "武陟",
                        "py": "wuzhi"
                    },
                    {
                        "id": 694,
                        "nm": "孟州",
                        "py": "mengzhou"
                    },
                    {
                        "id": 695,
                        "nm": "修武",
                        "py": "xiuwu"
                    },
                    {
                        "id": 692,
                        "nm": "象山",
                        "py": "xiangshan"
                    },
                    {
                        "id": 693,
                        "nm": "玉环市",
                        "py": "yuhuanshi"
                    },
                    {
                        "id": 690,
                        "nm": "临江",
                        "py": "linjiang"
                    },
                    {
                        "id": 691,
                        "nm": "古交",
                        "py": "gujiao"
                    },
                    {
                        "id": 688,
                        "nm": "陵水",
                        "py": "lingshui"
                    },
                    {
                        "id": 689,
                        "nm": "阜康",
                        "py": "fukang"
                    },
                    {
                        "id": 653,
                        "nm": "赤壁",
                        "py": "chibi"
                    },
                    {
                        "id": 652,
                        "nm": "鹿泉",
                        "py": "luquan"
                    },
                    {
                        "id": 655,
                        "nm": "利川",
                        "py": "lichuan"
                    },
                    {
                        "id": 654,
                        "nm": "枝江",
                        "py": "zhijiang"
                    },
                    {
                        "id": 648,
                        "nm": "松滋",
                        "py": "songzi"
                    },
                    {
                        "id": 651,
                        "nm": "灯塔",
                        "py": "dengta"
                    },
                    {
                        "id": 650,
                        "nm": "黄骅",
                        "py": "huanghua"
                    },
                    {
                        "id": 645,
                        "nm": "霍州",
                        "py": "huozhou"
                    },
                    {
                        "id": 644,
                        "nm": "沁阳",
                        "py": "qinyang"
                    },
                    {
                        "id": 647,
                        "nm": "邛崃",
                        "py": "qionglai"
                    },
                    {
                        "id": 646,
                        "nm": "崇州",
                        "py": "chongzhou"
                    },
                    {
                        "id": 641,
                        "nm": "兴城",
                        "py": "xingcheng"
                    },
                    {
                        "id": 643,
                        "nm": "奎屯",
                        "py": "kuitun"
                    },
                    {
                        "id": 642,
                        "nm": "调兵山",
                        "py": "diaobingshan"
                    },
                    {
                        "id": 668,
                        "nm": "麻城",
                        "py": "macheng"
                    },
                    {
                        "id": 669,
                        "nm": "舒兰",
                        "py": "shulan"
                    },
                    {
                        "id": 670,
                        "nm": "凌海",
                        "py": "linghai"
                    },
                    {
                        "id": 671,
                        "nm": "樟树",
                        "py": "zhangshu"
                    },
                    {
                        "id": 664,
                        "nm": "即墨",
                        "py": "jimo"
                    },
                    {
                        "id": 665,
                        "nm": "凤城",
                        "py": "fengcheng"
                    },
                    {
                        "id": 666,
                        "nm": "洮南",
                        "py": "taonan"
                    },
                    {
                        "id": 667,
                        "nm": "武穴",
                        "py": "wuxue"
                    },
                    {
                        "id": 660,
                        "nm": "淳安",
                        "py": "chunan"
                    },
                    {
                        "id": 662,
                        "nm": "邓州",
                        "py": "dengzhou"
                    },
                    {
                        "id": 663,
                        "nm": "漳浦",
                        "py": "zhangpu"
                    },
                    {
                        "id": 656,
                        "nm": "宜都",
                        "py": "yidu"
                    },
                    {
                        "id": 657,
                        "nm": "瑞昌",
                        "py": "ruichang"
                    },
                    {
                        "id": 658,
                        "nm": "沅江",
                        "py": "yuanjiang"
                    },
                    {
                        "id": 659,
                        "nm": "老河口",
                        "py": "laohekou"
                    },
                    {
                        "id": 747,
                        "nm": "乌苏",
                        "py": "wusu"
                    },
                    {
                        "id": 746,
                        "nm": "曹妃甸",
                        "py": "caofeidian"
                    },
                    {
                        "id": 745,
                        "nm": "滦州市",
                        "py": "luanzhoushi"
                    },
                    {
                        "id": 744,
                        "nm": "乐亭",
                        "py": "laoting"
                    },
                    {
                        "id": 751,
                        "nm": "灌云",
                        "py": "guanyun"
                    },
                    {
                        "id": 750,
                        "nm": "电白",
                        "py": "dianbai"
                    },
                    {
                        "id": 749,
                        "nm": "仁寿",
                        "py": "renshou"
                    },
                    {
                        "id": 748,
                        "nm": "开州区",
                        "py": "kaizhouqu"
                    },
                    {
                        "id": 739,
                        "nm": "临朐",
                        "py": "linqu"
                    },
                    {
                        "id": 738,
                        "nm": "东平",
                        "py": "dongping"
                    },
                    {
                        "id": 737,
                        "nm": "昌乐",
                        "py": "changlecl"
                    },
                    {
                        "id": 736,
                        "nm": "邵东",
                        "py": "shaodong"
                    },
                    {
                        "id": 743,
                        "nm": "台前",
                        "py": "taiqian"
                    },
                    {
                        "id": 742,
                        "nm": "范县",
                        "py": "fanxian"
                    },
                    {
                        "id": 741,
                        "nm": "南乐",
                        "py": "nanle"
                    },
                    {
                        "id": 740,
                        "nm": "清丰",
                        "py": "qingfeng"
                    },
                    {
                        "id": 762,
                        "nm": "沙湾",
                        "py": "shawan"
                    },
                    {
                        "id": 763,
                        "nm": "永年",
                        "py": "yongnian"
                    },
                    {
                        "id": 760,
                        "nm": "泗阳",
                        "py": "siyang"
                    },
                    {
                        "id": 761,
                        "nm": "磐石",
                        "py": "panshi"
                    },
                    {
                        "id": 766,
                        "nm": "栾城",
                        "py": "luancheng"
                    },
                    {
                        "id": 767,
                        "nm": "磁县",
                        "py": "cixian"
                    },
                    {
                        "id": 764,
                        "nm": "仙居",
                        "py": "xianju"
                    },
                    {
                        "id": 765,
                        "nm": "定州",
                        "py": "dingzhou"
                    },
                    {
                        "id": 754,
                        "nm": "东海",
                        "py": "donghai"
                    },
                    {
                        "id": 755,
                        "nm": "睢县",
                        "py": "suixian"
                    },
                    {
                        "id": 752,
                        "nm": "灌南",
                        "py": "guannan"
                    },
                    {
                        "id": 753,
                        "nm": "赣榆",
                        "py": "ganyu"
                    },
                    {
                        "id": 758,
                        "nm": "淮阳",
                        "py": "huaiyang"
                    },
                    {
                        "id": 759,
                        "nm": "太和",
                        "py": "taihe"
                    },
                    {
                        "id": 756,
                        "nm": "建阳",
                        "py": "jianyangjy"
                    },
                    {
                        "id": 757,
                        "nm": "正定",
                        "py": "zhengding"
                    },
                    {
                        "id": 728,
                        "nm": "夏津",
                        "py": "xiajin"
                    },
                    {
                        "id": 729,
                        "nm": "信宜",
                        "py": "xinyixy"
                    },
                    {
                        "id": 730,
                        "nm": "浦江",
                        "py": "pujiang"
                    },
                    {
                        "id": 731,
                        "nm": "北碚",
                        "py": "beipei"
                    },
                    {
                        "id": 732,
                        "nm": "合川",
                        "py": "hechuan"
                    },
                    {
                        "id": 733,
                        "nm": "永川",
                        "py": "yongchuan"
                    },
                    {
                        "id": 734,
                        "nm": "新化",
                        "py": "xinhua"
                    },
                    {
                        "id": 735,
                        "nm": "丰城",
                        "py": "fch"
                    },
                    {
                        "id": 724,
                        "nm": "连江",
                        "py": "lianjiangxian"
                    },
                    {
                        "id": 725,
                        "nm": "蛟河",
                        "py": "jiaohe"
                    },
                    {
                        "id": 726,
                        "nm": "海盐",
                        "py": "haiyan"
                    },
                    {
                        "id": 727,
                        "nm": "齐河",
                        "py": "qihe"
                    },
                    {
                        "id": 821,
                        "nm": "中牟",
                        "py": "zhongmou"
                    },
                    {
                        "id": 820,
                        "nm": "宁津",
                        "py": "ningjinnj"
                    },
                    {
                        "id": 823,
                        "nm": "隆昌市",
                        "py": "longchangshi"
                    },
                    {
                        "id": 822,
                        "nm": "阎良",
                        "py": "yanliang"
                    },
                    {
                        "id": 817,
                        "nm": "汤阴",
                        "py": "tangyin"
                    },
                    {
                        "id": 816,
                        "nm": "滑县",
                        "py": "huaxian"
                    },
                    {
                        "id": 819,
                        "nm": "石泉",
                        "py": "shiquan"
                    },
                    {
                        "id": 818,
                        "nm": "新安",
                        "py": "xinan"
                    },
                    {
                        "id": 829,
                        "nm": "原阳",
                        "py": "yuanyang"
                    },
                    {
                        "id": 828,
                        "nm": "新乡县",
                        "py": "xinxiangxian"
                    },
                    {
                        "id": 831,
                        "nm": "监利",
                        "py": "jianli"
                    },
                    {
                        "id": 830,
                        "nm": "单县",
                        "py": "shanxian"
                    },
                    {
                        "id": 825,
                        "nm": "惠安",
                        "py": "huian"
                    },
                    {
                        "id": 824,
                        "nm": "泗洪",
                        "py": "sihong"
                    },
                    {
                        "id": 827,
                        "nm": "封丘",
                        "py": "fengqiu"
                    },
                    {
                        "id": 826,
                        "nm": "卫辉",
                        "py": "weihui"
                    },
                    {
                        "id": 804,
                        "nm": "上高",
                        "py": "shanggao"
                    },
                    {
                        "id": 805,
                        "nm": "平潭",
                        "py": "pingtan"
                    },
                    {
                        "id": 806,
                        "nm": "怀仁市",
                        "py": "huairenxian"
                    },
                    {
                        "id": 807,
                        "nm": "安平",
                        "py": "anping"
                    },
                    {
                        "id": 800,
                        "nm": "辉县",
                        "py": "huixian"
                    },
                    {
                        "id": 801,
                        "nm": "昌黎",
                        "py": "changli"
                    },
                    {
                        "id": 802,
                        "nm": "宣威",
                        "py": "xuanwei"
                    },
                    {
                        "id": 803,
                        "nm": "易县",
                        "py": "yixian"
                    },
                    {
                        "id": 812,
                        "nm": "藤县",
                        "py": "tengxian"
                    },
                    {
                        "id": 813,
                        "nm": "宁晋",
                        "py": "ningjin"
                    },
                    {
                        "id": 814,
                        "nm": "宜阳",
                        "py": "yiyangyy"
                    },
                    {
                        "id": 815,
                        "nm": "林州",
                        "py": "linzhou"
                    },
                    {
                        "id": 808,
                        "nm": "临潼",
                        "py": "lintong"
                    },
                    {
                        "id": 809,
                        "nm": "蓝田",
                        "py": "lantian"
                    },
                    {
                        "id": 810,
                        "nm": "霞浦",
                        "py": "xiapu"
                    },
                    {
                        "id": 811,
                        "nm": "岑溪",
                        "py": "cenxi"
                    },
                    {
                        "id": 791,
                        "nm": "临漳",
                        "py": "linzhang"
                    },
                    {
                        "id": 790,
                        "nm": "太谷",
                        "py": "taigu"
                    },
                    {
                        "id": 789,
                        "nm": "灵石",
                        "py": "lingshi"
                    },
                    {
                        "id": 788,
                        "nm": "金堂",
                        "py": "jintang"
                    },
                    {
                        "id": 787,
                        "nm": "共青城",
                        "py": "gongqingcheng"
                    },
                    {
                        "id": 786,
                        "nm": "鲁山",
                        "py": "lushanls"
                    },
                    {
                        "id": 785,
                        "nm": "郏县",
                        "py": "jiaxian"
                    },
                    {
                        "id": 784,
                        "nm": "叶县",
                        "py": "yexian"
                    },
                    {
                        "id": 799,
                        "nm": "户县",
                        "py": "huxian"
                    },
                    {
                        "id": 798,
                        "nm": "成安",
                        "py": "chengan"
                    },
                    {
                        "id": 797,
                        "nm": "绥中",
                        "py": "suizhong"
                    },
                    {
                        "id": 796,
                        "nm": "神木市",
                        "py": "shenmushi"
                    },
                    {
                        "id": 795,
                        "nm": "长垣",
                        "py": "changyuan"
                    },
                    {
                        "id": 794,
                        "nm": "和县",
                        "py": "hexian"
                    },
                    {
                        "id": 793,
                        "nm": "含山",
                        "py": "hanshan"
                    },
                    {
                        "id": 792,
                        "nm": "肥乡区",
                        "py": "feixiangqu"
                    },
                    {
                        "id": 774,
                        "nm": "繁昌",
                        "py": "fanchang"
                    },
                    {
                        "id": 775,
                        "nm": "南陵",
                        "py": "nanling"
                    },
                    {
                        "id": 772,
                        "nm": "汉阴",
                        "py": "hanyin"
                    },
                    {
                        "id": 773,
                        "nm": "芜湖县",
                        "py": "wuhuxian"
                    },
                    {
                        "id": 770,
                        "nm": "阳城",
                        "py": "yangcheng"
                    },
                    {
                        "id": 771,
                        "nm": "高安",
                        "py": "gaoan"
                    },
                    {
                        "id": 768,
                        "nm": "涉县",
                        "py": "shexian"
                    },
                    {
                        "id": 769,
                        "nm": "无为",
                        "py": "wuweiww"
                    },
                    {
                        "id": 782,
                        "nm": "天台",
                        "py": "tiantai"
                    },
                    {
                        "id": 783,
                        "nm": "宝丰",
                        "py": "baofeng"
                    },
                    {
                        "id": 780,
                        "nm": "广德",
                        "py": "guangde"
                    },
                    {
                        "id": 781,
                        "nm": "宁国",
                        "py": "ningguo"
                    },
                    {
                        "id": 778,
                        "nm": "云阳",
                        "py": "yunyang"
                    },
                    {
                        "id": 779,
                        "nm": "宁阳",
                        "py": "ningyang"
                    },
                    {
                        "id": 776,
                        "nm": "襄垣",
                        "py": "xiangyuan"
                    },
                    {
                        "id": 777,
                        "nm": "平原",
                        "py": "pingyuan"
                    },
                    {
                        "id": 881,
                        "nm": "河口",
                        "py": "hekou"
                    },
                    {
                        "id": 880,
                        "nm": "垦利",
                        "py": "kenli"
                    },
                    {
                        "id": 883,
                        "nm": "曹县",
                        "py": "caoxian"
                    },
                    {
                        "id": 882,
                        "nm": "巨野",
                        "py": "juye"
                    },
                    {
                        "id": 885,
                        "nm": "西平",
                        "py": "xiping"
                    },
                    {
                        "id": 884,
                        "nm": "郓城",
                        "py": "yunchengxian"
                    },
                    {
                        "id": 887,
                        "nm": "泌阳",
                        "py": "biyang"
                    },
                    {
                        "id": 886,
                        "nm": "上蔡",
                        "py": "shangcai"
                    },
                    {
                        "id": 889,
                        "nm": "临猗",
                        "py": "linyixian"
                    },
                    {
                        "id": 888,
                        "nm": "富顺",
                        "py": "fushunxian"
                    },
                    {
                        "id": 891,
                        "nm": "准格尔旗",
                        "py": "zhungeerqi"
                    },
                    {
                        "id": 893,
                        "nm": "平山",
                        "py": "pingshan"
                    },
                    {
                        "id": 892,
                        "nm": "新乐",
                        "py": "xinle"
                    },
                    {
                        "id": 895,
                        "nm": "遂昌",
                        "py": "suichang"
                    },
                    {
                        "id": 894,
                        "nm": "辉南",
                        "py": "huinan"
                    },
                    {
                        "id": 864,
                        "nm": "淇县",
                        "py": "qixian"
                    },
                    {
                        "id": 865,
                        "nm": "全椒",
                        "py": "quanjiao"
                    },
                    {
                        "id": 866,
                        "nm": "高陵",
                        "py": "gaoling"
                    },
                    {
                        "id": 867,
                        "nm": "洪洞",
                        "py": "hongtong"
                    },
                    {
                        "id": 868,
                        "nm": "柳河",
                        "py": "liuhe"
                    },
                    {
                        "id": 869,
                        "nm": "抚松",
                        "py": "fusong"
                    },
                    {
                        "id": 870,
                        "nm": "西乡",
                        "py": "xixiang"
                    },
                    {
                        "id": 871,
                        "nm": "江津",
                        "py": "jiangjin"
                    },
                    {
                        "id": 872,
                        "nm": "渑池",
                        "py": "mianchi"
                    },
                    {
                        "id": 873,
                        "nm": "安宁",
                        "py": "anning"
                    },
                    {
                        "id": 874,
                        "nm": "达拉特旗",
                        "py": "dalateqi"
                    },
                    {
                        "id": 875,
                        "nm": "睢宁",
                        "py": "suiningxian"
                    },
                    {
                        "id": 876,
                        "nm": "玉山",
                        "py": "yushan"
                    },
                    {
                        "id": 877,
                        "nm": "茌平",
                        "py": "chiping"
                    },
                    {
                        "id": 878,
                        "nm": "阳谷",
                        "py": "yanggu"
                    },
                    {
                        "id": 879,
                        "nm": "土默特右旗",
                        "py": "tumoteyouqi"
                    },
                    {
                        "id": 851,
                        "nm": "横店",
                        "py": "hengdian"
                    },
                    {
                        "id": 850,
                        "nm": "乌拉特前旗",
                        "py": "wltqq"
                    },
                    {
                        "id": 849,
                        "nm": "濮阳县",
                        "py": "puyangxian"
                    },
                    {
                        "id": 848,
                        "nm": "眉县",
                        "py": "meixian"
                    },
                    {
                        "id": 854,
                        "nm": "高阳",
                        "py": "gaoyang"
                    },
                    {
                        "id": 853,
                        "nm": "徐闻",
                        "py": "xuwen"
                    },
                    {
                        "id": 852,
                        "nm": "博兴",
                        "py": "boxing"
                    },
                    {
                        "id": 859,
                        "nm": "虞城",
                        "py": "yuchengxian"
                    },
                    {
                        "id": 858,
                        "nm": "柘城",
                        "py": "zhecheng"
                    },
                    {
                        "id": 857,
                        "nm": "夏邑",
                        "py": "xiayi"
                    },
                    {
                        "id": 856,
                        "nm": "华亭市",
                        "py": "huatingshi"
                    },
                    {
                        "id": 863,
                        "nm": "浚县",
                        "py": "xunxian"
                    },
                    {
                        "id": 862,
                        "nm": "丰县",
                        "py": "fengxian"
                    },
                    {
                        "id": 861,
                        "nm": "扶风",
                        "py": "fufeng"
                    },
                    {
                        "id": 860,
                        "nm": "民权",
                        "py": "minquan"
                    },
                    {
                        "id": 834,
                        "nm": "邹城",
                        "py": "zoucheng"
                    },
                    {
                        "id": 835,
                        "nm": "郸城",
                        "py": "dancheng"
                    },
                    {
                        "id": 832,
                        "nm": "韩城",
                        "py": "hancheng"
                    },
                    {
                        "id": 833,
                        "nm": "沛县",
                        "py": "peixian"
                    },
                    {
                        "id": 838,
                        "nm": "孟津",
                        "py": "mengjin"
                    },
                    {
                        "id": 839,
                        "nm": "鹿邑",
                        "py": "luyi"
                    },
                    {
                        "id": 836,
                        "nm": "大荔",
                        "py": "dalixian"
                    },
                    {
                        "id": 837,
                        "nm": "蒲城",
                        "py": "pucheng"
                    },
                    {
                        "id": 842,
                        "nm": "盘州市",
                        "py": "panzhoushi"
                    },
                    {
                        "id": 843,
                        "nm": "盱眙",
                        "py": "xuyi"
                    },
                    {
                        "id": 840,
                        "nm": "沈丘",
                        "py": "shenqiu"
                    },
                    {
                        "id": 841,
                        "nm": "赵县",
                        "py": "zhaoxian"
                    },
                    {
                        "id": 846,
                        "nm": "牟平",
                        "py": "muping"
                    },
                    {
                        "id": 847,
                        "nm": "平江",
                        "py": "pingjiang"
                    },
                    {
                        "id": 844,
                        "nm": "安溪",
                        "py": "anxi"
                    },
                    {
                        "id": 845,
                        "nm": "三门",
                        "py": "sanmen"
                    },
                    {
                        "id": 956,
                        "nm": "金湖",
                        "py": "jinhu"
                    },
                    {
                        "id": 957,
                        "nm": "香河",
                        "py": "xianghe"
                    },
                    {
                        "id": 958,
                        "nm": "于都",
                        "py": "yudu"
                    },
                    {
                        "id": 959,
                        "nm": "信丰",
                        "py": "xinfeng"
                    },
                    {
                        "id": 952,
                        "nm": "博山",
                        "py": "boshan"
                    },
                    {
                        "id": 953,
                        "nm": "什邡",
                        "py": "shifang"
                    },
                    {
                        "id": 954,
                        "nm": "长汀",
                        "py": "changting"
                    },
                    {
                        "id": 955,
                        "nm": "上杭",
                        "py": "shanghang"
                    },
                    {
                        "id": 948,
                        "nm": "江都",
                        "py": "jiangdu"
                    },
                    {
                        "id": 949,
                        "nm": "浠水",
                        "py": "xishui"
                    },
                    {
                        "id": 950,
                        "nm": "平邑",
                        "py": "pingyi"
                    },
                    {
                        "id": 951,
                        "nm": "临沭",
                        "py": "linshu"
                    },
                    {
                        "id": 944,
                        "nm": "蒙阴",
                        "py": "mengyin"
                    },
                    {
                        "id": 945,
                        "nm": "大洼",
                        "py": "dawa"
                    },
                    {
                        "id": 946,
                        "nm": "璧山",
                        "py": "bishan"
                    },
                    {
                        "id": 947,
                        "nm": "铜梁",
                        "py": "tongliang"
                    },
                    {
                        "id": 941,
                        "nm": "莒南",
                        "py": "junan"
                    },
                    {
                        "id": 940,
                        "nm": "沂水",
                        "py": "yishui"
                    },
                    {
                        "id": 943,
                        "nm": "沂南",
                        "py": "yinan"
                    },
                    {
                        "id": 942,
                        "nm": "郯城",
                        "py": "tancheng"
                    },
                    {
                        "id": 937,
                        "nm": "扶沟",
                        "py": "fugou"
                    },
                    {
                        "id": 936,
                        "nm": "西华",
                        "py": "xihua"
                    },
                    {
                        "id": 939,
                        "nm": "兰陵",
                        "py": "lanling"
                    },
                    {
                        "id": 938,
                        "nm": "龙游",
                        "py": "longyou"
                    },
                    {
                        "id": 935,
                        "nm": "栾川",
                        "py": "luanchuan"
                    },
                    {
                        "id": 934,
                        "nm": "雷州",
                        "py": "leizhou"
                    },
                    {
                        "id": 929,
                        "nm": "清河",
                        "py": "qinghe"
                    },
                    {
                        "id": 928,
                        "nm": "洪湖",
                        "py": "honghu"
                    },
                    {
                        "id": 931,
                        "nm": "内丘",
                        "py": "neiqiu"
                    },
                    {
                        "id": 930,
                        "nm": "隆尧",
                        "py": "longyao"
                    },
                    {
                        "id": 926,
                        "nm": "围场",
                        "py": "weichang"
                    },
                    {
                        "id": 927,
                        "nm": "江油",
                        "py": "jiangyou"
                    },
                    {
                        "id": 924,
                        "nm": "丰宁",
                        "py": "fengning"
                    },
                    {
                        "id": 925,
                        "nm": "宽城",
                        "py": "kuancheng"
                    },
                    {
                        "id": 922,
                        "nm": "青田",
                        "py": "qingtian"
                    },
                    {
                        "id": 920,
                        "nm": "薛城",
                        "py": "xuecheng"
                    },
                    {
                        "id": 921,
                        "nm": "佛冈",
                        "py": "fogang"
                    },
                    {
                        "id": 918,
                        "nm": "京山市",
                        "py": "jingshanshi"
                    },
                    {
                        "id": 919,
                        "nm": "陵川",
                        "py": "lingchuan"
                    },
                    {
                        "id": 916,
                        "nm": "费县",
                        "py": "feixian"
                    },
                    {
                        "id": 917,
                        "nm": "任丘",
                        "py": "renqiu"
                    },
                    {
                        "id": 914,
                        "nm": "栖霞",
                        "py": "qixia"
                    },
                    {
                        "id": 915,
                        "nm": "彬州市",
                        "py": "binzhoushi"
                    },
                    {
                        "id": 912,
                        "nm": "龙泉",
                        "py": "longquan"
                    },
                    {
                        "id": 913,
                        "nm": "缙云",
                        "py": "jinyun"
                    },
                    {
                        "id": 911,
                        "nm": "公安",
                        "py": "gongan"
                    },
                    {
                        "id": 910,
                        "nm": "大竹",
                        "py": "dazhu"
                    },
                    {
                        "id": 909,
                        "nm": "城固",
                        "py": "chenggu"
                    },
                    {
                        "id": 908,
                        "nm": "杨陵",
                        "py": "yangling"
                    },
                    {
                        "id": 907,
                        "nm": "石岛",
                        "py": "shidao"
                    },
                    {
                        "id": 906,
                        "nm": "绵竹",
                        "py": "mianzhu"
                    },
                    {
                        "id": 905,
                        "nm": "临邑",
                        "py": "linyily"
                    },
                    {
                        "id": 904,
                        "nm": "武城",
                        "py": "wucheng"
                    },
                    {
                        "id": 903,
                        "nm": "新昌",
                        "py": "xinchang"
                    },
                    {
                        "id": 902,
                        "nm": "利津",
                        "py": "lijin"
                    },
                    {
                        "id": 901,
                        "nm": "伊金霍洛旗",
                        "py": "yijinhuoluoqi"
                    },
                    {
                        "id": 900,
                        "nm": "金乡",
                        "py": "jinxiang"
                    },
                    {
                        "id": 899,
                        "nm": "嘉祥",
                        "py": "jiaxiang"
                    },
                    {
                        "id": 898,
                        "nm": "汶上",
                        "py": "wenshang"
                    },
                    {
                        "id": 897,
                        "nm": "微山",
                        "py": "weishan"
                    },
                    {
                        "id": 896,
                        "nm": "梁山",
                        "py": "liangshanxian"
                    },
                    {
                        "id": 1017,
                        "nm": "泗水",
                        "py": "sishui"
                    },
                    {
                        "id": 1018,
                        "nm": "赤水",
                        "py": "chishui"
                    },
                    {
                        "id": 1019,
                        "nm": "无极",
                        "py": "wuji"
                    },
                    {
                        "id": 1020,
                        "nm": "青县",
                        "py": "qingxian"
                    },
                    {
                        "id": 1021,
                        "nm": "淅川",
                        "py": "xichuan"
                    },
                    {
                        "id": 1022,
                        "nm": "社旗",
                        "py": "sheqi"
                    },
                    {
                        "id": 1023,
                        "nm": "万荣",
                        "py": "wanrong"
                    },
                    {
                        "id": 1008,
                        "nm": "安化",
                        "py": "anhua"
                    },
                    {
                        "id": 1009,
                        "nm": "桃源",
                        "py": "taoyuanxian"
                    },
                    {
                        "id": 1010,
                        "nm": "澧县",
                        "py": "lixian"
                    },
                    {
                        "id": 1011,
                        "nm": "辽中",
                        "py": "liaozhong"
                    },
                    {
                        "id": 1013,
                        "nm": "南和",
                        "py": "nanhe"
                    },
                    {
                        "id": 1014,
                        "nm": "舞阳",
                        "py": "wuyang"
                    },
                    {
                        "id": 1015,
                        "nm": "商河",
                        "py": "shanghe"
                    },
                    {
                        "id": 1001,
                        "nm": "金沙",
                        "py": "jinsha"
                    },
                    {
                        "id": 1003,
                        "nm": "泾县",
                        "py": "jingxian"
                    },
                    {
                        "id": 1002,
                        "nm": "开阳",
                        "py": "kaiyang"
                    },
                    {
                        "id": 1005,
                        "nm": "怀宁",
                        "py": "huaining"
                    },
                    {
                        "id": 1004,
                        "nm": "潜山市",
                        "py": "qianshanshi"
                    },
                    {
                        "id": 1007,
                        "nm": "织金",
                        "py": "zhijin"
                    },
                    {
                        "id": 1006,
                        "nm": "威宁",
                        "py": "weining"
                    },
                    {
                        "id": 993,
                        "nm": "常山",
                        "py": "changshan"
                    },
                    {
                        "id": 992,
                        "nm": "射洪",
                        "py": "shehong"
                    },
                    {
                        "id": 995,
                        "nm": "武鸣",
                        "py": "wuming"
                    },
                    {
                        "id": 994,
                        "nm": "宾阳",
                        "py": "binyang"
                    },
                    {
                        "id": 997,
                        "nm": "芷江",
                        "py": "zhijiangtongzu"
                    },
                    {
                        "id": 996,
                        "nm": "溆浦",
                        "py": "xupu"
                    },
                    {
                        "id": 999,
                        "nm": "东光",
                        "py": "dongguang"
                    },
                    {
                        "id": 998,
                        "nm": "庆云",
                        "py": "qingyun"
                    },
                    {
                        "id": 987,
                        "nm": "平遥",
                        "py": "pingyao"
                    },
                    {
                        "id": 985,
                        "nm": "周至",
                        "py": "zhouzhi"
                    },
                    {
                        "id": 990,
                        "nm": "开化",
                        "py": "kaihua"
                    },
                    {
                        "id": 991,
                        "nm": "平果",
                        "py": "pingguo"
                    },
                    {
                        "id": 988,
                        "nm": "如东",
                        "py": "rudong"
                    },
                    {
                        "id": 989,
                        "nm": "恩平",
                        "py": "enping"
                    },
                    {
                        "id": 978,
                        "nm": "敦化",
                        "py": "dunhua"
                    },
                    {
                        "id": 979,
                        "nm": "内黄",
                        "py": "neihuang"
                    },
                    {
                        "id": 976,
                        "nm": "涟水",
                        "py": "lianshui"
                    },
                    {
                        "id": 977,
                        "nm": "珲春",
                        "py": "hunchun"
                    },
                    {
                        "id": 982,
                        "nm": "舒城",
                        "py": "shucheng"
                    },
                    {
                        "id": 980,
                        "nm": "凤台",
                        "py": "fengtai"
                    },
                    {
                        "id": 981,
                        "nm": "长寿",
                        "py": "changshou"
                    },
                    {
                        "id": 971,
                        "nm": "大邑",
                        "py": "dayi"
                    },
                    {
                        "id": 970,
                        "nm": "潮安",
                        "py": "chaoan"
                    },
                    {
                        "id": 975,
                        "nm": "霍邱",
                        "py": "huoqiu"
                    },
                    {
                        "id": 974,
                        "nm": "砀山",
                        "py": "dangshan"
                    },
                    {
                        "id": 973,
                        "nm": "武义",
                        "py": "wuyi"
                    },
                    {
                        "id": 972,
                        "nm": "平阳",
                        "py": "pingyang"
                    },
                    {
                        "id": 963,
                        "nm": "集美",
                        "py": "jimei"
                    },
                    {
                        "id": 962,
                        "nm": "同安",
                        "py": "tongan"
                    },
                    {
                        "id": 961,
                        "nm": "新蔡",
                        "py": "xincai"
                    },
                    {
                        "id": 960,
                        "nm": "平舆",
                        "py": "pingyu"
                    },
                    {
                        "id": 967,
                        "nm": "瓦房店",
                        "py": "wafangdian"
                    },
                    {
                        "id": 966,
                        "nm": "汝阳",
                        "py": "ruyang"
                    },
                    {
                        "id": 965,
                        "nm": "嵩县",
                        "py": "songxian"
                    },
                    {
                        "id": 964,
                        "nm": "海沧",
                        "py": "haicang"
                    },
                    {
                        "id": 1100,
                        "nm": "长丰县",
                        "py": "changfengxian"
                    },
                    {
                        "id": 1101,
                        "nm": "容县",
                        "py": "rongxian"
                    },
                    {
                        "id": 1102,
                        "nm": "博白县",
                        "py": "bobaixian"
                    },
                    {
                        "id": 1103,
                        "nm": "潢川县",
                        "py": "huangchuanxian"
                    },
                    {
                        "id": 1096,
                        "nm": "攸县",
                        "py": "youxian"
                    },
                    {
                        "id": 1097,
                        "nm": "茶陵",
                        "py": "chalingxian"
                    },
                    {
                        "id": 1098,
                        "nm": "博罗县",
                        "py": "boluoxian"
                    },
                    {
                        "id": 1099,
                        "nm": "永顺县",
                        "py": "yongshunxian"
                    },
                    {
                        "id": 1092,
                        "nm": "常宁市",
                        "py": "changningshi"
                    },
                    {
                        "id": 1093,
                        "nm": "资兴市",
                        "py": "zixingshi"
                    },
                    {
                        "id": 1094,
                        "nm": "永兴县",
                        "py": "yongxingxian"
                    },
                    {
                        "id": 1095,
                        "nm": "汝城县",
                        "py": "ruchengxian"
                    },
                    {
                        "id": 1088,
                        "nm": "衡阳县",
                        "py": "hengyangxian"
                    },
                    {
                        "id": 1089,
                        "nm": "祁东县",
                        "py": "qidongxian"
                    },
                    {
                        "id": 1090,
                        "nm": "衡山县",
                        "py": "hengshanxian"
                    },
                    {
                        "id": 1091,
                        "nm": "衡东县",
                        "py": "hengdongxian"
                    },
                    {
                        "id": 1116,
                        "nm": "蒙自市",
                        "py": "mengzishi"
                    },
                    {
                        "id": 1119,
                        "nm": "临澧",
                        "py": "linli"
                    },
                    {
                        "id": 1118,
                        "nm": "石门",
                        "py": "shimen"
                    },
                    {
                        "id": 1113,
                        "nm": "桑植",
                        "py": "sangzhi"
                    },
                    {
                        "id": 1112,
                        "nm": "宁陵",
                        "py": "ninglingxian"
                    },
                    {
                        "id": 1115,
                        "nm": "杞县",
                        "py": "qixiankaifeng"
                    },
                    {
                        "id": 1114,
                        "nm": "荣昌区",
                        "py": "rongchangqu"
                    },
                    {
                        "id": 1109,
                        "nm": "尉氏县",
                        "py": "weishixian"
                    },
                    {
                        "id": 1108,
                        "nm": "商城县",
                        "py": "shangchengxian"
                    },
                    {
                        "id": 1111,
                        "nm": "通许县",
                        "py": "tongxuxian"
                    },
                    {
                        "id": 1110,
                        "nm": "兰考县",
                        "py": "lankaoxian"
                    },
                    {
                        "id": 1105,
                        "nm": "贺兰县",
                        "py": "helanxian"
                    },
                    {
                        "id": 1104,
                        "nm": "固始县",
                        "py": "gushixian"
                    },
                    {
                        "id": 1107,
                        "nm": "庆安县",
                        "py": "qinganxian"
                    },
                    {
                        "id": 1106,
                        "nm": "平罗县",
                        "py": "pingluoxian"
                    },
                    {
                        "id": 1134,
                        "nm": "鄄城县",
                        "py": "juanchengxian"
                    },
                    {
                        "id": 1135,
                        "nm": "通榆县",
                        "py": "tongyuxian"
                    },
                    {
                        "id": 1132,
                        "nm": "通海县",
                        "py": "tonghaixian"
                    },
                    {
                        "id": 1133,
                        "nm": "灵丘县",
                        "py": "lingqiuxian"
                    },
                    {
                        "id": 1130,
                        "nm": "海伦市",
                        "py": "hailunshi"
                    },
                    {
                        "id": 1131,
                        "nm": "青冈县",
                        "py": "qinggangxian"
                    },
                    {
                        "id": 1128,
                        "nm": "武隆县",
                        "py": "wulongxian"
                    },
                    {
                        "id": 1129,
                        "nm": "秀山土家族苗族自治县",
                        "py": "xiushantujiazumiaozuzizh"
                    },
                    {
                        "id": 1126,
                        "nm": "阿勒泰市",
                        "py": "aletaishi"
                    },
                    {
                        "id": 1127,
                        "nm": "酉阳土家族苗族自治县",
                        "py": "youyangtujiazumiaozuzizh"
                    },
                    {
                        "id": 1124,
                        "nm": "汉南区",
                        "py": "hannanqu"
                    },
                    {
                        "id": 1125,
                        "nm": "南郑区",
                        "py": "nanzhengxian"
                    },
                    {
                        "id": 1122,
                        "nm": "蒙城",
                        "py": "mengcheng"
                    },
                    {
                        "id": 1123,
                        "nm": "新洲区",
                        "py": "xinzhouqu"
                    },
                    {
                        "id": 1120,
                        "nm": "鄯善县",
                        "py": "shanshanxian"
                    },
                    {
                        "id": 1121,
                        "nm": "利辛",
                        "py": "lixin"
                    },
                    {
                        "id": 1151,
                        "nm": "应县",
                        "py": "yingxian"
                    },
                    {
                        "id": 1150,
                        "nm": "苍溪县",
                        "py": "cangxixian"
                    },
                    {
                        "id": 1149,
                        "nm": "仙游县",
                        "py": "xianyouxian"
                    },
                    {
                        "id": 1147,
                        "nm": "洛川县",
                        "py": "luochuanxian"
                    },
                    {
                        "id": 1146,
                        "nm": "靖边",
                        "py": "jingbian"
                    },
                    {
                        "id": 1145,
                        "nm": "合江县",
                        "py": "hejiangxian"
                    },
                    {
                        "id": 1144,
                        "nm": "泸县",
                        "py": "luxian"
                    },
                    {
                        "id": 1143,
                        "nm": "溧水区",
                        "py": "lishuiqu"
                    },
                    {
                        "id": 1142,
                        "nm": "肥西县",
                        "py": "feixixian"
                    },
                    {
                        "id": 1141,
                        "nm": "北镇市",
                        "py": "beizhenshi"
                    },
                    {
                        "id": 1140,
                        "nm": "扎兰屯市",
                        "py": "zhalantunshi"
                    },
                    {
                        "id": 1139,
                        "nm": "岐山县",
                        "py": "qishanxian"
                    },
                    {
                        "id": 1138,
                        "nm": "禄丰县",
                        "py": "lufengxian"
                    },
                    {
                        "id": 1137,
                        "nm": "新野",
                        "py": "xinye"
                    },
                    {
                        "id": 1136,
                        "nm": "唐河",
                        "py": "tanghe"
                    },
                    {
                        "id": 1032,
                        "nm": "江川县",
                        "py": "jiangchuanxian"
                    },
                    {
                        "id": 1033,
                        "nm": "兴国县",
                        "py": "xingguoxian"
                    },
                    {
                        "id": 1034,
                        "nm": "罗平县",
                        "py": "luopingxian"
                    },
                    {
                        "id": 1035,
                        "nm": "道县",
                        "py": "daoxian"
                    },
                    {
                        "id": 1036,
                        "nm": "新田",
                        "py": "xintian"
                    },
                    {
                        "id": 1037,
                        "nm": "涟源市",
                        "py": "lianyuanshi"
                    },
                    {
                        "id": 1038,
                        "nm": "江华瑶族自治县",
                        "py": "jianghuayaozuzizhixian"
                    },
                    {
                        "id": 1039,
                        "nm": "深州市",
                        "py": "shenzhoushi"
                    },
                    {
                        "id": 1024,
                        "nm": "泗县",
                        "py": "sixian"
                    },
                    {
                        "id": 1025,
                        "nm": "万载",
                        "py": "wanzai"
                    },
                    {
                        "id": 1026,
                        "nm": "新干",
                        "py": "xingan"
                    },
                    {
                        "id": 1027,
                        "nm": "宜丰",
                        "py": "yifeng"
                    },
                    {
                        "id": 1028,
                        "nm": "吉安县",
                        "py": "jianxian"
                    },
                    {
                        "id": 1029,
                        "nm": "吉水县",
                        "py": "jishuixian"
                    },
                    {
                        "id": 1030,
                        "nm": "泰和县",
                        "py": "taihexian"
                    },
                    {
                        "id": 1031,
                        "nm": "奉新",
                        "py": "fengxin"
                    },
                    {
                        "id": 1049,
                        "nm": "武平县",
                        "py": "wupingxian"
                    },
                    {
                        "id": 1048,
                        "nm": "漳平",
                        "py": "zhangping"
                    },
                    {
                        "id": 1051,
                        "nm": "祥云县",
                        "py": "xiangyunxian"
                    },
                    {
                        "id": 1050,
                        "nm": "寻乌县",
                        "py": "xunwuxian"
                    },
                    {
                        "id": 1053,
                        "nm": "南部县",
                        "py": "nanbuxian"
                    },
                    {
                        "id": 1052,
                        "nm": "方城",
                        "py": "fangcheng"
                    },
                    {
                        "id": 1055,
                        "nm": "商水县",
                        "py": "shangshuixian"
                    },
                    {
                        "id": 1054,
                        "nm": "太康县",
                        "py": "taikangxian"
                    },
                    {
                        "id": 1041,
                        "nm": "铜鼓",
                        "py": "tonggu"
                    },
                    {
                        "id": 1040,
                        "nm": "庐江县",
                        "py": "lujiangxian"
                    },
                    {
                        "id": 1043,
                        "nm": "营山县",
                        "py": "yingshanxian"
                    },
                    {
                        "id": 1042,
                        "nm": "怀远县",
                        "py": "huaiyuanxian"
                    },
                    {
                        "id": 1045,
                        "nm": "上林县",
                        "py": "shanglinxian"
                    },
                    {
                        "id": 1044,
                        "nm": "田东县",
                        "py": "tiandongxian"
                    },
                    {
                        "id": 1047,
                        "nm": "永安",
                        "py": "yongan"
                    },
                    {
                        "id": 1046,
                        "nm": "威县",
                        "py": "weixian"
                    },
                    {
                        "id": 1066,
                        "nm": "富源县",
                        "py": "fuyuanxian"
                    },
                    {
                        "id": 1067,
                        "nm": "遂川",
                        "py": "suichuan"
                    },
                    {
                        "id": 1064,
                        "nm": "隆回",
                        "py": "longhui"
                    },
                    {
                        "id": 1065,
                        "nm": "会泽县",
                        "py": "huizexian"
                    },
                    {
                        "id": 1070,
                        "nm": "分宜",
                        "py": "fenyi"
                    },
                    {
                        "id": 1071,
                        "nm": "上栗",
                        "py": "shangli"
                    },
                    {
                        "id": 1068,
                        "nm": "安福",
                        "py": "anfu"
                    },
                    {
                        "id": 1069,
                        "nm": "永丰",
                        "py": "yongfeng"
                    },
                    {
                        "id": 1058,
                        "nm": "鄢陵",
                        "py": "yanling"
                    },
                    {
                        "id": 1059,
                        "nm": "晋宁区",
                        "py": "jinningqu"
                    },
                    {
                        "id": 1056,
                        "nm": "临颍",
                        "py": "linying"
                    },
                    {
                        "id": 1057,
                        "nm": "襄城县",
                        "py": "xiangchengxian"
                    },
                    {
                        "id": 1062,
                        "nm": "双峰",
                        "py": "shuangfeng"
                    },
                    {
                        "id": 1063,
                        "nm": "新宁",
                        "py": "xinning"
                    },
                    {
                        "id": 1060,
                        "nm": "蓝山",
                        "py": "lanshan"
                    },
                    {
                        "id": 1061,
                        "nm": "江永",
                        "py": "jiangyong"
                    },
                    {
                        "id": 1083,
                        "nm": "隆化县",
                        "py": "longhuaxian"
                    },
                    {
                        "id": 1082,
                        "nm": "献县",
                        "py": "xianxian"
                    },
                    {
                        "id": 1081,
                        "nm": "肃宁县",
                        "py": "suningxian"
                    },
                    {
                        "id": 1080,
                        "nm": "河间市",
                        "py": "hejianshi"
                    },
                    {
                        "id": 1087,
                        "nm": "洛宁",
                        "py": "luoningxian"
                    },
                    {
                        "id": 1086,
                        "nm": "合浦县",
                        "py": "hepuxian"
                    },
                    {
                        "id": 1085,
                        "nm": "建水县",
                        "py": "jianshuixian"
                    },
                    {
                        "id": 1084,
                        "nm": "扶绥县",
                        "py": "fusuixian"
                    },
                    {
                        "id": 1075,
                        "nm": "南皮县",
                        "py": "nanpixian"
                    },
                    {
                        "id": 1074,
                        "nm": "泊头市",
                        "py": "botou"
                    },
                    {
                        "id": 1073,
                        "nm": "芦溪",
                        "py": "luxi"
                    },
                    {
                        "id": 1072,
                        "nm": "永新",
                        "py": "yongxin"
                    },
                    {
                        "id": 1079,
                        "nm": "卢氏县",
                        "py": "lushixian"
                    },
                    {
                        "id": 1078,
                        "nm": "慈利",
                        "py": "cili"
                    },
                    {
                        "id": 1077,
                        "nm": "莎车县",
                        "py": "shachexian"
                    },
                    {
                        "id": 1076,
                        "nm": "大安市",
                        "py": "daanshi"
                    },
                    {
                        "id": 1220,
                        "nm": "青阳县",
                        "py": "qingyangxian"
                    },
                    {
                        "id": 1223,
                        "nm": "武冈市",
                        "py": "wugangshi"
                    },
                    {
                        "id": 1222,
                        "nm": "明水县",
                        "py": "mingshuixian"
                    },
                    {
                        "id": 1217,
                        "nm": "望奎县",
                        "py": "wangkuixian"
                    },
                    {
                        "id": 1216,
                        "nm": "米易县",
                        "py": "miyixian"
                    },
                    {
                        "id": 1219,
                        "nm": "闽侯县",
                        "py": "minhouxian"
                    },
                    {
                        "id": 1218,
                        "nm": "宜良县",
                        "py": "yiliangxian"
                    },
                    {
                        "id": 1229,
                        "nm": "阿荣旗",
                        "py": "arongqi"
                    },
                    {
                        "id": 1228,
                        "nm": "山丹县",
                        "py": "shandanxian"
                    },
                    {
                        "id": 1231,
                        "nm": "丰都",
                        "py": "fengdu"
                    },
                    {
                        "id": 1230,
                        "nm": "奉节",
                        "py": "fengjie"
                    },
                    {
                        "id": 1225,
                        "nm": "陆川县",
                        "py": "luchuanxian"
                    },
                    {
                        "id": 1224,
                        "nm": "宁远县",
                        "py": "ningyuanxian"
                    },
                    {
                        "id": 1227,
                        "nm": "康县",
                        "py": "kangxian"
                    },
                    {
                        "id": 1226,
                        "nm": "平南县",
                        "py": "pingnanxian"
                    },
                    {
                        "id": 1239,
                        "nm": "光山县",
                        "py": "guangshanxian"
                    },
                    {
                        "id": 1232,
                        "nm": "彭水苗族土家族自治县",
                        "py": "pengshuizizhixian"
                    },
                    {
                        "id": 1233,
                        "nm": "大厂回族自治县",
                        "py": "dachangzizhixian"
                    },
                    {
                        "id": 1234,
                        "nm": "横山区",
                        "py": "hengshanqu"
                    },
                    {
                        "id": 1244,
                        "nm": "孝昌县",
                        "py": "xiaochangxian"
                    },
                    {
                        "id": 1245,
                        "nm": "安陆市",
                        "py": "anlushi"
                    },
                    {
                        "id": 1246,
                        "nm": "镇雄县",
                        "py": "zhenxiongxian"
                    },
                    {
                        "id": 1247,
                        "nm": "临泉县",
                        "py": "linquanxian"
                    },
                    {
                        "id": 1240,
                        "nm": "绥宁县",
                        "py": "suiningxiansnx"
                    },
                    {
                        "id": 1241,
                        "nm": "肥东县",
                        "py": "feidongxian"
                    },
                    {
                        "id": 1242,
                        "nm": "定远县",
                        "py": "dingyuanxian"
                    },
                    {
                        "id": 1243,
                        "nm": "大悟县",
                        "py": "dawuxia"
                    },
                    {
                        "id": 1255,
                        "nm": "武定",
                        "py": "wuding"
                    },
                    {
                        "id": 1254,
                        "nm": "禄劝彝族苗族自治县",
                        "py": "luquanxian"
                    },
                    {
                        "id": 1250,
                        "nm": "遂平",
                        "py": "suiping"
                    },
                    {
                        "id": 1249,
                        "nm": "双城",
                        "py": "shuangcheng"
                    },
                    {
                        "id": 1248,
                        "nm": "息县",
                        "py": "xixian"
                    },
                    {
                        "id": 1263,
                        "nm": "九台",
                        "py": "jiutai"
                    },
                    {
                        "id": 1262,
                        "nm": "瑞丽",
                        "py": "ruili"
                    },
                    {
                        "id": 1261,
                        "nm": "萧县",
                        "py": "xiaoxian"
                    },
                    {
                        "id": 1260,
                        "nm": "清镇",
                        "py": "qingzhen"
                    },
                    {
                        "id": 1259,
                        "nm": "中宁县",
                        "py": "zhongningxian"
                    },
                    {
                        "id": 1258,
                        "nm": "普兰店",
                        "py": "pulandian"
                    },
                    {
                        "id": 1256,
                        "nm": "屯昌县",
                        "py": "tunchangxian"
                    },
                    {
                        "id": 1270,
                        "nm": "嵩明县",
                        "py": "songmingxian"
                    },
                    {
                        "id": 1271,
                        "nm": "德惠市",
                        "py": "dehuishi"
                    },
                    {
                        "id": 1268,
                        "nm": "大足区",
                        "py": "dazuqu"
                    },
                    {
                        "id": 1269,
                        "nm": "澄迈县",
                        "py": "chengmaixian"
                    },
                    {
                        "id": 1266,
                        "nm": "清徐",
                        "py": "qingxu"
                    },
                    {
                        "id": 1267,
                        "nm": "迁西县",
                        "py": "qianxixian"
                    },
                    {
                        "id": 1264,
                        "nm": "南川",
                        "py": "nanchuan"
                    },
                    {
                        "id": 1265,
                        "nm": "綦江",
                        "py": "qijiang"
                    },
                    {
                        "id": 1276,
                        "nm": "企石镇",
                        "py": "qishizhen"
                    },
                    {
                        "id": 1277,
                        "nm": "谢岗镇",
                        "py": "xiegangzhen"
                    },
                    {
                        "id": 1274,
                        "nm": "固安县",
                        "py": "guanxian"
                    },
                    {
                        "id": 1275,
                        "nm": "东坑镇",
                        "py": "dongkengzhen"
                    },
                    {
                        "id": 1272,
                        "nm": "石林彝族自治县",
                        "py": "shilinxian"
                    },
                    {
                        "id": 1273,
                        "nm": "玉田县",
                        "py": "yutianxian"
                    },
                    {
                        "id": 1153,
                        "nm": "嘉鱼县",
                        "py": "jiayuxian"
                    },
                    {
                        "id": 1152,
                        "nm": "凤翔县",
                        "py": "fengxiangxian"
                    },
                    {
                        "id": 1155,
                        "nm": "绥德县",
                        "py": "suidexian"
                    },
                    {
                        "id": 1157,
                        "nm": "长清区",
                        "py": "changqingqu"
                    },
                    {
                        "id": 1156,
                        "nm": "平阴县",
                        "py": "pingyinxian"
                    },
                    {
                        "id": 1159,
                        "nm": "阳山县",
                        "py": "yangshanxian"
                    },
                    {
                        "id": 1158,
                        "nm": "沙县",
                        "py": "shaxian"
                    },
                    {
                        "id": 1160,
                        "nm": "榆树市",
                        "py": "yushushi"
                    },
                    {
                        "id": 1163,
                        "nm": "罗定市",
                        "py": "luodingshi"
                    },
                    {
                        "id": 1162,
                        "nm": "沅陵县",
                        "py": "yuanlingxian"
                    },
                    {
                        "id": 1165,
                        "nm": "北安市",
                        "py": "beianshi"
                    },
                    {
                        "id": 1164,
                        "nm": "崇明区",
                        "py": "chongmingqu"
                    },
                    {
                        "id": 1167,
                        "nm": "新津县",
                        "py": "xinjinxian"
                    },
                    {
                        "id": 1166,
                        "nm": "嫩江县",
                        "py": "nenjiangxian"
                    },
                    {
                        "id": 1168,
                        "nm": "定安县",
                        "py": "dinganxian"
                    },
                    {
                        "id": 1169,
                        "nm": "永登县",
                        "py": "yongdengxian"
                    },
                    {
                        "id": 1170,
                        "nm": "琼中",
                        "py": "qiongzhong"
                    },
                    {
                        "id": 1171,
                        "nm": "乐东",
                        "py": "ledong"
                    },
                    {
                        "id": 1172,
                        "nm": "额敏县",
                        "py": "eminxian"
                    },
                    {
                        "id": 1174,
                        "nm": "光泽",
                        "py": "guangze"
                    },
                    {
                        "id": 1175,
                        "nm": "平陆县",
                        "py": "pingluxian"
                    },
                    {
                        "id": 1176,
                        "nm": "深泽县",
                        "py": "shenzexian"
                    },
                    {
                        "id": 1177,
                        "nm": "垫江",
                        "py": "dianjiang"
                    },
                    {
                        "id": 1178,
                        "nm": "梁平",
                        "py": "liangping"
                    },
                    {
                        "id": 1179,
                        "nm": "忠县",
                        "py": "zhongxian"
                    },
                    {
                        "id": 1180,
                        "nm": "石柱",
                        "py": "shizhu"
                    },
                    {
                        "id": 1181,
                        "nm": "鱼台县",
                        "py": "yutaixian"
                    },
                    {
                        "id": 1182,
                        "nm": "宜州区",
                        "py": "yizhouqu"
                    },
                    {
                        "id": 1183,
                        "nm": "临高县",
                        "py": "lingaoxian"
                    },
                    {
                        "id": 1187,
                        "nm": "五常市",
                        "py": "wuchangshi"
                    },
                    {
                        "id": 1186,
                        "nm": "义马市",
                        "py": "yimashi"
                    },
                    {
                        "id": 1185,
                        "nm": "环县",
                        "py": "huanxian"
                    },
                    {
                        "id": 1184,
                        "nm": "罗源县",
                        "py": "luoyuanxian"
                    },
                    {
                        "id": 1189,
                        "nm": "邵武",
                        "py": "shaowu"
                    },
                    {
                        "id": 1188,
                        "nm": "祁县",
                        "py": "qixianjz"
                    },
                    {
                        "id": 1195,
                        "nm": "福安",
                        "py": "fuan"
                    },
                    {
                        "id": 1194,
                        "nm": "精河县",
                        "py": "jinghexian"
                    },
                    {
                        "id": 1193,
                        "nm": "巴彦县",
                        "py": "bayanxian"
                    },
                    {
                        "id": 1192,
                        "nm": "寿县",
                        "py": "shouxian"
                    },
                    {
                        "id": 1199,
                        "nm": "盂县",
                        "py": "yuxian"
                    },
                    {
                        "id": 1198,
                        "nm": "永嘉县",
                        "py": "yongjiaxian"
                    },
                    {
                        "id": 1197,
                        "nm": "靖西市",
                        "py": "jingxixian"
                    },
                    {
                        "id": 1196,
                        "nm": "柘荣",
                        "py": "zherong"
                    },
                    {
                        "id": 1202,
                        "nm": "福鼎市",
                        "py": "fudingshi"
                    },
                    {
                        "id": 1203,
                        "nm": "东明县",
                        "py": "dongmingxian"
                    },
                    {
                        "id": 1200,
                        "nm": "中江县",
                        "py": "zhongjiangxian"
                    },
                    {
                        "id": 1201,
                        "nm": "成武县",
                        "py": "chengwuxian"
                    },
                    {
                        "id": 1206,
                        "nm": "黄陵县",
                        "py": "huanglingxian"
                    },
                    {
                        "id": 1207,
                        "nm": "旺苍县",
                        "py": "wangcangxian"
                    },
                    {
                        "id": 1204,
                        "nm": "定陶区",
                        "py": "dingtaoqu"
                    },
                    {
                        "id": 1205,
                        "nm": "澄江县",
                        "py": "chengjiangxian"
                    },
                    {
                        "id": 1210,
                        "nm": "勐腊县",
                        "py": "menglaxian"
                    },
                    {
                        "id": 1211,
                        "nm": "三台县",
                        "py": "santaixian"
                    },
                    {
                        "id": 1208,
                        "nm": "定边县",
                        "py": "dingbianxian"
                    },
                    {
                        "id": 1209,
                        "nm": "府谷县",
                        "py": "fuguxian"
                    },
                    {
                        "id": 1214,
                        "nm": "平昌县",
                        "py": "pingchangxian"
                    },
                    {
                        "id": 1215,
                        "nm": "通江县",
                        "py": "tongjiangxian"
                    },
                    {
                        "id": 1212,
                        "nm": "安州区",
                        "py": "anzhouqu"
                    },
                    {
                        "id": 1213,
                        "nm": "旬阳县",
                        "py": "xunyangxian"
                    },
                    {
                        "id": 1290,
                        "nm": "高淳区",
                        "py": "gaochunqu"
                    },
                    {
                        "id": 1291,
                        "nm": "昌江黎族自治县",
                        "py": "changjianglizuzizhixian"
                    },
                    {
                        "id": 1288,
                        "nm": "泾阳县",
                        "py": "jingyangxian"
                    },
                    {
                        "id": 1289,
                        "nm": "三原县",
                        "py": "sanyuanxian"
                    },
                    {
                        "id": 1283,
                        "nm": "门头沟区",
                        "py": "mentougouqu"
                    },
                    {
                        "id": 1280,
                        "nm": "阿城区",
                        "py": "achengqu"
                    },
                    {
                        "id": 1281,
                        "nm": "灵武市",
                        "py": "lingwushi"
                    },
                    {
                        "id": 1286,
                        "nm": "莘县",
                        "py": "shenxian"
                    },
                    {
                        "id": 1287,
                        "nm": "黔江区",
                        "py": "qianjiangqu"
                    },
                    {
                        "id": 1284,
                        "nm": "青铜峡市",
                        "py": "qingtongxiashi"
                    },
                    {
                        "id": 1285,
                        "nm": "东阿县",
                        "py": "dongexian"
                    },
                    {
                        "id": 8001,
                        "nm": "华容",
                        "py": "huarong"
                    }
                ]
            },
            onPageScroll(event) {
                this.setData({
                    scrollTop: event.scrollTop
                });
            },
            toBack() {
                wx.navigateBack({
                    changed: true
                })
            },
            searchCity(ev) {
                var inputVal = ev.detail.value;
                var lettarArr = this.data.lettarArr;
                var pyList = [];
                var currentTitle;
                var pinyinList = [];
                for (var i = 0; i < lettarArr.length; i++) {
                    pinyinList.push(lettarArr[i].content)
                    var current = lettarArr[i].content;
                    if (lettarArr[i].title.toLowerCase() == inputVal[0]) {
                        currentTitle = lettarArr[i].title;
                        for (var j = 0; j < current.length; j++) {
                            if (current[j].py.indexOf(inputVal) != -1 || current[j].nm.indexOf(inputVal)) {
                                pyList.push({
                                    nm: current[j].nm
                                })
                                if (current[j].py == inputVal) {

                                }
                            }
                        }
                    }
                }
                var pinyinList2 = [];
                for(var s = 0; s < pinyinList.length; s++) {
                    for(var k = 0; k < pinyinList[s].length; k++) {
                        pinyinList2.push(pinyinList[s][k]);
                    }
                }
                for(var a = 0; a < pinyinList2.length; a++) {
                    if(pinyinList2[a].nm == inputVal) {
                        pyList.push({
                            nm: pinyinList2[a].nm
                        })
                    }
                }
                var tempList = [{
                    title: currentTitle,
                    content: pyList
                }]
                if (pyList.length == []) {
                    currentTitle = ""
                    this.setData({
                        tempList: []
                    })
                } else {
                    this.setData({
                        tempList: tempList
                    })
                }




            },
            togecoding(ev) {
                wx.setStorageSync("city", ev.currentTarget.dataset.item_choicecity)
                wx.navigateBack({
                    changed: true
                })
            },
            onLoad: function(ev) {
                this.setData({
                    cityCurrent: ev.currentCity
                })
                var dataList = this.data.data;
                this.setData({
                    cityList: dataList
                })
                for (var i = 65; i < 91; i++) {
                    if (String.fromCharCode(i) == "I" || String.fromCharCode(i) == "O" || String.fromCharCode(i) == "U" || String.fromCharCode(i) == "V") {
                        continue;
                    } else {
                        this.data.lettarArr.push({
                            title: String.fromCharCode(i),
                            content: []
                        })
                    }
                }
                this.data.lettarArr.forEach(item => {
                    this.data.cityList.forEach(one => {
                        if (one.py.charAt(0).toUpperCase() == item.title) {
                            item.content.push(one);
                        }
                    })
                })
                this.setData({
                    lettarArr: this.data.lettarArr
                })
            }
                //     wx.request({
                //         url: 'https://www.fastmock.site/mock/e2a79838b3bd2e2e75f4a95efe6063ab/citys/citys',
                //         success: (res) => {
                //             this.setData({
                //                 cityList: res.data.data
                //             })
                //             for (var i = 65; i < 91; i++) {
                //                 if (String.fromCharCode(i) == "I" || String.fromCharCode(i) == "O" || String.fromCharCode(i) == "U" || String.fromCharCode(i) == "V") {
                //                     continue;
                //                 } else {
                //                     this.data.lettarArr.push({
                //                         title: String.fromCharCode(i),
                //                         content: []
                //                     })
                //                 }
                //             }
                //             this.data.lettarArr.forEach(item => {
                //                 this.data.cityList.forEach(one => {
                //                     if (one.py.charAt(0).toUpperCase() == item.title) {
                //                         item.content.push(one);
                //                     }
                //                 })
                //             })
                //             console.log(this.data.lettarArr)
                //             this.setData({
                //                 lettarArr: this.data.lettarArr
                //             })
                //         }
                //     })
                // }
            })