console.log('dp begin');

/**
 * 鸭子基类
 */
function Duck(){

}

Duck.prototype.quack = function(){
    console.log('quack');
}

Duck.prototype.swim = function(){
    console.log('swim');
}

Duck.prototype.display = function(){
    console.log('display');
}

function MallardDuck(){

}

MallardDuck.prototype = new Duck();
MallardDuck.prototype.display =function(){
    console.log('MallardDuck display');
};


function RedheadDuck(){
    
}

RedheadDuck.prototype = new Duck();
RedheadDuck.prototype.display =function(){
    console.log('RedheadDuck display');
};

const mallardDuck = new MallardDuck();
const redheadDuck = new RedheadDuck();
console.log(mallardDuck.quack());
console.log(redheadDuck.quack());
console.log(mallardDuck.display());
console.log(redheadDuck.display());