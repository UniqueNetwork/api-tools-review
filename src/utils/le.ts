export const leToString = (le: string) => {
  const cleanHex = le.startsWith("0x") ? le.slice(2) : le;

  if (cleanHex.length % 2 !== 0) {
    throw new Error("Hex string must have an even number of characters");
  }

  let result = "";

  for (let i = 0; i < cleanHex.length; i += 2) {
    const hexByte = cleanHex.substring(i, i + 2);
    const charCode = parseInt(hexByte, 16);
    result += String.fromCharCode(charCode);
  }

  return result;
};
