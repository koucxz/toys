class BinaryTree {
  root = null;
  count = 0;

  static Node = class Node {
    data = null;
    left = null;
    right = null;
    constructor(data) {
      this.data = data;
    }

    show() {
      return this.data;
    }
  };

  insert(data) {
    const node = new BinaryTree.Node(data);
    if (this.root === null) {
      return (this.root = node);
    }

    let current = this.root;
    let parent = null;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          return (parent.left = node);
        }
      } else {
        current = current.right;
        if (current === null) {
          return (parent.right = node);
        }
      }
    }
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  }

  getMin() {
    if (this.root === null) return null;
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  getMax() {
    if (this.root === null) return null;
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  remove (data) {
    let current = this.root
    let parent = null
    let isLeftChild = true

    // 寻找要删除节点
    while (current.data !== data) {
      parent = current
      if (data < current.data) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
      // 未找到要删除节点
      if (current === null) {
        return null
      }
    }

    if (current.left === null && current.right === null) { // 叶子节点直接删除指向
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.right === null) { // 存在左子节点
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) { // 存在右子节点
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else { // 有两个子节点
      const descendant = this.getDescendant(current) // 获取当前节点的后继（右子树的最小数）
      if (current == this.root) {
        this.root = descendant
      } else if (isLeftChild) {
        parent.left = descendant
      } else {
        parent.right = descendant
      }

      // 将后继的左子节点改为被删除节点的左子节点
      descendant.left = current.left
    }
  }

  getDescendant  (delNode) {
    let descendant = delNode
    let current = delNode.right
    let descendantParent = delNode

    // 循环查找current的右子树节点
    while(current !== null){
      descendantParent = descendant
      descendant = current
      current = current.left
    }

    // 判断寻找到的后继节点是否直接就是删除节点的right节点
    if(descendant !== delNode.right){
      descendantParent.left = descendant.right
      descendant.right = delNode.right 
    }
    return descendant
  }
}
