// 用来处理数据

var arr = [{
	"view_type": "flash_purchase",
	"body": {
		"floor_name": "小米秒杀"
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a59db7dac2804ee2b5c7be1b02b3770e.jpg?w=2452\u0026h=240",
			"action": {
				"type": "product",
				"path": "https://www.mi.com/buy?product_id=10000267",
				"log_code": "31pchomepagecells_auto_fill001010#t=ad\u0026act=product\u0026page=homepage\u0026pid=10000267\u0026page_id=10530\u0026bid=3480940.1\u0026adp=3136\u0026adm=25731"
			}
		}]
	}
}, {
	"view_type": "list_eight_product",
	"body": {
		"floor_name": "手机",
		"more_text": "查看全部",
		"action": {
			"type": "pc_activity",
			"path": "//www.mi.com/a/h/14933.html",
			"log_code": "31pchomepagelist_eight_product000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.2"
		},
		"left_ad": {
			"type": 0,
			"items": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb1bd61ad71c45a4f67f09b075463944.jpeg?w=468\u0026h=1228",
				"action": {
					"type": "url",
					"path": "https://www.mi.com/mi11",
					"log_code": "31pchomepagelist_eight_product000001#t=ad\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.1\u0026adp=3120\u0026adm=26469"
				}
			}]
		},
		"product_list": [{
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg",
			"product_id": 13272,
			"product_name": "小米11",
			"product_brief": "骁龙888 | 2K四曲面屏",
			"product_price": "3999",
			"product_org_price": "3999",
			"show_price_qi": true,
			"action": {
				"type": "url",
				"path": "https://www.mi.com/mi11",
				"log_code": "31pchomepagelist_eight_product000001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.3\u0026pid=13272"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg",
			"product_id": 13110,
			"product_name": "Note 9 Pro ",
			"product_brief": "一亿像素夜景相机，120Hz六档变速高刷屏",
			"product_price": "1599",
			"product_org_price": "1599",
			"show_price_qi": true,
			"action": {
				"type": "url",
				"path": "https://www.mi.com/redminote9pro",
				"log_code": "31pchomepagelist_eight_product001001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.4\u0026pid=13110"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg",
			"product_id": 13122,
			"product_name": "Note 9 ",
			"product_brief": "天玑 800U处理器，5000mAh电池，",
			"product_price": "1299",
			"product_org_price": "1299",
			"show_price_qi": true,
			"action": {
				"type": "url",
				"path": "https://www.mi.com/redminote9",
				"log_code": "31pchomepagelist_eight_product002001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.5\u0026pid=13122"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg",
			"product_id": 13124,
			"product_name": "Note 9 4G",
			"product_brief": "6000mAh长续航",
			"product_price": "999",
			"product_org_price": "999",
			"show_price_qi": true,
			"action": {
				"type": "url",
				"path": "https://www.mi.com/redminote9-4g",
				"log_code": "31pchomepagelist_eight_product003001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.6\u0026pid=13124"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg",
			"product_id": 12609,
			"product_name": "小米10 至尊版",
			"product_brief": "120X 变焦/120W秒充/120Hz屏幕",
			"product_price": "5299",
			"product_org_price": "5299",
			"show_price_qi": true,
			"action": {
				"type": "url",
				"path": "https://www.mi.com/buy/detail?product_id=12609",
				"log_code": "31pchomepagelist_eight_product004001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.7\u0026pid=12609"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cf7a05df86a858a1f391a0378d8c27d.jpg",
			"product_id": 12982,
			"product_name": "Redmi K30S 至尊纪念版",
			"product_brief": "144Hz[7档]变速高刷屏",
			"product_price": "2599",
			"product_org_price": "2599",
			"show_price_qi": true,
			"action": {
				"type": "url",
				"path": "https://www.mi.com/redmik30s",
				"log_code": "31pchomepagelist_eight_product005001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480926.8\u0026pid=12982"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg",
			"product_id": 12605,
			"product_name": "Redmi K30 至尊版",
			"product_brief": "120Hz弹出全面屏，天玑1000+旗舰处理器",
			"product_price": "1999",
			"product_org_price": "1999",
			"show_price_qi": true,
			"action": {
				"type": "product",
				"path": "https://www.mi.com/buy?product_id=12605",
				"log_code": "31pchomepagelist_eight_product006001#t=product\u0026act=product\u0026page=homepage\u0026pid=12605\u0026page_id=10530\u0026bid=3480926.9"
			}
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg",
			"product_id": 12517,
			"product_name": "腾讯黑鲨3S ",
			"product_brief": "骁龙865处理器，120Hz刷新率",
			"product_price": "3999",
			"product_org_price": "3999",
			"show_price_qi": false,
			"action": {
				"type": "product",
				"path": "https://www.mi.com/buy?product_id=12517",
				"log_code": "31pchomepagelist_eight_product007001#t=product\u0026act=product\u0026page=homepage\u0026pid=12517\u0026page_id=10530\u0026bid=3480926.10"
			}
		}]
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?w=2452\u0026h=240",
			"action": {
				"type": "url",
				"path": "https://www.mi.com/a/h/15707.html",
				"log_code": "31pchomepagecells_auto_fill001012#t=ad\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480941.1\u0026adp=3137\u0026adm=17948"
			}
		}]
	}
}, {
	"view_type": "list_eight_product_tab",
	"body": {
		"floor_name": "家电",
		"left_ad": {
			"type": 1,
			"items": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/116fc43816b87192be4e67cf762e8da5.jpeg?w=468\u0026h=600",
				"action": {
					"type": "url",
					"path": "https://www.mi.com/redmitv/98/",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.1\u0026adp=3121\u0026adm=21117"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e03c0fe4af4d613603f22aaa8e0ea00.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11843",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=11843\u0026page_id=10530\u0026bid=3480938.2\u0026adp=3122\u0026adm=24187"
				}
			}]
		},
		"tab_content": [{
			"tab_name": "热门",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg",
				"product_id": 12849,
				"product_name": "小米全面屏电视65英寸 E65X",
				"product_brief": "全面屏设计",
				"product_price": "2899",
				"product_org_price": "3099",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12849",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=12849\u0026page_id=10530\u0026bid=3480938.4"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg",
				"product_id": 12045,
				"product_name": "全面屏电视E43K",
				"product_brief": "全面屏设计，海量内容",
				"product_price": "1299",
				"product_org_price": "1399",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12045",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=12045\u0026page_id=10530\u0026bid=3480938.5"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg",
				"product_id": 10764,
				"product_name": "小米电视4A 70英寸\t",
				"product_brief": "大屏更享受",
				"product_price": "3299",
				"product_org_price": "3999",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10764",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=10764\u0026page_id=10530\u0026bid=3480938.6"
				}
			}, {
				"img_url": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg",
				"product_id": 9183,
				"product_name": "米家空调",
				"product_brief": "出众静音，快速制冷热",
				"product_price": "1499",
				"product_org_price": "1799",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/aircondition/f3w1/",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.7\u0026pid=9183"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg",
				"product_id": 9963,
				"product_name": "米家互联网洗烘一体机 Pro 10kg",
				"product_brief": "智能洗烘，省心省力",
				"product_price": "2899",
				"product_org_price": "3299",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9963",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=9963\u0026page_id=10530\u0026bid=3480938.8"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg",
				"product_id": 9509,
				"product_name": "Redmi全自动波轮洗衣机1A 8kg",
				"product_brief": "一键操作，父母都爱用",
				"product_price": "799",
				"product_org_price": "899",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9509",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=9509\u0026page_id=10530\u0026bid=3480938.9"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg",
				"product_id": 10000142,
				"product_name": "Air 13.3\" 2019款 ",
				"product_brief": "新一代独立显卡",
				"product_price": "4799",
				"product_org_price": "5399",
				"show_price_qi": true,
				"action": {
					"type": "url",
					"path": "http://www.mi.com/mibook/air13-2019",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.10\u0026pid=10000142"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg",
				"product_id": 9861,
				"product_name": "米家互联网烟灶套装（天然气）",
				"product_brief": "点火排烟，风随火动",
				"product_price": "2298",
				"product_org_price": "2298",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9861",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=9861\u0026page_id=10530\u0026bid=3480938.11"
				}
			}],
			"action": {
				"type": "pc_channel",
				"path": "//www.mi.com/p/3469.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.3"
			}
		}, {
			"tab_name": "电视影音",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg",
				"product_id": 12045,
				"product_name": "全面屏电视E43K",
				"product_brief": "全面屏设计，海量内容",
				"product_price": "1299",
				"product_org_price": "1399",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12045",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=12045\u0026page_id=10530\u0026bid=3480938.13"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg",
				"product_id": 10909,
				"product_name": "全面屏电视 55英寸E55X",
				"product_brief": "潮流全面屏设计",
				"product_price": "2199",
				"product_org_price": "2399",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10909",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=10909\u0026page_id=10530\u0026bid=3480938.14"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecbe6a6c0d4950b78b086d7ada654e3b.jpg",
				"product_id": 11843,
				"product_name": "小米电视4A 60英寸",
				"product_brief": "人工智能语音系统,超高清画质",
				"product_price": "2499",
				"product_org_price": "2499",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11843",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=11843\u0026page_id=10530\u0026bid=3480938.15"
				}
			}, {
				"img_url": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg",
				"product_id": 8993,
				"product_name": "小米电视4S 75英寸",
				"product_brief": "4K HDR，人工智能语音",
				"product_price": "4399",
				"product_org_price": "5999",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/mitv4s/75/",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.16\u0026pid=8993"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg",
				"product_id": 12849,
				"product_name": "小米全面屏电视65英寸 E65X",
				"product_brief": "全面屏设计",
				"product_price": "2899",
				"product_org_price": "3099",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12849",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=12849\u0026page_id=10530\u0026bid=3480938.17"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg",
				"product_id": 10126,
				"product_name": "小米全面屏电视E32C",
				"product_brief": "全面屏设计，人工智能系统",
				"product_price": "799",
				"product_org_price": "999",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/mitvall-screen/e32c/",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.18\u0026pid=10126"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f674ced205c2e81125dfd2d6659aabfc.jpg",
				"product_id": 12809,
				"product_name": "Redmi智能电视A55",
				"product_brief": "澎湃音效影院级体验",
				"product_price": "2099",
				"product_org_price": "2199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12809",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=12809\u0026page_id=10530\u0026bid=3480938.19"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8861fafd390bf76f7446d4db2053560f.jpg",
				"product_id": 11814,
				"product_name": "Redmi 智能电视 MAX 98''",
				"product_brief": "客厅里的巨幕影院",
				"product_price": "19999",
				"product_org_price": "19999",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/redmitv/98/",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.20\u0026pid=11814"
				}
			}],
			"action": {
				"type": "pc_activity",
				"path": "//www.mi.com/a/h/15707.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480938.12"
			}
		}]
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?w=2452\u0026h=240",
			"action": {
				"type": "product",
				"path": "https://www.mi.com/buy?product_id=10025",
				"log_code": "31pchomepagecells_auto_fill001014#t=ad\u0026act=product\u0026page=homepage\u0026pid=10025\u0026page_id=10530\u0026bid=3480942.1\u0026adp=3138\u0026adm=13608"
			}
		}]
	}
}, {
	"view_type": "list_eight_product_tab",
	"body": {
		"floor_name": "智能",
		"left_ad": {
			"type": 1,
			"items": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe114f73fac3a45e5622c3eff56106b.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12212",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=12212\u0026page_id=10530\u0026bid=3480939.1\u0026adp=3123\u0026adm=26604"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9285",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=9285\u0026page_id=10530\u0026bid=3480939.2\u0026adp=3124\u0026adm=13599"
				}
			}]
		},
		"tab_content": [{
			"tab_name": "热门",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg",
				"product_id": 10015,
				"product_name": "小米小爱音箱 Play",
				"product_brief": "听音乐、语音遥控家电",
				"product_price": "99",
				"product_org_price": "169",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/aispeaker-play/",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.4\u0026pid=10015"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg",
				"product_id": 12274,
				"product_name": "米家智能窗帘",
				"product_brief": "窗帘开合随心控",
				"product_price": "799",
				"product_org_price": "799",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12274",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=12274\u0026page_id=10530\u0026bid=3480939.5"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg",
				"product_id": 9686,
				"product_name": "小米体脂秤2",
				"product_brief": "轻松掌握身体脂肪率",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9686",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=9686\u0026page_id=10530\u0026bid=3480939.6"
				}
			}, {
				"img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg",
				"product_id": 2774,
				"product_name": "九号平衡车",
				"product_brief": "年轻人的酷玩具",
				"product_price": "1899",
				"product_org_price": "1999",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/scooter/",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.7\u0026pid=2774"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg",
				"product_id": 10025,
				"product_name": "小米智能门锁 推拉式",
				"product_brief": "一步推拉，高端智能门锁",
				"product_price": "1599",
				"product_org_price": "1699",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10025",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=10025\u0026page_id=10530\u0026bid=3480939.8"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg",
				"product_id": 11810,
				"product_name": "Redmi小爱触屏音箱 8英寸",
				"product_brief": "超大屏，让智能更多可能",
				"product_price": "349",
				"product_org_price": "349",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/redmi-xai",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.9\u0026pid=11810"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg",
				"product_id": 10000238,
				"product_name": "小米手环5",
				"product_brief": "11种运动模式 磁吸式充电",
				"product_price": "179",
				"product_org_price": "189",
				"show_price_qi": true,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/shouhuan5/all",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.10\u0026pid=10000238"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f10b003b4ff46c59f5736e8f324af034.jpg",
				"product_id": 4802,
				"product_name": "米家空气净化器Pro",
				"product_brief": "大空间，快循环",
				"product_price": "1299",
				"product_org_price": "1499",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/airpro",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.11\u0026pid=4802"
				}
			}],
			"action": {
				"type": "pc_channel",
				"path": "//www.mi.com/p/3469.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.3"
			}
		}, {
			"tab_name": "安防",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f33baec53cc73e2942277640ba6e710.jpg",
				"product_id": 9120,
				"product_name": "米家智能门锁 标准锁体 碳素黑",
				"product_brief": "一体化活体指纹识别，多种开锁方式",
				"product_price": "1299",
				"product_org_price": "1299",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9120",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=9120\u0026page_id=10530\u0026bid=3480939.13"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1840f64ea310ca8013385885baaf16a8.jpg",
				"product_id": 10303,
				"product_name": "米家智能门锁 标准锁体 磨砂金",
				"product_brief": "全新磨砂金配色，精湛工艺升级",
				"product_price": "1299",
				"product_org_price": "1499",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10303",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=10303\u0026page_id=10530\u0026bid=3480939.14"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg",
				"product_id": 10025,
				"product_name": "米家智能门锁 推拉式 通用版",
				"product_brief": "一步推拉，高端智能门锁",
				"product_price": "1599",
				"product_org_price": "1699",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10025",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=10025\u0026page_id=10530\u0026bid=3480939.15"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg",
				"product_id": 10345,
				"product_name": "米家智能门锁 青春版",
				"product_brief": "隐形指纹识别设计 简单一步快进家门",
				"product_price": "949",
				"product_org_price": "999",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10345",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=10345\u0026page_id=10530\u0026bid=3480939.16"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e83e1ab5947337d7b631e056b3e0f23d.jpg",
				"product_id": 9850,
				"product_name": "米家智能门锁 霸王锁体 碳素黑",
				"product_brief": "一体化活体指纹识别，多种开锁方式",
				"product_price": "1399",
				"product_org_price": "1599",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/mj-smartlock-bawang",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.17\u0026pid=9850"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa7cdb455f106da904e8c3f6156abc06.jpg",
				"product_id": 10304,
				"product_name": "米家智能门锁 霸王锁体 磨砂金",
				"product_brief": "适配霸王锁体，多种开锁方式",
				"product_price": "1399",
				"product_org_price": "1799",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/mj-smartlock-bawang",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.18\u0026pid=10304"
				}
			}],
			"action": {
				"type": "pc_channel",
				"path": "//www.mi.com/p/3469.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.12"
			}
		}, {
			"tab_name": "出行",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9.jpg",
				"product_id": 9029,
				"product_name": "米兔折叠婴儿推车",
				"product_brief": "出发去向往的地方",
				"product_price": "699",
				"product_org_price": "699",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/babyfoldingcar/",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.20\u0026pid=9029"
				}
			}, {
				"img_url": "http://i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png",
				"product_id": 6079,
				"product_name": "九号平衡车 Plus",
				"product_brief": "一个形影不离的新伙伴",
				"product_price": "2999",
				"product_org_price": "3499",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/scooterplus/",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.21\u0026pid=6079"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg",
				"product_id": 9613,
				"product_name": "米家充气宝",
				"product_brief": "便携电动打气筒",
				"product_price": "199",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9613",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=9613\u0026page_id=10530\u0026bid=3480939.22"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12fe0ea5e8dafecce5ffa65108796683.jpg",
				"product_id": 11674,
				"product_name": "小米小背包",
				"product_brief": "城市休闲，简约设计",
				"product_price": "29",
				"product_org_price": "29",
				"show_price_qi": true,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11674",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=11674\u0026page_id=10530\u0026bid=3480939.23"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3520b7c57449585bc3185d31b9d9bd08.jpg",
				"product_id": 11368,
				"product_name": "骑记电动助力自行车 新国标版 黑色",
				"product_brief": "更多助力选择，更多城市风景",
				"product_price": "2999",
				"product_org_price": "2999",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11368",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=11368\u0026page_id=10530\u0026bid=3480939.24"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d86c1eb8f5525bc4c76c8e0e98db7446.jpg",
				"product_id": 9550,
				"product_name": "小米米家对讲机2",
				"product_brief": "向更远出发",
				"product_price": "449",
				"product_org_price": "449",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9550",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=9550\u0026page_id=10530\u0026bid=3480939.25"
				}
			}, {
				"img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg",
				"product_id": 2774,
				"product_name": "九号平衡车",
				"product_brief": "年轻人的酷玩具",
				"product_price": "1899",
				"product_org_price": "1999",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/scooter/",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.26\u0026pid=2774"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg",
				"product_id": 11916,
				"product_name": "米家电动滑板车1S",
				"product_brief": "型出格，行出色",
				"product_price": "1899",
				"product_org_price": "1999",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11916",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=11916\u0026page_id=10530\u0026bid=3480939.27"
				}
			}],
			"action": {
				"type": "pc_channel",
				"path": "//www.mi.com/p/3469.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480939.19"
			}
		}]
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba5b9f3063a059753e17d2951282c33a.jpg?w=2452\u0026h=240",
			"action": {
				"type": "pc_activity",
				"path": "//www.mi.com/a/h/18948.html",
				"log_code": "31pchomepagecells_auto_fill001016#t=ad\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480943.1\u0026adp=3139\u0026adm=26684"
			}
		}]
	}
}, {
	"view_type": "list_eight_product_tab",
	"body": {
		"floor_name": "搭配",
		"left_ad": {
			"type": 1,
			"items": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?w=468\u0026h=600",
				"action": {
					"type": "url",
					"path": "https://www.mi.com/scooter/",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480944.1\u0026adp=3125\u0026adm=13600"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f6c89cf21efc23799f6130224cef007.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=13414",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=13414\u0026page_id=10530\u0026bid=3480944.2\u0026adp=3126\u0026adm=26658"
				}
			}]
		},
		"tab_content": [{
			"tab_name": "热门",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg",
				"product_id": 12899,
				"product_name": " 小米真无线蓝牙耳机Air 2 Pro",
				"product_brief": " 主动降噪/持久续航/无线充",
				"product_price": "679",
				"product_org_price": "699",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12899",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=12899\u0026page_id=10530\u0026bid=3480944.4"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg",
				"product_id": 9311,
				"product_name": "高速无线充套装",
				"product_brief": "快速无线闪充，Qi充电标准",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9311",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=9311\u0026page_id=10530\u0026bid=3480944.5"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg",
				"product_id": 12479,
				"product_name": "Redmi AirDots 2真无线蓝牙耳机",
				"product_brief": "支持蓝牙5.0，自动秒连，拿起就能用",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12479",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=12479\u0026page_id=10530\u0026bid=3480944.6"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg",
				"product_id": 11821,
				"product_name": "小米真无线蓝牙耳机Air 2s",
				"product_brief": "全面升级，智慧真无线",
				"product_price": "369",
				"product_org_price": "399",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11821",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=11821\u0026page_id=10530\u0026bid=3480944.7"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg",
				"product_id": 10317,
				"product_name": "Redmi充电宝 10000mAh 标准版 白色",
				"product_brief": "10000mAh大电量 ",
				"product_price": "59",
				"product_org_price": "59",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10317",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=10317\u0026page_id=10530\u0026bid=3480944.8"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg",
				"product_id": 10318,
				"product_name": "Redmi充电宝 20000mAh 快充版",
				"product_brief": "大容量，\t可上飞机 ",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10318",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=10318\u0026page_id=10530\u0026bid=3480944.9"
				}
			}, {
				"img_url": "http://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03.jpg",
				"product_id": 5857,
				"product_name": "小米插线板 5孔位",
				"product_brief": "多重安全保护",
				"product_price": "39",
				"product_org_price": "39",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=5857",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=5857\u0026page_id=10530\u0026bid=3480944.10"
				}
			}, {
				"img_url": "https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg",
				"product_id": 9016,
				"product_name": "小米蓝牙耳机AirDots青春版",
				"product_brief": "雅致简约，收纳充电盒",
				"product_price": "169",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9016",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=9016\u0026page_id=10530\u0026bid=3480944.11"
				}
			}],
			"action": {
				"type": "pc_channel",
				"path": "//www.mi.com/p/3469.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480944.3"
			}
		}, {
			"tab_name": "耳机音箱",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg",
				"product_id": 12479,
				"product_name": "Redmi AirDots 2真无线蓝牙耳机",
				"product_brief": "支持蓝牙5.0，自动秒连，拿起就能用",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12479",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=12479\u0026page_id=10530\u0026bid=3480944.13"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg",
				"product_id": 11821,
				"product_name": "小米真无线蓝牙耳机Air 2s",
				"product_brief": "全面升级，智慧真无线",
				"product_price": "369",
				"product_org_price": "399",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11821",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=11821\u0026page_id=10530\u0026bid=3480944.14"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faf8668acb2fd80c0afad4d4c4e837ad.jpg",
				"product_id": 10316,
				"product_name": "小米降噪项圈蓝牙耳机",
				"product_brief": "无线降噪，静无止境",
				"product_price": "399",
				"product_org_price": "499",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10316",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=10316\u0026page_id=10530\u0026bid=3480944.15"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg",
				"product_id": 10745,
				"product_name": "小米小爱音箱 Pro",
				"product_brief": "语音遥控5000+品牌主流家电",
				"product_price": "299",
				"product_org_price": "299",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10745",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=10745\u0026page_id=10530\u0026bid=3480944.16"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ab7943ae5215e0faacb04f7270d9cfb.jpg",
				"product_id": 13032,
				"product_name": "小米小爱音箱 Art 电池版",
				"product_brief": "不插电，让音乐更自由",
				"product_price": "399",
				"product_org_price": "399",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=13032",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=13032\u0026page_id=10530\u0026bid=3480944.17"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c278ccaa2a2b7e0ab9b294a3a0ec32b.jpg",
				"product_id": 12050,
				"product_name": "小米小爱音箱 Art",
				"product_brief": "极光下的声音艺术",
				"product_price": "349",
				"product_org_price": "349",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "http://www.mi.com/aispeaker-art",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480944.18\u0026pid=12050"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e13900c094ae4ac4eb53b35f2d0c95b0.jpg",
				"product_id": 10744,
				"product_name": "小米小爱音箱 ",
				"product_brief": "全面升级 旗舰音质",
				"product_price": "249",
				"product_org_price": "269",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10744",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=10744\u0026page_id=10530\u0026bid=3480944.19"
				}
			}, {
				"img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/b474f7bb-10e1-ee92-f78f-d87231b0726a.jpg",
				"product_id": 6334,
				"product_name": "小米AI音箱",
				"product_brief": "听音乐、语音遥控家电",
				"product_price": "199",
				"product_org_price": "299",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/aispeaker/",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480944.20\u0026pid=6334"
				}
			}],
			"action": {
				"type": "pc_channel",
				"path": "//www.mi.com/p/3469.html",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480944.12"
			}
		}]
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1615d1842fe85914a545297836a44271.jpg?w=2452\u0026h=240",
			"action": {
				"type": "pc_activity",
				"path": "//www.mi.com/a/h/16528.html",
				"log_code": "31pchomepagecells_auto_fill001018#t=ad\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480945.1\u0026adp=3140\u0026adm=23244"
			}
		}]
	}
}, {
	"view_type": "list_eight_product_tab",
	"body": {
		"floor_name": "配件",
		"left_ad": {
			"type": 1,
			"items": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f64bbd58c3f5001bdf0688894f22cb6.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12404",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=12404\u0026page_id=10530\u0026bid=3480946.1\u0026adp=3127\u0026adm=25060"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe4182f1d9a5befdf2380ec90ae1620.jpg?w=468\u0026h=600",
				"action": {
					"type": "url",
					"path": "https://www.mi.com/dispenser/",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480946.2\u0026adp=3128\u0026adm=13603"
				}
			}]
		},
		"tab_content": [{
			"tab_name": "热门",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg",
				"product_id": 11543,
				"product_name": "小米氮化镓GaN充电器 Type-C 65W ",
				"product_brief": "氮化镓黑科技 65W MAX 大功率快充",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11543",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=11543\u0026page_id=10530\u0026bid=3480946.4"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg",
				"product_id": 9311,
				"product_name": "高速无线充套装",
				"product_brief": "快速无线闪充，Qi充电标准",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9311",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=9311\u0026page_id=10530\u0026bid=3480946.5"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
				"product_id": 10721,
				"product_name": "小米无线充电宝青春版10000mAh",
				"product_brief": "能量满满，无线有线都能充",
				"product_price": "129",
				"product_org_price": "129",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10721",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=10721\u0026page_id=10530\u0026bid=3480946.6"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01dba858b327eeeadf34ce8a1d794ed4.jpg",
				"product_id": 12282,
				"product_name": "小米车载充电器快充版",
				"product_brief": "双口快充，安全稳定",
				"product_price": "69",
				"product_org_price": "69",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12282",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=12282\u0026page_id=10530\u0026bid=3480946.7"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4b3bff030170ad1a07dfb50311352c9.jpg",
				"product_id": 11540,
				"product_name": "小米USB充电器65W 快充版（2A1C）",
				"product_brief": "超级快充，三台设备同时充",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11540",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=11540\u0026page_id=10530\u0026bid=3480946.8"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/573e9cb39b0d8c7f2cd063621142fe44.jpg",
				"product_id": 11859,
				"product_name": "小米Type-C转Lightning数据线 1m",
				"product_brief": "苹果MFi官方认证，支持快充",
				"product_price": "59",
				"product_org_price": "59",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11859",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=11859\u0026page_id=10530\u0026bid=3480946.9"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fffc0a962387dff2f70aeb009ddf69ff.jpg",
				"product_id": 12541,
				"product_name": "小米车载充电器快充版1A1C 100W",
				"product_brief": "小米车载充电器快充版1A1C 100W",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12541",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=12541\u0026page_id=10530\u0026bid=3480946.10"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg",
				"product_id": 11543,
				"product_name": "小米氮化镓GaN充电器 Type-C 65W ",
				"product_brief": "氮化镓黑科技 65W MAX 大功率快充",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11543",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=11543\u0026page_id=10530\u0026bid=3480946.11"
				}
			}],
			"action": {
				"type": "keyword",
				"path": "//www.mi.com/search?keyword=%E4%BF%9D%E6%8A%A4%E5%A3%B3",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480946.3"
			}
		}, {
			"tab_name": "充电器",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg",
				"product_id": 11543,
				"product_name": "小米氮化镓GaN充电器 Type-C 65W ",
				"product_brief": "氮化镓黑科技 65W MAX 大功率快充",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11543",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=11543\u0026page_id=10530\u0026bid=3480946.13"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ac53312f850bfcc73bdc5a185fda8a.jpg",
				"product_id": 10860,
				"product_name": "小米立式风冷无线充 30W ",
				"product_brief": "解锁充电新姿势",
				"product_price": "199",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10860",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=10860\u0026page_id=10530\u0026bid=3480946.14"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb115b0d5e6cc24c39c1ae818b63bf1a.jpg",
				"product_id": 11226,
				"product_name": "小米立式无线充电器 通用快充20W",
				"product_brief": "横竖可充，迅速感应边充边玩",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11226",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=11226\u0026page_id=10530\u0026bid=3480946.15"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c85b67f1c4f5e460a4be5cea5858264b.jpg",
				"product_id": 11384,
				"product_name": "米家智能插座蓝牙网关版",
				"product_brief": "让传统家电变智能",
				"product_price": "79",
				"product_org_price": "79",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11384",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=11384\u0026page_id=10530\u0026bid=3480946.16"
				}
			}, {
				"img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/554198af-55ec-8400-7a04-66a8f3e0dd66.jpg",
				"product_id": 4888,
				"product_name": "米家插线板6位基础版（含3口USB 2A快充）",
				"product_brief": "小巧设计，便捷不占地儿",
				"product_price": "79",
				"product_org_price": "79",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/powerstrip6/",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480946.17\u0026pid=4888"
				}
			}, {
				"img_url": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d6484113b03acde1672d50c395c09763.jpg",
				"product_id": 7805,
				"product_name": "小米插线板（含3口USB 2A快充）",
				"product_brief": "3个USB充电口，支持快充",
				"product_price": "49",
				"product_org_price": "49",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=7805",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=7805\u0026page_id=10530\u0026bid=3480946.18"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4b3bff030170ad1a07dfb50311352c9.jpg",
				"product_id": 11540,
				"product_name": "小米USB充电器65W 快充版（2A1C）",
				"product_brief": "超级快充，三台设备同时充",
				"product_price": "149",
				"product_org_price": "149",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11540",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=11540\u0026page_id=10530\u0026bid=3480946.19"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/028d84b7e54574047e6bafe52f781ee7.jpg",
				"product_id": 12896,
				"product_name": "小米Type-C充电器快充版 20W",
				"product_brief": "智能兼容/小巧易携带",
				"product_price": "39",
				"product_org_price": "39",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12896",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=12896\u0026page_id=10530\u0026bid=3480946.20"
				}
			}],
			"action": {
				"type": "keyword",
				"path": "//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480946.12"
			}
		}]
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9880db34d227b6c1df5b45cb7df4f465.jpg?w=2452\u0026h=240",
			"action": {
				"type": "pc_activity",
				"path": "//www.mi.com/a/h/15274.html",
				"log_code": "31pchomepagecells_auto_fill001020#t=ad\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480947.1\u0026adp=3141\u0026adm=22093"
			}
		}]
	}
}, {
	"view_type": "list_eight_product_tab",
	"body": {
		"floor_name": "周边",
		"left_ad": {
			"type": 1,
			"items": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca0940f052227d235e7de5678d106c89.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=2203900010",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=2203900010\u0026page_id=10530\u0026bid=3480948.1\u0026adp=3129\u0026adm=16008"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942985dc060f9274bdd1be4b02f1d7ef.jpg?w=468\u0026h=600",
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11674",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=ad\u0026act=product\u0026page=homepage\u0026pid=11674\u0026page_id=10530\u0026bid=3480948.2\u0026adp=3130\u0026adm=24694"
				}
			}]
		},
		"tab_content": [{
			"tab_name": "热门",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg",
				"product_id": 9732,
				"product_name": "米家飞行员太阳镜 Pro",
				"product_brief": "尼龙偏光，轻巧佩戴",
				"product_price": "199",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9732",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=9732\u0026page_id=10530\u0026bid=3480948.4"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg",
				"product_id": 9836,
				"product_name": "小米巨能写中性笔10支装",
				"product_brief": "一支顶4支，超长顺滑书写",
				"product_price": "9.99",
				"product_org_price": "9.99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9836",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=9836\u0026page_id=10530\u0026bid=3480948.5"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg",
				"product_id": 10480,
				"product_name": "米家迷你保温杯",
				"product_brief": "可以随身携带的温度",
				"product_price": "49",
				"product_org_price": "49",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=10480",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=product\u0026page=homepage\u0026pid=10480\u0026page_id=10530\u0026bid=3480948.6"
				}
			}, {
				"img_url": "http://i8.mifile.cn/v1/a1/413f5e2f-53e7-0879-119c-8b4466feea53.jpg",
				"product_id": 6443,
				"product_name": "贝医生巴氏牙刷 四色装",
				"product_brief": "进口刷毛，好品质",
				"product_price": "39.9",
				"product_org_price": "39.9",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/toothbrush-set/",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480948.7\u0026pid=6443"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0b1119165c481376399aab53330e015.jpg",
				"product_id": 11874,
				"product_name": "米家运动鞋4",
				"product_brief": "轻盈若絮,弹若脱兔",
				"product_price": "169",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11874",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=11874\u0026page_id=10530\u0026bid=3480948.8"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18ebd0837a5f265deaee9231aa3e1245.jpg",
				"product_id": 11805,
				"product_name": "米家指甲刀五件套",
				"product_brief": "轻巧多用，优雅随行",
				"product_price": "39.9",
				"product_org_price": "39.9",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11805",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=11805\u0026page_id=10530\u0026bid=3480948.9"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9017bebb14740ea46673aaa81a616cb.jpg",
				"product_id": 11863,
				"product_name": "8H乳胶床垫2",
				"product_brief": "软硬双面可睡",
				"product_price": "599",
				"product_org_price": "599",
				"show_price_qi": true,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11863",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=11863\u0026page_id=10530\u0026bid=3480948.10"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1062daf42a1a5b2a9108510ecf83d0b.jpg",
				"product_id": 11909,
				"product_name": "MIJOY 唱片机车载香薰",
				"product_brief": "复古唱片造型",
				"product_price": "49",
				"product_org_price": "49",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=11909",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=11909\u0026page_id=10530\u0026bid=3480948.11"
				}
			}],
			"action": {
				"type": "keyword",
				"path": "//www.mi.com/search?keyword=MIJOY",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480948.3"
			}
		}, {
			"tab_name": "出行",
			"more_text": "浏览更多",
			"product_list": [{
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg",
				"product_id": 12633,
				"product_name": "九号卡丁车Pro兰博基尼汽车定制版",
				"product_brief": "九号卡丁车Pro兰博基尼汽车定制版",
				"product_price": "9999",
				"product_org_price": "9999",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12633",
					"log_code": "31pchomepagelist_eight_product_tab000001#t=product\u0026act=product\u0026page=homepage\u0026pid=12633\u0026page_id=10530\u0026bid=3480948.13"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg",
				"product_id": 9732,
				"product_name": "米家飞行员太阳镜 Pro",
				"product_brief": "尼龙偏光，轻巧佩戴",
				"product_price": "199",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9732",
					"log_code": "31pchomepagelist_eight_product_tab001001#t=product\u0026act=product\u0026page=homepage\u0026pid=9732\u0026page_id=10530\u0026bid=3480948.14"
				}
			}, {
				"img_url": "http://i8.mifile.cn/v1/a1/T1r_x_BgLT1RXrhCrK.jpg",
				"product_id": 2774,
				"product_name": "九号平衡车",
				"product_brief": "年轻人的酷玩具",
				"product_price": "1899",
				"product_org_price": "1999",
				"show_price_qi": false,
				"action": {
					"type": "url",
					"path": "https://www.mi.com/scooter/",
					"log_code": "31pchomepagelist_eight_product_tab002001#t=product\u0026act=webview\u0026page=homepage\u0026page_id=10530\u0026bid=3480948.15\u0026pid=2774"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aabf1a475043266cf4759ec58d0f679c.jpg",
				"product_id": 9285,
				"product_name": "小米米家电动滑板车Pro",
				"product_brief": "性能提升，动力更强劲",
				"product_price": "2699",
				"product_org_price": "2799",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9285",
					"log_code": "31pchomepagelist_eight_product_tab003001#t=product\u0026act=product\u0026page=homepage\u0026pid=9285\u0026page_id=10530\u0026bid=3480948.16"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9871569c0b49b769bd74f5cce81e45a.jpg",
				"product_id": 9729,
				"product_name": "米家经典方框太阳镜",
				"product_brief": "复古设计，偏光自修复",
				"product_price": "89",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=9729",
					"log_code": "31pchomepagelist_eight_product_tab004001#t=product\u0026act=product\u0026page=homepage\u0026pid=9729\u0026page_id=10530\u0026bid=3480948.17"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fffc0a962387dff2f70aeb009ddf69ff.jpg",
				"product_id": 12541,
				"product_name": "小米车载充电器快充版1A1C 100W",
				"product_brief": "小米车载充电器快充版1A1C 100W",
				"product_price": "99",
				"product_org_price": "99",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12541",
					"log_code": "31pchomepagelist_eight_product_tab005001#t=product\u0026act=product\u0026page=homepage\u0026pid=12541\u0026page_id=10530\u0026bid=3480948.18"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f182e898b25285bd8279cbc72c9686e.jpg",
				"product_id": 12741,
				"product_name": "小米对讲机Lite",
				"product_brief": "小米对讲机Lite",
				"product_price": "129",
				"product_org_price": "129",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12741",
					"log_code": "31pchomepagelist_eight_product_tab006001#t=product\u0026act=product\u0026page=homepage\u0026pid=12741\u0026page_id=10530\u0026bid=3480948.19"
				}
			}, {
				"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2589bc96718b0db697b23ff765c01c3.jpg",
				"product_id": 12769,
				"product_name": "小米无线充电宝30W 10000mAh",
				"product_brief": " 小米无线充电宝30W 10000mAh",
				"product_price": "199",
				"product_org_price": "199",
				"show_price_qi": false,
				"action": {
					"type": "product",
					"path": "https://www.mi.com/buy?product_id=12769",
					"log_code": "31pchomepagelist_eight_product_tab007001#t=product\u0026act=product\u0026page=homepage\u0026pid=12769\u0026page_id=10530\u0026bid=3480948.20"
				}
			}],
			"action": {
				"type": "keyword",
				"path": "//www.mi.com/search?keyword=%E7%AE%B1%E5%8C%85",
				"log_code": "31pchomepagelist_eight_product_tab000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480948.12"
			}
		}]
	}
}, {
	"view_type": "cells_auto_fill",
	"body": {
		"bg_color": "",
		"items": [{
			"path_type": "image",
			"x": 0,
			"y": 0,
			"w": 2452,
			"h": 240,
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?w=2452\u0026h=240",
			"action": {
				"type": "product",
				"path": "https://www.mi.com/buy?product_id=9836",
				"log_code": "31pchomepagecells_auto_fill001022#t=ad\u0026act=product\u0026page=homepage\u0026pid=9836\u0026page_id=10530\u0026bid=3480949.1\u0026adp=3142\u0026adm=13611"
			}
		}]
	}
}, {
	"view_type": "list_four_video",
	"body": {
		"floor_name": "视频",
		"more_text": "查看全部",
		"action": {
			"type": "url",
			"path": "https://www.mi.com/video/",
			"log_code": "31pchomepagelist_four_video000000#t=normal\u0026act=other\u0026page=homepage\u0026page_id=10530\u0026bid=3480966.1"
		},
		"items": [{
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg",
			"video_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4",
			"title": "Redmi 10X系列发布会",
			"subtitle": "Redmi 10X系列发布会"
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg",
			"video_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4",
			"title": "小米10 青春版 发布会",
			"subtitle": ""
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg",
			"video_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4",
			"title": "小米10 8K手机拍大片",
			"subtitle": ""
		}, {
			"img_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg",
			"video_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4",
			"title": "小米10发布会",
			"subtitle": ""
		}]
	}
    }]

