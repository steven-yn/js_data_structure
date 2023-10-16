function breadthFirstSearch(node: TreeNode) {
  let queue = [node];
  let visited: Array<TreeNode | undefined> = [];

  while (queue.length !== 0) {
    const dequeueNode = queue.shift();
    visited.push(dequeueNode);

    if (dequeueNode?.left) {
      queue.push(dequeueNode.left);
    }

    if (dequeueNode?.right) {
      queue.push(dequeueNode.right);
    }
  }

  return visited;
}
