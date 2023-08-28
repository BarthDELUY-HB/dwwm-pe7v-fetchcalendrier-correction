# dwwm-pe7v-fetchcalendrier-correction


## Programmation 2 : 10 points

### Manipulation du DOM - 5 points

Vous devez écrire une fonction javascript qui permet de construire puis d'afficher dans le <main> du fichier calendar.html un calendrier ressemblant au calendrier suivant : https://maitresselunicole.fr/2023/07/01/calendrier-annuel-2023-2024/ (c'est-à-dire un calendrier à 12 colonnes pour les 12 mois de l'année, et chaque colonne commence au jour 1). Il n'est pas nécessaire d'afficher le nom du jour de la semaine (lundi, mardi, etc). Vous pouvez utiliser les fonctions de manipulation du DOM ou la syntaxe template ES6, mais votre code ne doit déclencher qu'un seul redessin de la page (vous devez construire l'intégralité du calendrier en mémoire avant de le rattacher à la page).

Bonus : Les samedis et les dimanches doivent recevoir la classe CSS "closed" ; ne traitez pas le cas des jours fériés dans cette question (c'est la question suivante).

### Fetch API - 5 points

Le site https://date.nager.at/ propose une API publique permettant de récupérer la liste des jours fériés pour une année et un pays donnés. Interrogez l'API pour l'année 2023 en France, et à partir de la réponse, mettez à jour le calendrier construit à la question précédente en rajoutant la classe "holiday" sur les jours fériés.