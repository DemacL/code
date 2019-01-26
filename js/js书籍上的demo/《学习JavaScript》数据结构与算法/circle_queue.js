const randomStr = () => Math.random().toString(32).substring(2);
const randomNum = () => Math.floor(Math.random() * 100);

const queue = new Queue();




function hot(num){

    for (let i = 0; i < 5; i++) {
        // console.log(element);
        queue.enqueue(randomStr());
    }
    console.table(queue);



    while(queue.size()>1){

        while(num >0){
            queue.enqueue(queue.dequeue());
            num--;
        }
        const lost = queue.dequeue();
        console.log(lost + ' out.');
    }

    console.log(queue.front() + 'win');


}

hot(7);

// console.log(queue);