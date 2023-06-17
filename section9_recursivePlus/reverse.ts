function reverse(input: string) {
  if (!input.length) return '';
  return input[input.length - 1] + reverse(input.slice(0, input.length - 1));
}

console.log(reverse('rithmschool'));

//  // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
