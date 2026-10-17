import { quotes } from './quotes.js'

console.log(quotes.length)

const btn = document.getElementById('btn')
const textBox = document.getElementById('textBox')

function generovat() {
    let r = Math.floor(Math.random() * quotes.length);
    textBox.innerText = ('"' + quotes[r] + '"')
}

btn.addEventListener('click', generovat);