export default function bs_list(haystack: number[], needle: number): boolean {
  let hi = haystack.length;
  let lo = 0;

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (needle === haystack[mid]) {
      return true;
    }

    // to avoid off-by one error 
    // (lo always inclusive and hi is always exclusive)
    if (needle > haystack[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return false;
}