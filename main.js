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

async function generateFavoriteXkcd() {
    const xkcdLink = await generateXkcdLink()
    const sentences = [
        `I really like ${xkcdLink}.`,
        `My favorite is ${xkcdLink}.`,
        `The best definitely is ${xkcdLink}.`,
        `There's no better than ${xkcdLink}.`,
        `No doubt in my mind, ${xkcdLink} is the best.`,
        `Well, I believe ${xkcdLink} to be the GOAT.`
    ]
    const sentenceIndex = randint(sentences.length-1)
    return sentences.splice(sentenceIndex, 1)[0]
}

async function generateConversation(sentenceAmount) {
    let result
    for (let i = 0; i < sentenceAmount; i++) {
        result = await generateFavoriteXkcd()
        console.log(result)
    }
}

generateConversation(7)