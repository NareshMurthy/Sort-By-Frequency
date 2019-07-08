// frequency(['a', 'b', 'b', 'c', 'b', 'a']) # => ['b', 'a', 'c']

const sortbyfrequency = list => {
  let mapObj = {};
  let result = [];
  let resultArr = [];
  list.forEach(element => {
    //loop the through the array and find the occurences ex: {a:2,b:3,c:1}
    if (mapObj[element] === undefined) {
      mapObj[element] = 1;
    } else {
      mapObj[element] = mapObj[element] += 1;
    }
  });

  for (let element in mapObj) {
    //loop through the object and copy the items into an array [[a,2],[b,3],[c,1]]
    resultArr.push([element, mapObj[element]]);
  }

  resultArr.sort(function(a, b) {
    // sort the array based on the occurence (desc) [[b,3],[a,2],[c,1]]
    return b[1] - a[1];
  });

  resultArr.forEach(element => {
    //remove the occurence and keep only the variables [b,a,c]
    element.pop();
    result.push(...element);
  });
  return result;
};
module.exports = sortbyfrequency;
