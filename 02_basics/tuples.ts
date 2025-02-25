// specialized array with some restrictions

const user: string[] = ['srikar', 'chai']

// in tuple we has a specific order like below one
let tuppleUser: [string, number, boolean]

// all values should be in the same order as specified, no back and forth.
tuppleUser = ['srikar', 1, true]
// And also there should not be any extra thing pushed or added to tuple

// tuppleUser = ['srikar', 1, true, 'd'] // this gives error because we are adding an extra string which is not allowed

let rgb: [number, number, number] = [123, 255, 321]