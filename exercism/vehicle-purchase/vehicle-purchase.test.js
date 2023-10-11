import {needsLicense, chooseVehicle, calculateResellPrice} from './vehicle-purchase';

describe('vehicle-purchase functionality test', () => {
    describe('needsLicense', () => {
        it("should not require a license", () => {
            expect(needsLicense('bike')).toBe(false)
        })

        it('should require a license', () => {
            expect(needsLicense('car')).toBe(true)
        })

        it('should require a license', () => {
            expect(needsLicense('truck')).toBe(true)
        })
    });

    describe('chooseVehicle', () => {
        it('should return Toyota', () => {
            expect(chooseVehicle('Wuling Hongguang', 'Toyota Corolla')).toBe("Toyota Corolla is clearly the better choice.")
        });

        it('should return Volkswagen Beetle', () => {
            expect(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf')).toBe("Volkswagen Beetle is clearly the better choice.")
        });
    });

    describe('calculateResellPrice', () => {
        it('should return 32000', () => {
            expect(calculateResellPrice(40000, 2)).toBe(32000)
        });

        it('should return 20000', () => {
            expect(calculateResellPrice(40000, 12)).toBe(20000)
        });

        it('should return 17500', () => {
            expect(calculateResellPrice(25000, 7)).toBe(17500)
        });
    });
})