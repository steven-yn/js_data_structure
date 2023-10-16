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

  insert(value: any) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return this;
    }

    return this.set(this.root, value);
  }

  find(value: any) {
    if (!this.root) return null;

    return this.get(this.root, value);
  }

  state(node: TreeNode | null, value: any) {
    if (!node) return;
    if (value === node.value) return "EQUAL";
    if (value > node.value) return "RIGHT";
    if (value < node.value) return "LEFT";
    return null;
  }

  get(node: TreeNode | null, value: any) {
    if (!node) return null;

    switch (this.state(node, value)) {
      case "EQUAL":
        return node;
      case "RIGHT":
        return this.get(node.right, value);
      case "LEFT":
        return this.get(node.left, value);
      default:
        return null;
    }
  }

  set(node: TreeNode | null, value: any) {
    switch (this.state(node, value)) {
      case "EQUAL":
        return null;
      case "RIGHT": {
        if (!node) return;

        if (!node.right) {
          node.right = new TreeNode(value);
          return this;
        }

        return this.set(node.right, value);
      }
      case "LEFT": {
        if (!node) return;

        if (node && !node.left) {
          node.left = new TreeNode(value);
          return this;
        }

        return this.set(node.left, value);
      }
      default:
        return null;
    }
  }
}
