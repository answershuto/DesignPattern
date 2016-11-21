// ES6 single observer

class Observer {
	constructor(){
		this.objSet = new Set();
	}

	attach(obj){
		this.objSet.add(obj);
	}

	detach(obj){
		this.objSet.delete(obj);
	}

	fire(){
		for(let item of this.objSet){
			item.update && item.update();
		}
	}
}

class Config {
	constructor(name = "config"){
		this.name = name;
	}

	update(){
		console.log('i am '+this.name);
	}
}

let c1 = new Config('cfg1');
let c2 = new Config('cfg2');
let c3 = new Config('cfg3');

let obs = new Observer();

obs.attach(c1);
obs.attach(c2);
obs.attach(c3);

obs.detach(c2);

obs.fire();