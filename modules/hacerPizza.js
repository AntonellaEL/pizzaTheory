import { pizzas } from "./pizza.js";

let selectedPizza = {};

export async function hacerPizza(pizzaSeleccionada) {
    const existe = verificarExistencia(pizzaSeleccionada);
    if (existe) {
        console.log(`Preparando tu pizza ${pizzaSeleccionada}`);
        prepararMasa();
        agregarIngredientes();
        await hornearPizza();

        console.log(`Tu pizza ${pizzaSeleccionada} está lista`);
        return selectedPizza;
    } else {
        console.log(`Lo siento, no tenemos ${pizzaSeleccionada} en nuestro menú por ahora`);
        return null;
    }
}

function verificarExistencia(pizzaSeleccionada) {
    let encontrada = false;
    pizzas.forEach(pizza => {
        if (pizza.name.toLowerCase() === pizzaSeleccionada.toLowerCase()) {
            encontrada = true;
            selectedPizza = pizza;
            return;
        }
    });
    return encontrada;
}

function prepararMasa() {
    console.log("Preparando la masa de la pizza");
}

function agregarIngredientes() {
    selectedPizza.ingredients.forEach(ingrediente => {
        console.log(`Añadiendo ${ingrediente}`);
    });
}

function hornearPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}
