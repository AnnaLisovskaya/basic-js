const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {let month = 0;
  if ((typeof date !== 'object') || (typeof date ==='undefined')) { return 'Unable to determine the time of year!' }
  else {
    month= date.getUTCMonth();
    if (date.constructor.toString().indexOf('Date') > -1) {
      if (((month >= 0) && (month <= 1)) || (month === 11)) {
        return 'winter';
      } else if (month >= 2 && month <= 4) {
        return 'spring';
      } else if (month >= 5 && month <= 7) {
        return 'summer';
      } else if (month >= 8 && month <= 10) {
        return 'autumn';
      }
    } else { return 'Error'; };
  }
};
