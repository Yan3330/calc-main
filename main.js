let salary = document.getElementById('income-salary')
let freelance = document.getElementById('income-freelance')
let extra1 = document.getElementById('income-extra-1')
let extra2 = document.getElementById('income-extra-2')

let flat = document.getElementById('costs-flat')
let house_services = document.getElementById('costs-house-services')
let transport = document.getElementById('costs-transport')
let credit = document.getElementById('costs-credit')

let month = document.getElementById('total-month')
let day = document.getElementById('total-day')
let year = document.getElementById('total-year')

let totalMonth, totalDay, totalYear;

const moneyBoxRange = document.getElementById('money-box-range')
    accumulationInput = document.getElementById('accumulation')
    totalSpend = document.getElementById('spend')

let accumulation = 0
let totalPresents = 0

const inputs = document.querySelectorAll('.input')

for (input of inputs) {
    input.addEventListener('input', () => {
        countingAviableMoney()
        accumulationMoney()
        countingSpend()
    })
}

const countingAviableMoney = () => {
    totalMonth.value = (salary.value*1 + freelance.value*1 + extra1.value*1 + extra2.value*1) - (flat.value*1 + house_services.value*1 + transport.value*1 + credit.value*1)
    countingAviableMoney.value = totalMonth
}

const accumulationMoney = () => {
    accumulationMoney.value = month.value*1 * box_range.value*1 / 100
    accumulationMoney.textContent = accumulationMoney.value
}

const countingSpend = () => {
    countingSpend.value = month.value*1 - accumulation.value*1
    countingSpend.textContent = countingSpend.value
}

month = function () {
    let sum = (salary*1 + freelance*1 + extra1*1 + extra2*1) - (flat*1 + house_services*1 + transport*1 + credit*1)
    value = sum
}

day = function () {
    let sum = month*1 / 30
    day.textContent = sum
}

year = function () {
    let sum = month*1 * 12
    year.textContent = sum
}

accumulation = function() {
    let precents = month*1 * box_range*1 / 100
    accumulation.textContent = precents
}

spend = function() {
    let sum = month*1 - accumulation*1
    spend.textContent = sum
}