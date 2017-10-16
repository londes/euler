// we know the height of the tree already
let tree = [];
let level = [];
let height = 4;
let width = 1;

// we assume this input is a tree
let treeNums = [3,7,4,2,4,6,8,5,9,3];

//converts array of nums to array of arrays in a tree format
function convertNumsToTree(numArray) {
  let loc = 0;
  for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        level.push(numArray[loc]);
        loc++;
      }
      tree.push(level);
      level = [];
      width++;
  }
  return tree;
}

// converts tree array to array of objects with tree relationships (is this necessary?)
function buildRelations(treeArray) {
  return;
}

console.log(convertNumsToTree(treeNums));
