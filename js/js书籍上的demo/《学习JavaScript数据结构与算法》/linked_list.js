function LinkedList() {

    function Node(data) {
        this.data = data;
        this.next = null;
    }


    let length = 0;
    let head = null;

    this.append = function (data) {
        const newNode = new Node(data);


        if (head) {
            let cursor = head;// 游标  找到next为null的
            while (cursor.next) {
                cursor = cursor.next;
            }
            cursor.next = newNode;
        } else {
            head = newNode;
        }

        length++;
    };

    this.insert = function (position, data) {
        console.log('insert', data);
        const newNode = new Node(data);
        let cursor = head;
        let previous= head;
        if(position >=0 && position <=length){
            if(position === 0){
                // if(head){
                    newNode.next = head;
                // }
                head = newNode;
            }else{
                while(position-- > 0){
                    previous = cursor;
                    cursor = cursor.next;
                    
                }

                newNode.next = previous.next;
                previous.next = newNode;
                length++;
                return;
            }

        }else{
            console.error('out of max');
        }
    }

    this.print = function () {
        console.log(head);
        let cursor = head;
        let res = [];
        while (cursor) {
            // console.log(cursor.data);
            res.push(cursor.data);
            cursor = cursor.next;

        }
        console.table(res);
        return res;
    }


    this.toString = function () {

        console.log(this.print().join(','));
    }

    this.size = function () {
        return length;
    }

    this.remove = function (data) {

        let cursor = head;
        let before = head
        while (cursor) {
            if (cursor.data === data) {
                if (cursor === head) { // 如果删除的是第一个节点 移动头指针
                    head = cursor.next;
                } else {
                    before.next = cursor.next; //把当前项的前后连接起来 让该节点脱离链表
                }

                length--;
                return;
            }
            before = cursor;
            cursor = cursor.next;
        }

    }

    this.indexOf = function (data) {
        let cursor = head;
        let index = 0;
        while (cursor) {
            if (cursor.data === data) {
                return index;
            }
            cursor = cursor.next;
            index++;
        }
        return -1;
    }

    this.removeAt = function (index) {
        if (index < length) {
            let cursor = head;
            let before = head;
            let i = 0;
            while (i <= index) {
                if (i === index) {
                    if (i === 0) {
                        head = head.next;
                    } else {
                        before.next = cursor.next;
                    }
                    length--;
                    return;
                } else {
                    before = cursor;
                    cursor = cursor.next;
                    i++;
                }
            }
        } else {
            console.error('index out of max');
        }
    }

    this.isEmpty = function () {
        return length === 0;
    }
}

const data1 = CommonUtils.randomStr();
const data2 = CommonUtils.randomStr();
const data3 = CommonUtils.randomStr();


/** index example */
// let linkedList = new LinkedList();
// linkedList.append(data1);
// linkedList.append(data2);

// console.log( linkedList.indexOf(data1));
// console.log(linkedList.indexOf(data2));
// console.log(linkedList.indexOf(data3));

/** removeAt example */
let linkedList = new LinkedList();
linkedList.append(data1);
linkedList.append(data2);
linkedList.append(data3);
// console.log(linkedList.toString());
linkedList.print();

// linkedList.removeAt(0);
// linkedList.print();


// linkedList.removeAt(1);
// linkedList.print();
// linkedList.insert(0,CommonUtils.randomStr());
// linkedList.print();
// linkedList.insert(2,CommonUtils.randomStr());
// linkedList.print();


console.log(linkedList.indexOf(data3));

// linkedList.removeAt(1);
// linkedList.print();

// linkedList.removeAt(1);
// linkedList.print();

// linkedList.removeAt(0);
// linkedList.print();
// linkedList.removeAt(0);

// linkedList.print();
// linkedList.removeAt(0);

// linkedList.print();

// console.log(linkedList.isEmpty());


// console.log(linkedList.indexOf(1));
// console.log(linkedList.indexOf(2));



/** remove example1 一个节点  */
// let linkedList = new LinkedList();
// linkedList.append(data1);
// linkedList.print();
// linkedList.remove(data1);
// linkedList.print();


/** remove example2 */
// console.log(data1,data2,data3);
// let linkedList = new LinkedList();
// linkedList.append(data1);
// linkedList.append(data2);
// linkedList.append(data3);

// linkedList.print();
// // linkedList.remove(data1);
// // linkedList.print();
// // linkedList.remove(data2);
// // linkedList.print();
// linkedList.remove(data3);
// linkedList.print();







// for (let i = 0; i < 1; i++) {
//     linkedList.append(CommonUtils.randomStr());

// }
//  console.log(linkedList.size());
// const data =  CommonUtils.randomStr();
//  linkedList.append(data);
//  console.log(data);
//  const data1 =  CommonUtils.randomStr();
//  linkedList.append(data1);
//  console.log(data1);
// console.log(linkedList.size());
// linkedList.remove(data);
// console.log(linkedList.size());
// linkedList.print();
// linkedList.print();
// console.log(linkedList.size());

// linkedList.insert(2, CommonUtils.randomStr());
// linkedList.insert(4, CommonUtils.randomStr());
// // linkedList.insert(100, CommonUtils.randomStr());
// linkedList.print();

// const data = CommonUtils.randomStr();
// console.log('11111111', data);
// linkedList.insert(2,data);
// console.log(linkedList.size());
// setTimeout(() => {
//     linkedList.remove(data);
//     linkedList.print();
// }, 1000);