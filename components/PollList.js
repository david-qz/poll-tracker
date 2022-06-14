import createPollDisplay from './PollDisplay.js';

export default function createPollList(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    return ({ polls }) => {
        root.innerHTML = '';

        for (const poll of polls) {
            root.append(createPollDisplay(poll));
        }
    };
}
