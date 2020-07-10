const {
    closeToNow,
    closestDate,
    formatTimestamp,
} = require('../modules/time.validation');
const moment = require('moment-timezone');

describe('time validation', () => {
    describe('close to now', () => {
        test('it returns true if passed the current time', (done) => {
            const date = new Date();
            const timestamp = date.toISOString();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        test('it returns true if passed the time 29 seconds ago', (done) =>{
            const date = new moment();
            const timestamp = date.subtract({ seconds: 29 }).toISOString();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        test('it returns false if passed the time 31 seconds ago', (done) => {
            const date = new moment();
            const timestamp = date.subtract({ seconds: 31 }).toISOString();
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns true if passed the time 29 seconds from now', (done) => {
            const date = new moment();
            const timestamp = date.add({ seconds: 29 }).toISOString();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        test('it returns false if passed the time 31 seconds from now', (done) => {
            const date = new moment();
            const timestamp = date.add({ seconds: 31 }).toISOString();
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        // YOUR CODE HERE
    });
    describe('closest date', () => {
        test('it returns the previous day if before noon CST', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = '2020-06-30';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        
        // YOUR CODE HERE
    });
    describe('format timestamp', () => {
        test('it returns a formatted timestamp', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = 'July 1st, 2020 at 11:03 am';
            expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
            done();
        });
        // YOUR CODE HERE
    });
});
