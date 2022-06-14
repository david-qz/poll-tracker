import createPollDisplay from './PollDisplay.js';

export default function createVoteCounter(root, { handleVote, handleUnvote, handleEndPoll }) {
    // reference DOM
    const pollDisplay = root.querySelector('.poll-display');
    const [voteOneButton, voteTwoButton, unvoteOneButton, unvoteTwoButton, endPollButton] = root.querySelectorAll('button');

    // event listeners
    voteOneButton.addEventListener('click', () => handleVote(0));
    voteTwoButton.addEventListener('click', () => handleVote(1));
    unvoteOneButton.addEventListener('click', () => handleUnvote(0));
    unvoteTwoButton.addEventListener('click', () => handleUnvote(1));
    endPollButton.addEventListener('click', () => handleEndPoll());


    // should return its component render function
    return ({ currentPoll }) => {
        const hidden = !!currentPoll;
        root.classList.toggle('hidden', !hidden);

        createPollDisplay(currentPoll, pollDisplay);
    };
}
