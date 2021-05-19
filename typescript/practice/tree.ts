type BinTree = {
    readonly value: number;
    left?: BinTree;
    right?: BinTree;
}

const insertVal = (tree: BinTree, val: BinTree["value"]) => {
    if (val >= tree.value) {
        if (tree.right) {
            insertVal(tree.right, val);
        } else {
            tree.right = { value: val }
        }
    } else {
        if (tree.left) {
            insertVal(tree.left, val)
        } else {
            tree.left = { value: val }
        }
    }
}
const currNodeString = (tree: BinTree) => {
    return `curr node is ${tree.value}, left is
     ${tree.left ? tree.left.value : "undefined"},
      right is ${tree.right ? tree.right.value : "undefined"}`;
}

const printDelete = (tree: BinTree, deleted: BinTree["value"]) => {
    console.log(`deleted ${deleted}, ${currNodeString(tree)}`)
}

const deleteVal = (tree: BinTree, val: BinTree["value"]) => {
    if (tree.value > val) {
        if (!tree.left) {
            console.log("Not in tree")
            return;
        }

        if (tree.left.value === val) {
            tree.left = tree.left.left ?? tree.left.right;
            printDelete(tree, val);
            return;
        } else deleteVal(tree.left, val)
    }
    else if (tree.value < val) {
        if (!tree.right) {
            console.log("Not in tree")
            return;
        }

        if (tree.right.value === val) {
            tree.right = tree.right.left ?? tree.right.right;
            printDelete(tree, val);
            return;
        }
        deleteVal(tree.right, val)
    } else {
        deleteVal(tree, val);
    }
}

const dfsPrint = (tree: BinTree) => {
    console.log(tree.value)
    if (tree.left)
        dfsPrint(tree.left)

    if (tree.right)
        dfsPrint(tree.right)
}

const listNums = [0, 3, 5, 4, 11, 51, 143, 2]
const binTree: BinTree = { value: 3 }
listNums.forEach(val => { insertVal(binTree, val) })
dfsPrint(binTree)
deleteVal(binTree, 51)
