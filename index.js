let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {

    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz");
        document.write('FizzBuzz' + " ");
    } else if (i % 3 === 0) {
    console.log("Fizz");
    document.write('Fizz' + " ");
  } else if (i % 5 === 0) {
    console.log("Buzz");
    document.write('Buzz' + " ");



} else {
    console.log(i);
    document.write(i + " ");
  }
}