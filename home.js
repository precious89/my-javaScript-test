let people = ["Precious","26", "Mmapeaska", "29", "Andisiwe", "28", "Happy", "19", "Kagisho", "29", "Mdudzi", "55", "Sophie", "30", "Luck", "33", "Vusi", "22", "Wandile", "62", "khumbulani", "31", "Selina", "27", "Nkosiphendule", "31", "Mhnlonipheni", "21", "Sithembiso", "33"
];

let display = document.getElementById('display');



for (let i = 0; i < people.length; i++) {
    display.innerHTML += '<li>' + people[i] + '</li>';
}

