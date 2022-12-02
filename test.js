function saludar() {
    console.log(nombre);
    console.log(edad);

    var nombre = 'Lidia'
    var edad = 21
}

saludar();


const user = {
    name: 'Juan',
    location: {
        city: 'Valencia',
},
};

console.log(user.location &&
    user.location.street &&
    user.location.street.name);

console.log(user.location?.street?.name);

//undefined