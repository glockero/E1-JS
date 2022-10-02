var pizzas = [{
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["salsa de tomate", "queso mozzarella", "ajo", "aceite de oliva"],
        precio: 1500
    },
    {
        id: 2,
        nombre: "Margarita",
        ingredientes: ["salsa de tomate", "queso mozzarella", "albahaca"],
        precio: 500
    },
    {
        id: 3,
        nombre: "Cuatro Quesos",
        ingredientes: ["queso muzzarela", "queso gorgonzola", "queso parmesano", "queso fontina"],
        precio: 1500
    },
    {
        id: 4,
        nombre: "Pepperoni",
        ingredientes: ["salsa de tomate", "muzzarela", "salame"],
        precio: 1500
    },
    {
        id: 5,
        nombre: "Championes",
        ingredientes: ["muzzarella", "champinones", "portobellos"],
        precio: 300
    },
    {
        id: 6,
        nombre: "Hawaina",
        ingredientes: ["salsa de tomate", "muzzarella", "anana"],
        precio: 1500
    },






]

console.log("-----------------------------------------------------------------------------");
for (let index = 0; index < 6; index++) {
    if (pizzas[index].id % 2 != 0) {
        console.log("La pizza de " + pizzas[index].nombre + " tiene el ID impar " + pizzas[index].id);
    }

}

console.log("-----------------------------------------------------------------------------");


for (let index = 0; index < 6; index++) {
    if (pizzas[index].precio <= 600) {
        console.log("Las pizzas con un valor mensor a $600 son : " + pizzas[index].nombre + " con el ID " + pizzas[index].id + " ($" + pizzas[index].precio + ")");
    }

}

console.log("-----------------------------------------------------------------------------");


for (let index = 0; index < 6; index++) {

    console.log("La pizza " + pizzas[index].nombre + " tiene un valor de: $" + pizzas[index].precio);

}

console.log("-----------------------------------------------------------------------------");

for (let index = 0; index < 6; index++) {

    console.log("La pizza " + pizzas[index].nombre + " tiene los siguientes ingredientes:");

for (let index1 = 0; index1 < 3; index1++) {

    console.log(pizzas[index].ingredientes[index1]);
    ;
    

}
console.log("////////////////////////////////////////////////////")
}
