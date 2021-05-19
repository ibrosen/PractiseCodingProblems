export const range = (start, len): number[] => {
    let list = [];
    for (let i = start; i < len; i++) {
        list.push(i)
    }
    return list;
}