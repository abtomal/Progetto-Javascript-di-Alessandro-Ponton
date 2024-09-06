
// counter 0
let counterValue = 0;

function updateCounter(value) {
    counterValueElement.textContent = value;

    // cambio colore
    if (value < 0) {
        counterValueElement.style.color = '#ffee00';
    } else if (value > 0) {
        counterValueElement.style.color = '#00ff00';
    } else {
        counterValueElement.style.color = 'white'; 
    }
}

const counterContainer = document.querySelector('.counter-container');

// visualizzare counter
const counterValueElement = document.createElement('div');
counterValueElement.classList.add('counter-value');
counterValueElement.textContent = counterValue;

// pulsante +
const incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.addEventListener('click', function() {
    counterValue++;
    updateCounter(counterValue);
});

// pulsante -
const decrementButton = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.addEventListener('click', function() {
    counterValue--;
    updateCounter(counterValue);
});

// pulsanti + counter
counterContainer.appendChild(decrementButton);
counterContainer.appendChild(counterValueElement);
counterContainer.appendChild(incrementButton);

updateCounter(counterValue);
