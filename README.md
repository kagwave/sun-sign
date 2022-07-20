# sun-sign

Use this module to find a sun sign based on a date of birth.

## Installation

NPM:

```bash
npm install sun-sign
```

Yarn:

```bash
yarn add sun-sign
```

## Usage

Import the package first.

```JavaScript
import sunSign from 'sun-sign';
//or
const sunSign = require('sun-sign');
```

The required parameters are month and day, which can be in string or number format.

```JavaScript
const sunSign = (month, day) => {
  return {sign: sign, element: element}
}

//ex.
sunSign(08, 21); // {sign: 'leo', element: 'fire'}
```

You can get a list of sun signs by calling the function with no parameters.

```JavaScript
const signs = sunSign();
console.log(signs); // ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'] 