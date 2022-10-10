function palindrome(str) {

    let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
    let reversedString = polishedString.split("").reverse().join("");
    console.log(polishedString, reversedString)
  
    return (polishedString === reversedString) ? true : false;
  }
  
  //regex taking car of it.
  let result = palindrome("A m**an, a pla/n, a can--al. Pa;,.nama");
  console.log(result);