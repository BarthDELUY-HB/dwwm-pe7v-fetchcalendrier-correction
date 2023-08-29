import { fetchHolidays,createCalendar } from "./calendar.func.js";

function manageCalendar()
{
    const calendrier = createCalendar();
    console.log(calendrier);
    document.querySelector('#section-calendrier').innerHTML = calendrier.innerHTML;
    fetchHolidays();
}

function hideAllContentSections()
{
    let sections = document.querySelectorAll('.contentSection');
    let i = 0;
    while (i<sections.length) {
        sections[i].classList.add('hidden');
        i++;
    }
}

function displayContentSection(sectionId)
{
    let selector = '#' + sectionId;
    document.querySelector(selector).classList.remove('hidden');
}

function attachMenuEvents()
{
    let links = document.querySelectorAll('.menuLink');
    let i = 0;
    while (i<links.length) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
            hideAllContentSections();
            const idElements = event.target.id.split('-');
            let sectionId = 'section-' + idElements[1];
            displayContentSection(sectionId);
            return false;
        });
        i++;
    }
}

window.addEventListener(
    'DOMContentLoaded',
    function (event) {
        manageCalendar();
        attachMenuEvents();
    });