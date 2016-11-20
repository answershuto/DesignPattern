// ES6 factory

/** 

 * @abstract class Animal

 */

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



/** 

 * @class Cat

 * @extends Animal

 */

class Cat extends Animal {
	constructor(){
		super();
		console.log('I am a cat');
	}

	call(){
		console.log('miao miao~');
	}

	eat(){
		console.log('eat fish');
	}
}



/** 

 * @class Dog

 * @extends Animal

 */

class Dog extends Animal {
	constructor(){
		super();
		console.log('I am a dog');
	}

	call(){
		console.log('wang wang~');
	}

	eat(){
		console.log('eat meat');
	}
}



/** 

 * @class AnimalFactory

 * factory class

 * AnimalType 

 */

class AnimalFactory {
	constructor(){
		
	}

	static CreatAnimal(strAnimalType = AnimalType.Cat){
		switch(strAnimalType) {
			case AnimalType.Cat:
				return new Cat();
				break;
			case AnimalType.Dog:
				return new Dog();
				break;
		}
	}
}

/**

 * AnimalType

 * @type String

 */
const AnimalType = {
	Cat: 'Cat',
	Dog: 'Dog'
};





(function(){

	/*create a cat*/
	let cat = AnimalFactory.CreatAnimal(AnimalType.Cat);
	cat.call();
	cat.eat();

	/*create a dog*/
	let dog = AnimalFactory.CreatAnimal(AnimalType.Dog);
	dog.call();
	dog.eat();

})();










