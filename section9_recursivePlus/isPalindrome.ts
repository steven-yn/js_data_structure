// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(input: string) {
  function reverse(input: string) {
    if (!input.length) return '';
    return input[input.length - 1] + reverse(input.slice(0, input.length - 1));
  }

  const reverseStr = reverse(input);

  return reverseStr === input;
}

console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
