let treeNodes = [
   {parent: null, id: 0},
   {parent: 0, id: 1},
   {parent: 0, id: 2},
   {parent: 1, id: 3},
   {parent: 1, id: 4},
   {parent: 2, id: 5},
   {parent: 4, id: 6}
   // { parent: 2, id: 8 },
   // { parent: 3, id: 5 },
   // { parent: 8, id: 7 },

]
const reduceTree = (treeNodes, parent = null) =>
   treeNodes.reduce((tree, currentItem) => {
      if (currentItem.parent === parent) {
         tree[currentItem.id] = reduceTree(treeNodes, currentItem.id);
      }
      return tree;
   }, {})

console.log(JSON.stringify(reduceTree(treeNodes), null, 1));