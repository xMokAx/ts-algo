import { BinarySearchTreeNode } from "./BinarySearchTreeNode";

// A node in a binary tree has two children at most: one left child and one right child.
// A binary search tree is a binary tree, but it only allows you to store nodes with lesser
// values on the left-hand side and nodes with greater values on the right-hand side.
export class BinarySearchTree<T> {
  private root: BinarySearchTreeNode<T> | null = null;

  private insertNode(
    node: BinarySearchTreeNode<T>,
    newNode: BinarySearchTreeNode<T>
  ) {
    if (newNode.key < node.key) {
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
  private inOrderTraverseNode(
    node: BinarySearchTreeNode<T> | null,
    callback: Function
  ) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  private preOrderTraverseNode(
    node: BinarySearchTreeNode<T> | null,
    callback: Function
  ) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  private postOrderTraverseNode(
    node: BinarySearchTreeNode<T> | null,
    callback: Function
  ) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  private searchNode(node: BinarySearchTreeNode<T> | null, key: T): boolean {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  private findMinNode(node: BinarySearchTreeNode<T>) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
  private removeNode(node: BinarySearchTreeNode<T> | null, key: T) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        const minNode = this.findMinNode(node.right);
        node.key = minNode.key;
        node.right = this.removeNode(node.right, minNode.key);
        return node;
      }
    }
  }

  insert(key: T): void {
    const newNode = new BinarySearchTreeNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }
  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }
  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }
  search(key: T): boolean {
    return this.searchNode(this.root, key);
  }
  min(): T | null {
    let current = this.root;
    if (current) {
      while (current.left) {
        current = current.left;
      }
      return current.key;
    }
    return current;
  }
  max(): T | null {
    let current = this.root;
    if (current) {
      while (current.right) {
        current = current.right;
      }
      return current.key;
    }
    return current;
  }
  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }
}
