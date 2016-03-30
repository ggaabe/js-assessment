if (typeof window === 'undefined') {
  exports = global;
  var fs  = require('fs');
}
else {
  exports = window;
}


exports.asyncAnswers = {
  async : function(value) {
  	    return new Promise(function (resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
  	return new Promise(function(resolve, reject){
	  
	function makeArray(json) {
     	//can optimize this with for-loop with less function calls
  		return resolve(json.people.map(function (x) {
          return x.name;
        }).sort());
    };

    function localFile(err, data) {
        resolve(makeArray(JSON.parse(data)));
      }

  	 if(!fs){ 
	  	  var request = new XMLHttpRequest();
	      request.open("GET", url);
	      request.onload = function () {
	      	makeArray(JSON.parse(this.response));
	      };
	      request.send();
  	 }else{
       	fs.readFile(url.slice(1), localFile);
      }
    
  	});
  }
};
