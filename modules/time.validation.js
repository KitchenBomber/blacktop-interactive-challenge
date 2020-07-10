const moment = require('moment-timezone');

/**
 * If the timestamp is within 30 seconds of the current
 * time, return true. Otherwise, return false.
 * 
 * Input '2020-07-01T16:03:18.021Z' -> output: depends on current time (true or false)
 * 
 * @param {String} timestamp
 * @returns {Boolean} whether the timestamp is within 30 seconds of now
 */
function closeToNow(timestamp) {
    // YOUR CODE HERE
    let dateToCompare = moment(timestamp);
    let secondsFromNow = moment().diff(dateToCompare, 'seconds')
    if (secondsFromNow < 30 && secondsFromNow > -30){
        return true
    } else {
        return false
    }
}

/**
 * Returns the previous days date if before 12pm CST or the
 * date of the timestamp if after 12pm CST. 
 * 
 * Input: '2020-07-01T16:03:18.021Z' -> output: '2020-06-30'
 * Input: '2020-07-01T17:03:18.021Z' -> output: '2020-07-01'
 * Input: '2020-07-01T12:03:18.021-05:00' -> output: '2020-07-01'
 * 
 * @param {String} timestamp 
 * @returns {String} calulated date in the format 'YYYY-MM-DD'
 */
function closestDate(timestamp) {
    // YOUR CODE HERE
    let dateToCheck = moment(timestamp);
    let lastMidnight = moment(timestamp).startOf('day');
    let hoursSinceMidnight = dateToCheck.diff(lastMidnight, 'hours', true);
   if (hoursSinceMidnight > 12 ){
       return dateToCheck.format('YYYY-MM-DD')
   } else {
      return lastMidnight.subtract({ days: 1 }).format('YYYY-MM-DD')
   }
}

/**
 * Takes in a timestamp and timezone, returns a string formatted for
 * that timezone. https://momentjs.com/timezone/
 *
 * Input: '2020-07-01T16:03:18.021Z', 'US/Central' -> output: 'July 1st, 2020 at 11:03 am'
 *
 * @param {String} timestamp
 * @returns {String} calulated date in the format 'MMMM Do, YYYY [at] h:mm a'
 */
function formatTimestamp(timestamp, timezone) {
    // YOUR CODE HERE
    return moment(timestamp).tz(timezone).format('MMMM Do, YYYY [at] h:mm a')

}

module.exports = {
    closeToNow,
    closestDate,
    formatTimestamp,
}