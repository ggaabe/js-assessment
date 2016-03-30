exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
  	return constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var properties = [];
  	Object.keys(obj).forEach(function(key, index){
  		console.log(index);
  		properties.push(key + ': ' + obj[key]);
  	});
  	return properties;
  }
};
