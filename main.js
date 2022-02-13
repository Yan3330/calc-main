let salary = document.getElementById('income-salary')
let freelance = document.getElementById('income-freelance')
let extra1 = document.getElementById('income-extra-1')
let extra2 = document.getElementById('income-extra-2')

let flat = document.getElementById('costs-flat')
let house_services = document.getElementById('costs-house-services')
let transport = document.getElementById('costs-transport')
let credit = document.getElementById('costs-credit')

let monthInput = document.getElementById('total-month')
let dayInput = document.getElementById('total-day')
let yearInput = document.getElementById('total-year')

let totalMonth, totalDay, totalYear;

const moneyBoxRange = document.getElementById('money-box-range')
    accumulationInput = document.getElementById('accumulation')
    totalSpend = document.getElementById('spend')

let accumulation = 0
let totalPrecents = 0

const inputs = document.querySelectorAll('.input')

for (input of inputs) {
    input.addEventListener('input', () => {
        countingAviableMoney();
        calculationPrecents();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAviableMoney = () => {
    const totalPerMonth = strToNum(salary) + strToNum(freelance) + strToNum(extra1) + strToNum(extra2)
    const totalCosts = strToNum(flat) + strToNum(house_services) + strToNum(transport) + strToNum(credit)
    
    totalMonth = totalPerMonth - totalCosts;
    monthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPrecents();
})

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    totalSpend.value = totalMonth - accumulation;
    totalDay = (totalSpend.value / 30).toFixed();
    dayInput.value = totalDay;

    totalYear = accumulation * 12;
    yearInput.value = totalYear
}