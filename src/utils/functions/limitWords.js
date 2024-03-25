export function limitWords(text, limit) {
    const words = text.split(/\s+/); // Split the text into an array of words
    const limitedWords = words.slice(0, limit); // Slice the array to get only the first 'limit' words
    const limitedText = limitedWords.join(' '); // Join the limited words back into a string
    if (words.length > limit) {
        return limitedText + '...'; // Append "..." if the original text had more words than the limit
    } else {
        return limitedText; // Return the limited text as is
    }
}