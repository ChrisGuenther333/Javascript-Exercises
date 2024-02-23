const displayBid = document.querySelector('div');
const bid1 = document.querySelector('.bid1');
const btn1 = document.querySelector('.bid1Btn');
const bid2 = document.querySelector('.bid2');
const btn2 = document.querySelector('.bid2Btn');

onStart();
const bidArray = []
let bidCount = 0

btn1.addEventListener('click', () => {
    if (bid1.value !== '' && bidCount !== 2) {
        bidArray.push(bid1.value);
        bid1.value = '';
        bidCount ++;
        localStorage.setItem('bid1', bidArray[0]);
        display();
    }
    else {
        window.alert('You can only enter 2 bids!')
    }
});
btn2.addEventListener('click', () => {
    if (bid2.value !== '' && bidCount !== 2) {
        bidArray.push(bid2.value);
        bid2.value = '';
        bidCount ++;
        localStorage.setItem('bid2', bidArray[1]);
        display();
    }
    else {
        window.alert('You can only enter 2 bids!')
    }
});

function display() {
    displayHTML = ''
    bidArray.forEach(item => {
        displayHTML += `Bid: $${item}<br>`;
    });
    displayBid.innerHTML = displayHTML;
}
function onStart() {
    const savedBid1 = localStorage.getItem('bid1')
    const savedBid2 = localStorage.getItem('bid2')

    displayHTML = ''
    displayHTML += 'Your previous bids were:<br>';
    displayHTML += `$${savedBid1}<br>`
    displayHTML += `$${savedBid2}`

    displayBid.innerHTML = displayHTML;
}