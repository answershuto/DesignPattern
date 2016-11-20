// ES6 single instance



/** 

 * @instance class DBoperation

 */
class DBoperation {

	constructor(){
		if (DBoperation.instance === undefined) {
			/*init*/
			this.add = function(){
				console.log('add');
			}
			this.del = function(){
				console.log('del');
			}
			this.mod = function(){
				console.log('mod');
			}
			this.find = function(){
				console.log('find');
			}
			DBoperation.instance = this;
		};

		return DBoperation.instance;
	}
}

DBoperation.instance;



let a = new DBoperation();
let b = new DBoperation();
console.log(a === b)
a.add()
b.add()