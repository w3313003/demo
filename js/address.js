let data = {
	"status": 0,
	"message": "",
	"result": [{
			"addressId": "100001",
			"userName": "JackBean",
			"streetName": "北京市朝阳区朝阳公园1",
			"postCode": "100001",
			"tel": "12345678901",
			"isDefault": true
		},
		{
			"addressId": "100002",
			"userName": "sanerfang",
			"streetName": "北京市朝阳区朝阳公园2",
			"postCode": "100001",
			"tel": "12345678901",
			"isDefault": false
		},
		{
			"addressId": "100003",
			"userName": "WangZi",
			"streetName": "北京市朝阳区朝阳公园3",
			"postCode": "100001",
			"tel": "12345678901",
			"isDefault": false
		},
		{
			"addressId": "100004",
			"userName": "XiaoShenYang",
			"streetName": "北京市朝阳区朝阳公园4",
			"postCode": "100001",
			"tel": "12345678901",
			"isDefault": false
		},
		{
			"addressId": "100005",
			"userName": "JsdBo",
			"streetName": "北京市朝阳区朝阳公园5",
			"postCode": "100001",
			"tel": "12345678901",
			"isDefault": false
		},
		{
			"addressId": "100006",
			"userName": "ZhenDe",
			"streetName": "北京市朝阳区朝阳公园6",
			"postCode": "100001",
			"tel": "12345678901",
			"isDefault": false
		}
	]
};
let vm = new Vue({
	el: '#address',
	data: {
		addressList: [],
		//自定义显示的数据个数；
		limitNum: 3,
		//是否展开的标识；
		sign: true,
		//当前卡牌的index；比对；
		curIndex: 0,
		//配送方式；
		delivery: 1,
	},
	mounted: function() {
		let that = this;
		this.$nextTick(() => {
			this.getAdressList();
		})
	},
	methods: {
		getAdressList () {
			this.addressList = data.result;
		},
		more () {
			if(this.sign) {
				let len = this.addressList.length;
				this.limitNum = len;
				this.sign = !this.sign;
			} else {
				this.limitNum = 3;
				this.sign = !this.sign;
			}
		},
		setDefault (val) {
			//吧全部卡片设为false；当前卡片为true；
			this.addressList.forEach(function(item, index) {
				item.isDefault = false;
			});
			val.isDefault = true;
		},
	},
	computed: {
		filterAddress () {
			return this.addressList.slice(0, this.limitNum);
		}
	}
});