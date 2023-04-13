export const secondLargest = (array: number[]): number => {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 2];
};
