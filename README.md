# CODE CHALLENGE

You are encouraged to use Moment.js. Using Moment.js, implementation of the functions should be less than 10 lines of code. The expected time to completion is 4 hours or less. It would be better to submit one complete function with full test coverage rather than three complete functions with no additional tests.

Moment.js and Jest have already been added to the project. You should not need to install any additional node modules beyond what is in the `package.json`. A sample test case for each function has been provided. Please create a Github repository for this code challenge and commit your code after completing each objective.

## Setup

```
npm install
npm run test
```

## Objectives

- [x] Complete `closeToNow` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `closeToNow` function
- [x] Complete the `closestDate` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `closestDate` function
- [x] Complete the `formatTimestamp` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `formatTimestamp` function

## Questions

- Did you make any changes to the functions after thinking through test cases?
Yes, I had to rewrite a big part of the second one.
I was trying to compare the current time and the start of day but I was accidentally re-writing my variable so it was only ever returning 0. It looked like ti was working when testing a time before noon but it broke for any time after noon. I had to try a few things once i figured out that it was always calculating 0 I knew where the problem was.

- Describe the experience of writing tests. Is this your first time writing unit tests?
It's my second time writing tests. we had one class that covered it. It was a little tough because I didn't have console logs to track what the data was at different stages but worked out a temporary fix for that and got through it and identified some areas i should continue to look into.