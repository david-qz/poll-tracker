export default function createPollDisplay(poll, root) {
    if (!poll) {
        return;
    }

    if (!root) {
        root = document.createElement('div');
    }
    root.innerHTML = '';
    root.classList.add('poll-display');

    const appendSpan = (text, classes) => {
        const span = document.createElement('span');
        span.textContent = text;
        span.classList = classes;
        root.append(span);
    };

    appendSpan(poll.question, 'question');
    appendSpan(poll.option1.response, 'option one');
    appendSpan(poll.option1.votes, 'votes one');
    appendSpan(poll.option2.response, 'option two');
    appendSpan(poll.option2.votes, 'votes two');

    return root;
}
