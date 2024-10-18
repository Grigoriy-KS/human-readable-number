module.exports = function toReadable (number) {
  switch (true) {
    case (number === 0):
        return 'zero';
        break;
    case (number === 1):
        return 'one';
        break;
    case (number === 2):
        return 'two';
        break;
    case (number === 3):
        return 'three';
        break;
    case (number === 4):
        return 'four';
        break;
    case (number === 5):
        return 'five';
        break;
    case (number === 6):
        return 'six';
        break;
    case (number === 7):
        return 'seven';
        break;
    case (number === 8):
        return 'eight';
        break;
    case (number === 9):
        return 'nine';
        break;
    case (number === 10):
        return 'ten';
        break;
    case (number === 11):
        return 'eleven';
        break;
    case (number === 12):
        return 'twelve';
        break;
    case (number === 13):
        return 'thirteen';
        break;
    case (number === 14):
        return 'fourteen';
        break;
    case (number === 15):
        return 'fifteen';
        break;
    case (number === 16):
        return 'sixteen';
        break;
    case (number === 17):
        return 'seventeen';
        break;
    case (number === 18):
        return 'eighteen';
        break;
    case (number === 19):
        return 'nineteen';
        break;
    case (number === 20):
        return 'twenty';
        break;
    case (number > 20) && (number < 30):
        return `twenty ${toReadable(number % 10)}`;
        break;
    case (number === 30):
        return 'thirty';
        break;
    case (number > 30) && (number < 40):
        return `thirty ${toReadable(number % 10)}`;
        break;
    case (number === 40):
        return 'forty';
        break;
    case (number > 40) && (number < 50):
        return `forty ${toReadable(number % 10)}`;
        break;
    case (number === 50):
        return 'fifty';
        break;
    case (number > 50) && (number < 60):
        return `fifty ${toReadable(number % 10)}`;
        break;
    case (number === 60):
        return 'sixty';
        break;
    case (number > 60) && (number < 70):
        return `sixty ${toReadable(number % 10)}`;
        break;
    case (number === 70):
        return 'seventy';
        break;
    case (number > 70) && (number < 80):
        return `seventy ${toReadable(number % 10)}`;
        break;
    case (number === 80):
        return 'eighty';
        break;
    case (number > 70) && (number < 80):
        return `eighty ${toReadable(number % 10)}`;
        break;
    case (number === 80):
        return 'eighty';
        break;
    case (number > 80) && (number < 90):
        return `eighty ${toReadable(number % 10)}`;
        break;
    case (number === 90):
        return 'ninety';
        break;
    case (number > 90) && (number < 100):
        return `ninety ${toReadable(number % 10)}`;
        break;    
    case (number >= 100) && (number < 1000):
        return number % 100 === 0 ? `${toReadable((number - number % 100) / 100)} hundred` : `${toReadable((number - number % 100) / 100)} hundred ${toReadable(number % 100)}`;
        break;
    default:
        console.log('Incorrect input data');
        break;
  }
}
