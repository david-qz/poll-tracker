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
        choices: [
            {
                response: 'yes',
                votes: 0,
            },
            {
                response: 'no',
                votes: 0,
            }
        ],
    });
});

test('vote()', expect => {
    newPoll('pizza', 'yes', 'no');

    vote(0);
    vote(0);
    vote(1);

    expect.deepEqual(state.currentPoll, {
        question: 'pizza',
        choices: [
            {
                response: 'yes',
                votes: 2,
            },
            {
                response: 'no',
                votes: 1,
            }
        ],
    });
});

test('unvote()', expect => {
    newPoll('pizza', 'yes', 'no');

    vote(0);
    vote(0);
    vote(1);

    unvote(0);
    unvote(1);

    expect.deepEqual(state.currentPoll, {
        question: 'pizza',
        choices: [
            {
                response: 'yes',
                votes: 1,
            },
            {
                response: 'no',
                votes: 0,
            }
        ],
    });
});

test('unvote() clamps at zero', expect => {
    newPoll('pizza', 'yes', 'no');

    vote(0);
    vote(0);
    vote(1);

    unvote(0);
    unvote(0);
    unvote(0);
    unvote(1);
    unvote(1);


    expect.deepEqual(state.currentPoll, {
        question: 'pizza',
        choices: [
            {
                response: 'yes',
                votes: 0,
            },
            {
                response: 'no',
                votes: 0,
            }
        ],
    });
});

test('endPoll()', expect => {
    newPoll('pizza', 'yes', 'no');
    vote(0);
    endPoll();

    expect.deepEqual(state, {
        currentPoll: null,
        completedPolls: [{
            question: 'pizza',
            choices: [
                {
                    response: 'yes',
                    votes: 1,
                },
                {
                    response: 'no',
                    votes: 0,
                },
            ],
        }],
    });
});
