import createPollDisplay from './PollDisplay.js';

export default function createVoter(root) {
    // reference DOM
    const pollDisplay = root.querySelector('.poll-display');

    // event listeners

    // should return its component render function
    return ({ currentPoll }) => {
        const hidden = !!currentPoll;
        root.classList.toggle('hidden', !hidden);

        createPollDisplay(currentPoll, pollDisplay);
    };
}
