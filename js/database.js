const users = [
    { userId: 1, username: 'Ali', contact: '998978665050' },
    { userId: 2, username: 'Suhrob', contact: '998978665070' },
    { userId: 3, username: 'Abbos', contact: '998978665060' },
];
const foods = [
    { foodId: 1, foodname: "burger cheese", foodImg: "./img/burger_cheese.jpeg" },
    { foodId: 2, foodname: "chicken togora", foodImg: "./img/chicken_togora.jpeg" },
    { foodId: 3, foodname: "chicken wings", foodImg: "./img/chicken_wings.jpeg" },
    { foodId: 4, foodname: "cola", foodImg: "./img/cola.jpeg" },
    { foodId: 5, foodname: "combo", foodImg: "./img/combo.jpeg" },
    { foodId: 6, foodname: "fanta", foodImg: "./img/fanta.jpeg" },
    { foodId: 7, foodname: "spinner", foodImg: "./img/spinner.jpeg" }
];

const orders = [
    { userId: 1, foodId: 2, count: 2 }, // Ali chicken togora 2
    { userId: 3, foodId: 4, count: 1},  //  Abbos  cola 1
    { userId: 2, foodId: 5, count: 3},  // Suhrob combo 3 
    { userId: 1, foodId: 3, count: 1},  // Ali chikeb wins 1 
]

