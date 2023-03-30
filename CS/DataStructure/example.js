"use strict";

class Node {
  constructor(value) {
    this.value = value; // Root node
    this.left = null; // left leaf node
    this.right = null; // right leaf node
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      // 아직 트리가 없음
      this.root = newNode;
    } else {
      // 이미 트리가 있음
      let subRootNode = this.root;
      while (true) {
        if (value < subRootNode.value) {
          // left
          if (!subRootNode.left) {
            // 왼쪽 자식이 비어있으면
            subRootNode.left = newNode; // 그냥 왼쪽에 붙이면 된다.
            return;
          }
          // 왼쪽 자식이 비어있지 않다면
          subRootNode = subRootNode.left; // 왼쪽 자식을 subRootNode 자리로 올린다.
        } else {
          // right
          if (!subRootNode.right) {
            subRootNode.right = newNode;
            return;
          }
          subRootNode = subRootNode.right; // 오른쪽 자식을 subRootNode 자리로 올린다.
        }
      }
    }
  }

  // 트리에 해당 값이 있는지를 확인
  lookup(value) {
    let subRootNode = this.root; // 현재 루트 값을 넣어주고
    while (subRootNode != null) {
      if (value < subRootNode.value) {
        // left
        subRootNode = subRootNode.left;
      } else if (value > subRootNode.value) {
        // right
        subRootNode = subRootNode.right;
      } else if (value === subRootNode.value) {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let subRootNode = this.root;
    let parentNode = null;
    while (subRootNode) {
      if (value < subRootNode.value) {
        parentNode = subRootNode;
        subRootNode = subRootNode.left;
      } else if (value > subRootNode.value) {
        parentNode = subRootNode;
        subRootNode = subRootNode.right;
      } else if (subRootNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (subRootNode.right === null) {
          if (parentNode === null) {
            this.root = subRootNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (subRootNode.value < parentNode.value) {
              parentNode.left = subRootNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (subRootNode.value > parentNode.value) {
              parentNode.right = subRootNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (subRootNode.right.left === null) {
          subRootNode.right.left = subRootNode.left;
          if (parentNode === null) {
            this.root = subRootNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (subRootNode.value < parentNode.value) {
              parentNode.left = subRootNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (subRootNode.value > parentNode.value) {
              parentNode.right = subRootNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = subRootNode.right.left;
          let leftmostParent = subRootNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = subRootNode.left;
          leftmost.right = subRootNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (subRootNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (subRootNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BST();
// console.log(tree);
tree.insert(9);

tree.insert(4);
tree.insert(6);
tree.insert(20);
// tree.insert(170);
tree.insert(15);
// console.log(tree);
// console.log(tree);
// console.log(tree.lookup(6));
tree.remove(9);
console.log(tree);

// tree.insert(1);
// console.log(tree.lookup(6));
// console.log(tree.lookup(3));
// console.log(tree.lookup(1));
// tree.remove(1);
// console.log(tree.lookup(1));
