function rot13(str) {
 const uppercaseLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P'
];
str =  str.replace(/[A-Z]/g,(l)=>{
 
  let index = uppercaseLetters.indexOf(l) + 13
  return uppercaseLetters[index]
})
  return str
}



rot13("SERR PBQR PNZC")


