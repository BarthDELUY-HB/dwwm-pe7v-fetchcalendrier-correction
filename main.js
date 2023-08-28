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

function fetchHolidays()
{
    let url = 'https://date.nager.at/api/v3/PublicHolidays/2023/fr';
    fetch(url)
    .then((response) => { // Code appelé quand le navigateur reçoit la réponse
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        //document.querySelector('#calendar > section:nth-child(4) > article:nth-child(10)')
        console.table(json)
    }) // Code appelé si la réponse est OK
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}


window.addEventListener(
    'DOMContentLoaded',
    function (event) {
        const calendrier = createCalendar();
        console.log(calendrier);
        document.querySelector('#calendar').innerHTML = calendrier.innerHTML;
        fetchHolidays();
});