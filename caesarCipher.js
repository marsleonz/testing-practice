const caesarCipher = (str, factor) => {
  let size = 26;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + factor) % size) + 97);
    } else if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + factor) % size) + 65);
    } else {
      result += str[i];
    }
  }
  return result;
};

export default caesarCipher;
