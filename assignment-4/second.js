function checkName(name) {

    let lastWord = ["a", "y", "i", "e", "o", "u", "w"];
  
    if (typeof name === "string") {
      let lastAlphabet = name[name.length - 1].toLowerCase();
      for (const word of lastWord) {
        if (word.toLowerCase() === lastAlphabet) {
          return "Good Name";
        }
      }
      return "Bad Name";
    } else {
      return "Invalid Input";
    }
  }
  
  const checking = checkName('RAFEE');
  console.log(checking);
  
