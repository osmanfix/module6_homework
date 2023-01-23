
function isPrime(num) {
    let right = 'число простое';
    let incorrect = 'ответ неверный';
    if (num <= 1 && num > 1000) return incorrect;
    if (num == 2) return right;
    for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return incorrect;
    }
    }
    return right;
    }
console.log(isPrime(1001));

