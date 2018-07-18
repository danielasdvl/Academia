'use strict';

(()=>{


    fetch('/alumnos')
    .then((listaR)=>{
       return listaR.json()

    })
    .then((lista)=>{

        const promRep = lista.filter((alumno)=>alumno.promedio < 30)
        let promedioR = promRep.reduce((promedio, alumno)=>{
            return promedio = promedio + alumno.promedio;
        },0);
        const promedioReprobado = promedioR / promRep.length
        document.getElementById('promReprobados').innerText = promedioReprobado;

        const promAses= lista.filter((alumno)=>alumno.promedio >=30 && alumno.promedio <80)
        let promedioA = promAses.reduce((promedio, alumno)=>{
            return promedio = promedio + alumno.promedio;
        },0);
        const promedioAsesorias = promedioA / promAses.length
        document.getElementById('promAsesorias').innerText = promedioAsesorias;

        const promBec= lista.filter((alumno)=>alumno.promedio > 80 || (alumno.promedio >30 && alumno.destacado))
        let promedioB = promBec.reduce((promedio, alumno)=>{
            return promedio = promedio + alumno.promedio;
        },0);
        const promedioBecarios = promedioB / promBec.length
        document.getElementById('promBecados').innerText = promedioBecarios;

        lista.forEach((alumno)=>{
            if (alumno.promedio <30){ 
                reprobados(alumno.nombre); 
            }
            if (alumno.promedio >=30 && alumno.promedio <80){ 
                asesorias(alumno.nombre);
            }
            if (alumno.promedio > 80 || (alumno.promedio >30 && alumno.destacado)){ 
                becados(alumno.nombre);
            }
        })
        
    }); 

    function crearLi(id){
        var columnas = document.getElementById(id);
        return (texto)=>{
            const itemLista = document.createElement('li');
            itemLista.appendChild(document.createTextNode(texto));
           columnas.appendChild(itemLista);
       }
    }
    
    const reprobados = crearLi('reprobados');
    const asesorias = crearLi('asesorias');
    const becados = crearLi('becados');
    
})();