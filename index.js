const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

module.exports = (() => {

  const getSunSign = (month, day) => {

    //look for errors first
    if (!month && !day) {
      return signs;
    } else if (!month || !day) {
      return 'Missing parameters';
    } else if (month < 0 || month > 12) {
      return 'Invalid parameters.'
    }

    //convert params to number
    month = parseFloat(month);
    day = parseFloat(day);
      
    let sunSign;
    let element;

    //find sign
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      sunSign = 'aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      sunSign = 'pisces';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      sunSign = 'aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      sunSign = 'taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      sunSign = 'gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      sunSign = 'cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      sunSign = 'leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      sunSign = 'virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      sunSign = 'libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      sunSign = 'scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      sunSign = 'sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      sunSign = 'capricorn';
    } 

    //find element
    if (sunSign === 'aquarius' || sunSign === 'libra' || sunSign === 'gemini') {
      element = 'air';
    } else if (sunSign === 'pisces' || sunSign === 'scorpio' || sunSign === 'cancer'){
      element = 'water';
    } else if (sunSign === 'taurus' || sunSign === 'virgo' || sunSign === 'capricorn'){
      element = 'earth';
    } else if (sunSign === 'aries' || sunSign === 'leo' || sunSign === 'sagittarius'){
      element = 'fire';
    }

    let result = {sign: sunSign, element: element};
    return result;

  }

  return getSunSign;

})()