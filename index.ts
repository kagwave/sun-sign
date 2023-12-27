enum SunSigns {
  Aries = 'aries',
  Taurus = 'taurus',
  Gemini = 'gemini',
  Cancer = 'cancer',
  Leo = 'leo',
  Virgo = 'virgo',
  Libra = 'libra',
  Scorpio = 'scorpio',
  Sagittarius = 'sagittarius',
  Capricorn = 'capricorn',
  Aquarius = 'aquarius',
  Pisces = 'pisces',
}

interface SunSignResult {
  sign: SunSigns;
  element: string;
}

const sunSigns: SunSigns[] = Object.values(SunSigns);

const getSunSign = (month?: string | number, day?: string | number): SunSignResult | SunSigns[] => {
  
  // Error handling
  if (!month && !day) {
    return sunSigns;
  } else if (!month || !day) {
    throw new Error('Missing parameters.');
  } else if (typeof month === 'number' && (month < 1 || month > 12)) {
    throw new Error('Invalid month parameter.');
  }

  // Convert params to number
  if (typeof month === 'string') month = parseFloat(month);
  if (typeof day === 'string') day = parseFloat(day);

  let sunSign: SunSigns;
  let element: string = '';

  // Find sign using switch statement
  switch (month) {
    case 1:
      sunSign = day >= 20 ? SunSigns.Aquarius : SunSigns.Capricorn;
      break;
    case 2:
      sunSign = day >= 19 ? SunSigns.Pisces : SunSigns.Aquarius;
      break;
    case 3:
      sunSign = day >= 21 ? SunSigns.Aries : SunSigns.Pisces;
      break;
    case 4:
      sunSign = day >= 20 ? SunSigns.Taurus : SunSigns.Aries;
      break;
    case 5:
      sunSign = day >= 21 ? SunSigns.Gemini : SunSigns.Taurus;
      break;
    case 6:
      sunSign = day >= 21 ? SunSigns.Cancer : SunSigns.Gemini;
      break;
    case 7:
      sunSign = day >= 23 ? SunSigns.Leo : SunSigns.Cancer;
      break;
    case 8:
      sunSign = day >= 23 ? SunSigns.Virgo : SunSigns.Leo;
      break;
    case 9:
      sunSign = day >= 23 ? SunSigns.Libra : SunSigns.Virgo;
      break;
    case 10:
      sunSign = day >= 23 ? SunSigns.Scorpio : SunSigns.Libra;
      break;
    case 11:
      sunSign = day >= 22 ? SunSigns.Sagittarius : SunSigns.Scorpio;
      break;
    case 12:
      sunSign = day >= 22 ? SunSigns.Capricorn : SunSigns.Sagittarius;
      break;
    default:
      throw new Error('Invalid month parameter.');
  }

  // Find element
  if (sunSign === SunSigns.Aquarius || sunSign === SunSigns.Libra || sunSign === SunSigns.Gemini) {
    element = 'air';
  } else if (sunSign === SunSigns.Pisces || sunSign === SunSigns.Scorpio || sunSign === SunSigns.Cancer) {
    element = 'water';
  } else if (sunSign === SunSigns.Taurus || sunSign === SunSigns.Virgo || sunSign === SunSigns.Capricorn) {
    element = 'earth';
  } else if (sunSign === SunSigns.Aries || sunSign === SunSigns.Leo || sunSign === SunSigns.Sagittarius) {
    element = 'fire';
  }

  return { sign: sunSign, element: element };
};

export default getSunSign;
