# Mixed messages

## General

I wanted to create a script that generates a conversation between imaginary people who exchange their favourite [XKCD](https://xkcd.com). In order to futureproof this script, it fetches the newest comic's index.

## How does it work?

First, the amount of available comics is fetched by loading xkcd.com and reading out the current comic's permalink. Then, since the comics are consecutively numbered, we can generate a random number between 1 and the number of comics available for each desired person. The person's name is determined by picking a random name from stdlib's [female](https://www.npmjs.com/package/@stdlib/datasets-female-first-names-en) or [male](https://www.npmjs.com/package/@stdlib/datasets-male-first-names-en) name dataset. The sentence templates and names aren't reused until each has been used, since they're removed from the `sentences` /`maleNames`/`femaleNames` list when chosen. Once the list is empty, it's refilled again.

## Installation and usage

```bash
$ cd mixed-messages
$ npm install
$ node main.js
```

  The amount of generated people and opinions can be controlled by changing the argument in the last line.

## Dependencies

- `isomorphic-fetch`
- `jsdom`
- `@stdlib/datasets-male-first-names-en`
- `@stdlib/datasets-female-first-names-en`

## Collaboration

If you'd like to contribute, just create a Pull Request with your additions. The amount of sentence templates is quite poor at the moment, so that would definitely improve the amount of combinations a lot.

