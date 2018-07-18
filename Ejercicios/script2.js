var cuboej = document.getElementById('square-test');
var cajaTe = document.getElementById('square-log');
var boton = document.getElementById('boton');
console.log(cuboej);
cuboej.addEventListener('click', function(evento){
    const span = document.createElement('span');
    span.innerText =cuboej.style.backgroundColor   
    console.log(span)
    boton.addEventListener('click', function(borrar){
        span.innerHTML="";
        cuboej.style.backgroundColor = 'white';
        cuboej.style.borderBottomLeftRadius = '0%';
        cuboej.style.borderBottomRightRadius = '0%';
    })
    if(cuboej.style.backgroundColor === 'red'){
        cuboej.style.backgroundColor = 'blue';
        cuboej.style.borderBottomLeftRadius = '40%'
        cuboej.style.borderBottomRightRadius = '20%';
    } else{
        cuboej.style.backgroundColor = 'red'
        cuboej.style.borderBottomRightRadius = '40%'
        cuboej.style.borderBottomLeftRadius = '10%'}
    cajaTe.appendChild(span);
    
});


