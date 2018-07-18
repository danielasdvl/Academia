'use strict';
(() => {
    const bAppend = appendLI('becados');
    const alumnosState = alumnosService({alumnos:[]});
    
    fetch('/cars')
    .then((res)=>{
    return res.json()})
    .then((cars)=>{
    console.log(cars);
    const carsName = cars.map((car)=>{
        return {
            nombre:car.name,
            precio: car.dollar_value
        }
        });
    console.log(carsName);

    })

    function imprimirAlumnos(alumnos){
        document.getElementById('becados').innerHTML= '';
        alumnos.forEach(alumno => {
            bAppend(alumno.nombre);
        });
    }
    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
