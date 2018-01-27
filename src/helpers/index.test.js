import { get_max_number } from './index';

describe('/helpers/index.get_max_number', () => {

    describe('given an empty array', () => {
        it('returns 0', () =>
            expect(get_max_number([])).toEqual(0));
    });

    describe('given an array of numbers', () => {
        it('should return the highest number', () => 
            expect(get_max_number([1, 5, 7])).toEqual(7));
    });
});
