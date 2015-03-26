var palindromes = [];

var checker = function(array){
  array.map(function(phrase){
    palindromes.push(phrase == phrase.toLowerCase.split('').reverse().join(''));
  });
};
