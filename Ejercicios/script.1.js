'use strict';
(function(global){
    // const Luis = {
    //     name: 'Luis',
    //     LastName: 'Perez'
    // }
    // console.log(Luis);
    // const Mario = {...Luis};
    // Mario.name = 'Mario';
    // console.log(Mario);
    // console.log(Luis);

    const stateGenerator = (initialState)=>{
        const state = initialState;
        return{
            getState: ()=>({...state}),
            agregaAlumno: (alumno)=>{state.alumnos.push(alumno)}
        }
    }
    global.stateGenerator = stateGenerator;
})(window);