let list = [];
for (let i = 0; i < arr.length; i++){
    let bd = arr[i].body;
    let arr1 = arr[i].body.tab_content;
    if (arr1) {
        let objM = {};
        objM.title = bd.floor_name;
        let str = arr[i - 1].body.items[0].img_url;
        let end = str.indexOf("?") + 1;
        str = str.substring(0, end);
        objM.src = str + "thumb=1&w=1226&h=120&f=webp&q=90";
        objM.left = [];
        for (let j = 0; j < bd.left_ad.items.length; j++){
            let leftSrc = bd.left_ad.items[j].img_url;
            let lend = leftSrc.indexOf("?") + 1;
            leftSrc = leftSrc.substring(0, lend);
            objM.left.push(leftSrc);
        }
        let option = [];
        for (let j = 0; j < arr1.length; j++) {
            let obj = {};
            obj.title = arr1[j].tab_name;
            let details = {};
            details.right = [];
            let proArr = arr1[j].product_list;
            for (let k = 0; k < proArr.length; k++){
                if (k != proArr.length - 1) {
                    let ro = {};
                    ro.title = proArr[k].product_name;
                    ro.description = proArr[k].product_brief;
                    ro.now = proArr[k].product_price + "元";
                    ro.previous = proArr[k].product_org_price + "元";
                    if (ro.now == ro.previous) {
                        ro.previous = null;
                    }
                    ro.src = proArr[k].img_url;
                    details.right.push(ro);
                } else {
                    let rlo = {};
                    rlo.title = proArr[k].product_name;
                    rlo.price = proArr[k].product_price + "元";
                    rlo.src = proArr[k].img_url;
                    details.rightLast = rlo;
                }
            }
            obj.details = details;
            option.push(obj);
        }
        objM.option = option;
        list.push(objM);
    }
}
list.push(arr[arr.length - 1]);

console.log(JSON.stringify(list));

// 数据保存为JSON格式，通过连接下载形式，需要在浏览器下运行
let content = JSON.stringify(list);
let elelink = document.createElement("a");
elelink.download = "dataTest.json";
elelink.innerHTML = "下载";
let blob = new Blob([content]);
elelink.href = URL.createObjectURL(blob);

document.body.appendChild(elelink);