import { Month } from "./month.js";

function getMonthList() {
    return [
        new Month("Janvier", 31, 1),
        new Month("Février", 28, 2),
        new Month("Mars", 31, 3),
        new Month("Avril", 30, 4),
        new Month("Mai", 31, 5),
        new Month("Juin", 30, 6),
        new Month("Juillet", 31, 7),
        new Month("Août", 31, 8),
        new Month("Septembre", 30, 9),
        new Month("Octobre", 31, 10),
        new Month("Novembre", 30, 11),
        new Month("Décembre", 31, 12)
    ];
}

export { getMonthList };