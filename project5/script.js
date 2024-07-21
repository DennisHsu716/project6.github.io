var selectTb = document.querySelector('#choose-tb');
var selectDb = document.querySelector('#choose-db');
var inputTb = document.querySelector('#input-tb');
var inputDb = document.querySelector('#input-db');
var swapBtn = document.querySelector('.swapBtn');
var rateData = document.querySelector('.rate');

// const selectTb = document.getElementById('#choose-tb')
// const selectDb = document.getElementById('#choose-db')
// const inputTb = document.getElementById('#input-tb')
// const inputDb = document.getElementById('#input-db')
// const swapBtn = document.getElementById('.swapBtn')
// const rateData = document.getElementById('.rate')

function calculate(){
    // const selectTb = selectTb.value
    // const selectDb = selectDb.value


    fetch('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(data => {
        // const rate = data.conversion_rates[selectDb];
        // rateData.innerText = '1 ${selectTb} = ${rate} * ${selectDb}'
        
        rate = data.rates[selectDb.value] / data.rates[selectTb.value];
        rateData.innerText = '1${selectTb.value}=${rate} * ${selectDb.value}';
        inputDb.value = (inputTb.value*rate).toFixed(2);
    });
}

selectTb.addEventListener('change', calculate)
selectDb.addEventListener('change', calculate)
inputTb.addEventListener('input',calculate)
inputDb.addEventListener('input',calculate)

swapBtn.addEventListener('click', () => {
    var temp = selectDb.value;
    selectDb.value = selectTb.value;
    selectTb.value = temp;
    calculate();
});

calculate();