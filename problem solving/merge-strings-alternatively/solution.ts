//length of word 1 and 2
//run the loop till shortest
//add charachters from the string one by one
//append remaining

function mergeAlternately(word1: string, word2: string): string {
  if (!word1) {
    return "";
  }
  if (!word2) {
    return "";
  }

  const len1 = word1.length;
  const len2 = word2.length;
  let result = "";

  let i = 0,
    j = 0;

  while (i < len1 || j < len2) {
    if (i < len1) {
      result += word1[i];
    }
    if (j < len2) {
      result += word2[j];
    }
    i++;
    j++;
  }
  return result;
}
