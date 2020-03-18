export class BinarySearchTreeNode<T> {
  private _key: T;
  private _left: BinarySearchTreeNode<T> | null = null;
  private _right: BinarySearchTreeNode<T> | null = null;
  constructor(key: T) {
    this._key = key;
  }
  get key() {
    return this._key;
  }
  set key(key: T) {
    this._key = key;
  }
  get left() {
    return this._left;
  }
  set left(node: BinarySearchTreeNode<T> | null) {
    this._left = node;
  }
  get right() {
    return this._right;
  }
  set right(node: BinarySearchTreeNode<T> | null) {
    this._right = node;
  }
}
