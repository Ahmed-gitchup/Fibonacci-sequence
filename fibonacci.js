function fibonacci(n) {
    var sequence = [0, 1];  // Initialize the sequence with the first two numbers
    while (sequence.length < n) {
      var nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];  // Calculate the next number in the sequence
      sequence.push(nextNum);  // Add the next number to the sequence
    }
    return sequence;
  }
  
  // Example usage
  var n = parseInt(prompt("Enter the number of Fibonacci numbers to generate: "));
  var fibSeq = fibonacci(n);
  console.log(fibSeq);




  // /////////////////////////////////////////////////////////////////////
  // function fibonacci_js(n) {
  //   var sequence = [0, 1];  // Initialize the sequence with the first two numbers
  //   while (sequence.length < n) {
  //     var nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];  // Calculate the next number in the sequence
  //     sequence.push(nextNum);  // Add the next number to the sequence
  //   }
  //   return sequence;
  // }
  
  // // Example usage in JavaScript
  // var n = parseInt(prompt("Enter the number of Fibonacci numbers to generate: "));
  // var fibSeq_js = fibonacci_js(n);
  // console.log(fibSeq_js);