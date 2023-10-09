const { canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner } = require('./annalyns-infiltration');

describe('Quest Logic Functions', () => {

    describe('canExecuteFastAttack', () => {
        it('should return true when knight is asleep', () => {
            expect(canExecuteFastAttack(false)).toBe(true);
        });

        it('should return false when knight is awake', () => {
            expect(canExecuteFastAttack(true)).toBe(false);
        });
    });

    describe('canSpy', () => {
        it('should return true if at least one person is awake', () => {
            expect(canSpy(false, true, false)).toBe(true);
            expect(canSpy(true, false, false)).toBe(true);
            expect(canSpy(false, false, true)).toBe(true);
        });

        it('should return false if everyone is asleep', () => {
            expect(canSpy(false, false, false)).toBe(false);
        });
    });

    describe('canSignalPrisoner', () => {
        it('should return true if prisoner is awake and archer is asleep', () => {
            expect(canSignalPrisoner(false, true)).toBe(true);
        });

        it('should return false if either prisoner is asleep or archer is awake', () => {
            expect(canSignalPrisoner(true, true)).toBe(false);
            expect(canSignalPrisoner(false, false)).toBe(false);
            expect(canSignalPrisoner(true, false)).toBe(false);
        });
    });

    describe('canFreePrisoner', () => {
        it('should return true if Annalyn has a dog and the archer is asleep', () => {
            expect(canFreePrisoner(true, false, true, true)).toBe(true);
        });

        it('should return true if Annalyn does not have a dog, everyone except the prisoner is asleep', () => {
            expect(canFreePrisoner(false, false, true, false)).toBe(true);
        });

        it('should return false in other cases', () => {
            expect(canFreePrisoner(true, true, true, true)).toBe(false);
            expect(canFreePrisoner(false, true, false, false)).toBe(false);
            expect(canFreePrisoner(false, false, false, false)).toBe(false);
        });
    });

});