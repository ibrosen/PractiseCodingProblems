const merge = (a: number[], b: number[]) => {
    const out = [];
    while (a.length || b.length) {
        if (!a.length) {
            out.push(b.shift())
            continue;
        }

        if (!b.length) {
            out.push(a.shift())
            continue;
        }

        if (a[0] <= b[0]) {
            out.push(a.shift())
        } else {
            out.push(b.shift())
        }
    }
    return out;
}

const mergeSort = (list: number[]) => {
    if (list.length === 1)
        return list;

    const partition = Math.floor(list.length / 2);
    return merge(mergeSort(list.slice(0, partition)), mergeSort(list.slice(partition, list.length)));
}

const swap = (list: number[], a: number, b: number) => {
    const aTemp = list[a];

    list[a] = list[b];
    list[b] = aTemp;
}

// const quickSort = (list: number[], lo: number, hi: number) => {
//     if (lo === hi)
//         return;
//     // Partition
//     let localLo = lo;
//     let localHi = hi;
//     const pivot = list[lo];
//     while (localLo < localHi) {
//         while (list[localLo] < pivot)
//             localLo += 1;
//         while (list[localHi] > pivot)
//             localHi -= 1;
//         if (localLo < localHi) {
//             swap(list, localHi, localLo)
//             localLo += 1;
//             localHi -= 1;
//         }
//     }
//     if (lo < localLo)
//         quickSort(list, lo, localLo - 1);
//     if (hi < localHi)
//         quickSort(list, localLo + 1, hi);

// }

const quickSort = (arr: number[], lo, hi) => {
    if (lo === hi)
        return;
    const pivot = arr[Math.floor((lo + hi) / 2)];
    let i = lo;
    let j = hi;

    while (i < j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }

        swap(arr, i, j)
        if (arr[j] > pivot)
            j--;
        else
            i++;
    }

    if (lo < i)
        quickSort(arr, lo, i - 1);
    if (i < hi)
        quickSort(arr, i + 1, hi)

}

const data = [2, 4, 1, 555, 1, 3, 335, 12342, 34]
quickSort(data, 0, data.length - 1)
console.log(data)

