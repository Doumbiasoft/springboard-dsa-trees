/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function helper(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      
      const leftDepth = node.left ? helper(node.left) : Infinity;
      const rightDepth = node.right ? helper(node.right) : Infinity;
      
      return 1 + Math.min(leftDepth, rightDepth);
    }
    
    return helper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function helper(node) {
      if (!node) return 0;
      const leftDepth = helper(node.left);
      const rightDepth = helper(node.right);
      return 1 + Math.max(leftDepth, rightDepth);
    }
    
    return helper(this.root);
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    function helper(node) {
      if (!node) return 0;
      const leftMax = Math.max(helper(node.left), 0); // Ignore negative paths
      const rightMax = Math.max(helper(node.right), 0); // Ignore negative paths
      const sumThroughNode = node.val + leftMax + rightMax;
      return Math.max(sumThroughNode, helper(node.left), helper(node.right));
    }

    return helper(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    function findNextLarger(node) {
      if (!node) return null;

      if (node.val <= lowerBound) {
        const leftResult = findNextLarger(node.left);
        return leftResult !== null ? leftResult : findNextLarger(node.right);
      } else {
        const rightResult = findNextLarger(node.left);
        return rightResult !== null ? Math.min(rightResult, node.val) : node.val;
      }
    }

    return findNextLarger(this.root);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    function serializeNode(node) {
      if (!node) return "null";
      const left = serializeNode(node.left);
      const right = serializeNode(node.right);
      return `${node.val},${left},${right}`;
    }

    return serializeNode(tree.root);
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    function deserializeNode(data) {
      if (data[0] === "null") {
        data.shift();
        return null;
      }
      
      const val = parseInt(data.shift(), 10);
      const left = deserializeNode(data);
      const right = deserializeNode(data);
      
      return new BinaryTreeNode(val, left, right);
    }
    
    const dataArray = stringTree.split(",");
    return new BinaryTree(deserializeNode(dataArray));
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    function findLCA(root, p, q) {
      if (!root || root === p || root === q) return root;
      
      const left = findLCA(root.left, p, q);
      const right = findLCA(root.right, p, q);
      
      if (left && right) return root; // Common ancestor found
      return left || right; // Return the non-null node
    }

    return findLCA(this.root, node1, node2);
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
