import { Stack } from '@/utils/Stack';

export function SliceArrayByValue(array, value) {
    //console.log(value)
    const index = array.indexOf(value);
    return array.slice(0, index + 1);
}

export function ReverseOrderOfArray(array) {

    let arrayCopy = [];
    let stack = new Stack();

    for (let i = 0; i < array.length; i++) {
        stack.push(array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        arrayCopy[i] = stack.pop();
    }

    return arrayCopy;

}