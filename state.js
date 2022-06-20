// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {

    state.heroMessage = '';
    state.jerkMessage = '';
    state.jerks = [
        {
            name: 'Rudey Vandersteen',
            hp: 4,
        },
        {
            name: 'Mr. Inconsiderate',
            hp: 3,
        }
    ];
    state.jerkHP = [1, 2, 2, 3, 3, 4, 5];
    state.heroHP = 10;
    state.defeatedJerks = 0;

}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

//add jerks to array
export function addJerk(jerk) {
    state.jerks.push(jerk);
}

//update jerk hp

//update hero hp

//update defeatedJerks

//setMessage
export function setHeroMessage(message) {
    state.heroMessage = message;
}

export function setJerkMessage(message) {
    state.jerkMessage = message;
}