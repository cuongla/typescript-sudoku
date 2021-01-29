import { ISquare } from 'typings';

import isInSquare from './'

describe('isInSquare', () => {
    it('returns true when value is in grid square', () => {
        const square: ISquare = [
            [1, 3, 4],
            [8, 2, 7],
            [6, 9, 5],
        ]

        expect(isInSquare({ square, value: 1 })).toBeTruthy()
        expect(isInSquare({ square, value: 9 })).toBeTruthy()
    })

    it('returns false when value is not in grid square', () => {
        const square: ISquare = [
            [0, 3, 4],
            [8, 2, 7],
            [6, 0, 5],
        ]

        expect(isInSquare({ square, value: 1 })).toBeFalsy()
        expect(isInSquare({ square, value: 9 })).toBeFalsy()
    })
})
