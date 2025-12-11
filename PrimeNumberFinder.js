function findPrimes(lowerBound, upperBound) {
    const primeNumbers = [];

    for (let number = lowerBound; number < upperBound; number++) {
        if (isPrime(number)) {
            primeNumbers.push(number);
        }
    }

    return primeNumbers;
}

function computeSumOfPrimes(primes) {
    let sum = 0;

    if (primes.length > 1) {
        for (const prime of primes) {
            sum += prime;
        }
    } 
    else {
        sum = primes[0];
    }

    return sum;
}

function isPrime(num) {
    if (num < 1) {
        return false;
    }

    if (num === 2 || num === 3 || num === 7) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0 || num % 6 === 0) {
        return false;
    }

    if (num > 5 && num % 5 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}
module.exports = {findPrimes, computeSumOfPrimes, isPrime}