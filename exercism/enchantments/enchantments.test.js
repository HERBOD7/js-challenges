import {getItem, insertItemAtTop, removeItem, setItem, removeItemFromTop, removeItemAtBottom} from './enchantments'

describe('enchantments functionality test', () => {

    describe('getItem of an array', () => {
        it('get first item of an array', () => {
            expect(getItem([12,13,14,15], 0)).toBe(12);
        });

        it('get second item of an array', () => {
            expect(getItem([12,13,14,15], 1)).toBe(13);
        });

        it('get last item of an array', () => {
            expect(getItem([12,13,14,15], 3)).toBe(15);
        });
    });

    describe('setItem of an array', () => {
        it('set first item of an array', () => {
            expect(setItem([2,3,6,8], 0, 12)).toEqual([12,3,6,8]);
        });

        it('set second item of an array', () => {
            expect(setItem([2,3,6,8], 1, 23)).toEqual([2,23,6,8]);
        });

        it('set third item of an array', () => {
            expect(setItem([2,3,6,8], 2, 16)).toEqual([2,3,16,8]);
        });
    });

    describe('insert a item to top of an array', () => {
        it('insert 12 item to top of the array', () => {
            expect(insertItemAtTop([2,3,6,8], 12)).toEqual([12, 2,3,6,8]);
        });

        it('insert 3 item to top of the array', () => {
            expect(insertItemAtTop([2,3,6,8], 3)).toEqual([3, 2,3,6,8]);
        });

        it('insert 9 item to top of the array', () => {
            expect(insertItemAtTop([2,3,6,8], 9)).toEqual([9, 2,3,6,8]);
        });
    });

    describe('remove item of an array', () => {
        it('remove first item of the array', () => {
            expect(removeItem([2,3,6,8], 0)).toEqual([3,6,8]);
        });

        it('remove third item of the array', () => {
            expect(removeItem([2,3,6,8], 2)).toEqual([2,3,8]);
        });
    });

    describe('insert a item at the bottom of the array', () => {
        it('insert 0', () => {
            expect(insertItemAtBottom([2,3,6,8], 0)).toEqual([0, 2,3,6,8]);
        });

        it('insert 6', () => {
            expect(insertItemAtBottom([2,3,6,8], 6)).toEqual([6, 2,3,6,8]);
        });
    });

    describe('remove first item of an array', () => {
        it('remove 2', () => {
            expect(removeItemFromTop([2,3,6,8])).toEqual([3,6,8]);
        });

        it('remove 1', () => {
            expect(removeItemFromTop([1,7,3,6,8])).toEqual([7,3,6,8]);
        });
    });

    describe('check size of an array', () => {
        it('size matches', () => {
            expect(checkSizeOfStack([2,3,6,8], 4)).toBe(true);
        });

        it('size does not match', () => {
            expect(checkSizeOfStack([1,2], 3)).toBe(false);
        });
    });
});