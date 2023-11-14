class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }


  /** insert(val): insert a new node into the BST (binary search tree) with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    
    let newNode = new Node(val)

    if(this.root === null) {
      this.root = newNode; 
      return this;
    }

    let node = this.root

      while(true) {
        if(node.val > newNode.val) {

          if(!node.left) {
            node.left = newNode; 
            return this;

          } else {
            node = node.left 
          }
        
        }
      
        if(node.val < newNode.val) {

          if(!node.right) {
            node.right = newNode
            return this

          } else {
            node = node.right
          }
        }
    }
    
    }
 

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
  
    let newNode = new Node(val); 

    if(node === null) {
      this.root = newNode
      return this; 

    } else if(node.val > newNode.val) {

      if(!node.left) {
        node.left = newNode; 
        return this; 

      } else {
      node = node.left
      return this.insertRecursively(val, node)
      }

    } else {

      if(!node.right) {
        node.right = newNode; 
        return this; 
      } else {
      node = node.right
      return this.insertRecursively(val, node)
      }
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  // * not dealing with idx so cant use left and right in that way

  find(val) {

    if(!this.root) {
      return 
    }

    let node = this.root; 

    while(true) {
      if(!node) return; 

      if(node.val === val) {
        return node;
      }else if(node.val < val) {
        node = node.right;

      } else  {
        node = node.left;
      }

    }
}

 
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(!node) return 

    if(node.val === val) {
      return node; 

    } else if(node.val < val) {
      return this.findRecursively(val, node.right)

    } else {
      return this.findRecursively(val, node.left)
    }

  }

  // traverse(node=this.root){
  //   this.traverse(node.left);
  //   console.log(node.val)
  //   this.traverse(node.right)
  // }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNode = []
    let node = this.root;

    function traverse(node) {
      visitedNode.push(node.val); 
      console.log("visitedNode:", visitedNode)
 
      if(node.left) {
        console.log("node.left is running")
        traverse(node.left)
      }
      if(node.right) {
        console.log("node.right is running")
        traverse(node.right)
      }
    }

    traverse(node)
    return visitedNode;
  }

  // dfsPreOrder(node = this.root, visitedNodes = []) {
  //   console.log("node:", node)
  //   // let visitedNodes = []
  //   console.log("visitedNodes1:", visitedNodes)

  //   // if(!node) return visitedNodes; 
  //   visitedNodes.push(node.val);
  //   console.log("visitedNodes2:", visitedNodes)
  //   if(node.left) {
  //     console.log("if statement is running")
  //     // visitedNodes.push(node.left); 
  //     return this.dfsPreOrder(node.left, visitedNodes)
  //   } else if(node.right) {
  //     console.log("else if statement is running")
  //     // visitedNodes.push(node.left); 
  //     return this.dfsPreOrder(node.right, visitedNodes)
  //   } else {
  //     console.log("else statement is running")
  //     return visitedNodes
  //   }
  
  // }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNode = [];
    let node = this.root; 

    function traverse(node) {
      if(node.left) {
        traverse(node.left)
      }
      visitedNode.push(node.val)

      if(node.right) {
        traverse(node.right)
      }
    }
    traverse(node); 
    return visitedNode; 
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNode = []; 
    let node = this.root;
    function traverse(node) {
      if(node.left) {
          traverse(node.left)
        }
      
        if(node.right) {
          traverse(node.right)
        }
        visitedNode.push(node.val)
    }
    traverse(node); 
    return visitedNode; 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  // *breadth-first-search??? 
  // * current node, left node, right node

  // bfs() {
  //   let visitedNode = []; 
  //   let node = this.root;
  //   visitedNode.push(node.val);

    // function traverse(node) {
    //   if(!node.left && !node.right) {
    //     return 
    //   }
    //   if(node.left) {
    //       console.log("node.left.val", node.left.val)
    //       visitedNode.push(node.left.val)
    //       // traverse(node.right)
    //     }
      
    //   if(node.right) {
    //     console.log("node:", node)
    //     console.log("node.right.val:", node.right.val)
    //     visitedNode.push(node.right.val)
    //     // traverse(node.right)
    //   }
    //   // let tern = node.left ? node.left : node.right
    //   // console.log("tern:", tern)
    //   console.log("visitedNode:", visitedNode)
    //   traverse(node = node.left ? node.left : node.right)
    
    // }

  //   function traverse(node) {
  //     if (!node.left && !node.right) {
  //         return;
  //     }
  
  //     if (node.left && node.right) {
  //         visitedNode.push(node.left.val);
  //         visitedNode.push(node.right.val);
  
  //         traverse(node.left);
  //         traverse(node.right);
  //     } else if (node.left) {
  //         visitedNode.push(node.left.val);
  //         traverse(node.left);
  //     } else {
  //         visitedNode.push(node.right.val);
  //         traverse(node.right);
  //     }
  // }

  //   traverse(node); 
  //   return visitedNode; 
  // }

  bfs() {
    let node = this.root;
    let queue = [];
    let visitedNode = [];

    queue.push(node);

    // * pushing the node into the queue

    while (queue.length) {
      // *while queue has length... 
      node = queue.shift();
      // * node = the first node in queue 
      visitedNode.push(node.val);
      // * pushing the value of node into the visitedNode array 
      // *ultimately this is going to determine the order of the queue and will continue to build up until there are no left or no right nodes. 
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return visitedNode;
  }



  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}


// let binarySearchTree = new BinarySearchTree();
// console.log("binarySearchTree:", binarySearchTree)
// let result = binarySearchTree.insert(15);
// console.log("result:", result)
// let result1 = binarySearchTree.insert(20);
// console.log("result1:", result1)
// let result2 = binarySearchTree.insert(25);
// console.log("result2:", result2)
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);


// let answer = binarySearchTree.root.val // 15
// console.log("answer:", answer)
// let answer1 = binarySearchTree.root.right.val // 20
// console.log("answer1:", answer1)

// let  answer2 = binarySearchTree.root.left.right.val // 12
// console.log("answer2:", answer2)


// var binarySearchTree = new BinarySearchTree();

// let result = binarySearchTree.insertRecursively(15);
// console.log("result:", result)
// let result1 = binarySearchTree.insertRecursively(20);
// console.log("result1:", result1)
// let result2 = binarySearchTree.insertRecursively(10);
// console.log("result2:", result2)
// let result3 = binarySearchTree.insertRecursively(12);
// console.log("result3:", result3)


// let answer = binarySearchTree.root.val // 15
// console.log("answer:", answer)
// let answer1 = binarySearchTree.root.right.val // 20
// console.log("answer1:", answer1)

// console.log("root:", binarySearchTree.root)                        //                       15 
//                                                                    //                     /    \
// console.log("root-right:", binarySearchTree.root.right)           //                 null          20
//                                                                  //                  /            /    \
// console.log("root-right-left:", binarySearchTree.root.right.left) //               /           null       null  
//                                                                     //           /                     /   \ 
// console.log("root-left:", binarySearchTree.root.left) //                       10

// let answer2 = binarySearchTree.root.left.right.val // 12
// console.log("answer2:", answer2)

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// let foundNode = binarySearchTree.find(120);
// let answer = foundNode.val // 20
// console.log("answer:", answer)
// let answer1 = foundNode.left // null
// console.log("answer1:", answer1)
// let answer2 = foundNode.right // null
// console.log("answer2:", answer2)

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// let foundNode = binarySearchTree.findRecursively(20);
// console.log("foundNode:", foundNode)
// let answer = foundNode.val // 20
// console.log("answer:", answer)
// let answer1 = foundNode.left // null
// console.log("answer1:", answer1)
// let answer2 = foundNode.right // null
// console.log("answer2:", answer2)

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15) //                     15
// binarySearchTree.insert(20) //                         20
// binarySearchTree.insert(10)//             10
// binarySearchTree.insert(12)//                   12
// binarySearchTree.insert(1)//      1
// binarySearchTree.insert(5)//           5  
// binarySearchTree.insert(50)//                                50
// let answer = binarySearchTree.dfsPreOrder() // [15, 10, 1, 5, 12, 20, 50]
// console.log("answer:", answer)

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// let answer = binarySearchTree.dfsInOrder() // [1, 5, 10, 12, 15, 20, 50]
// console.log("answer:", answer)

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// let answer = binarySearchTree.dfsPostOrder() // [5, 1, 12, 10, 50, 20, 15]
// console.log("answer:", answer)

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// let answer = binarySearchTree.bfs() // [15, 10, 20, 1, 12, 50, 5]
// console.log("answer:", answer)


module.exports = BinarySearchTree;
