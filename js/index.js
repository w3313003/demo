let app = new Vue({
	el: '#app',
	data: {
		maskShow: false,
		navItem: [{
				text: '主页',
				href: 'javascript:;',
				isShow: true,
			}, {
				text: '关于我',
				href: 'javascript:;',
				isShow: false,
			},
			{
				text: 'demo',
				href: 'javascript:;',
				isShow: false,
			}, {
				text: '学习库',
				href: 'javascript:;',
				isShow: false,
			},
			{
				text: '联系我',
				href: 'javascript:;',
				isShow: false,
			}
		],
		demo: [{
			title: 'DOM元素基础操作',
			demolist: [{
				demoName: '控制div属性',
				href: 'https://w3313003.github.io/demo/控制DIV属性.html',
			}, {
				demoName: '用循环改变DIV颜色',
				href: 'https://w3313003.github.io/demo/用循环改变div颜色.html',
			}, {
				demoName: '鼠标移入改变样式',
				href: 'https://w3313003.github.io/demo/鼠标移入改变样式.html',
			}, {
				demoName: '记住密码提示框',
				href: 'https://w3313003.github.io/demo/记住密码提示框.html',
			}, {
				demoName: '弹出div内容',
				href: 'https://w3313003.github.io/demo/弹出div内容.html',
			}, {
				demoName: 'div闪烁',
				href: 'https://w3313003.github.io/demo/div闪烁.html',
			}, ],
			isShow: false,
		}, {
			title: '简单函数',
			demolist: [{
				demoName: '函数传参改变样式',
				href: 'https://w3313003.github.io/demo/函数传参改变样式.html',
			}, {
				demoName: '函数接收参数并弹出',
				href: 'https://w3313003.github.io/demo/函数接收参数并弹出.html',
			}, {
				demoName: '自加一',
				href: 'https://w3313003.github.io/demo/自加一.html',
			}, {
				demoName: 'parseInt求和',
				href: 'https://w3313003.github.io/demo/parseInt求和.html',
			}, {
				demoName: 'css函数',
				href: 'https://w3313003.github.io/demo/css函数.html',
			}, {
				demoName: '页面加载后累加',
				href: 'https://w3313003.github.io/demo/页面加载后累加.html',
			}, {
				demoName: '单击坐标',
				href: 'https://w3313003.github.io/demo/显示单击的坐标.html',
			}, {
				demoName: 'keyCode',
				href: 'https://w3313003.github.io/demo/显示keyCode.html',
			}],
			isShow: false,
		}, {
			title: '数据类型',
			demolist: [{
				demoName: 'typeof查看数据类型',
				href: 'https://w3313003.github.io/demo/typeof查看数据类型.html',
			}, {
				demoName: '比较大小',
				href: 'https://w3313003.github.io/demo/比较大小.html',
			}, {
				demoName: '判断是否为2位数',
				href: 'https://w3313003.github.io/demo/判断是否为两位数.html',
			}, {
				demoName: '数组求和',
				href: 'https://w3313003.github.io/demo/数组求和.html',
			}, {
				demoName: '数组练习',
				href: 'https://w3313003.github.io/demo/数组练习.html',
			}, ],
			isShow: false,
		}, {
			title: '页面小组件',
			demolist: [{
				demoName: '倒计时',
				href: 'https://w3313003.github.io/demo/倒计时.html',
			}, {
				demoName: '高亮显示输入框',
				href: 'https://w3313003.github.io/demo/高亮显示输入框.html',
			}, {
				demoName: '记住密码提示框',
				href: 'https://w3313003.github.io/demo/记住密码提示框.html',
			}, {
				demoName: '时钟',
				href: 'https://w3313003.github.io/demo/时钟.html',
			}, {
				demoName: '下拉框',
				href: 'https://w3313003.github.io/demo/输入法下拉框.html',
			}, {
				demoName: '单个按钮控制下拉框',
				href: 'https://w3313003.github.io/demo/单个按钮下拉框.html',
			}, {
				demoName: '模拟select样式',
				href: 'https://w3313003.github.io/demo/模拟select.html',
			}, {
				demoName: '无缝滚动-水平方向',
				href: 'https://w3313003.github.io/demo/无缝右滚.html',
			}, {
				demoName: '无缝滚动',
				href: 'https://w3313003.github.io/demo/无缝滚动.html',
			}, {
				demoName: '选项卡',
				href: 'https://w3313003.github.io/demo/选项卡.html',
			}, {
				demoName: 'contextmenu事件-自定义右键菜单样式',
				href: 'https://w3313003.github.io/demo/自定义右键菜单.html',
			}, {
				demoName: '自定义多级右键菜单',
				href: 'https://w3313003.github.io/demo/升级版自定义菜单.html',
			}, {
				demoName: '自定义多级右键菜单',
				href: 'https://w3313003.github.io/demo/升级版自定义菜单.html',
			}, ],
			isShow: false,
		}, {
			title: '轮播',
			demolist: [{
				demoName: '轮播图',
				href: 'https://w3313003.github.io/demo/轮播图.html',
			}, {
				demoName: '自动播放',
				href: 'https://w3313003.github.io/demo/自动播放的轮播图.html',
			}, {
				demoName: '支持反向播放',
				href: 'https://w3313003.github.io/demo/自动改变方向的轮播.html',
			}, {
				demoName: '按钮控制播放',
				href: 'https://w3313003.github.io/demo/左右按钮控制轮播.html',
			}, {
				demoName: '轮播图缓冲效果',
				href: 'https://w3313003.github.io/demo/轮播图缓冲效果.html',
			}, {
				demoName: '滑动门效果',
				href: 'https://w3313003.github.io/demo/滑动门.html',
			}, ],
			isShow: false,
		}, {
			title: 'DOM拖拽控制',
			demolist: [{
				demoName: '鼠标拖拽',
				href: 'https://w3313003.github.io/demo/鼠标拖拽.html',
			}, {
				demoName: '鼠标拖拽+键盘控制',
				href: 'https://w3313003.github.io/demo/键盘+鼠标控制控制.html',
			}, {
				demoName: '面向对象的拖动组件',
				href: 'https://w3313003.github.io/demo/面向对象拖动.html',
			}, {
				demoName: '跟随移动',
				href: 'https://w3313003.github.io/demo/移动.html',
			}, {
				demoName: '拖动改变大小',
				href: 'https://w3313003.github.io/demo/窗口拖拽.html',
			}, {
				demoName: '模态框拖拽demo',
				href: 'https://w3313003.github.io/demo/弹出层拖拽demo.html',
			}, ],
			isShow: false,
		}, {
			title: '页面交互',
			demolist: [{
				demoName: '复选框状态更新',
				href: 'https://w3313003.github.io/demo/复选框状态更新.html',
			}, {
				demoName: '页面导航条',
				href: 'https://w3313003.github.io/demo/页面导航条.html',
			}, {
				demoName: '年历',
				href: 'https://w3313003.github.io/demo/年历.html',
			}, {
				demoName: '星级评分',
				href: 'https://w3313003.github.io/demo/星级评分.html',
			}, ],
			isShow: false,
		}, {
			title: '练习',
			demolist: [{
				demoName: '网页计算器',
				href: 'https://w3313003.github.io/demo/计算器.html',
			}, {
				demoName: '表格生成',
				href: 'https://w3313003.github.io/demo/table.html',
			}, ],
			isShow: false,
		}, {
			title: '实例',
			demolist: [{
				demoName: '原生js瀑布流',
				href: 'https://w3313003.github.io/demo/瀑布demo.html',
			}, {
				demoName: '页面侧导航',
				href: 'https://w3313003.github.io/demo/网页导航.html',
			}, {
				demoName: '悬浮切换(jQuery)',
				href: 'https://w3313003.github.io/demo/悬浮切换.html',
			}, ],
			isShow: false,
		}, {
			title: 'Vue',
			demolist: [{
				demoName: '任务列表',
				href: 'https://w3313003.github.io/demo/todos.html',
			},{
				demoName: '购物车页面',
				href: 'https://w3313003.github.io/demo/cart.html',
			}, {
				demoName: '地址信息',
				href: 'https://w3313003.github.io/demo/address.html',
			}, {
				demoName: 'qq新歌首发',
				href: 'https://w3313003.github.io/demo/qqmusic.html',
			}, ],
			isShow: false,
		}, ]
	},
	methods: {
		//demo列表点击；
		demoList(i) {
			if(!this.demo[i].isShow) {
				this.demo.forEach((item) => {
					item.isShow = false;
				});
				this.demo[i].isShow = true;
			} else {
				this.demo[i].isShow = false;
			};
		},
	},
	filters: {
		count(value) {
			return "(共" + value + "个)";
		},
	},
	//		mounted: function() {
	//			this.$nextTick(() => {
	//				this.maskShow = true;
	//			})
	//		},
});
let nav = document.getElementById('nav-fixed'),
	navTop = nav.offsetTop;
window.onscroll = () => {
	let top = document.documentElement.scrollTop || document.body.scrollTop;
	top > navTop ? (nav.classList.add('navbar-fixed-top')) : (nav.classList.remove('navbar-fixed-top'));
};
let mySwiper = new Swiper('.my-swiper', {
	loop: true,
	centeredSlides: true,
	effect: 'coverflow',
	slidesPerView: 2,
	slideToClickedSlide: true,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
})