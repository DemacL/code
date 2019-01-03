function addMethod(object, name, fn) {
    var old = object[name];
    object[name] = function () {
        if (fn.length == arguments.length)
            return fn.apply(this, arguments);
        else if (typeof old == 'function')
            return old.apply(this, arguments);
    };
}

const names = { values: ['html js', 'mysql redis', 'java php'] }

addMethod(names, 'find', function () {
    return this.values;
})
addMethod(names, 'find', function (name) {
    const ret = [];
    for (let i = 0; i < this.values.length; i++) {
        if (this.values[i].includes(name)) {
            ret.push(this.values[i]);
        }
    }
    return ret;
})


addMethod(names, 'find', function (name1, name2) {
    const ret = [];
    for (let i = 0; i < this.values.length; i++) {
        if (this.values[i] === name1 + ' ' + name2) {
            ret.push(this.values[i]);
        }
    }
    return ret;
})

console.log(names.find());
console.log(names.find('mysql'));
console.log(names.find('java','php'));

