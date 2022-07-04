
//molde
class persona {
    constructor(nombre, apellido, edad, dni, sexo, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.altura = altura;
    }
}

//instanciando, creo a una persona con el molde de la clase persona
const persona1 = new persona('Moises', 'Castro', 25, '12345678', 'M', 1.75);
console.log(persona1);

let  condition = true;
if (condition){
    console.log('condition is true');
}else{
    console.log('condition is false');
}
console.log(`condition is ${condition ? 'true':'false'}`); //true or false, sugar syntax  for if else 

//spread operator 
const array1 = [1,2,3];
let resultado = [4,5,6];
const newarray = [...array1, ...resultado]; //concatenate two arrays
console.log(newarray); 

//desestructuring

let id ="asd876";

const objpersona ={
    nombre: 'Moises', //key: value propieties
    apellido: 'Castro',
    edad: 25,
    dni: '12345678',
    sexo: 'M',
    altura: 1.75,
    [id]:"89" //concateno el id con el valor de la variable id que es asd876 y lo guardo en la propiedad id de objpersona
    //campo de un objeto de forma dinamica 
}

const {nombre} = objpersona; //desestructuring
const {nombre: firstname, apellido} = objpersona; //desestructuring
console.log(nombre); //Moises 


// let nom = objpersona.nombre;
// console.log(nom); //moises 


console.log(objpersona);
