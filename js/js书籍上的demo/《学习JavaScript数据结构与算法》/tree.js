console.log();


function BinarySearchTree() {
    /** 树中节点类 
     * 键是树相关的术语中对节点的称呼
    */
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    /**
     * 内部变量根结点
     */
    let root = null;

    /** 插入一个节点键值 */
    this.insert = function (key) {
        const node = new Node(key);
        if (root) {
            this.appendNode(root, node);
        } else {
            root = node;
        }
    }

    /** 添加childnode到node节点上 */
    this.appendNode = function (node, childnode) {
        if (childnode.key < node.key) {
            if (node.left) {
                this.appendNode(node.left, childnode);
            } else {
                node.left = childnode
            }
        } else {
            if (node.right) {
                this.appendNode(node.right, childnode);
            } else {
                node.right = childnode;
            }
        }
    }

    /** 搜索节点键 */
    this.search = function (key) {

        let node = root;
        while (node) {
            if (node.key === key) {
                return true;
            }
            else if (key < node.key) {
                node = node.left
            }
            else {
                node = node.right;
            }
        }
        return false;
    }

    this.min = function () {
        let node = root;
        let min;
        while (node) {
            min = node.key;
            node = node.left;
        }
        return min;
    }

    this.max = function () {
        let node = root;
        let max;
        while (node) {
            max = node.key;
            node = node.right;
        }
        return max;
    }

    /** 中序遍历 */
    this.inOrderTraverse = function () {
        this.inTraverse(root);
    }

    this.inTraverse = function (node) {

        if (node) {
            // console.log(node.key);
            this.inTraverse(node.left);
            console.log(node.key);
            this.inTraverse(node.right);
        }
    }

    /**先序遍历 */
    this.preOrderTraverse = function () {
        this.preTraverse(root);
    }
    this.preTraverse = function (node) {
        if (node) {
            console.log(node.key);
            this.preTraverse(node.left);
            this.preTraverse(node.right);
        }
    }

    /** 后序遍历 */
    this.postOrderTraverse = function () {
        this.postTraverse(root);
    }
    this.postTraverse = function (node) {
        if (node) {
            this.postTraverse(node.left);
            this.postTraverse(node.right);
            console.log(node.key);
        }
    }



    /** 这个实现有问题 需要调整  删除节点有左右节点  需要从右侧子数中找到最小值替换上去 */
    this.remove = function (key) {
        let node = root;
        let parentNode = root;
        let direction = 1;// 1左  2 右边
        while (node) {
            if (node.key === key) {

                if (node === root) { //删除根结点 把左子树代替上去 
                    if (node.left) {
                        root = node.left;
                        root.right = node.right; // 原来的right被干掉了 有问题
                    } else if (node.right) {
                        root = node.right;
                    } else {
                        root = null;
                    }

                } else {
                    if (node.left) {// 删除的节点有左子树
                        if (direction === 1) {
                            parentNode.left = node.left;
                        } else {
                            parentNode.right = node.left;
                        }

                    } else if (node.right) { // 删除的节点没有左子树有右子树
                        if (direction === 1) {
                            parentNode.left = node.right;
                        } else {
                            parentNode.right = node.right;
                        }
                    }else{ //删除叶子节点
                        
                        if (direction === 1) {
                            parentNode.left = null;
                        } else {
                            parentNode.right = null;
                        } 
                    }
                }
                return;
            }
            else if (key < node.key) {
                parentNode = node;
                direction = 1;
                node = node.left;
            }
            else {
                parentNode = node;
                direction = 2;
                node = node.right;
            }
        }
    }




    this.print = function () {
        console.log(root);
    }


}







// let data1 = CommonUtils.randomNum();
// let data2 = CommonUtils.randomNum();
// let data3 = CommonUtils.randomNum();

// let data4 = CommonUtils.randomNum();
// let data5 = CommonUtils.randomNum();
// let data6 = CommonUtils.randomNum();

let [data1,data2,data3,data4,data5,data6] =[43, 39, 1, 33, 5, 49];
// console.log(data1, data2);

const bst = new BinarySearchTree();
bst.insert(data1);
bst.insert(data2);
bst.insert(data3);
bst.insert(data4);
bst.insert(data5);
bst.insert(data6);
// bst.print();
console.log(data1, data2, data3, data4, data5, data6);
bst.remove(data5);
bst.print();


// const data7 = CommonUtils.randomNum();
// console.log(data1, data2, data3, data4, data5, data6, '/', data2, bst.search(data2));

// console.log(bst.max(),bst.min());
bst.inOrderTraverse();
// console.log('---------------');
// bst.preOrderTraverse();
// console.log('---------------');
// bst.postOrderTraverse();
// console.log('---------------');
