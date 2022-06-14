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
    appendSpan(poll.choices[0].response, 'option one');
    appendSpan(poll.choices[0].votes, 'votes one');
    appendSpan(poll.choices[1].response, 'option two');
    appendSpan(poll.choices[1].votes, 'votes two');

    return root;
}
