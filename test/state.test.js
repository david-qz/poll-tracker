import state, {
    initialize,
    newPoll,
    vote,
    unvote,
    endPoll,
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

test('vote()', expect => {
    newPoll('pizza', 'yes', 'no');

    vote(1);
    vote(1);
    vote(2);

    expect.deepEqual(state.currentPoll, {
        question: 'pizza',
        option1: {
            response: 'yes',
            votes: 2,
        },
        option2: {
            response: 'no',
            votes: 1,
        },
    });
});

test('unvote()', expect => {
    newPoll('pizza', 'yes', 'no');

    vote(1);
    vote(1);
    vote(2);

    unvote(1);
    unvote(2);

    expect.deepEqual(state.currentPoll, {
        question: 'pizza',
        option1: {
            response: 'yes',
            votes: 1,
        },
        option2: {
            response: 'no',
            votes: 0,
        },
    });
});

test('endPoll()', expect => {
    newPoll('pizza', 'yes', 'no');
    vote(1);
    endPoll();

    expect.deepEqual(state, {
        currentPoll: null,
        completedPolls: [{
            question: 'pizza',
            option1: {
                response: 'yes',
                votes: 1,
            },
            option2: {
                response: 'no',
                votes: 0,
            },
        }],
    });
});
