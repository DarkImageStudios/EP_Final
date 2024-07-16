//Variables
let colores, i;

 // La funcion que generar los codigos de los colores
function Aleatorio() {
    colores='#';
    for (i=0;i<6;i++) {
        const codi = Math.random(); 
        const col = Math.floor(codi*12).toString(12); 
        colores+=col;
    }
    return colores;
}

// La función que cambia el color al fondo y muestra el codigo de ese fondo
function Metamorfo() {
    const color_A = Aleatorio();
    document.body.style.backgroundColor = color_A;
    document.getElementById('Codigo').innerText=''+color_A;
}

// En esto se le agrega la funcion de hacer clip para ejecutar el cambio de color
document.getElementById('Boton').onclick=Metamorfo;
