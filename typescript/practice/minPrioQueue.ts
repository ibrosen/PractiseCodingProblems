const binSearchForPos = <T>(
    vals: T[],
    toFind: T,
    startIndex: number,
    endIndex: number,
    comparator: (a: T, b: T) => boolean
): number => {
    if (startIndex === endIndex)
        return comparator(vals[startIndex], toFind) ? startIndex + 1 : startIndex

    const searchRange = Math.floor((endIndex - startIndex) / 2);

    const indexToSearch = Math.floor(startIndex + searchRange);
    const valToCheck = vals[indexToSearch];
    if (valToCheck === toFind) {
        return indexToSearch
    }

    return comparator(valToCheck, toFind) ?
        binSearchForPos(vals, toFind, startIndex + searchRange + 1, endIndex, comparator) :
        binSearchForPos(vals, toFind, startIndex, endIndex - searchRange, comparator);
}

export const insert = <T>(queue: T[], toInsert: T, comparator: (a: T, b: T) => boolean) => {
    if (queue.length === 0) {
        queue = [toInsert];
        return;
    }

    const posToInsert = binSearchForPos<T>(queue, toInsert, 0, queue.length, comparator);
    const before = queue.slice(0, posToInsert);
    const after = queue.length > posToInsert ? queue.slice(posToInsert, queue.length) : [];
    return before.concat([toInsert].concat(after))
}

const comp = (a: number, b: number): boolean =>
    a < b;
let queue: number[] = [1, 4, 55, 66]

queue = insert(queue, 41, comp);