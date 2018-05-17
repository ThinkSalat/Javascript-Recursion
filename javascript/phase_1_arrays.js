//Array#uniq


Array.prototype.uniq = function() {
  let arr = [];
  this.forEach(el => {
    if (arr.includes(el)) {
      return;
    }
    arr.push(el);
  });
  return arr;
}

// Array twoSum

Array.prototype.twoSum = function () {
  let pairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j])
      }
    }
  }
  return pairs;
}

// Array transpose 

Array.prototype.transpose = function () {
  let result = [];
  for (let i = 0; i < this[0].length; i++) {
    result.push([])
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0].length; j++) {
      result[j][i] = this[i][j];
    }
  }  
  return result;
};

//Array#myEach 

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

printFunc = el => console.log(el);

//#myMap
squareFunc = el => el * el;

Array.prototype.myMap = function (callback) {
  let mapArr = [];
  this.myEach(el => mapArr.push(callback(el)));
  return mapArr;
};

//Array#myReduce
sumFunc = (el) => {
  return acc + el;
}

Array.prototype.myReduce = function (callback, initial) {
  let result;
  let acc = initial;
  let i = 0;
  if (initial === undefined) {
    acc = this[0];
    i++;
  }
  while (i < this.length) {
    acc = callback(acc,this[i]);
    i++;
  }
  return acc;
};












//