
//WAP to check  whether the given number is prime or not.

function isprime(num) {
    if (num <= 1 || isNaN(num)) {
        return `Entered number is '${num}': Invalid Input, it is not a prime number`;

    } else {
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
                return `Entered number is '${num}': it is not a prime number`;
            }
        }
        return `Entered number is '${num}': it is a prime number `;
    }
}

console.log(isprime(2));
console.log(isprime(3));
console.log(isprime(11));
console.log(isprime(21));
console.log(isprime(0));
console.log(isprime(-3));
console.log(isprime(127));
console.log(isprime(128));


