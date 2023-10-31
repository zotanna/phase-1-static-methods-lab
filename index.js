class Formatter {
  static capitalize(input) {
    if (typeof input !== 'string' || input.length === 0) {
      return input;
    }

    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    if (typeof input !== 'string' || input.length === 0) {
      return input;
    }

    return input.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(input) {
    if (typeof input !== 'string' || input.length === 0) {
      return input;
    }

    const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];

    const words = input.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i === 0 || !excludedWords.includes(word)) {
        words[i] = Formatter.capitalize(word);
      }
    }
    return words.join(' ');
  }
}