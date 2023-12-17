export default function bubble_sort(arr: number[]): void {
  let length: number = arr.length;

  // O(n^2) | O(1)
  for (let i = 0; i < length; ++i) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}