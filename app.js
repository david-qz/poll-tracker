// import utilities

// import component creators
import createPollForm from './components/PollForm.js';
import createVoteCounter from './components/VoteCounter.js';

// import state and dispatch functions
import state, { newPoll, vote, unvote, endPoll } from './state.js';

// Create each component:
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const PollForm = createPollForm(document.querySelector('#new-poll'), {
    handleNewPoll: (question, option1, option2) => {
        newPoll(question, option1, option2);
        display();
    }
});

const VoteCounter = createVoteCounter(document.querySelector('#vote-counter'), {
    handleVote: optionNumber => {
        vote(optionNumber);
        display();
    },
    handleUnvote: optionNumber => {
        unvote(optionNumber);
        display();
    },
    handleEndPoll: () => {
        endPoll();
        display();
    },
});

// Roll-up display function that renders (calls with state) each component
function display() {
    PollForm({ currentPoll: state.currentPoll });
    VoteCounter({ currentPoll: state.currentPoll });
}

// Call display on page load
display();
