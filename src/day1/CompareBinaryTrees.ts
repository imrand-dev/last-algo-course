// Compre two binary trees to see if they are equal in both shape and structure...

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // base cases
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a?.value !== b?.value) {
    return false;
  }

  // recursive case
  return compare(a.left, b.left) && compare(a.right, b.right);
}