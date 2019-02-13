function MyDictionary() {
    let items = {};


    /** 字典中添加元素 */
    this.set = function(key,value){
        items[key] = value;
    }

    
    this.delete = function(key){
        delete items[key];
    }

    this.has = function(key){
        return items.hasOwnProperty(key);
    }

    this.get = function(key){
        return items[key];
    }
    
    this.clear = function(){
        items ={};
    }

    this.size = function(){
        return Object.keys(items).length;
    }

    this.keys = function(){
        return Object.keys(items);
    }

    this.values = function(){
        return Object.values(items);
    }

    this.print = function(){
        console.table  (items);
    }
}

const data1 = CommonUtils.randomStr();
const data2 = CommonUtils.randomStr();
const data3 = CommonUtils.randomStr();

const data4 = CommonUtils.randomStr();
const data5 = CommonUtils.randomStr();
const data6 = CommonUtils.randomStr();
let dic = new MyDictionary();

dic.set('k1',data1);
dic.set('k2',data1);
dic.set(data2,data2);

dic.print();
console.log(dic.has(data1));
dic.delete(data1);
dic.print();

console.log('sss', dic.get(data6));
console.log(dic.values());
console.log(dic.keys());
