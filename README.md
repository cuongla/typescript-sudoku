# Sudoku Game

> A sudoku game application works on both website and mobile web app.

![Demo Images](https://i.imgur.com/k2hj8h5.png)

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Unit Test](#unit-test)
- [Status](#status)
- [Inspiration](#inspiration)
- [Author](#author)

## General info

The project is a practice of using styled-components, wrting typescript and unit testing with React.

## Technologies

- React - version 17.0.1
- Redux - version 7.2.2
- Redux-Persist - version 6.0.0
- Typescript - version 4.0.3
- Jest - version 26.0.15

## Setup

\*You can either use **npm** or **yarn**

1. Download the project through https://github.com/tinla94/typescript-sudoku

2. Run **npm run build** or **yarn build**

3. To start the application, run **npm start**

## Unit Test

I use _Jest_ library for my unit testing. _Jest_ is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.

To start thet test, run **npm run test**

Here is a code exmaple of a test:
`
describe('shuffle', () => {
it('should be an array with same length after being shuffle', () => {
const array = [1, 2, 3];
shuffle(array);
expect(array).toHaveLength(3);
})

    it('returns and array with the same elements after being shuffled', () => {
        const array = [1, 2, 3];
        shuffle(array);
        expect(array).toContain(1);
        expect(array).toContain(2);
        expect(array).toContain(3);
    })

})
`

## Status

Project is _finished_. There are still rooms to improve the app if like adding timer, compete to see who solve the grids faster, etc.

## Inspiration

Building and visualizing Sudoku Game Using Pygame:
https://www.geeksforgeeks.org/building-and-visualizing-sudoku-game-using-pygame/

## Author

Created by _Cuong La(Tin)_
