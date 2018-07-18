//Creamos la promesa
const promise = new Promise((res)=>{
    let cont=0;
    for(let i = 0; i<10000; i++){
        cont ++;
    }
    res(cont);
});
const promise2 = new Promise((rest)=>{
    setTimeout(()=>rest('acabo timeout'),5000)
});
//Creamos la promesa

//consumes la promesa
promise2.then((rest)=> console.log(rest));
promise.then((res)=> console.log(res));

console.log('hola');