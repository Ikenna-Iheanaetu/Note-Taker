// Variables 

var entryText = document.querySelector('#head-entry-text');

var addNote = document.querySelector('.addNote');

var cards = document.querySelector('#cards');


// Event Listeners 

addNote.addEventListener('click', function () {
    var cardNote = document.createElement('div');
    cardNote.classList.add('card-note');

    var cardNoteText = document.createElement('p');
    cardNoteText.classList.add('para-1')
    cardNoteText.innerText = entryText.value;
    cardNote.appendChild(cardNoteText);

    var cardBreak = document.createElement('br');
    cardNote.appendChild(cardBreak);

    var cardButton_2 = document.createElement('button')
    cardButton_2.classList.add('btn');
    cardButton_2.innerText = 'Delete Note';
    cardNote.appendChild(cardButton_2);

    if (entryText.value === ''){
        alert('Type in a note');
    }else{
        cards.prepend(cardNote);
    }

    entryText.value = '';
    
    cardButton_2.addEventListener('click', function(evt) {
        var target = evt.target;
        target.parentElement.remove();
    })
    
});
