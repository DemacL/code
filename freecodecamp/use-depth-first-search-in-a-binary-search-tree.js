var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
 
    this.inorder =function(){
        if(this.root === null){ 
            return null; 
        }else{
            const arr = [...this.inorderEle(this.root)]; 
            return arr;
        }
    }

    this.inorderEle =function(node){
     
        if(node){
            const leftArr = this.inorderEle(node.left);
            const rightArr = this.inorderEle(node.right); 
            return [...leftArr,node.value,...rightArr];
        }else{
            return []
        }
    }

      this.preorder =function(){
        if(this.root === null){
            return null;
        }else{ 
            const arr = [...this.preorderEle(this.root)]; 
            return arr;
        }
    }

       this.preorderEle =function(node){
        if(node){
            const leftArr = this.preorderEle(node.left);
               const rightArr = this.preorderEle(node.right); 
            return [node.value, ...leftArr,...rightArr];
        }else{
            return [];
        }
    }

      this.postorder =function(){
        if(this.root === null){
            return null;
        }else{
          
            const arr = [...this.postorderEle(this.root)]; 
            return arr;
        }
    }

     this.postorderEle =function(node){
        if(node){
            const leftArr = this.postorderEle(node.left);
               const rightArr = this.postorderEle(node.right); 
            return [...leftArr,...rightArr,node.value];
        }else{
            return [];
        }
    }



    // change code above this line
}
