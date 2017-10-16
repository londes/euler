let tree = [];
let level = [];
let height = 4;
let width = 1;

let treeNums = [3,7,4,2,4,6,8,5,9,3];

function convertStringToTree(numArray) {
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


console.log(convertStringToTree(treeNums));

tree.push({});
