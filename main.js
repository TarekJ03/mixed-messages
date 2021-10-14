import fetch from "isomorphic-fetch"
import { JSDOM } from "jsdom"
let availableComics

function randint(upperBound) {
    return Math.floor(Math.random()*upperBound)
}

async function fetchAvailableComics() {
    const response = await fetch("https://xkcd.com")
    const text = await response.text()
    const dom = new JSDOM(text)
    const url = dom.window.document.querySelector("#middleContainer > a:nth-child(6)").textContent
    const result = url.split("/")
    return parseInt(result[result.length-2])
}

async function generateXkcdLink() {
    if (availableComics === undefined) {
        availableComics = await fetchAvailableComics()
    }
    const url = `https://xkcd.com/${randint(availableComics)}`
    return url
}

function generateSentence() {
    const sentences = [
        "I really like ",
        "My favorite is ",
        "The best definitely is ",
        "There's no better than "
    ]
    return sentences[randint(sentences.length-1)]
}

async function generateFavoriteXkcd() {
    return `${generateSentence()}${await generateXkcdLink()}`
}

generateFavoriteXkcd().then(result => console.log(result))