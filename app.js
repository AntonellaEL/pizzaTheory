const harina = "250 Harina de fuerza";
const sal = "1 cucharadita de sal fina";
const agua = "80gr de agua tibia";
const aceite = "un chorro de aceite puede ser girasol o oliva";
const levadura = "10 gramos de levadura fresca";
const azucar= "una cucharada de azucar"

const ingredientes = [, "Mozzarella", "tomate", "tiras de pimientos"];
let cantidadPimiento = 1;
let tiempoHorneado = 30;

var pizza = "";

function app()
{
    hacerPizza();
    entregarPedido(pizza);
}

app()

function hacerPizza()
{
    const base = hacerMasa();
    console.log("Dejar la masa reposar durante 10 min");
    añadirIngredientes(ingredientes);
    hornear();
}

function hacerMasa()
{
    mezclarLevaduraConAgua();
    añadirHarina();
    añadirAceite();
    añadirSal();
    const resultado = amasar();
    return resultado;
}

function mezclarLevaduraConAgua()
{
    console.log(`mezclar ${agua} con ${levadura} y ${azucar}`);
    console.log(`dejar reposar 5 minutos hasta que salga espuma`);
}

function añadirAceite()
{
    console.log("añadir " + aceite);
}

function añadirHarina()
{
    console.log(`añadir ${harina} poco a poco a la mezcla de agua y levadura`);
}

function añadirSal()
{
    console.log("añadir " + sal);
}

function amasar()
{
    let masa = "masa para la pizza";
    console.log("amasar bien hasta que deje de ser pegajosa");
    masa = darFormaALaMasa(masa);
}

function darFormaALaMasa()
{
    console.log("darle forma a la masa" );
   
}


function añadirIngredientes(ingredientes)
{
    ingredientes.forEach(ingrediente => {

        if (ingrediente === "tiras de Pimiento" && cantidadPimiento> 1) {
            console.log("añadido " + cantidadPimiento + " " + ingrediente);
        }

        if (ingrediente === "tiras de pimmiento" && cantidadPimiento < 1) {
            console.log("pizza sin " + ingrediente)
        }

        if (ingrediente !== "tiras de Pimiento") {
            console.log("añadido " + ingrediente);
        }
    });
}

function hornear()
{
    console.log("Horneando la pizza durante " + tiempoHorneado + " min");
    pizza = "Pizza";
    console.log(pizza + " lista");
}

function entregarPedido()
{
    console.log(pizza + " Entregada");
}