export class BinarySearchTreeNode<T> {
  key: T;
  left: BinarySearchTreeNode<T> | null = null;
  right: BinarySearchTreeNode<T> | null = null;
  constructor(key: T) {
    this.key = key;
  }
}
