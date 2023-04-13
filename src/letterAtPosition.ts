export const letterAtPosition = (position: number): string => {
  const aIndex = 97;
  const positionIsFloat = (position * 10) % 10 != 0;
  if (position < 1 || position > 26 || positionIsFloat) return "invalid";
  return String.fromCodePoint(position + aIndex - 1);
};
