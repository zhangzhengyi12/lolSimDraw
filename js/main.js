/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _title = __webpack_require__(2);

	var _title2 = _interopRequireDefault(_title);

	var _scroll = __webpack_require__(3);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _draw = __webpack_require__(4);

	var _draw2 = _interopRequireDefault(_draw);

	var _money = __webpack_require__(5);

	var _money2 = _interopRequireDefault(_money);

	var _moneyGold = __webpack_require__(6);

	var _moneyGold2 = _interopRequireDefault(_moneyGold);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//stop解决动画滞留问题

	//待会都放入Init中

	var scroll1 = new _scroll2.default({
	    "imgBox": $("#J_hbimg1Cont"),
	    "imgAllWidth": 1700,
	    "imgNumber": 5,
	    "buttonBox": $("#J_hbimg1")
	}).startScroll(); /**
	                   * Created by zhang on 7/7/2017.
	                   */

	var scroll2 = new _scroll2.default({
	    "imgBox": $("#J_hbimg2Cont"),
	    "imgAllWidth": 2380,
	    "imgNumber": 7,
	    "buttonBox": $("#J_hbimg2")
	}).startScroll();

	_money2.default.add(1000);
	_moneyGold2.default.add(1000);

	var draw10 = new _draw2.default({
	    type: "color",
	    button: $("#drawButton1s"),
	    times: 10,
	    box: $("#GetItem2"),
	    clearbox: $("#GetItem2_info"),
	    ewbox: $("#GetItem2_EX"),
	    titleBox: $("#GetItem2_title")
	});

	var draw1 = new _draw2.default({
	    type: "color",
	    button: $("#drawButton"),
	    times: 1,
	    box: $("#GetItem1"),
	    clearbox: $("#GetItem1_info")
	});

	var draw10gold = new _draw2.default({
	    type: "gold",
	    button: $("#drawButtonGold"),
	    times: 10,
	    box: $("#GetItem2"),
	    clearbox: $("#GetItem2_info"),
	    ewbox: $("#GetItem2_EX"),
	    titleBox: $("#GetItem2_title")
	});

	var draw1gold = new _draw2.default({
	    type: "gold",
	    button: $("#drawButtonGold1s"),
	    times: 1,
	    box: $("#GetItem1"),
	    clearbox: $("#GetItem1_info")
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by zhang on 2017-07-27.
	 */

	(function (o) {
	    if (window.attachEvent) {
	        window.attachEvent("onload", o);
	    } else {
	        window.addEventListener("load", o, false);
	    };
	})(function () {
	    var d = document,
	        m = d.createElement("div"),
	        r = String(new Date()).split(":")[1],
	        l = function l(u, y) {
	        var s = d.createElement(y);
	        if (y == "script") {
	            s.src = u;s.type = "text/javascript";s.setAttribute("charset", "utf-8");
	        } else {
	            s.href = u;s.rel = "stylesheet";s.type = "text/css";
	        };
	        d.getElementsByTagName("head")[0].appendChild(s);
	    };
	    //以下修改ost.css为各自产品的css地址
	    l("http://ossweb-img.qq.com/images/lol/title/lol.css?v=" + r, "link");
	    m.className = "ost ost_bg";
	    m.style.cssText = "position:absolute;top:-500px;";
	    m.innerHTML = ['<ul class="ost_b">',
	    //以下修改各自链接，及指定按钮统计代码（广告修改gg.js）
	    '<li class="ost_tg ost_bg"><a href="http://game.qq.com/" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.logo\'});">腾讯游戏</a></li>', '<li class="ost_gg ost_bg"><a id="ost_gg" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.shana\'});">精彩活动</a></li>', '<li class="ost_i">', '<p class="ost_t ost_bg"><a href="http://lol.qq.com/main.shtml" target="_blank" class="ost_lnk" onclick="pgvSendClick({hottag:\'act.title.back\'});">返回官网首页</a></p>', '<p class="ost_gl">', '<a href="http://lol.qq.com/download.shtml" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.down\'});">游戏下载</a>', '<a href="http://lol.qq.com/comm-htdocs/pay/new_index.htm?t=lol" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.pay\'});"> 点券充值</a>', '</p>', '</li>', '</ul>'].join("");
	    d.body.appendChild(m);
	    d.body.style.paddingTop = "42px";
	    l("http://ossweb-img.qq.com/images/lol/title/gg.js?v=" + r, "script");
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by zhang on 2017-07-27.
	 */

	//TODO 需要随机滚动 传入参数对象 默认值 图片的张数，总长度
	//TODO set1 随机下一个定位点 set2 设置图片left


	var scrollImg = function () {
	    function scrollImg() {
	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, scrollImg);

	        this.imgBox = config.imgBox;
	        this.imgAllWidth = config.imgAllWidth;
	        this.imgNumber = config.imgNumber;
	        this.imgWidth = this.imgAllWidth / this.imgNumber;
	        this.time = null;
	        this.buttonBox = config.buttonBox;
	        this.imgBox.attr("number", 0);
	    }

	    _createClass(scrollImg, [{
	        key: "startScroll",
	        value: function startScroll() {
	            this.setScroll();
	            this.bindEvent();
	        }

	        //计算下一个目标图片的下标

	    }, {
	        key: "calcNextNumber",
	        value: function calcNextNumber() {
	            var currImg = parseInt(this.imgBox.attr("number"));
	            var target = currImg + 1;
	            if (target > this.imgNumber - 1) {
	                target = 0;
	            }
	            return target;
	        }

	        //绑定按钮事件

	    }, {
	        key: "bindEvent",
	        value: function bindEvent() {
	            var _this = this;

	            this.buttonBox.find("span").on("mouseover", function (e) {
	                _this.activeButton($(e.target).index());
	                _this.scrollTo($(e.target).index());
	                clearInterval(_this.time);
	            });

	            this.buttonBox.find("span").on("mouseout", function (e) {
	                _this.setScroll();
	            });
	        }

	        //设置自动滚动事件

	    }, {
	        key: "setScroll",
	        value: function setScroll() {
	            var _this2 = this;

	            this.time = setInterval(function () {
	                var targetNumber = _this2.calcNextNumber();
	                _this2.activeButton(targetNumber);
	                _this2.scrollTo(targetNumber);
	            }, 1000);
	        }
	    }, {
	        key: "scrollTo",
	        value: function scrollTo(eq) {
	            var targetLeft = eq * this.imgWidth;
	            //取消其他动画
	            this.imgBox.stop();
	            this.imgBox.animate({
	                left: "-" + targetLeft + "px"
	            }, 200);
	            this.imgBox.attr("number", eq);
	        }
	    }, {
	        key: "activeButton",
	        value: function activeButton(index) {
	            this.buttonBox.find("span").eq(index).addClass("on").siblings().removeClass("on");
	        }
	    }]);

	    return scrollImg;
	}();

	exports.default = scrollImg;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by zhang on 2017-07-27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	//抽奖模块 负责按钮的绑定 数据中抽奖传递给其他模块 金额的验证 应该由其他地方进行绑定 不需要经常new


	var _money = __webpack_require__(5);

	var _money2 = _interopRequireDefault(_money);

	var _moneyGold = __webpack_require__(6);

	var _moneyGold2 = _interopRequireDefault(_moneyGold);

	var _algorithm = __webpack_require__(7);

	var _algorithm2 = _interopRequireDefault(_algorithm);

	var _render = __webpack_require__(9);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var draw = function () {
	    function draw() {
	        var _this = this;

	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, draw);

	        this.type = config.type;
	        this.box = config.box;
	        this.button = config.button;
	        this.times = config.times;
	        this.render = new _render2.default({
	            'box': config.box,
	            'clearbox': config.clearbox,
	            'ewbox': config.ewbox,
	            'type': config.type,
	            'titleBox': config.titleBox
	        });

	        this.button.on("click", function () {
	            _this.draw();
	            _money2.default.setDis();
	        });
	    }

	    _createClass(draw, [{
	        key: "draw",
	        value: function draw() {

	            if (this.type === "gold") {
	                if (_moneyGold2.default.check(this.times)) {
	                    _moneyGold2.default.pay(this.times);
	                    var res = _algorithm2.default.takeReasult(this.times);
	                    this.render.renderBox(res);
	                } else {
	                    alert("钱不够");
	                }
	            } else if (this.type === "color") {

	                if (_money2.default.check(this.times)) {
	                    _money2.default.pay(this.times);
	                    var _res = _algorithm2.default.takeReasult(this.times);
	                    this.render.renderBox(_res);
	                } else {
	                    alert("钱不够");
	                }
	            }
	        }
	    }]);

	    return draw;
	}();

	exports.default = draw;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zhang on 2017-07-27.
	 */

	var money = function () {
	    var money = 0;
	    return {
	        isEnough: function isEnough(n) {
	            if (n >= money) {
	                return false;
	            }
	            return true;
	        },
	        pay: function pay(n) {
	            return money -= n;
	            this.setDis();
	        },
	        add: function add(n) {
	            money += n;
	            alert("恭喜你获得了 " + money + " 个奥术星辰");
	            this.setDis();
	        },
	        check: function check() {
	            return money;
	        },
	        setDis: function setDis() {
	            $("#iColorNum").text(money);
	        }
	    };
	}();

	exports.default = money;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zhang on 2017-07-28.
	 */
	var moneyGold = function () {
	    var money = 0;
	    return {
	        isEnough: function isEnough(n) {
	            if (n >= money) {
	                return false;
	            }
	            return true;
	        },
	        pay: function pay(n) {
	            money -= n;
	            this.setDis();
	        },
	        add: function add(n) {
	            money += n;
	            alert("恭喜你获得了 " + money + " 个黄金星辰");
	            this.setDis();
	        },
	        check: function check() {
	            return money;
	        },
	        setDis: function setDis() {
	            $("#iGoldNum").text(money);
	        }
	    };
	}();

	exports.default = moneyGold;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by zhang on 2017-07-27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _skinJackpot = __webpack_require__(8);

	var _skinJackpot2 = _interopRequireDefault(_skinJackpot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var algorithm = function () {
	    function algorithm() {
	        _classCallCheck(this, algorithm);
	    }

	    _createClass(algorithm, [{
	        key: "takeReasult",
	        value: function takeReasult(n) {
	            var res = [];
	            var isTS = false;
	            if (n === 10) {
	                n++;
	            }
	            for (var i = 0; i < n; i++) {
	                var item = [];
	                var itemIndex = Math.floor(Math.random() * _skinJackpot2.default.item.length);
	                //最后一个特殊皮肤
	                if (n >= 11 && i >= 10) {
	                    isTS = true;
	                    var _itemIndex = Math.floor(Math.random() * 60);
	                }

	                var key = _skinJackpot2.default.item[itemIndex];

	                var name = this.setName(key, isTS);
	                var isxy = this.isRare(itemIndex);

	                item.push(key);
	                item.push(name);
	                item.push(isxy);
	                res.push(item);
	            }
	            return res;
	        }
	    }, {
	        key: "setName",
	        value: function setName(key, isTS) {
	            //    检测 英雄 + 名字 + 是否体验
	            var name = "";

	            if (key < 1000) {
	                name += "英雄  ";
	            } else {
	                name += "皮肤  ";
	            }
	            name += _skinJackpot2.default.respon[key];

	            if (_skinJackpot2.default.respon[key] == undefined) {
	                console.log(key);
	            }

	            //特殊皮肤直接返回
	            if (isTS) {
	                return name;
	            }

	            if (Math.random() < 0.25) {
	                name += "  七天体验";
	            }
	            return name;
	        }
	    }, {
	        key: "isRare",
	        value: function isRare(key) {
	            if (key < 63) {
	                return true;
	            }
	            return false;
	        }
	    }]);

	    return algorithm;
	}();

	var algorihtms = new algorithm();

	exports.default = algorihtms;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zhang on 2017-07-27.
	 */
	var skinJacpot = {};
	skinJacpot.respon = {
	    '1': '黑暗之女 安妮',
	    '2': '狂战士 奥拉夫',
	    '3': '正义巨像 加里奥',
	    '4': '卡牌大师 崔斯特',
	    '5': '德邦总管 赵信',
	    '6': '首领之傲 厄加特',
	    '7': '诡术妖姬 乐芙兰',
	    '8': '猩红收割者 弗拉基米尔',
	    '9': '末日使者 费德提克',
	    '10': '审判天使 凯尔',
	    '11': '无极剑圣 易',
	    '12': '牛头酋长 阿利斯塔',
	    '13': '符文法师 瑞兹',
	    '14': '亡灵战神 赛恩',
	    '15': '战争女神 希维尔',
	    '16': '众星之子 索拉卡',
	    '17': '迅捷斥候 提莫',
	    '18': '麦林炮手 崔丝塔娜',
	    '19': '祖安怒兽 沃里克',
	    '20': '雪人骑士 努努',
	    '21': '赏金猎人 厄运小姐',
	    '22': '寒冰射手 艾希',
	    '23': '蛮族之王 泰达米尔',
	    '24': '武器大师 贾克斯',
	    '25': '堕落天使 莫甘娜',
	    '26': '时光守护者 基兰',
	    '27': '炼金术士 辛吉德',
	    '28': '寡妇制造者 伊芙琳',
	    '29': '瘟疫之源 图奇',
	    '30': '死亡颂唱者 卡尔萨斯',
	    '31': '虚空恐惧 科加斯',
	    '32': '殇之木乃伊 阿木木',
	    '33': '披甲龙龟 拉莫斯',
	    '34': '冰晶凤凰 艾尼维亚',
	    '35': '恶魔小丑 萨科',
	    '36': '祖安狂人 蒙多医生',
	    '37': '琴瑟仙女 娑娜',
	    '38': '虚空行者 卡萨丁',
	    '39': '刀锋意志 艾瑞莉娅',
	    '40': '风暴之怒 迦娜',
	    '41': '海洋之灾 普朗克',
	    '42': '英勇投弹手 库奇',
	    '43': '天启者 卡尔玛',
	    '44': '瓦洛兰之盾 塔里克',
	    '45': '邪恶小法师 维迦',
	    '48': '巨魔之王 特朗德尔',
	    '50': '策士统领 斯维因',
	    '51': '皮城女警 凯特琳',
	    '53': '蒸汽机器人 布里茨',
	    '54': '熔岩巨兽 墨菲特',
	    '55': '不祥之刃 卡特琳娜',
	    '56': '永恒梦魇 魔腾',
	    '57': '扭曲树精 茂凯',
	    '58': '荒漠屠夫 雷克顿',
	    '59': '德玛西亚皇子 嘉文四世',
	    '60': '蜘蛛女皇 伊莉丝',
	    '61': '发条魔灵 奥莉安娜',
	    '62': '齐天大圣 孙悟空',
	    '63': '复仇焰魂 布兰德',
	    '64': '盲僧 李青',
	    '67': '暗夜猎手 薇恩',
	    '68': '机械公敌 兰博',
	    '69': '魔蛇之拥 卡西奥佩娅',
	    '72': '水晶先锋 斯卡纳',
	    '74': '大发明家 黑默丁格',
	    '75': '沙漠死神 内瑟斯',
	    '76': '狂野女猎手 奈德丽',
	    '77': '兽灵行者 乌迪尔',
	    '78': '圣锤之毅 波比',
	    '79': '酒桶 古拉加斯',
	    '80': '战争之王 潘森',
	    '81': '探险家 伊泽瑞尔',
	    '82': '铁铠冥魂 莫德凯撒',
	    '83': '牧魂人 约里克',
	    '84': '暗影之拳 阿卡丽',
	    '85': '狂暴之心 凯南',
	    '86': '德玛西亚之力 盖伦',
	    '89': '曙光女神 蕾欧娜',
	    '90': '虚空先知 玛尔扎哈',
	    '91': '刀锋之影 泰隆',
	    '92': '放逐之刃 锐雯',
	    '96': '深渊巨口 克格莫',
	    '98': '暮光之眼 慎',
	    '99': '光辉女郎 拉克丝',
	    '101': '远古巫灵 泽拉斯',
	    '102': '龙血武姬 希瓦娜',
	    '103': '九尾妖狐 阿狸',
	    '104': '法外狂徒 格雷福斯',
	    '105': '潮汐海灵 菲兹',
	    '106': '雷霆咆哮 沃利贝尔',
	    '107': '傲之追猎者 雷恩加尔',
	    '110': '惩戒之箭 韦鲁斯',
	    '111': '深海泰坦 诺提勒斯',
	    '112': '机械先驱 维克托',
	    '113': '北地之怒 瑟庄妮',
	    '114': '无双剑姬 菲奥娜',
	    '115': '爆破鬼才 吉格斯',
	    '117': '仙灵女巫 璐璐',
	    '119': '荣耀行刑官 德莱文',
	    '120': '战争之影 赫卡里姆',
	    '121': '虚空掠夺者 卡兹克',
	    '122': '诺克萨斯之手 德莱厄斯',
	    '126': '未来守护者 杰斯',
	    '127': '冰霜女巫 丽桑卓',
	    '131': '皎月女神 黛安娜',
	    '133': '德玛西亚之翼 奎因',
	    '134': '暗黑元首 辛德拉',
	    '136': '铸星龙王 奥瑞利安·索尔',
	    '143': '荆棘之兴 婕拉',
	    '150': '迷失之牙 纳尔',
	    '154': '生化魔人 扎克',
	    '157': '疾风剑豪 亚索',
	    '161': '虚空之眼 维克兹',
	    '163': '岩雀 塔莉垭',
	    '164': '青钢影 卡蜜尔',
	    '201': '弗雷尔卓德之心 布隆',
	    '202': '戏命师 烬',
	    '203': '永猎双子 千珏',
	    '222': '暴走萝莉 金克丝',
	    '223': '河流之王 塔姆',
	    '236': '圣枪游侠 卢锡安',
	    '238': '影流之主 劫',
	    '240': '暴怒骑士 克烈',
	    '245': '时间刺客 艾克',
	    '254': '皮城执法官 蔚',
	    '266': '暗裔剑魔 亚托克斯',
	    '267': '唤潮鲛姬 娜美',
	    '268': '沙漠皇帝 阿兹尔',
	    '412': '魂锁典狱长 锤石',
	    '420': '海兽祭司 俄洛伊',
	    '421': '虚空遁地兽 雷克塞',
	    '427': '翠神 艾翁',
	    '429': '复仇之矛 卡莉丝塔',
	    '432': '星界游神 巴德',
	    '497': '幻翎 洛',
	    '498': '逆羽 霞',
	    '1001': '哥特萝莉 安妮',
	    '1002': '小红帽 安妮',
	    '1003': '安妮梦游仙境',
	    '1004': '舞会公主 安妮',
	    '1005': '冰霜烈焰 安妮',
	    '1006': '安伯斯与提妮',
	    '1007': '科学怪熊的新娘 安妮',
	    '1008': '“你看见过我的熊猫吗？”安妮',
	    '1009': '甜心宝贝 安妮',
	    '1010': '海克斯科技 安妮',
	    '2001': '烈焰猛士 奥拉夫',
	    '2002': '冰河时代 奥拉夫',
	    '2003': '铁哥们儿 奥拉夫',
	    '2004': '五杀摇滚鼓手 奥拉夫',
	    '2005': '黑暗骑士 奥拉夫',
	    '2006': '牛扒狂战 奥拉夫',
	    '2007': '铁哥们儿 奥拉夫 成吨的伤害',
	    '2008': '铁哥们儿 奥拉夫 极限猛男',
	    '2009': '铁哥们儿 奥拉夫 粉红铁汉',
	    '2010': '铁哥们儿 奥拉夫 暴走怪杰',
	    '2011': '铁哥们儿 奥拉夫 断浪之斧',
	    '2012': '铁哥们儿 奥拉夫 迷彩战神',
	    '2013': '铁哥们儿 奥拉夫 健身教练',
	    '2014': '铁哥们儿 奥拉夫 黑拳裁判',
	    '3001': '幽蓝梦魇 加里奥',
	    '3002': '机械迷城 加里奥',
	    '3003': '战地之王 加里奥',
	    '3004': '地狱之门卫士 加里奥',
	    '3005': '风执事 加里奥',
	    '4001': '蓝色忧郁 崔斯特',
	    '4002': '红桃杰克 崔斯特',
	    '4003': '魔幻卡牌 崔斯特',
	    '4004': '探戈灵魂 崔斯特',
	    '4005': '西部牛仔 崔斯特',
	    '4006': '皇家火枪手 崔斯特',
	    '4007': '地底世界 崔斯特',
	    '4008': '逆转裁判 崔斯特',
	    '4009': '逍遥赌侠 崔斯特',
	    '4010': '腥红之月 崔斯特',
	    '5001': '特战先锋 赵信',
	    '5002': '皇家守卫 赵信',
	    '5003': '绞肉机角斗士 赵信',
	    '5004': '翼骑统领 赵信',
	    '5005': '赵云 子龙',
	    '5006': '秘密特工 赵信',
	    '5007': '不败战神 赵云',
	    '5008': '征南将军 赵云',
	    '5009': '镇东将军 赵云',
	    '5010': '虎威将军 赵云',
	    '5011': '禁军统帅 赵云',
	    '5012': '常胜将军 赵云',
	    '5013': '屠龙勇士 赵信',
	    '5014': '屠龙勇士 赵信 金龙之优雅',
	    '5015': '屠龙勇士 赵信 绿龙之无畏',
	    '5016': '屠龙勇士 赵信 铜龙之睿智',
	    '5017': '屠龙勇士 赵信 银龙之庄严',
	    '5018': '屠龙勇士 赵信 晶龙之威仪',
	    '5019': '屠龙勇士 赵信 红龙之狂傲',
	    '6001': '深渊巨蟹 厄加特',
	    '6002': '电锯狂人 厄加特',
	    '6003': '战地机甲 厄加特',
	    '7001': '潮流女王 乐芙兰',
	    '7002': '社会名流 乐芙兰',
	    '7003': '幸福女神 乐芙兰',
	    '7004': '邪鸦魅影 乐芙兰',
	    '7005': '长者之森 乐芙兰',
	    '7006': '社会名流 乐芙兰 毒花之“马樱丹”',
	    '7007': '社会名流 乐芙兰 毒花之“曼陀罗”',
	    '7008': '社会名流 乐芙兰 毒花之“桔梗花”',
	    '7009': '社会名流 乐芙兰 毒花之“钩吻花”',
	    '7010': '社会名流 乐芙兰 毒花之“一品红”',
	    '7011': '社会名流 乐芙兰 毒花之“千鸟草”',
	    '8001': '弗拉基米尔伯爵',
	    '8002': '弗拉基米尔侯爵',
	    '8003': '诺斯费拉图  弗拉基米尔',
	    '8004': '霹雳游侠 弗拉基米尔',
	    '8005': '鲜血领主 弗拉基米尔',
	    '8006': '摄魂男爵 弗拉基米尔',
	    '8007': '学生会长 弗拉基米尔',
	    '9001': '幽魂 费德提克',
	    '9002': '联合王国 费德提克',
	    '9003': '荒野幽灵 费德提克',
	    '9004': '南瓜头 费德提克',
	    '9005': '铁钩船长 费德提克',
	    '9006': '惊悚派对 费德提克',
	    '9007': '糖果使徒 费德提克',
	    '9008': '重生之沙 费德提克',
	    '10001': '银白审判 凯尔',
	    '10002': '末世天使 凯尔',
	    '10003': '大天使长米迦勒 凯尔',
	    '10004': '战场女武神 凯尔',
	    '10005': '圣光审判 凯尔',
	    '10006': '钢铁之翼 凯尔',
	    '10007': '防暴天使 凯尔',
	    '10008': '钢铁审判官 凯尔',
	    '11001': '暗影 易',
	    '11002': '星战 易',
	    '11003': '天人合一 易',
	    '11004': '侍魂 易',
	    '11005': '铁血剑豪 易',
	    '11006': '铁血剑豪 易 黄金剑豪',
	    '11007': '铁血剑豪 易 明镜止水',
	    '11008': '铁血剑豪 易 赤影剑豪',
	    '11009': '源计划：林 易',
	    '11010': '斩星魔剑 易',
	    '12001': '暗黑灵魂 阿利斯塔',
	    '12002': '金牛座 阿利斯塔',
	    '12003': '斗牛士 阿利斯塔',
	    '12004': '荒野镖客 阿利斯塔',
	    '12005': '巨角幻兽 阿利斯塔',
	    '12006': '地狱火 阿利斯塔',
	    '12007': '后场堡垒 阿利斯塔',
	    '12008': '黑暗骑士 阿利斯塔',
	    '12009': 'SKT T1 阿利斯塔',
	    '12010': '哞利斯塔',
	    '12011': '哞利斯塔 草莓味牛奶',
	    '12012': '哞利斯塔 青苹果味牛奶',
	    '12013': '哞利斯塔 香蕉味牛奶',
	    '12014': '哞利斯塔 蓝莓味牛奶',
	    '12015': '哞利斯塔 巧克力味牛奶',
	    '12016': '哞利斯塔 酸奶',
	    '12017': '哞利斯塔 花生味牛奶',
	    '12018': '哞利斯塔 葡萄味牛奶',
	    '13001': '青年 瑞兹',
	    '13002': '部落精神 瑞兹',
	    '13003': '美国大叔 瑞兹',
	    '13004': '守护者雕像 瑞兹',
	    '13005': '宗师级法师训练师 瑞兹',
	    '13006': '至死不渝 瑞兹',
	    '13007': '恶魔男爵 瑞兹',
	    '13008': '海贼 瑞兹',
	    '13009': '瑞兹·白须',
	    '13010': 'SKT T1 瑞兹',
	    '14001': '钢铁终结者 赛恩',
	    '14002': '武仙座海格力斯 赛恩',
	    '14003': '原野伐木工 赛恩',
	    '14004': '战争机器 赛恩',
	    '14005': '霸天零式 赛恩',
	    '15001': '战场公主 希维尔',
	    '15002': '亮丽女神 希维尔',
	    '15003': '女猎手 希维尔',
	    '15004': '钢铁之心 希维尔',
	    '15005': '创战纪 希维尔',
	    '15006': '冰雪风暴 希维尔',
	    '15007': '光明骑士 希维尔',
	    '15008': '胜利女神 希维尔',
	    '16001': '森林女神 索拉卡',
	    '16002': '月光女神阿忒弥斯 索拉卡',
	    '16003': '圣洁化身 索拉卡',
	    '16004': '灵魂收割者 索拉卡',
	    '16005': '蕉泥座人 索拉卡',
	    '16006': '源代码 索拉卡',
	    '17001': '圣诞开心鬼 提莫',
	    '17002': '军情五处 提莫',
	    '17003': '密林猎手 提莫',
	    '17004': '提莫:约德尔人的一大步',
	    '17005': '兔宝宝 提莫',
	    '17006': '约德尔国队长 提莫',
	    '17007': '熊猫 提莫',
	    '17008': '欧米伽小队 幽灵特工',
	    '17009': '蓝莓味糖果 兔宝宝 提莫',
	    '17010': '草莓味糖果 兔宝宝 提莫',
	    '17011': '牛奶味糖果 兔宝宝 提莫',
	    '17012': '抹茶味糖果 兔宝宝 提莫',
	    '17013': '葡萄味糖果 兔宝宝 提莫',
	    '17014': '大魔王 提莫',
	    '18001': '粉色萝莉 崔丝塔娜',
	    '18002': '圣诞精灵 崔丝塔娜 ',
	    '18003': '烈焰雄心 崔丝塔娜',
	    '18004': '游击队员 崔丝塔娜',
	    '18005': '约德尔海贼团 崔丝塔娜',
	    '18006': '火箭达人 崔丝塔娜',
	    '18007': '火箭达人 崔丝塔娜 硬核朋克',
	    '18008': '火箭达人 崔丝塔娜 斯卡朋克',
	    '18009': '火箭达人 崔丝塔娜 流行朋克',
	    '18010': '驯龙炮手 崔丝塔娜',
	    '18011': '魅惑女巫 崔丝塔娜',
	    '19001': '暗影 沃里克',
	    '19002': '披着海牛的狼 沃里克',
	    '19003': '狼外婆 沃里克',
	    '19004': '冻原猎手 沃里克',
	    '19005': '嗜血狂暴 沃里克',
	    '19006': '火牙狼人 沃里克',
	    '19007': '荒野豺狼 沃里克',
	    '19008': '黑暗骑士 沃里克',
	    '20001': '荒野巨兽 努努',
	    '20002': '圣诞狂欢 努努',
	    '20003': '脏兮兮 努努',
	    '20004': '合金巨兽 努努',
	    '20005': '攻城巨兽 努努',
	    '20006': '暗杀星 努努',
	    '20007': '丧尸 努努',
	    '21001': '西部牛仔 厄运小姐',
	    '21002': '法国皇室 厄运小姐',
	    '21003': '特工狂花 厄运小姐',
	    '21004': '圣诞糖果棒 厄运小姐',
	    '21005': '荒野女警 厄运小姐',
	    '21006': '黑帮狂花 厄运小姐',
	    '21007': '电玩女神 厄运小姐',
	    '21008': '女帝 厄运小姐',
	    '21009': '泳池派对 厄运小姐',
	    '21010': '蓝蔷薇女神',
	    '21011': '紫罗兰女神',
	    '21012': '橙玫瑰女神',
	    '21013': '绿牡丹女神',
	    '21014': '红丁香女神',
	    '22001': '极地女神 艾希',
	    '22002': '丛林侠盗 艾希',
	    '22003': '勇敢的心 艾希',
	    '22004': '女皇 艾希',
	    '22005': '紫晶射手 艾希',
	    '22006': '觅心女王 艾希',
	    '22007': '黑暗骑士 艾希',
	    '22008': '源计划：联合 艾希',
	    '23001': '勇敢的心 泰达米尔',
	    '23002': '国王 泰达米尔',
	    '23003': '诸神的黄昏 泰达米尔',
	    '23004': '恶魔之刃 泰达米尔',
	    '23005': '奥斯曼大帝 泰达米尔',
	    '23006': '关羽 云长',
	    '23007': '梦魇 泰达米尔',
	    '23008': '野兽猎人 泰达米尔',
	    '23009': '生化领主 泰达米尔',
	    '24001': '冰球队员 贾克斯',
	    '24002': '万夫莫开 贾克斯',
	    '24003': '宗师级钓鱼训练师 贾克斯',
	    '24004': '卧虎藏龙 贾克斯',
	    '24005': '百夫长 贾克斯',
	    '24006': '少林武僧 贾克斯',
	    '24007': '复仇武神 贾克斯',
	    '24008': 'SKT T1 贾克斯',
	    '24009': '复仇武神 贾克斯 黄金蝮蛇',
	    '24010': '复仇武神 贾克斯 沙羽蛇鹫',
	    '24011': '复仇武神 贾克斯 猩红毒蝎',
	    '24012': '光明骑士 贾克斯',
	    '25001': '杀戮天使昔拉 莫甘娜',
	    '25002': '地狱厨房 莫甘娜',
	    '25003': '刀锋女王 莫甘娜',
	    '25004': '黑色荆棘 莫甘娜',
	    '25005': '鬼魂新娘 莫甘娜',
	    '25006': '胜利女神 莫甘娜',
	    '25007': '堕落天使 莫甘娜 傲慢原罪',
	    '25008': '堕落天使 莫甘娜 嫉妒原罪',
	    '25009': '堕落天使 莫甘娜 愤怒原罪',
	    '25010': '紫金罗刹 莫甘娜',
	    '25011': '魅惑女巫 莫甘娜',
	    '26001': '圣诞狂欢 基兰',
	    '26002': '嘻哈精神 基兰',
	    '26003': '遗迹守护者 基兰',
	    '26004': '时间机器 基兰',
	    '26005': '腥红之月 基兰',
	    '27001': '防暴士兵 辛吉德',
	    '27002': '机械污染 辛吉德',
	    '27003': '冲浪高手 辛吉德',
	    '27004': '科学狂人 辛吉德',
	    '27005': '炼金狂士 辛吉德',
	    '27006': '冰雪节 辛吉德',
	    '27007': 'SSW 辛吉德',
	    '27008': '黑色天灾 辛吉德',
	    '28001': '黑暗女王 伊芙琳',
	    '28002': '假面女皇 伊芙琳',
	    '28003': '探戈灵魂 伊芙琳',
	    '28004': '惊天魔盗 伊芙琳',
	    '29001': '首领 图奇',
	    '29002': '北风冻原 图奇',
	    '29003': '都铎王朝 图奇',
	    '29004': '黑金诱惑 图奇',
	    '29005': '横行霸道 图奇',
	    '29006': '绝影神偷 图奇',
	    '29007': 'SSW 图奇',
	    '30001': '幽灵幻影 卡尔萨斯',
	    '30002': '自由女神 卡尔萨斯',
	    '30003': '死神 卡尔萨斯',
	    '30004': '五杀摇滚主唱 卡尔萨斯',
	    '30005': 'Fnatic 卡尔萨斯',
	    '30006': '死神 卡尔萨斯 毁灭使者',
	    '30007': '死神 卡尔萨斯 痛苦使者',
	    '30008': '死神 卡尔萨斯 暗影使者',
	    '30009': '卡尔萨斯·祸害之光',
	    '31001': '梦魇 科加斯',
	    '31002': '绅士 科加斯',
	    '31003': '尼斯巨兽 科加斯',
	    '31004': '侏罗纪化石 科加斯',
	    '31005': '战地巨兽 科加斯',
	    '31006': '暴龙 科加斯',
	    '32001': '法老 阿木木',
	    '32002': '狂欢 阿木木',
	    '32003': '情绪摇滚 阿木木',
	    '32004': '阿木木:“主人不要我了”',
	    '32005': '王子不是我 阿木木',
	    '32006': '小小骑士 阿木木',
	    '32007': '殇之机器人 阿木木',
	    '32008': '惊悚派对 阿木木',
	    '32009': '惊悚派对 阿木木 “克烈还没来…”',
	    '32010': '惊悚派对 阿木木 “提莫还没来…”',
	    '32011': '惊悚派对 阿木木 “璐璐还没来…”',
	    '32012': '惊悚派对 阿木木 “菲兹还没来…”',
	    '32013': '惊悚派对 阿木木 “纳尔还没来…”',
	    '32014': '惊悚派对 阿木木 “吉格斯还没来…”',
	    '32015': '惊悚派对 阿木木 “魄罗还没来…”',
	    '32016': '惊悚派对 阿木木 “提伯斯还没来…”',
	    '33001': '国王 拉莫斯',
	    '33002': '铬金铠甲 拉莫斯',
	    '33003': '熔火之心 拉莫斯',
	    '33004': '极度深寒 拉莫斯',
	    '33005': '忍龟 拉莫斯',
	    '33006': '全金属狂潮 拉莫斯',
	    '33007': '圣金甲虫 拉莫斯',
	    '34001': '双重冰晶 艾尼维亚',
	    '34002': '联盟之喙 艾尼维亚',
	    '34003': '重甲猎鹰 艾尼维亚',
	    '34004': '钢铁之翼 艾尼维亚',
	    '34005': '黯晶凤凰 艾尼维亚',
	    '34006': '翼龙 艾尼维亚',
	    '34007': '庆典女皇 艾尼维亚',
	    '35001': '恐怖之源 萨科',
	    '35002': '贵族血统 萨科',
	    '35003': '胡桃夹子 萨科',
	    '35004': '小丑工作坊 萨科',
	    '35005': '飞越疯人院 萨科',
	    '35006': '武动巅峰 萨科',
	    '35007': '万能小丑 萨科',
	    '36001': '战栗之毒 蒙多',
	    '36002': '健美教练 蒙多',
	    '36003': '律政大亨 蒙多',
	    '36004': '蒙多蒙多',
	    '36005': '嗜血行刑 蒙多',
	    '36006': '战争血统 蒙多',
	    '36007': '暗杀星 蒙多',
	    '36008': '泳池派对 蒙多',
	    '36009': '硬汉 蒙多',
	    '37001': '缪斯女神 娑娜',
	    '37002': '五杀摇滚键盘手 娑娜',
	    '37003': '平安夜女神 娑娜',
	    '37004': '古琴余韵 娑娜',
	    '37005': '电玩女神 娑娜',
	    '37006': 'DJ 娑娜',
	    '37007': '甜心宝贝 娑娜',
	    '38001': '寒冰王座 卡萨丁',
	    '38002': '深海一号 卡萨丁',
	    '38003': '虚空前世 卡萨丁',
	    '38004': '先驱行者 卡萨丁',
	    '38005': '掠星魔刃 卡萨丁',
	    '39001': '夜刃 艾瑞莉娅',
	    '39002': '自由之翼 艾瑞莉娅',
	    '39003': '夜行义贼 艾瑞莉娅',
	    '39004': '冰霜之刃 艾瑞莉娅',
	    '39005': '莲花之令 艾瑞莉娅',
	    '40001': '暴风女神 迦娜',
	    '40002': '海克斯科技 迦娜',
	    '40003': '寒冰女皇 迦娜',
	    '40004': '胜利女神 迦娜',
	    '40005': '女主播 迦娜',
	    '40006': 'Fnatic 迦娜',
	    '40007': '魔法少女 迦娜',
	    '41001': '幽灵船长 普朗克',
	    '41002': '老兵 普朗克',
	    '41003': '大力水手 普朗克',
	    '41004': '英勇玩具兵 普朗克',
	    '41005': '特种部队 普朗克',
	    '41006': '奥斯曼大帝 普朗克',
	    '41007': '昔日霸主 普朗克',
	    '41008': '恐惧新星 普朗克',
	    '42001': '外星装甲 库奇',
	    '42002': '雪橇速滑 库奇',
	    '42003': '红色男爵 库奇',
	    '42004': '急速前进 库奇',
	    '42005': '海牛骑手  库奇',
	    '42006': '神龙之翼 库奇',
	    '42007': 'Fnatic 库奇',
	    '42008': '电玩上校 库奇',
	    '43001': '日冕女神 卡尔玛',
	    '43002': '樱花乱舞 卡尔玛',
	    '43003': '传统服饰 卡尔玛',
	    '43004': '莲花之令 卡尔玛',
	    '43005': '光明骑士 卡尔玛',
	    '43006': '冬季仙境 卡尔玛',
	    '43007': '征服者 卡尔玛',
	    '44001': '绿水晶光辉 塔里克',
	    '44002': '紫水晶意志 塔里克',
	    '44003': '血精石诅咒 塔里克',
	    '44004': '泳池派对 塔里克',
	    '45001': '白魔法师 维迦',
	    '45002': '冰壶选手 维迦',
	    '45003': '灰胡子魔法师 维迦',
	    '45004': '绿野仙踪 维迦',
	    '45005': '魔导绅士 维迦',
	    '45006': '穿着正装的恶魔 维迦',
	    '45007': '邪恶圣诞老人 维迦',
	    '45008': '最终BOSS 维迦',
	    '48001': '里尔击球手  特朗德尔',
	    '48002': '垃圾场  特朗德尔',
	    '48003': '传统造型 特朗德尔',
	    '48004': '巡逻警官 特朗德尔',
	    '48005': '灭世魔神 特朗德尔',
	    '50001': '北领前线 斯维因',
	    '50002': '海贼参谋 斯维因',
	    '50003': '绝代智将 斯维因',
	    '51001': '抵抗军天使 凯特琳',
	    '51002': '荒野治安官 凯特琳',
	    '51003': '古墓丽影 凯特琳',
	    '51004': '冰原狙击 凯特琳',
	    '51005': '女警狙击 凯特琳',
	    '51006': '铁血狙击手 凯特琳',
	    '51007': '皮城女警 凯特琳 死亡蔷薇',
	    '51008': '皮城女警 凯特琳 丛林治安官',
	    '51009': '皮城女警 凯特琳 狙击女王',
	    '51010': '玉净夜叉 凯特琳',
	    '51011': '未来战士 凯特琳',
	    '53001': '铁锈斑斑 布里茨',
	    '53002': '钢铁之门 布里茨',
	    '53003': '擂台皇帝 布里茨',
	    '53004': '陆地王者4WD 布里茨',
	    '53005': '戴一个表 布里茨',
	    '53006': '苹果机器人 布里茨',
	    '53007': '防暴机器人 布里茨',
	    '53008': '蒸汽机器人 布里茨 炎之斗魂',
	    '53009': '蒸汽机器人 布里茨 雷之气势',
	    '53010': '蒸汽机器人 布里茨 铁之意志',
	    '53011': '战场BOSS 布里茨',
	    '54001': '三叶草 墨菲特',
	    '54002': '珊瑚礁 墨菲特',
	    '54003': '石破天惊 墨菲特',
	    '54004': '黑曜石守护者 墨菲特',
	    '54005': '冰川巨兽 墨菲特',
	    '54006': '霸天巨兽 墨菲特',
	    '54007': '无畏号 墨菲特',
	    '54008': '霸天巨兽·拂晓 墨菲特',
	    '54009': '霸天巨兽·翠绿暴风 墨菲特',
	    '54010': '霸天巨兽·漆黑强袭 墨菲特',
	    '54011': '霸天巨兽·沙暴 墨菲特',
	    '54012': '霸天巨兽·雪崩 墨菲特',
	    '54013': '霸天巨兽·蔚蓝决斗 墨菲特',
	    '54014': '霸天巨兽·灰色幽灵 墨菲特',
	    '54015': '霸天巨兽·神无 墨菲特',
	    '55001': '赏金猎人 卡特琳娜',
	    '55002': '红牌！退场！ 卡特琳娜',
	    '55003': '海贼魅影 卡特琳娜',
	    '55004': '暗夜猫女 卡特琳娜',
	    '55005': '前线指挥官 卡特琳娜',
	    '55006': '沙漠风暴 卡特琳娜',
	    '55007': '夺命美人 卡特琳娜',
	    '55008': '闭月之颜 貂蝉',
	    '55009': '源计划：雄心 卡特琳娜',
	    '56001': '蓝焰梦魔 魔腾',
	    '56002': '幻影梦魔 魔腾',
	    '56003': '劫掠梦魇 魔腾',
	    '56004': '鬼影重重 魔腾',
	    '56005': '上古战魂 魔腾',
	    '56006': '恶咒亡魂 魔腾',
	    '57001': '烈焰古树 茂凯',
	    '57002': '图腾古树 茂凯',
	    '57003': '喜庆之树 茂凯',
	    '57004': '鬼影森森 茂凯',
	    '57005': '绿茵门神 茂凯',
	    '57006': '喵凯',
	    '57007': '胜利之树 茂凯',
	    '57008': '喵凯 萌萌粉',
	    '57009': '喵凯 喜悦灰',
	    '57010': '喵凯 怪怪橙',
	    '57011': '喵凯 爽爽蓝',
	    '57012': '喵凯 呆呆青',
	    '57013': '喵凯 淡定桃',
	    '57014': '喵凯 期待绿',
	    '57015': '喵凯 悲伤紫',
	    '58001': '星河战队 雷克顿',
	    '58002': '荒野之咬 雷克顿',
	    '58003': '血色暴君 雷克顿',
	    '58004': '符文战神 雷克顿',
	    '58005': '枯萎之壤 雷克顿',
	    '58006': '泳池派对 雷克顿',
	    '58007': '猛龙 雷克顿',
	    '58008': 'SKT T1 雷克顿',
	    '58009': '鳄霸 雷克顿',
	    '59001': '孤胆英豪 嘉文四世',
	    '59002': '屠龙勇士 嘉文四世',
	    '59003': '龙骑统帅 嘉文四世',
	    '59004': '凯旋英雄 嘉文四世',
	    '59005': '吕布 奉先',
	    '59006': 'Fnatic 嘉文四世',
	    '60001': '死亡绽放 伊莉丝',
	    '60002': '胜利女神 伊莉丝',
	    '60003': '腥红之月 伊莉丝',
	    '60004': 'SKT T1 伊莉丝',
	    '61001': '哥特女仆 奥莉安娜',
	    '61002': '恶灵布偶 奥莉安娜',
	    '61003': '灵骨工匠 奥莉安娜',
	    '61004': '暗杀星 奥莉安娜',
	    '61005': '冬季仙境 奥莉安娜',
	    '61006': '觅心魔灵 奥莉安娜',
	    '61007': '死兆星 奥莉安娜',
	    '62001': '三昧真火 孙悟空',
	    '62002': '斗战胜佛 孙悟空',
	    '62003': '定海神珍 孙悟空',
	    '62004': '地狱行者 孙悟空',
	    '62005': '美猴王 孙悟空',
	    '63001': '末日余生 布兰德',
	    '63002': 'V字仇杀者 布兰德',
	    '63003': '冰晶之核 布兰德',
	    '63004': '丧尸 布兰德',
	    '63005': '灵魂烈焰 布兰德',
	    '64001': '传统僧侣 李青',
	    '64002': '防弹武僧 李青',
	    '64003': '龙的传人 李青',
	    '64004': '至高之拳 李青',
	    '64005': '泳池派对 李青',
	    '64006': 'SKT T1 李青',
	    '64007': '龙的传人 李青 飞龙在天',
	    '64008': '龙的传人 李青 跃龙在渊',
	    '64009': '龙的传人 李青 亢龙有悔',
	    '64010': '地下拳王 李青',
	    '64011': '神拳 李青',
	    '67001': '摩登骇客 薇恩',
	    '67002': '猎天使魔女 薇恩',
	    '67003': '屠龙勇士 薇恩',
	    '67004': '觅心猎手 薇恩',
	    '67005': 'SKT T1 薇恩',
	    '67006': '苍穹之光 薇恩',
	    '67007': '屠龙勇士 薇恩 毒龙之息',
	    '67008': '屠龙勇士 薇恩 炎龙之息',
	    '67009': '屠龙勇士 薇恩 冰龙之息',
	    '67010': '摄魂使者 薇恩',
	    '68001': '热带丛林 兰博',
	    '68002': '独眼海盗 兰博',
	    '68003': '银河魔装机神 兰博',
	    '69001': '荒漠之咬 卡西奥佩娅',
	    '69002': '深海妖姬 卡西奥佩娅',
	    '69003': '蛇发女妖 卡西奥佩娅',
	    '69004': '碧玉之牙 卡西奥佩娅',
	    '69005': '魔蛇之拥 卡西奥佩娅 灼热诅咒',
	    '69006': '魔蛇之拥 卡西奥佩娅 深寒诅咒',
	    '69007': '魔蛇之拥 卡西奥佩娅 石化诅咒',
	    '72001': '沙暴巨蝎 斯卡纳',
	    '72002': '远土之灵 斯卡纳',
	    '72003': '战地机甲 斯卡纳',
	    '72004': '圣金甲虫 斯卡纳',
	    '74001': '第三类接触 黑默丁格',
	    '74002': '拆弹专家 黑默丁格',
	    '74003': '创意工坊 黑默丁格',
	    '74004': '雪默丁格',
	    '74005': '生化博士 黑默丁格',
	    '75001': '星空之门 内瑟斯',
	    '75002': '法老王朝 内瑟斯',
	    '75003': '死亡骑士 内瑟斯',
	    '75004': '警用试作体K-9 内瑟斯',
	    '75005': '炼狱魔犬 内瑟斯',
	    '75006': '单身贵族 内瑟斯',
	    '75007': '死亡骑士 内瑟斯 鲜血使者',
	    '75008': '死亡骑士 内瑟斯 疫病使者',
	    '75009': '死亡骑士 内瑟斯 霜寒使者',
	    '75010': '灭世魔神 内瑟斯',
	    '76001': '雪装 奈德丽',
	    '76002': '丛林猎豹 奈德丽',
	    '76003': '法国女仆 奈德丽',
	    '76004': '艳后 奈德丽',
	    '76005': '魅惑女巫 奈徳丽',
	    '76006': '铁血猎手 奈德丽',
	    '76007': '枭姬 孙尚香',
	    '76008': '勇者 奈德丽',
	    '77001': '武力全开 乌迪尔',
	    '77002': '四神之力 乌迪尔',
	    '77003': '灵魂守卫 乌迪尔',
	    '77004': '这货不是乌迪尔',
	    '78001': '诺克萨斯 波比',
	    '78002': '波比的巧克力工坊',
	    '78003': '宗师级锻造训练师',
	    '78004': '圣诞玩偶 波比',
	    '78005': '军神战甲 波比',
	    '78006': '血色之锤 波比',
	    '78007': '魔法少女 波比',
	    '78008': '军神战甲 波比 爱神之怜',
	    '78009': '军神战甲 波比 炎神之烈',
	    '78010': '军神战甲 波比 森神之佑',
	    '78011': '军神战甲 波比 海神之威',
	    '78012': '军神战甲 波比 天神之赐',
	    '78013': '军神战甲 波比 死神之睐',
	    '79001': '深潜蛙人 古拉加斯',
	    '79002': '乡村农夫 古拉加斯',
	    '79003': '圣诞老人 古拉加斯',
	    '79004': '品酒大师 古拉加斯',
	    '79005': '飞车暴走族 古拉加斯',
	    '79006': '美酒节特使 古拉加斯',
	    '79007': '狂热球迷 古拉加斯',
	    '79008': 'Fnatic 古拉加斯',
	    '79009': '古拉加斯·碎桶者',
	    '80001': '斯巴达之魂 潘森',
	    '80002': '万人敌 潘森',
	    '80003': '英仙座珀尔修斯 潘森',
	    '80004': '钢铁意志 潘森',
	    '80005': '大夏武士 潘森',
	    '80006': '屠龙勇士 潘森',
	    '80007': '丧尸杀手 潘森',
	    '80008': '面包之王 潘森',
	    '80009': '屠龙勇士 潘森 晶龙之威仪',
	    '80010': '屠龙勇士 潘森 黑龙之狡黠',
	    '80011': '屠龙勇士 潘森 银龙之庄严',
	    '80012': '屠龙勇士 潘森 铜龙之睿智',
	    '80013': '屠龙勇士 潘森 金龙之优雅',
	    '80014': '屠龙勇士 潘森 绿龙之无畏',
	    '80015': '屠龙勇士 潘森 红龙之狂傲',
	    '81001': '冒险精神 伊泽瑞尔',
	    '81002': '足球先生 伊泽瑞尔',
	    '81003': '冰川勇者 伊泽瑞尔',
	    '81004': '失落的世界 伊泽瑞尔',
	    '81005': '未来战士 伊泽瑞尔',
	    '81006': '暗杀星 伊泽瑞尔',
	    '81007': '光执事 伊泽瑞尔',
	    '81008': '黑桃皇牌 伊泽瑞尔',
	    '81009': '电玩勇者 伊泽瑞尔',
	    '81010': '名侦探 伊泽瑞尔',
	    '81011': '怪盗 伊泽瑞尔',
	    '81012': '鬼才漫画家 伊泽瑞尔',
	    '81013': '皇家特工 伊泽瑞尔',
	    '81014': '学生会长 伊泽瑞尔',
	    '81015': '夜王 伊泽瑞尔',
	    '81016': '天团 伊泽瑞尔',
	    '81017': '搜查一课 伊泽瑞尔',
	    '82001': '龙骑士 莫德凯撒',
	    '82002': '地狱火 莫德凯撒',
	    '82003': '五杀摇滚吉他手  莫德凯撒',
	    '82004': '死亡领主 莫德凯撒',
	    '82005': '梅花国王 莫德凯撒',
	    '83001': '地狱送葬 约里克',
	    '83002': '五杀摇滚贝斯手 约里克',
	    '84001': '蜂刺 阿卡丽',
	    '84002': '绯红 阿卡丽',
	    '84003': '足球宝贝 阿卡丽',
	    '84004': '实习护士 阿卡丽',
	    '84005': '腥红之月 鬼武姬 阿卡丽',
	    '84006': '银色之牙 阿卡丽',
	    '84007': '铁血女忍 阿卡丽',
	    '84008': '刺身之拳 阿卡丽',
	    '85001': '红色彗星 凯南',
	    '85002': '银色闪电 凯南',
	    '85003': '空手道 凯南',
	    '85004': '医学博士 凯南',
	    '85005': '刺客信条 凯南',
	    '85006': '腥红之月 凯南',
	    '85007': '超级英雄 凯南',
	    '86001': '战神阿瑞斯 盖伦',
	    '86002': '黄金骑士 盖伦',
	    '86003': '铁甲雄心 盖伦',
	    '86004': '死亡骑士 盖伦',
	    '86005': '孤高游侠 盖伦',
	    '86006': '钢铁军团 盖伦',
	    '86007': '德玛西亚之力 盖伦 浴血先锋',
	    '86008': '德玛西亚之力 盖伦 皇家近卫',
	    '86009': '德玛西亚之力 盖伦 钢铁守护',
	    '86010': '暴君 盖伦',
	    '86011': '张辽 文远',
	    '89001': '瓦尔基里 蕾欧娜',
	    '89002': '神圣守卫 蕾欧娜',
	    '89003': '钢铁烈阳 蕾欧娜',
	    '89004': '泳池派对 蕾欧娜',
	    '89005': '泳池派对 蕾欧娜 浪漫霞辉',
	    '89006': '泳池派对 蕾欧娜 碧海映阳',
	    '89007': '泳池派对 蕾欧娜 灿烂晨曦',
	    '89008': '源计划：山 蕾欧娜',
	    '89009': '烧烤女神 蕾欧娜',
	    '90001': '元老议会 玛尔扎哈',
	    '90002': '暗影王子 玛尔扎哈',
	    '90003': '魔灵 玛尔扎哈',
	    '90004': '至高君王 玛尔扎哈',
	    '90005': '冰雪节 玛尔扎哈',
	    '91001': '刺客信条 泰隆',
	    '91002': '血色精锐 泰隆',
	    '91003': '银龙裁决 泰隆',
	    '91004': 'SSW 泰隆',
	    '91005': '腥红之月 泰隆',
	    '92001': '刺客信条 锐雯',
	    '92002': '血色精锐 锐雯',
	    '92003': '兔女郎 锐雯',
	    '92004': '冠军之刃 锐雯',
	    '92005': '替父从军 花木兰',
	    '92006': '电玩勇者 锐雯',
	    '92007': '冠军之刃 锐雯 2016',
	    '92008': '流光之刃 锐雯',
	    '92009': '雾雨之刃 锐雯',
	    '92010': '森岚之刃 锐雯',
	    '92011': '幻星之刃 锐雯',
	    '92012': '夜空之刃 锐雯',
	    '92013': '红莲之刃 锐雯',
	    '92014': '魅影之刃 锐雯',
	    '92015': '梦蝶之刃 锐雯',
	    '96001': '毛毛虫 克格莫',
	    '96002': '索诺拉沙虫 克格莫',
	    '96003': '帝王斑蝶 克格莫',
	    '96004': '圣诞驯鹿 克格莫',
	    '96005': '醒狮 克格莫',
	    '96006': '深海怪鱼 克格莫',
	    '96007': '侏罗纪化石 克格莫',
	    '96008': '战地机甲 克格莫',
	    '96009': '克格汪',
	    '98001': '极寒 慎',
	    '98002': '炎爆 慎',
	    '98003': '主治医师 慎',
	    '98004': '腥红之月 鬼武者 慎',
	    '98005': '战国大名 慎',
	    '98006': '暗杀星 慎',
	    '98007': '战国大名 慎 仁',
	    '98008': '战国大名 慎 礼',
	    '98009': '战国大名 慎 义',
	    '98010': '战国大名 慎 信',
	    '98011': '战国大名 慎 忠',
	    '98012': '战国大名 慎 智',
	    '98013': '战国大名 慎 悌',
	    '98014': '战国大名 慎 孝',
	    '99001': '奥术光辉 拉克丝',
	    '99002': '游侠法师 拉克丝',
	    '99003': 'ODST地狱伞兵 拉克丝',
	    '99004': '星际迷航 拉克丝',
	    '99005': '钢铁军团 拉克丝',
	    '99006': '魔法少女 拉克丝',
	    '99007': '大元素使 拉克丝',
	    '101001': '符文生物 泽拉斯',
	    '101002': '战地法师 泽拉斯',
	    '101003': '枯萎之壤 泽拉斯',
	    '101004': '圣金巫灵 泽拉斯',
	    '102001': '钢之逆鳞 希瓦娜',
	    '102002': '骸骨之爪 希瓦娜',
	    '102003': '黯黑魔龙 希瓦娜',
	    '102004': '冰霜亚龙 希瓦娜',
	    '102005': '冠军之血 希瓦娜',
	    '102006': '银河魔装机神 希瓦娜',
	    '103001': '高丽风情 阿狸',
	    '103002': '暗影妖狐 阿狸',
	    '103003': '焰尾妖狐 阿狸',
	    '103004': '偶像歌手 阿狸',
	    '103005': '勇者 阿狸',
	    '103006': '风纪委员 阿狸',
	    '103007': '电玩女神 阿狸',
	    '103008': '偶像歌手 阿狸 皇室鸢尾打歌服',
	    '103009': '偶像歌手 阿狸 盛开之樱打歌服',
	    '103010': '偶像歌手 阿狸 沙漠玫瑰打歌服',
	    '103011': '偶像歌手 阿狸 草原龙胆打歌服',
	    '103012': '偶像歌手 阿狸 极地雪莲打歌服',
	    '103013': '偶像歌手 阿狸 高山杜鹃打歌服',
	    '104001': '怒之火炮 格雷福斯',
	    '104002': '杀出重围 格雷福斯',
	    '104003': '黑帮教父 格雷福斯',
	    '104004': '防暴士兵 格雷福斯',
	    '104005': '泳池派对 格雷福斯',
	    '104006': '无情重炮 格雷福斯',
	    '104007': '冰雪节 格雷福斯',
	    '105001': '失落大陆 菲兹',
	    '105002': '苔原猎手 菲兹',
	    '105003': '海牛猎手 菲兹',
	    '105004': '虚空海灵 菲兹',
	    '105005': '潮汐海灵 菲兹 黄刚玉之心',
	    '105006': '潮汐海灵 菲兹 蓝宝石之心',
	    '105007': '潮汐海灵 菲兹 红水晶之心',
	    '105008': '兔宝宝 菲兹',
	    '105009': '银河魔装机神 菲兹',
	    '106001': '雷霆领主 沃利贝尔',
	    '106002': '北地风暴 沃利贝尔',
	    '106003': '符文战熊 沃利贝尔',
	    '106004': '警长 沃利贝尔',
	    '106005': '怒熊 沃利贝尔',
	    '107001': '铁血猎人 雷恩加尔',
	    '107002': '暗黑武士 雷恩加尔',
	    '107003': 'SSW 雷恩加尔',
	    '107004': '铁血猎人 雷恩加尔 暗爪',
	    '107005': '铁血猎人 雷恩加尔 血痕',
	    '107006': '铁血猎人 雷恩加尔 匿踪杀手',
	    '107007': '铁血猎人 雷恩加尔 异瞳',
	    '110001': '夜魔水晶 韦鲁斯',
	    '110002': '苍穹之光 韦鲁斯',
	    '110003': '白色死神 韦鲁斯',
	    '110004': '觅心射手 韦鲁斯',
	    '110005': '韦鲁斯·迅箭',
	    '110006': '死兆星 韦鲁斯',
	    '111001': '失落大陆 诺提勒斯',
	    '111002': '地底迷城 诺提勒斯',
	    '111003': '宇航员 诺提勒斯',
	    '111004': '光明骑士 诺提勒斯',
	    '111005': '灭世魔神 诺提勒斯',
	    '112001': '全金属狂潮 维克托',
	    '112002': '初号机 维克托',
	    '112003': '造物主 维克托',
	    '113001': '野兽女王 瑟庄妮',
	    '113002': '死亡骑士 瑟庄妮',
	    '113003': '传统造型 瑟庄妮',
	    '113004': '战熊骑士 瑟庄妮',
	    '113005': '魄罗骑士 瑟庄妮',
	    '113006': '野兽猎人 瑟庄妮',
	    '113007': '瑟庄妮·逐晓者',
	    '114001': '皇家守卫 菲奥娜',
	    '114002': '夜鸦 菲奥娜',
	    '114003': '女校长 菲奥娜',
	    '114004': '源计划：火 菲奥娜',
	    '114005': '泳池派对 菲奥娜',
	    '114006': '女校长 菲奥娜 燃烧的教鞭',
	    '114007': '女校长 菲奥娜 精准的眼力',
	    '114008': '女校长 菲奥娜 经典传承者',
	    '114009': '女校长 菲奥娜 差生毁灭者',
	    '114010': '女校长 菲奥娜 优雅的风度',
	    '114011': '女校长 菲奥娜 高洁的威严',
	    '114012': '女校长 菲奥娜 教育的荣光',
	    '114013': '女校长 菲奥娜 梦幻的倩影',
	    '115001': '科学狂人 吉格斯',
	    '115002': '少校 吉格斯',
	    '115003': '泳池派对 吉格斯',
	    '115004': '雪球也能爆炸！ 吉格斯',
	    '115005': '奥术大师 吉格斯',
	    '117001': '糖果女巫 璐璐',
	    '117002': '邪恶女巫 璐璐',
	    '117003': '驯龙女巫 璐璐',
	    '117004': '寒冬精灵 璐璐',
	    '117005': '泳池派对 璐璐',
	    '117006': '魔法少女 璐璐',
	    '119001': '灵魂收割者 德莱文',
	    '119002': '绞肉机刽子手 德莱文',
	    '119003': '金牌主播 德莱文',
	    '119004': '泳池派对 德莱文',
	    '119005': '野兽猎人 德莱文',
	    '119006': '德莱德莱德莱文',
	    '120001': '血色骑士 赫卡里姆',
	    '120002': '幽魂骑士 赫卡里姆',
	    '120003': '无头骑士 赫卡里姆',
	    '120004': '电玩战魂 赫卡里姆',
	    '120005': '长者之森 赫卡里姆',
	    '120006': '灭世魔神 赫卡里姆',
	    '121001': '霸天异形 卡兹克',
	    '121002': '圣金甲虫 卡兹克',
	    '121003': '死亡绽放 卡兹克',
	    '121004': '死兆星 卡兹克',
	    '122001': '铁血帝皇 德莱厄斯',
	    '122002': '生化骑士 德莱厄斯',
	    '122003': '勇敢的心 德莱厄斯',
	    '122004': '灌篮高手 德莱厄斯',
	    '122005': '诺克萨斯之手 德莱厄斯 暗金将军',
	    '122006': '诺克萨斯之手 德莱厄斯 烈风将军',
	    '122007': '诺克萨斯之手 德莱厄斯 铁血将军',
	    '122008': '热血班长 德莱厄斯',
	    '122009': '灌篮高手 德莱厄斯 紫金王朝',
	    '122010': '灌篮高手 德莱厄斯 传奇雷鸟',
	    '122011': '灌篮高手 德莱厄斯 绿衫战神',
	    '122012': '灌篮高手 德莱厄斯 罪城霸业',
	    '122013': '灌篮高手 德莱厄斯 逆袭传奇',
	    '122014': '恐惧新星 德莱厄斯',
	    '126001': '全金属狂潮 杰斯',
	    '126002': '蔷薇绅士 杰斯',
	    '126003': '天启骑士 杰斯',
	    '126004': '杰斯·光明之锤',
	    '127001': '血石妖后 丽桑卓',
	    '127002': '刀锋女王 丽桑卓',
	    '127003': '源代码 丽桑卓',
	    '131001': '暗黑女武神 黛安娜',
	    '131002': '广寒仙子 嫦娥',
	    '131003': '无限烈焰 黛安娜',
	    '131004': '轮辉霓裳 嫦娥',
	    '131005': '皓彩霓裳 嫦娥',
	    '131006': '玉钩霓裳 嫦娥',
	    '131007': '玄晖霓裳 嫦娥',
	    '131008': '夜光霓裳 嫦娥',
	    '131009': '金镜霓裳 嫦娥',
	    '131010': '素影霓裳 嫦娥',
	    '131011': '腥红之月 黛安娜',
	    '133001': '血羽凤凰 奎因',
	    '133002': '勇敢的心 奎因',
	    '133003': '死亡之鹰 奎因',
	    '133004': '觅心之翼 奎因',
	    '134001': '仲裁圣女 辛德拉',
	    '134002': '亚特兰蒂斯 辛德拉',
	    '134003': '方块王后 辛德拉',
	    '134004': '冰雪女神 辛德拉',
	    '136001': '灰烬领主 奥瑞利安·索尔',
	    '143001': '野火之藤 婕拉',
	    '143002': '鬼影森森 婕拉',
	    '143003': 'SKT T1 婕拉',
	    '143004': '驯龙女巫 婕拉',
	    '150001': '最后一只恐龙 纳尔',
	    '150002': '萌侦探 喵尔摩斯',
	    '150003': '冰雪兽 纳尔',
	    '150004': '狂狮 纳尔',
	    '150005': '最后一只恐龙 纳尔 睿智蓝宝石龙',
	    '150006': '最后一只恐龙 纳尔 浪漫粉晶龙',
	    '150007': '最后一只恐龙 纳尔 好运猫眼石龙',
	    '150008': '最后一只恐龙 纳尔 吉祥珍珠龙',
	    '150009': '最后一只恐龙 纳尔 神秘星钻龙',
	    '150010': '最后一只恐龙 纳尔 驱邪橄榄石龙',
	    '150011': '最后一只恐龙 纳尔 福佑海蓝宝石龙',
	    '150012': '最后一只恐龙 纳尔 和谐紫水晶龙',
	    '154001': '邪恶魔人 扎克',
	    '154002': '泳池派对 扎克',
	    '154003': '生化魔人 扎克 桔子果冻魔人',
	    '154004': '生化魔人 扎克 草莓软糖魔人',
	    '154005': '生化魔人 扎克 木瓜泡泡糖魔人',
	    '157001': '西部牛仔 亚索',
	    '157002': '源计划：风 亚索',
	    '157003': '腥红之月 亚索',
	    '157004': '西部牛仔 亚索 赤胆威龙',
	    '157005': '西部牛仔 亚索 日落狂沙',
	    '157006': '西部牛仔 亚索 原野奇侠',
	    '157007': '西部牛仔 亚索 大地惊雷',
	    '157008': '西部牛仔 亚索 浴血金沙',
	    '161001': '战地机甲 维克兹',
	    '161002': '苍穹之光 维克兹',
	    '161003': '这货不是维克兹',
	    '163001': '弗雷尔卓德 塔莉垭',
	    '164001': '源代码 卡蜜尔',
	    '201001': '屠龙勇士 布隆',
	    '201002': '猛虎 布隆',
	    '201003': '布隆·狮心',
	    '201004': '屠龙勇士 布隆 晶龙之威仪',
	    '201005': '屠龙勇士 布隆 黑龙之狡黠',
	    '201006': '屠龙勇士 布隆 金龙之优雅',
	    '201007': '屠龙勇士 布隆 绿龙之无畏',
	    '201008': '屠龙勇士 布隆 铜龙之睿智',
	    '201009': '屠龙勇士 布隆 银龙之庄严',
	    '201010': '圣诞老人 布隆',
	    '202001': '西部牛仔 烬',
	    '202002': '腥红之月 烬',
	    '203001': '黯焰双魂 千珏',
	    '203002': '银河魔装机神 千珏',
	    '222001': '黑帮狂花 金克丝',
	    '222002': '神龙烈焰 金克丝',
	    '222003': '丧尸杀手 金克丝',
	    '222004': '魔法少女 金克丝',
	    '222005': '神龙烈焰 金克丝 珍珠龙息',
	    '222006': '神龙烈焰 金克丝 绿松龙息',
	    '222007': '神龙烈焰 金克丝 水玉龙息',
	    '222008': '神龙烈焰 金克丝 粉晶龙息',
	    '222009': '神龙烈焰 金克丝 橙榴龙息',
	    '222010': '神龙烈焰 金克丝 紫萤龙息',
	    '222011': '神龙烈焰 金克丝 翡翠龙息',
	    '223001': '五星大厨 塔姆',
	    '223002': '海牛大大 塔姆',
	    '236001': '职业杀手 卢锡安',
	    '236002': '夺命前锋 卢锡安',
	    '236003': '圣枪游侠 卢锡安 斗气全开',
	    '236004': '圣枪游侠 卢锡安 杀意绽放',
	    '236005': '圣枪游侠 卢锡安 雷霆万钧',
	    '236006': '源计划：雷 卢锡安',
	    '236007': '觅心游侠 卢锡安',
	    '238001': '冲击之刃 劫',
	    '238002': 'SKT T1 劫',
	    '238003': '源计划：阴 劫',
	    '238004': '冲击之刃 劫 风魔上忍',
	    '238005': '冲击之刃 劫 备前上忍',
	    '238006': '冲击之刃 劫 钵屋上忍',
	    '238007': '冲击之刃 劫 伊贺上忍',
	    '238008': '冲击之刃 劫 甲贺上忍',
	    '238009': '冲击之刃 劫 户隐上忍',
	    '238010': '冠军之隐 劫',
	    '240001': '爵士 克烈',
	    '245001': '时之砂 艾克',
	    '245002': '任性学霸 艾克',
	    '245003': '源计划：自由 艾克',
	    '245004': '时之砂 艾克 秩序',
	    '245005': '时之砂 艾克 圣炎',
	    '245006': '时之砂 艾克 慈土',
	    '245007': '时之砂 艾克 威金',
	    '245008': '时之砂 艾克 净流',
	    '245009': '时之砂 艾克 永生',
	    '245010': '时之砂 艾克 邪龙',
	    '254001': '霓虹杀拳 蔚',
	    '254002': '女警官 蔚',
	    '254003': '铁拳执事 蔚',
	    '254004': '炼狱魔女 蔚',
	    '254005': '虎痴之拳 蔚',
	    '254006': '女警官 蔚 督察',
	    '254007': '女警官 蔚 海警警长',
	    '254008': '女警官 蔚 骑警总监',
	    '254009': '女警官 蔚 郡警长',
	    '254010': '女警官 蔚 特警队长',
	    '266001': '仲裁圣骑 亚托克斯',
	    '266002': '霸天剑魔 亚托克斯',
	    '266003': '狂鲨 亚托克斯',
	    '267001': '锦鲤 娜美',
	    '267002': '河水之灵 娜美',
	    '267003': '鲛妮座人 娜美',
	    '267004': '锦鲤 娜美 黄金鲤',
	    '267005': '锦鲤 娜美 红白鲤',
	    '267006': '锦鲤 娜美 幻紫鲤',
	    '267007': '海皇姬 娜美',
	    '268001': '星际之门 阿兹尔',
	    '268002': '幽冥领主 阿兹尔',
	    '268003': 'SKT T1 阿兹尔',
	    '268004': '司马懿 仲达',
	    '412001': '深渊恐惧 锤石',
	    '412002': '冠军典狱长 锤石',
	    '412003': '腥红之月 锤石',
	    '412004': 'SSW 锤石',
	    '412005': '死兆星 锤石',
	    '420001': '虚空使者 俄洛伊',
	    '421001': '上古战魂 雷克塞',
	    '421002': '泳池派对 雷克塞',
	    '427001': '糖果之王 艾翁',
	    '429001': '腥红之月 卡莉丝塔',
	    '429002': '冠军之矛 卡莉丝塔',
	    '429003': 'SKT T1 卡莉丝塔',
	    '432001': '长者之森 巴德',
	    '432002': '星界游神 巴德 恒星之耀',
	    '432003': '星界游神 巴德 流星之煌',
	    '432004': '星界游神 巴德 彗星之辉',
	    '432005': '冰雪游神 巴德',
	    '432006': '巴德·吟游诗人',
	    '497001': '晨星之翎 洛',
	    '498001': '暮星之羽 霞',
	    '0': 'RALFSHEN' /*  |xGv00|06458822f33fab386e01161dc59ce58d */

	};skinJacpot.item = [64008, 64007, 222005, 81005, 77003, 37006, 5005, 59005, 23006, 22006, 1009, 131002, 92005, 222002, 55008, 76007, 1008, 42006, 69004, 62003, 67004, 37004, 91003, 96005, 64003, 1001, 9006, 122003, 99005, 15005, 61006, 37007, 62005, 51010, 25010, 92006, 32008, 55007, 115004, 21007, 1003, 1004, 23005, 61005, 24004, 17003, 104005, 58006, 89004, 64005, 104004, 53007, 24008, 64006, 67005, 61004, 81006, 412004, 76008, 429002, 91004, 16004, 113005, 90005, 9007, 45007, 120003, 57004, 76001, 134004, 150003, 29007, 143003, 238002, 27001, 75004, 76005, 56004, 107003, 27007, 119006, 13008, 21004, 37003, 18002, 7003, 74004, 78004, 17001, 20002, 32004, 35003, 41004, 57003, 79003, 96004, 9004, 36007, 20006, 98006, 3002, 34004, 8003, 19001, 36004, 4002, 4001, 29003, 15003, 42001, 78002, 40005, 25005, 86006, 126002, 10006, 63004, 8005, 31005, 54006, 45008, 53006, 143002, 254002, 103003, 54005, 37005, 92004, 110002, 64004, 121001, 103004, 115003, 53011, 110004, 14005, 18010, 11009, 119002, 76006, 39004, 17006, 13007, 92003, 55004, 17005, 23004, 99006, 17008, 157003, 238003, 236006, 114004, 89008, 421001, 102005, 122004, 62004, 7004, 51006, 157002, 119003, 68003, 80006, 1005, 110003, 429002, 103005, 202001, 63005, 64010, 67006, 222003, 104003, 119004, 81007, 15007, 81008, 96008, 64001, 114003, 56005, 266002, 11005, 122002, 84005, 32007, 51005, 117003, 75005, 34001, 36003, 17004, 20004, 84004, 85006, 107002, 412003, 67003, 5004, 254001, 267002, 105004, 121002, 268001, 58005, 222001, 157001, 19006, 11003, 24006, 150002, 245001, 201002, 8006, 105009, 203002, 102006, 163001, 131003, 127003, 16006, 121003, 432005, 38005, 203001, 126003, 84007, 115005, 161002, 20007, 80007, 62001, 80004, 421002, 154002, 117005, 36008, 254003, 22007, 111004, 429001, 4008, 236002, 79007, 12007, 412002, 161001, 112003, 42005, 67002, 99001, 122008, 23007, 134003, 82005, 11001, 24012, 103006, 105008, 39005, 81003, 39001, 267003, 77004, 75006, 16005, 2003, 16003, 86004, 102003, 35006, 25004, 23002, 4003, 31002, 57006, 59003, 84006, 21002, 42003, 1006, 25003, 60003, 41005, 24007, 238001, 122001, 131001, 21006, 201001, 236001, 114001, 59004, 134002, 127002, 150001, 74005, 133002, 267001, 92001, 134001, 21008, 9008, 136001, 268002, 120005, 420001, 54007, 50001, 92002, 254004, 19008, 201003, 79009, 13009, 110005, 5006, 76003, 91001, 91002, 84003, 245002, 4009, 35007, 11002, 56006, 10008, 27008, 43005, 12008, 2005, 266003, 104006, 86010, 81002, 58007, 34006, 31006, 223002, 161003, 72003, 30003, 80005, 105003, 127001, 40003, 143001, 1007, 56001, 154001, 133001, 102001, 24005, 82004, 9005, 85005, 90004, 223001, 101004, 432001, 5003, 38004, 35002, 63002, 79005, 2004, 57005, 28003, 117001, 104002, 39002, 22003, 59002, 110001, 106002, 106001, 89001, 120001, 115002, 25001, 72004, 33007, 1002, 8007, 133003, 26005, 51002, 79004, 10002, 13003, 20001, 98004, 61003, 14004, 16002, 36006, 79006, 19007, 27005, 69002, 58003, 3005, 98003, 115001, 85004, 20005, 32003, 38003, 53005, 41001, 7002, 68001, 30004, 82003, 4004, 23001, 18005, 57001, 80003, 112001, 33002, 27002, 72001, 69001, 61001, 55001, 5002, 84002, 28001, 54002, 98001, 18004, 75001, 98002, 34003, 36002, 3001, 10005, 75002, 74001, 51001, 44003, 77002, 89003, 113002, 113001, 35005, 15001, 33003, 54004, 45006, 120002, 105002, 111001, 68001, 31003, 57001, 80003, 63001, 101002, 53001, 35001, 40001, 56003, 58002, 82001, 13005, 29005, 78001, 82002, 86001, 43001, 18004, 84001, 98002, 34003, 43002, 26003, 45003, 12004, 32002, 36001, 38002, 16001, 7001, 85003, 41002, 68002, 85002, 79002, 29002, 77001, 9002, 80002, 80001, 19004, 32001, 42004, 6002, 13002, 74003, 96001, 14003, 26002, 48002, 74002, 420, 266, 254, 245, 238, 236, 222, 157, 150, 126, 122, 121, 114, 110, 107, 106, 105, 104, 103, 102, 92, 91, 81, 76, 67, 64, 63, 62, 59, 51, 17, 268, 267, 201, 161, 154, 134, 133, 127, 120, 117, 115, 99, 96, 85, 83, 69, 61, 60, 58, 56, 55, 53, 42, 39, 34, 30, 24, 23, 7, 5, 1, 143, 131, 119, 98, 90, 89, 84, 80, 79, 72, 57, 50, 35, 29, 21, 8, 2, 113, 112, 111, 101, 86, 82, 68, 44, 41, 38, 37, 33, 32, 31, 28, 19, 4, 3, 78, 77, 75, 74, 54, 48, 45, 43, 40, 36, 27, 26, 25, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 6];

	exports.default = skinJacpot;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by zhang on 2017-07-27.
	 */
	//获取图片 推入数组 然后开始检查Onload状态 完成就promise 然后遍历插入fade in;
	var render = function () {
	    function render() {
	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, render);

	        this.box = config.box;
	        this.img = [];
	        this.clearBox = config.clearbox;
	        this.ewbox = config.ewbox;
	        this.type = config.type;
	        this.titleBox = config.titleBox;
	    }

	    _createClass(render, [{
	        key: "renderBox",
	        value: function renderBox(res) {
	        	this.canClose = false
	            this.model();
	            if (this.titleBox) {
	                this.settile();
	            }
	            this.setBoxStyle();
	            this.getImg(res);
	            this.disImg();
	            this.bindEvent();
	        }
	    }, {
	        key: "renderClose",
	        value: function renderClose() {
	        	if (!this.canClose) {
	        		alert("请等待结果！")
	        		return
	        	}
	            this.box.fadeOut();
	            this.ewbox.css("right","195px")
	            this.img = [];
	            if (this.ewbox) {
	                console.log("ewemp");
	                this.ewbox.empty();
	            }
	            this.clearBox.empty();
	            this.removeModel();
	        }
	    }, {
	        key: "setBoxStyle",
	        value: function setBoxStyle() {
	            this.box.css("top", "2600px");
	            this.box.css("left", "100px");
	            this.box.css('position', "absolute");
	            this.box.css('z-index', "999");
	            this.box.fadeIn();
	        }
	    }, {
	        key: "getImg",
	        value: function getImg(res) {
	            //基本转移
	            var link = "http://ossweb-img.qq.com/images/lol/appskin/";
	            for (var i = 0, len = res.length; i < len; i++) {
	                var item = [];
	                var img = new Image();
	                img.src = link + res[i][0] + ".jpg";

	                item.push(img);
	                item.push(res[i][1]);
	                item.push(res[i][2]);

	                this.img.push(item);
	            }
	        }
	    }, {
	        key: "disImg",
	        value: function disImg() {
	            var _this = this;

	            //检查img是否都加载完成
	            new Promise(function (resolve, reject) {
	                var ul = $("<ul></ul>");
	                var loadNumber = 0;
	                var loadTimer = void 0;

	                for (var i = 0, len = _this.img.length; i < len; i++) {
	                    if (i >= len - 1 && _this.ewbox) {
	                        _this.addEw(_this.img[i]);
	                        continue;
	                    }

	                    var img = _this.img[i][0];
	                    img.onload = function () {
	                        loadNumber++;
	                    };

	                    var li = $("<li></li>");
	                    var div = $("<div></div>");
	                    var span = $("<span></span>");

	                    span.text(_this.img[i][1]);

	                    div.append(img);
	                    li.append(div);
	                    li.append(span);

	                    if (_this.img[i][2]) {
	                        li.append($("<i class=\"ts-cover\"></i>"));
	                    }

	                    li.hide();
	                    ul.append(li);
	                }

	                _this.clearBox.append(ul);

	                loadTimer = setInterval(function () {
	                    //十连抽一半载入完成就触发 一抽单张图片触发
	                    if (loadNumber >= _this.img.length / 1.6 + 1) {
	                        resolve(ul);
	                        clearInterval(loadTimer);
	                    } else if (!_this.ewbox && loadNumber >= 1) {
	                        resolve(ul);
	                        clearInterval(loadTimer);
	                    }
	                });
	            }).then(function (ul) {

	                for (var i = 0, len = ul.children().length + 1; i < len; i++) {
	
	                    (function (i) {
	                        setTimeout(function () {
	                            ul.find("li").eq(i).fadeIn();
	                            if (_this.ewbox && i >= len - 1) {
	                            	_this.canClose = true
	                                _this.ewdis();
	                            }
	                        }, i * 700);
	                    })(i);
	                }
	            });
	        }
	    }, {
	        key: "addEw",
	        value: function addEw(img) {

	            var dom = $("<div class=\"ew_txt\" style=\"font-size:16px; color:#fff; font-weight:bold; padding:20px 0 0 21px; text-align:left;\">\u606D\u559C\uFF01\u989D\u5916\u8D60\u9001\u60A8<br><span style=\"color:#ffe61b\">\u6CB3\u87F9\u965B\u4E0B\u5B88\u536B</span>\u4E00\u4E2A</div>\n\n<ul><li class=\"a\" style=\"\"><div id=\"imgWrap\"></div><span>" + img[1] + "</span></li></ul>");

	            dom.find("#imgWrap").append(img[0]);
	            dom.hide();
	            this.dom = dom;
	            this.ewbox.append(dom);
	        }
	    }, {
	        key: "ewdis",
	        value: function ewdis() {
	        	this.ewbox.animate({right:"10px"})
	            this.dom.fadeIn();
	        }
	    }, {
	        key: "bindEvent",
	        value: function bindEvent() {
	            var _this2 = this;

	            this.box.find(".pop-close").on("click", function () {
	                _this2.renderClose();
	            });
	        }
	    }, {
	        key: "model",
	        value: function model() {
	            var model = $("<div></div>");
	            model.css("position", "absolute");
	            model.css("top", "0");
	            model.css("left", "0");
	            model.css("bottom", "0");
	            model.css("right", "0");
	            model.css("opacity", "0");
	            model.css("z-index", "99");
	            this.modeldiv = model;
	            $("body").append(model);
	        }
	    }, {
	        key: "removeModel",
	        value: function removeModel() {
	            this.modeldiv.remove();
	        }

	        //设置标题

	    }, {
	        key: "settile",
	        value: function settile() {
	            if (this.type === "color") {
	                this.titleBox.text("您的运气不错，打开10个神敢达的痴情礼盒后发现：");
	            } else if (this.type === "gold") {
	                this.titleBox.text("您的运气不错，打开10个新丰真龙的贤惠礼盒后发现：");
	            }
	        }
	    }]);

	    return render;
	}();

	exports.default = render;

/***/ })
/******/ ]);