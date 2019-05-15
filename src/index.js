import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//reactDOM is function which takes react code and search in html code
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('i am',this.name,this.age,'year old');
    }
}

const animal1 = new Animal('Simba',3);
animal1.speak();
serviceWorker.unregister();
console.log(animal1);

class Lion extends Animal {
    constructor(name,age,color,speed){
        super(name,age);
        this.color = color;
        this.speed = speed;
    }
    roar() {
        console.log(
            'ROARRR..1 i have',
            this.color,
            'fur, and i can run',
            this.speed,
            'miles per hours'
        )
    }
}
const lion1 = new Lion('musufa',3,'Golden',52);
lion1.speak();
lion1.roar();
console.log(lion1);