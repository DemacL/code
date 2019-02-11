


/** 优先队列  */
function PriorityQueue() {
    let items = [];

    function QueueElement(ele, priority) {
        this.element = ele;
        this.priority = priority;
    }

    /** 在入队的时候根据优先级大小放入对应的维持，维护优先级的次序 */
    this.enqueue = function (data, priority) {
        const element = new QueueElement(data, priority); // 在这里实例化不用暴露QueueElement构造方法到全局
        console.table(items);
      
        let added = false; // 标记是否插入成功  没有成功的话 说明优先级最低 循环后追加到对尾部
        for (let i = 0; i < items.length; i++) {
            if (element.priority > items[i].priority) {
                items.splice(i, 0, element);
                added = true;
                break; // 插入节点后记得break 
            }
        }
        if (!added) {
            items.push(element);
        }
        

    }


    this.dequeue = function () {

        return items.shift();

    }

    this.print = function () {
        console.table(items);
    }



}


const randomStr = () => Math.random().toString(32).substring(2);
const randomNum = () => Math.floor(Math.random() * 100);

const pq = new PriorityQueue();

for (let i = 0; i < 10; i++) {

    // console.log(element);
    pq.enqueue(randomStr(), randomNum());

}

// pq.print();

