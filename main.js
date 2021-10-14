const fetch = require("isomorphic-fetch")
const { JSDOM } = require("jsdom")

async function fetchAvailableComics() {
    const response = await fetch("https://xkcd.com")
    const text = await response.text()
    const dom = await new JSDOM(text)
    const url = await dom.window.document.querySelector("#middleContainer > a:nth-child(6)").textContent
    result = url.split("/")
    return parseInt(result[result.length-2])
}

async function generateXkcdLink() {
    const availableComics = await fetchAvailableComics()
    const url = await `https://xkcd.com/${Math.floor(Math.random() * availableComics)}`
    return url
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

async function generateFavoriteXkcd() {
    return `${generateSentence()}${await generateXkcdLink()}`
}

generateFavoriteXkcd().then(result => console.log(result))