import { Stack } from '@/utils/Stack';

export function SliceArrayByValue(array, value) {
    //console.log(value)
    const index = array.indexOf(value);
    return array.slice(0, index + 1);
}

export function ReverseOrderOfArray(array) {
    const arrayCopy = [];
    const stack = new Stack();

    for (const element of array) {
        stack.push(element);
    }
    for (let i = 0; i < array.length; i++) {
        arrayCopy[i] = stack.pop();
    }

    return arrayCopy;
}
