function generateXkcdLink() {
    return `https://xkcd.com/${Math.floor(Math.random()*2527)}`
}

function generateSentence() {
    const sentences = [
        "I really like ",
        "My favorite is ",
        "The best definitely is ",
        "There's no better than "
    ]
    return sentences[Math.floor(Math.random()*sentences.length)]
}

function generateFavoriteXkcd() {
    return `${generateSentence()}${generateXkcdLink()}`
}

console.log(generateFavoriteXkcd())