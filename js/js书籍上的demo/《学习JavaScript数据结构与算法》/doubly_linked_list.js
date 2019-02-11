function DoublyLinkedList() {

    function Node(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }


    let length = 0;
    let head = null;
    let tail = null;

    this.insert = function (position, data) {
        let node = new Node(data);
        let current = head;
        let previous = head;
        if (position >= 0 && position <= length) {
            // console.log(position, length    );
            if(position === length){
                // console.log('ass');/
                tail = node;
            }
            if(position === 0){
                node.next = current;
                if(current){
                    current.prev =node;
                }
                head = node;
            }else{
                while(position--){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                node.prev = previous;
                previous.next = node;
                if(current){
                    current.prev = node;
                }
          
            }

          
            length++;
        } else {
            console.error('illgeal position');
        }

    }

    this.print = function () {
        console.log(head,tail,head ===tail);
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

}

const data1 = CommonUtils.randomStr();
const data2 = CommonUtils.randomStr();
const data3 = CommonUtils.randomStr();

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(0,0);
doublyLinkedList.insert(1,2);    
doublyLinkedList.insert(1,1);


doublyLinkedList.print();