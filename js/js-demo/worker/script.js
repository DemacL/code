console.log('main js');


var a = 'from script';

let worker = new Worker("worker.js");

worker.postMessage('hello');

worker.postMessage('hello1');

worker.onmessage = function (e) {
    console.log('receive message:', e);
}