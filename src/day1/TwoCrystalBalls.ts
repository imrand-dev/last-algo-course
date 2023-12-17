export default function two_crystal_balls(breaks: boolean[]): number {
  let length: number = breaks.length;
  let jumpAmount: number = Math.floor(Math.sqrt(length));

  let i: number = jumpAmount;
  for(; i < length; i+= jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  
  i -= jumpAmount;
  for (let j = 0; j < jumpAmount && i < length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}