exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce((a, b) => a + b);
  },

  remove : function(arr, item) {
    return arr.filter(function(currentValueAtIndex){
      return currentValueAtIndex != item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var indexList = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        indexList.push(i);
      }
    }
    for(var i = 0; i < indexList.length; i++){
      arr.splice(indexList[i]-i, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

   truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        count++;
      }
    }
    return count;
  }, 

  duplicates : function(arr) {
    var hashSet = new Set,
    duplicateSet = new Set;
    arr.filter(function(item){
    if (!hashSet.has(item)) {
      hashSet.add(item);
      return true;
     }
     else{
      duplicateSet.add(item);
     }
    });
    return Array.from(duplicateSet);
  },

  square : function(arr) {
    return arr.map(function(x){
      return x*x;
    })
  },

  findAllOccurrences : function(arr, target) {
    var allOccurences = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        allOccurences.push(i);
      }
    }
    return allOccurences;
  }
};
