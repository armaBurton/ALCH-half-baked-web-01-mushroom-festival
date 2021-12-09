export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');
    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    // add friend, name, and emoji classes to the appropriate elements
    const outerDiv = document.createElement(`div`);
    outerDiv.id = `outerDiv`;
    outerDiv.classList.add(`outerDiv`);
    const name = document.createElement(`h3`);
    name.id = `name`;
    name.classList.add(`name`);
    const emoji = document.createElement(`p`);
    emoji.id = `emoji`;
    emoji.classList.add(`emoji`);

    // put the friend's name in the nameEl
    name.textContent = friend.name;
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    friend.satisfaction === 1 ? emoji.textContent = `😭` :
        friend.satisfaction === 2 ? emoji.textContent = `😖` :
            friend.satisfaction === 3 ? emoji.textContent = `😐` :
                friend.satisfaction === 4 ? emoji.textContent = `😊` :
                    emoji.textContent = `😁`;
        
    // append the emojiEl and nameEl to the outer div
    outerDiv.append(name, emoji);
    
    // return the outer div
    return outerDiv; 
}