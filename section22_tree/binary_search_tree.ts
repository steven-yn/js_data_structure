class TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
}

var tree = new BinarySearchTree();
