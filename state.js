// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    state.currentPoll = null;
    state.completedPolls = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
