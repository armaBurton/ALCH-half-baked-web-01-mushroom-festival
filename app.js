// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import findFriendByName from './data-utils.js';
import { namesArr } from './namesArr.js';
 
const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 1
    },
    {
        name: 'Sarah',
        satisfaction: 2
},
    {
        name: 'Missael',
        satisfaction: 3
    },
    {
        name: 'Soraya',
        satisfaction: 4
    }
];

function getName(){
    let randoNumbo = Math.ceil(Math.random() * 4946);
    return namesArr[randoNumbo];
}

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    // create a new friend object
    const friend = {
        name: friendInputEl.value || getName(),
        satisfaction: Math.floor(Math.random() * 5)
    };
    // push it into the friends state array, passed in as an argument
    friendData.push(friend);
    // reset the input
    friendInputEl.value = ``;
    // display all the friends (use a function here)
    displayFriends();
});

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        // alert('found a mushroom!');
        console.log(`Found a mushroom!`);
        mushroomCount++;
        displayMushrooms();
    } else {
        // alert('no luck!');
        console.log(`No Luck!`);
    }
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        friendEl.addEventListener(`click`, () => {
            findFriendByName(friend.name, friendData);
            // this is a clickable list, so . . .
            // add an event listener to each friend
            // on click, go find the clicked friend in state
            // and if the friend's satisfaction level is below 3 and you have mushrooms left
            if (friend.satisfaction === 5){
                //do nothing
            } else if (mushroomCount > 0){
                friend.satisfaction++;
                mushroomCount--;
            }

            displayMushrooms();
            displayFriends();
        });

        // increment the friends satisfaction and decrement your mushrooms
        // mushroomCount--;
        // then display your friends and mushrooms with the updated state
        
        friendsEl.append(friendEl);
        // append the friendEl to the friends list in DOM
    }
    
}

function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroom = renderMushroom();
        mushroomsEl.append(mushroom);
    }
}

displayFriends();
displayMushrooms();