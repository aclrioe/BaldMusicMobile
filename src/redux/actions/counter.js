const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

function increment () {
    return { type: INCREMENT }
}

function decrement () {
    return { type: DECREMENT }
}

function reset () {
    return { type: RESET }
}
export {
    INCREMENT,
    DECREMENT,
    RESET,
    increment,
    decrement,
    reset
}