// ES6 factory

class Animal {
	constructor(){
		if (new.target === Animal) {
			throw new Error('Animal class is a abstract class');
		};
	}

	call(){
		throw new Error('function call is not implemented');
	}

	eat(){
		throw new Error('function eat is not implemented');
	}
}

