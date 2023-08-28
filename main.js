"use strict";

function generateMonth( monthName, nbDays)
{
    let monthHTML = document.createElement("section");
    let header = document.createElement("h2");
    header.textContent = monthName;
    monthHTML.appendChild(header);
    let i = 0;
    while (i<nbDays) {
        let day = document.createElement("article");
        day.textContent = i+1;
        monthHTML.appendChild(day);
        i++;
    }
    return monthHTML;
}

function createCalendar()
{
    let calendar = document.createElement("main");
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let i = 0;
    while (i<months.length) {
        const month = generateMonth(months[i], numberOfDays[i]);
        calendar.appendChild(month);
        i++;
    }

    return calendar;
}

window.addEventListener(
    'DOMContentLoaded',
    function (event) {
        const calendrier = createCalendar();
        console.log(calendrier);
        document.querySelector('#calendar').innerHTML = calendrier.innerHTML;
});