import createPollDisplay from './PollDisplay.js';

export default function createPollList(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    return ({ polls }) => {
        const hidden = !polls.length;
        root.classList.toggle('hidden', hidden);

        root.innerHTML = '';
        for (const poll of polls) {
            const div = createPollDisplay(poll);
            div.classList.add('panel');
            root.append(div);
        }
    };
}
