/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0; // If the tree is empty, the sum is 0.
    }
  
    function recursiveSum(node) {
      let sum = node.val;
  
      for (const child of node.children) {
        sum += recursiveSum(child);
      }
  
      return sum;
    }
  
    return recursiveSum(this.root);
  }
  

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0; // If the tree is empty, there are no even values.
    }
  
    function recursiveCountEvens(node) {
      let count = node.val % 2 === 0 ? 1 : 0;
  
      for (const child of node.children) {
        count += recursiveCountEvens(child);
      }
  
      return count;
    }
  
    return recursiveCountEvens(this.root);
  }
  

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0; // If the tree is empty, there are no nodes greater than lowerBound.
    }
  
    function recursiveNumGreater(node) {
      let count = node.val > lowerBound ? 1 : 0;
  
      for (const child of node.children) {
        count += recursiveNumGreater(child);
      }
  
      return count;
    }
  
    return recursiveNumGreater(this.root);
  }
  
}

module.exports = { Tree, TreeNode };
