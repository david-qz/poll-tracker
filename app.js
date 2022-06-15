// import utilities

// import component creators
import createPollForm from './components/PollForm.js';
import createVoteCounter from './components/VoteCounter.js';
import createPollList from './components/PollList.js';

// import state and dispatch functions
import state, { newPoll, vote, endPoll } from './state.js';

// Create each component:
const PollForm = createPollForm(document.querySelector('#new-poll'), {
    handleNewPoll: (question, choice1, choice2) => {
        newPoll(question, choice1, choice2);
        display();
    }
});

const VoteCounter = createVoteCounter(document.querySelector('#vote-counter'), {
    handleVote: choice => {
        vote(choice, 1);
        display();
    },
    handleUnvote: choice => {
        vote(choice, -1);
        display();
    },
    handleEndPoll: () => {
        endPoll();
        display();
    },
});

const CompletedPollList = createPollList(document.querySelector('#poll-list'));

// Roll-up display function that renders (calls with state) each component
function display() {
    PollForm({ currentPoll: state.currentPoll });
    VoteCounter({ currentPoll: state.currentPoll });
    CompletedPollList({ polls: state.completedPolls });
}

// Call display on page load
display();
