//11111111111111111111111111111111111111111
let app = new Vue({
	el: "#app",
	data: {
		vv: "",
		inp: "0"
	},
	methods: {
		ac: function(){
			this.inp = "0";
			this.vv = "";
		},
		add: function(num){
			if (this.inp.length <= 41){
				if (num != "+" && num != "-" && num != "*" && num != "/"){
					if (this.inp == "0"){
						this.inp = num;
					} else {
						this.inp += num;
					}
					this.obr();
				} else {
					let inp = this.inp;
					let n = inp[inp.length-1];
					if (n != "+" && n != "-" && n != "*" && n != "/"){
						this.inp += num;
					}
				}
			}
		},
		del: function(){
			let inp = this.inp;
			if (inp.length > 1){
				let n = "";
				for (let i = 0; i < inp.length-2; i++){
					n += inp[i];
				}
				let v = inp[inp.length-2];
				if (v != "+" && v != "-" && v != "*" && v != "/"){
					n += v;
				}
				this.inp = n;
				this.obr();
			} else {
				this.inp = "0";
				this.vv = "";
			}
		},
		obr: function(){
			this.vv = eval(this.inp);
		}
	}
});
