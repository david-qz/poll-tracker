import state, {
    initialize,
    newPoll,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('initial state', (expect) => {
    expect.deepEqual(state, {
        currentPoll: null,
        completedPolls: [],
    });
});

test('newPoll()', (expect) => {
    newPoll('pizza', 'yes', 'no');

    expect.deepEqual(state.currentPoll, {
        question: 'pizza',
        option1: {
            response: 'yes',
            votes: 0,
        },
        option2: {
            response: 'no',
            votes: 0,
        },
    });
});
