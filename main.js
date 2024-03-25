import data from './data.json' assert { type: 'json' };

let chartContainer = document.querySelector('.chart__container');

let values = [];

data.forEach(e => {
    values.push(e.amount);
    chartContainer.innerHTML += `
    <div class="chart__bar">
        <div class="chart__bar--label">${e.amount}</div>
        <div class="chart__bar--day">${e.day}</div>
    </div>`
})

let alturaMaxPx = 160;
let maxValue = Math.max(...values);

    /*
     52.36 -> 200px
     17.45 -> x
     x = (17.45 * 200) / 52.36

     alturaActualPx = (nuevoValor * alturaMaxPx) / maxValue
     */

let bars = document.querySelectorAll('.chart__bar');
bars = [...bars];

bars.forEach(bar => {

    let nuevoValor = (parseFloat(bar.childNodes[1].textContent))

    let alturaActualPx = (nuevoValor * alturaMaxPx) / maxValue;

    bar.style.height = `${alturaActualPx}px`;

    if (nuevoValor === maxValue) {
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

    bar.addEventListener('mouseover', (e) => {
        let label = e.target.childNodes[1];
        label.style.display = 'block';
    })
    bar.addEventListener('mouseout', (e) => {
        let label = e.target.childNodes[1];
        label.style.display = 'none';
    })
})

