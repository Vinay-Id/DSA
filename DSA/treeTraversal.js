class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inorderRec(node) {
    if (node !== null) {
      this.inorderRec(node.left);
      console.log(node.data);
      this.inorderRec(node.right);
    }
  }

  inOrder() {
    this.inorderRec(this.root);
  }
  containsRec(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.containsRec(node.left, data);
    } else if (data > node.data) {
      return this.containsRec(node.right, data);
    } else {
      return true;
    }
  }

  contains(data) {
    return this.containsRec(this.root, data);
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  preOrderRec(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderRec(node.left);
      this.preOrderRec(node.right);
    }
  }

  preOrder() {
    this.preOrderRec(this.root);
  }
  postOrderRec(node) {
    if (node !== null) {
      this.postOrderRec(node.left);
      this.postOrderRec(node.right);
      console.log(node.data);
    }
  }

  postOrder() {
    this.postOrderRec(this.root);
  }
}

//Example-----------------------------------------------------------------------------------

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inorderRec(node) {
    if (node !== null) {
      this.inorderRec(node.left);
      console.log(node.data);
      this.inorderRec(node.right);
    }
  }

  inOrder() {
    this.inorderRec(this.root);
  }

  containsRec(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.containsRec(node.left, data);
    } else if (data > node.data) {
      return this.containsRec(node.right, data);
    } else {
      return true;
    }
  }

  contains(data) {
    return this.containsRec(this.root, data);
  }
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
}

function height(node) {
  if (node == null) {
    return -1;
  } else {
    let lDepth = height(node.left);
    let rDepth = height(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }
}

function isBalanced(root) {
  if (root == null) {
    return true;
  }
  let lh = height(root.left);
  let rh = height(root.right);
  if (
    Math.abs(lh - rh) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  ) {
    return true;
  }
  return false;
}
var tree1 = new Bst();
tree1.insert(5);
tree1.insert(2);
tree1.insert(7);
tree1.insert(4);
tree1.insert(1);
console.log(isBalanced(tree1.root));