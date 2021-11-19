// Code your solutions in this file
function wrapCards(nameArray, string) {
    let cards = []
    for (let i = 0; i < nameArray.length; i++) {
      cards.push(`Wrapped ${nameArray[i]} and added ${string} a bow!`);
    }
  
  
    return cards;
  }