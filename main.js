"use strict";

function generateMonth( monthName, nbDays)
{
    let monthHTML = "";

    return monthHTML;
}

function createCalendar()
{
    let calendar = "";
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let i = 0;
    while (i<months.length) {
        const month = generateMonth(months[i], numberOfDays[i]);
        console.log(month);
        i++;
    }

    return calendar;
}

window.addEventListener(
    'DOMContentLoaded',
    function (event) {
        const calendrier = createCalendar();
        console.log(calendrier);
});