exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	//console.log(num >>> bit);
  	return (num >>> (bit-1))&1;
  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
