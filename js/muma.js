-function($){
	// 构造函数 接受一个DOM元素为参数 在init方法中被包装为jquery对象；
	function Carousel(obj){
		//保存单个实例 外层盒子；
		this.obj = obj;
		//盒子下的ul；
		this.objUl = obj.find('.ul');
		//切换按钮；
		this.btn = obj.find("div.btn");
		//获取图片组；
		this.posterImgs = obj.find('li.item');
		//检测图片个数是否为偶数 如果为偶数就把第一张复制一份 凑个奇数；
		if(this.posterImgs.length%2===0){
			this.objUl.append(this.posterImgs.eq(0).clone());
			this.posterImgs = this.objUl.children();
		};
		//设定第一张；
		this.firstImg = this.posterImgs.eq(0);
		//最后一张 显示在第一张左边
		this.lastImg = this.posterImgs.last();
		//是否切换的标识；
		this.rotateSign = true;
		//默认配置参数；
		this.setting = {"width":3000, //总体宽
			"height":330,			  //总提高
			"posterWidth":780,		  //第一张的宽
			"posterHeight":330,		  //高
			"vertivalAlign":"middle", //对齐方式
			"scale":0.9,			  //显示比例关系；
			"speed":500,
			"autoPlay":false,
			"delay":2000};
		//更新数据；也就是this.setting会被更新为每个实例的data-set属性；
		$.extend(this.setting, this.getSetting());
		//设置配置参数值；
		this.setBase();
		this.setOtherimgs();
		//有按钮左旋；
		this.btn.eq(1).click(()=>{
		//防止点击过快 动画延迟 在动画回调中再改为true
		if(this.rotateSign){
			this.rotateSign = false;
			this.rotate('left');
		}
		});
		//左按钮u右旋；
		this.btn.eq(0).click(()=>{
		if(this.rotateSign){
			this.rotateSign = false;
			this.rotate('right');
		}
		});
		//是否自动执行；
		if(this.setting.autoPlay){
			this.autoPlay();
		};
		let that = this;
		this.obj.hover(function(){
			clearInterval(that.timer);
		},function(){
			that.autoPlay();
		})
	};
	Carousel.prototype  = {
		constructor : Carousel,
		//获取人工配置参数；
		getSetting : function(){
			//这个this.obj是jq对象；
			var setting = this.obj.attr("data-set");
			setting = JSON.parse(setting);
			return setting;
		},
		//基本设置；
		setBase : function(){
			//这个obj为jQuery对象
			this.obj.css({
				width : this.setting.width,
				height : this.setting.height,
			});
			this.objUl.css({
				width : this.setting.width,
				height : this.setting.height,
			});
			this.btn.css({
				height : this.setting.height,
				//每个按钮的宽度为 盒子宽度减去第一张图片的宽度除于二；
				width : (this.setting.width - this.setting.posterWidth)/2,
				//按钮的z-index；
				zIndex : Math.ceil(this.posterImgs.length/2),
			});
			//第一帧居中left；宽高
			this.firstImg.css({
				left : (this.setting.width - this.setting.posterWidth)/2,
				//比btn小；
				zIndex : Math.ceil(this.posterImgs.length/2),
				width : this.setting.posterWidth,
				height : this.setting.height,
			})
		},
		//剩余图片的位置；
		setOtherimgs : function(){
			var that = this;
			//每张图片的zIndex属性 根据图片的数量实时计算；
			zLevel = lIndex =  Math.floor(this.posterImgs.length/2);
			//第一张图片的宽高
			var rW = this.setting.posterWidth;
			var rH = this.setting.posterHeight;
			//每张图片没被遮挡的部分；为了约束
			var gap = ((this.setting.width - rW)/2)/zLevel;
			//除去第一张图片的数组
			var sliceImg = this.posterImgs.slice(1);
			//要放在右边的图片；
			rightslice = sliceImg.slice(0,Math.round(sliceImg.length/2));
			//我感觉这样比较符合逻辑；
			// var gap = ((this.setting.width - rW)/2)/rightslice.length;
			//获取第一张图片的最右侧的位置;设置图片的left
			var firstPos = (this.setting.width - this.firstImg.width())/2 + rW;
			//右边部分具体设置；
			rightslice.each(function(i){
				zLevel--;
				var j = i
			rW *= that.setting.scale;
			rH *= that.setting.scale;
				//和原生不同 这个$this指向的就是那两个li的jq对象；
				$(this).css({
					zIndex:zLevel,
					width: rW,
					height: rH,
					opacity: 1/(++i),
					left :  firstPos +(++j)*gap - rW,
					top : that.setVertical(rH),
				})
			});
			//放在左边的图片；
			leftslice = sliceImg.slice(Math.round(sliceImg.length/2));
			//左边是从最小的那一张开始；
			var lW = rightslice.last().width(),
				lH = rightslice.last().height(),
			// 在这里主要是为了控制opacity；
			oloop =  Math.floor(this.posterImgs.length/2);
			leftslice.each(function(j){
				lIndex --;
				$(this).css({
					zIndex:lIndex,
					width: lW,
					height : lH,
					opacity : 1/oloop,
					left : gap*j,
					top: that.setVertical(lH),
				});
				lW /= that.setting.scale;
				lH /= that.setting.scale;
				oloop--;
			})
		},
		setVertical : function(h){
			var top = 0;
			var verticalType = this.setting.vertivalAlign.toString();
			if(verticalType === "middle"){
				top = (this.setting.height - h)/2;
			} else if (verticalType === 'bottom'){
				top = this.setting.height - h ;
			} else {
				top = 0;
			}
			return top;
		},
		//旋转；
		rotate : function(dir){
			var that = this;
			var Index = [];
			if (dir=="left"){
				this.posterImgs.each(function(){
				//this指向的是imgs元素集合中的每一个元素；
				// DOM元素；
				let	pre = $(this).prev()[0] ?  $(this).prev() : that.lastImg,
					width = pre.width(),
					height = pre.height(),
					zIndex = pre.css('zIndex'),
					opacity = pre.css('opacity'),
					left = pre.css('left'),
					top = pre.css('top');
					Index.push(zIndex);
					$(this).animate({
						width : width,
						height : height,
						opacity : opacity,
						left : left,
						top : top,
					},that.setting.speed,function(){
						that.rotateSign = true;
					})
				});
				this.posterImgs.each(function(i){
					$(this).css('z-index',Index[i]);
				});
			} else {
				this.posterImgs.each(function(){
				//this指向的是imgs元素集合中的每一个元素；
				// DOM元素；
				let	next = $(this).next()[0] ?  $(this).next() : that.firstImg,
					width = next.width(),
					height = next.height(),
					zIndex = next.css('zIndex'),
					opacity = next.css('opacity'),
					left = next.css('left'),
					top = next.css('top');
					Index.push(zIndex);
					$(this).animate({
						width : width,
						height : height,
						opacity : opacity,
						left : left,
						top : top,
					},that.setting.speed,function(){
						that.rotateSign = true;
					})
				});
				this.posterImgs.each(function(i){
					$(this).css('z-index',Index[i]);
				});
			}
		},
		autoPlay : function(){
			var that = this;
		this.timer = setInterval(function(){
				that.rotate('left');
			},this.setting.delay)
		},
	};
	//初始化；
	Carousel.init = function(item){
		var that = this;
		item.each(function(){
			return new that($(this));
		})
	};
	window.Carousel = Carousel;
}(jQuery);