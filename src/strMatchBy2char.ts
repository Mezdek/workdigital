export const strMatchBy2char = (strA: string, strB: string) => {
  let count = 0;
  const possible2CharStringsForStrA = strA.length - 1;
  const possible2CharStringsForStrB = strB.length - 1;
  if (possible2CharStringsForStrA < 1 || possible2CharStringsForStrB < 1)
    return 0;
  for (let i = 0; i < possible2CharStringsForStrA; i++) {
    if (strB.includes(strA.slice(i, i + 2))) {
      count++;
    }
  }
  return count;
};
