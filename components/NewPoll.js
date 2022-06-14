export default function createNewPoll(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    return ({ currentPoll }) => {
        const hidden = !!currentPoll;
        root.classList.toggle('hidden', hidden);
    };
}
