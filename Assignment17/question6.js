function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b); 
    const result = [deck.pop()]; 
  
    while (deck.length) {
      result.unshift(result.pop()); 
      result.unshift(deck.pop()); 
    }
  
    return result;
  }
  
