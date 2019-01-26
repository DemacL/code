console.log('queue');

/** 队列类 */
function Queue() {
    this.items = [];


}

/** 入队 */
Queue.prototype.enqueue = function (ele) {
    return this.items.push(ele);
}

/** 出队 */
Queue.prototype.dequeue = function () {
    return this.items.shift();
}

/** 获取队列元素个数 */
Queue.prototype.size = function () {
    return this.items.length;
}

/** 获取队列第一个元素 */
Queue.prototype.front = function () {
    return this.items[0];
}

Queue.prototype.toString = function () {
    return this.items.toString();
}

Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
}

// const q1 = new Queue();
// const q2 = new Queue();

// q1.enqueue(1);
// console.log(q1.toString());
// // q2.enqueue(2);
// // console.log(q2.toString());
// // console.log(q2.items);

// q1.enqueue(2);
// console.log(q1.toString());
// q1.enqueue(3);
// console.log(q1.toString());
// q1.dequeue();
// console.log(q1.toString());

// console.log(q1.front());

// console.log(q1.isEmpty());