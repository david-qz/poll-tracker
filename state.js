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
export function newPoll(question, choice1, choice2) {
    state.currentPoll = {
        question,
        choices: [
            {
                response: choice1,
                votes: 0,
            },
            {
                response: choice2,
                votes: 0,
            },
        ],
    };
}

export function vote(choice) {
    if (state.currentPoll) {
        state.currentPoll.choices[choice].votes++;
    }
}

export function unvote(choice) {
    if (state.currentPoll) {
        state.currentPoll.choices[choice].votes--;
    }
}

export function endPoll() {
    state.completedPolls.push(state.currentPoll);
    state.currentPoll = null;
}
