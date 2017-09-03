let data = {
"status":1,
  "result":{
    "totalMoney":0,
    "list":[
      {
        "productId":"600100002115",
        "productName":"疾风剑豪",
        "productPrice":45,
        "productQuantity":1,
        "productImage":"img/yasso.jpg",
        "productType" : "浪人",
       	"productStock" : 100,
       	"productState" : '有货',
        "parts":[
          {
            "partsId":"10001",
            "partsName":"西部牛仔",
            "imgSrc":"img/part-1.jpg"
          },{
            "partsId":"10002",
            "partsName":"腥红之月",
            "imgSrc":"img/part-2.jpg"
          }
        ]
      },
      {
        "productId":"600100002120",
        "productName":"影流之主",
        "productPrice":60,
        "productQuantity":5,
        "productImage":"img/zac.jpg",
        "productType" : "忍者",
        "productStock" : 100,
        "productState" : '有货',
        "parts":[
          {
            "partsId":"20001",
            "partsName":"源计划-阴",
            "imgSrc":"img/part-2.jpg"
          }
        ]
      },
      {
        "productId":"600100002117",
        "productName":"暗夜猎手",
        "productPrice":66,
        "productQuantity":2,
        "productImage":"img/Verus.jpg",
        "productType" : "ADC",
        "productStock" : 100,
        "productState" : '有货',
        "parts":[
          {
            "partsId":"10001",
            "partsName":"摄魂使者",
            "imgSrc":"img/part-1.jpg"
          },
          {
            "partsId":"10002",
            "partsName":"觅心猎手",
            "imgSrc":"img/part-1.jpg"
          }
        ]
      }
    ]
  },
  "message": 5,
  };

let cart = new Vue({
	el: '#app',
	data: {
		productList: [],
		//后台数据；
		totalMoney: 0,
		ischeckAll: false,
		//删除弹出框；
		isShow : false,
		curProduct : {},
	},
	methods: {
		cartView () {
				this.productList = data.result.list;
				this.totalMoney = data.result.totalMoney;
		},
		//改变数量;
		change (product, type) {
			if(type > 0) {
				product.productQuantity++;
			} else {
				product.productQuantity--;
				if(product.productQuantity < 1) {
					product.productQuantity = 1;
				}
			};
			//每次改变数量的同时也要进行总金额的计算
//			this.calcPrice();
		},
		check (item) {
			//判断item也就是LIST的每一个对象中有没有ischecked属性;
			if(typeof item.isChecked === 'undefined') {
			//在对象中添加isChecked属性
				this.$set(item, 'isChecked', true)
			} else {
				item.isChecked = !item.isChecked;
			};
			//选中时计算总金额
//			this.calcPrice();
		},
		checkAll (sign) {
			let that = this;
			this.ischeckAll = sign;
			if(this.ischeckAll) {
				//遍历 ； 列表选项的类名；由于原数据中没有isChecked属性 所以需要先判断是否添加
				this.productList.forEach(function(value, index) {
					if(typeof value.isChecked === 'undefined') {
						that.$set(value, 'isChecked', sign)
					} else {
						value.isChecked = sign;
					};
				})
			} else {
				this.productList.forEach(function(value, index) {
					value.isChecked = sign;
				})
			};
		},
		inverse  (){
			let that = this;
			this.productList.forEach(function(value,index){
				if(typeof value.isChecked === 'undefined') {
					that.$set(value,'isChecked',true)
				} else {
					value.isChecked = !value.isChecked;
				}
			});
		},
		//控制显示；
		deleteProduct  (item,index){
			this.isShow = true;
			//把点击的数据的item和index存入data；便于之后的删除匹配
			this.curProduct = {list:item,index:index};
			
		},
		//弹出框的YES;删除当前点击的product
		delProduct (){
			let num = this.curProduct.index;
			this.productList.splice(num,1);
			this.isShow = false;
		},
//		calcPrice : function(){
//			var that = this;
//			this.totalPrice = 0;
//			this.productList.forEach(function(value,index){
//				if(value.isChecked){
//					that.totalPrice += value.productPrice * value.productQuantity
//				}
//			})
//		}
	},
	filters: {
		money  (value,type){
			return '$' + value.toFixed(2) + type;
		}
	},
	mounted: function() {
		let that = this;
		this.$nextTick(function() {
			that.cartView();
		});
	},
	computed : {
		//总价；
		calcTotalPrice  (){
			let that = this;
			money = 0;
			this.productList.forEach((val,index)=>{
				if(val.isChecked){
					money += val.productQuantity * val.productPrice;
				}
			})
			return money;
		},
	}
});
