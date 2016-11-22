---
layout: post
title:  "用github + jekyll搭建自己的blog"
date:   2016-04-10 23:14:00 +0800
categories: jekyll update
tags: [jekyll 前端] 
excerpt: 本文主要记录一下自己在用jekyll在osX平台搭建个人博客开发环境、部署页面的过程以及遇到的一些坑.
---


# JavsScript design pattern (ES6)

[●工厂模式](#factory)

[●单例模式](#singleInstance)

[●观察者模式](#observer)


<span id="factory"></span>

##工厂模式


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


<span id="singleInstance"></span>

## 单例模式


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


<span id="observer"></span>

## 观察者模式


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
