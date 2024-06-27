import promptSync from "prompt-sync";
import { hacerPizza } from "./modules/hacerPizza.js";
import { entregarPedido } from "./modules/entregarPizza.js";

function app() {
    const prompt = promptSync();
    const pizzaName = prompt("¿Cuál es tu pizza? (): ");

    hacerPizza(pizzaName)
        .then(pizza => {
            if (pizza) {
                console.log(`Pedido de pizza ${pizza.name} completado`);
            } else {
                console.log(`No se pudo completar el pedido de pizza ${pizzaName}`);
            }
            entregarPedido(pizza.name);
        })
        .catch(error => {
            console.error("Error al hacer la pizza:", error);
        });
}

app();
