// import services and utilities
import getRandomItem from './utils.js';

// import component creators
import createAddJerk from '../components/AddJerk.js';
import createMessage from './components/Message.js';
import createJerk from './components/Jerk.js';

// import state and dispatch functions
import state, {
    addJerk,
    setHeroMessage,
    setJerkMessage,
} from './state.js';

// Create each component: 
// - pass in the root element via querySelector

const CreateAddJerk = createAddJerk(document.querySelector('#add-jerk'), {
    handleAddJerk: (name) => {

        const jerk = {
            name,
            hp: getRandomItem(state.jerkHP)
        };
        addJerk(jerk);
        setJerkMessage(jerk.name + ' has arrived with ' + jerk.hp + ' hp and we hate it!');
        display();
    }
});

const CreateJerk = createJerk(document.querySelector('.jerks'));

const CreateMessage = createMessage(document.querySelector('#message'), {
    handleFight: (jerk) => {

        if (jerk.hp <= 0) {
            return;
        }

        if (state.heroHP === 0) {
            return;
        }

        if (Math.random() < 0.75) {
            jerk.hp--;
            setHeroMessage(' You hit!');
            
        }
    }
});


// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateAddJerk({});
    CreateJerk({ jerk: state.jerks });
    CreateMessage({ jerkMessage: state.jerkMessage, heroMessage: state.heroMessage });

}

// Call display on page load
display();
