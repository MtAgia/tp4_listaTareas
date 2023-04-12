/*
Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser 
presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón 
creado para ese fin. 
*/
let btnInput = document.getElementById(`inputBtn`).addEventListener(`click`, enviarTarea);

function enviarTarea(){
    let input = document.getElementById(`inputIngresar`);
    if (input.value == "") {
      return;
    }
    let elemento = input.value
    let seccionCrear = document.getElementById(`seccionNueva`);
    let crear = document.createElement("li");
    crear.textContent = elemento;
    crear.className = `text-success`;
    seccionCrear.appendChild(crear)
    let btnEliminar = document.createElement("span");
    btnEliminar.textContent = " 🗑️ ";
    btnEliminar.className = `text-danger`;
    crear.appendChild(btnEliminar);
    btnEliminar.onclick = ()=>{
        crear.remove();
    }
    input.value = ""
}