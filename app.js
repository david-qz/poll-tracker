// import utilities

// import component creators
import createNewPoll from './components/NewPoll.js';
import createVoter from './components/Voter.js';

// import state and dispatch functions
import state, { newPoll } from './state.js';

// Create each component:
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const NewPoll = createNewPoll(document.querySelector('#new-poll'), {
    handleNewPoll: (question, option1, option2) => {
        newPoll(question, option1, option2);
        display();
    }
});

const Voter = createVoter(document.querySelector('#voter'));

// Roll-up display function that renders (calls with state) each component
function display() {
    NewPoll({ currentPoll: state.currentPoll });
    Voter({ currentPoll: state.currentPoll });
}

// Call display on page load
display();
