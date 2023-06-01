function distributeCandies(candyType) {
    const uniqueCandies = new Set(candyType);
    const maxCandiesCount = Math.min(uniqueCandies.size, candyType.length / 2);
    return maxCandiesCount;
  }