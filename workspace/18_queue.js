class Queue {
    constructor() { // class의 속성을 선언
        this.a = []
    }
    //비어있는지, 첫번째 큐의 원소를 불러올 때
    front() {
        if (this.a.length === 0) {
            console.log("큐가 비었습니다.");
            return
        } else return this.a[0]
    }
    //data insert
    enqueue(value) {
        this.a.push(value)
        this.getList()
    }
    dequeue() {
        if (this.a.length === 0) {
            console.log('queue is empty');
            return
        }
        this.getList()
        this.a.shift()
    }
    // data list
    getList(){
        console.log(this.a.toString());
    }
}

const q = new Queue()
q.enqueue('A');
q.enqueue(2);
q.enqueue([3,4,5]);
q.enqueue("null");
// for (let i = 0; i < 4; i++) {
//     console.log(q.front());
//     q.dequeue()    
// }
console.log(q.front());