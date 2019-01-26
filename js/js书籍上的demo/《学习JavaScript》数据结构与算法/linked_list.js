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
        while (position > 0) {
            if (cursor) {
                cursor = cursor.next;
                position--;
            } else {
                console.error('added position index out of max!');
                return;
                // cursor = newNode;
            }
        }
        console.log('cursor', cursor);
        newNode.next = cursor.next;
        cursor.next = newNode;
        length++;
    }

    this.print = function () {
        console.log(head);
        let cursor = head;
        while (cursor) {
            console.log(cursor.data);
            cursor = cursor.next;
        }

    }

    this.size = function () {
        return length;
    }



}

let linkedList = new LinkedList();

for (let i = 0; i < 5; i++) {
    linkedList.append(CommonUtils.randomStr());

}

linkedList.print();
console.log(linkedList.size());

linkedList.insert(2, CommonUtils.randomStr());
linkedList.insert(4, CommonUtils.randomStr());
linkedList.print();
console.log(linkedList.size());