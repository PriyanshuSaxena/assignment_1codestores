function calculateloan() {
    const amount = document.querySelector('#amount').value;
    const intrest = document.querySelector('#intrest').value;
    const time = document.querySelector('#time').value;
    const intrest_price = (amount * (intrest * 0.01)) / time;
    const premium = ((amount / time) + intrest_price);

    document.querySelector('#premium').innerHTML = 'Premium of Car is Rs.' + premium;
}