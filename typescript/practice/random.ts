import { range } from "../utils"

// npx ts-node filename.ts
type LinkedList = {
    val: number;
    next?: LinkedList;
}

const test: LinkedList = { val: 22, next: { val: 3 } }


// ------------------------------ last survivor circle -------------- //
const lastSurvivor = () => {
    const circle = range(0, 19);
    console.log(circle)

    let pos_to_kill = 1;
    while (circle.length > 1) {
        circle.splice(pos_to_kill, 1);
        pos_to_kill = (pos_to_kill + 1) % circle.length;
    }
    console.log(circle)
}
// lastSurvivor();
// ------------------------------ last survivor circle -------------- //
