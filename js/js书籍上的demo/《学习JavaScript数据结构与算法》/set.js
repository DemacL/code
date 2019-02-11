function MySet(){
    let items = {};

    
    this.add = function(value){
        items[value] = '';
    }

    this.remove = function(value){
        delete items[value];
    }

    this.has = function(value){
        return items.hasOwnProperty(value);
    }

    this.clear =function(){
        items = {};
    }

    this.size = function(){
        return Object.keys(items).length;
    }

    this.values = function(){
        console.log(items);
        return Object.keys(items);
    }

}

const data1 = CommonUtils.randomStr();
const data2 = CommonUtils.randomStr();
const data3 = CommonUtils.randomStr();

const myset = new MySet();
myset.values();
myset.add(data1);
myset.add(data2);
myset.add(data3);


console.log(myset.values());
console.log(myset.size());

myset.remove(data2);
console.log(myset.values());
console.log(myset.size());

myset.clear();
console.log(myset.size());
