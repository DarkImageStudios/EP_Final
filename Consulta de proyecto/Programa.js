//Variables
var img,proy,img2,descripccion,company,precio,area;
    // Imágenes de los departamentos
img=[
    "IMG/imagen (1).jpg",
    "IMG/imagen (2).jpg",
    "IMG/imagen (3).jpg",
    "IMG/imagen (4).jpg",
    "IMG/imagen (5).jpg",
    "IMG/imagen (6).jpg",
    "IMG/imagen (7).jpg",
    "IMG/imagen (8).jpg",
    "IMG/imagen (9).jpg",
    "IMG/imagen (10).jpg",
    ];
// Información de cada departamento en orden
proy = [
    { company: "Graña y Montero", precio: "S/ 1,200,000.00", area: "78.00 m²" },
    { company: "Constructora JJC", precio: "S/ 950,000.00", area: "65.50 m²" },
    { company: "Graña y Montero", precio: "S/ 1,500,000.00", area: "85.00 m²" },
    { company: "Besco", precio: "S/ 1,800,000.00", area: "95.00 m²" },
    { company: "Inversiones La Rioja", precio: "S/ 1,350,000.00", area: "72.50 m²" },
    { company: "Inmobiliaria V&V", precio: "S/ 1,100,000.00", area: "68.00 m²" },
    { company: "GMP", precio: "S/ 1,250,000.00", area: "70.00 m²" },
    { company: "Inversiones Centenario", precio: "S/ 1,650,000.00", area: "90.00 m²" },
    { company: "Cosapi", precio: "S/ 1,700,000.00", area: "88.00 m²" },
    { company: "Constructora JJC", precio: "S/ 1,400,000.00", area: "75.00 m²" }
];

img2=0;

// Función para mostrar el departamento actual
function mostrar(){
    document.getElementById('imagenes').src=img[img2];
    descripcion="<h2>Detalles del Proyecto</h2>"+
                "<p>Compañia: "+proy[img2].company +"</p>"+
                '<p>Precio: <span style="color: red;">'+proy[img2].precio+'</span></p>'+//le puse color rojo al precio para que se viera mejor
                "<p>Área: "+proy[img2].area+"</p>";
    document.getElementById('descripccion').innerHTML=descripcion;

}

// se mostrata el primer departamentro que es Imagen(1) con su descripcion 
mostrar();

// Función del botón siguiente
function adelante() {
    img2++;
    if (img2 >= img.length) {
        img2 = 0;
        alert('Primer Departamento.');
    }
    mostrar();
}

// Función del botón atras
function atras() {
    img2--;
    if (img2 < 0) {
        img2 = img.length - 1;
        alert('Ultimo Departamento.');
    }
    mostrar();
}