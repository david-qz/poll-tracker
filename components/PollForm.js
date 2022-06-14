export default function createPollForm(root, { handleNewPoll }) {
    // reference DOM
    const form = root.querySelector('form');

    // event listeners
    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        handleNewPoll(
            formData.get('question'),
            formData.get('choice1'),
            formData.get('choice2')
        );

        form.reset();
    });

    // should return its component render function
    return ({ currentPoll }) => {
        const hidden = !!currentPoll;
        root.classList.toggle('hidden', hidden);
    };
}
