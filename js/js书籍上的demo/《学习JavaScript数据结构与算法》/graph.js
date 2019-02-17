function Graph() {

    let vertices = [];// 顶点
    let adjList = new MyDictionary(); //  图的邻接表 


    /** 添加顶点 */
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    /** 添加边 顶点vw间的一条边 */
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.print = function () {
        console.log(vertices, adjList.print());
    }

    this.bfs = function(v){
        let arr = adjList.get(v);
        console.loq(v);
        while(){

        }
    }
}

const data1 = CommonUtils.randomStr();
const data2 = CommonUtils.randomStr();
const data3 = CommonUtils.randomStr();

const data4 = CommonUtils.randomStr();
const data5 = CommonUtils.randomStr();
const data6 = CommonUtils.randomStr();

const graph = new Graph();

for (let i = 'A'.charCodeAt(); i <= 'I'.charCodeAt(); i++) {
    graph.addVertex(String.fromCharCode(i));
}
// graph.addVertex(data1);
// graph.addVertex(data2);
// graph.addVertex(data3);

// graph.addEdge(data1, data2);
// graph.addEdge(data1, data3);
// graph.addEdge(data2, data3);



graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


graph.print();
