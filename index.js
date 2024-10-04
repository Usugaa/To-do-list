/*Primero vamos a llamar del html lo que necesitamos
El input, la clase del boton btn-add, la lista y la clase del empty del texto cuando no hay ninguna tarea*/
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

/*Se crea un evento click en el boton el cual va a crear un elemento li y otro elemento p
el elemento p va a almacenar lo que se ingrese en el input y el elemento li
va a agregar lo que hay en el elemento p haciendo una lista. Todo eso dentro de un if para que el input
no deje agregar un elemento vacio, si se da a el boton addBtn sin ningun texto en el input
saltara el else indicando que se agregue una tarea*/
addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = text;
  
      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      ul.appendChild(li);
  
      input.value = "";
      empty.style.display = "none";
    }

    else {
        alert("Ingresa una tarea.")
    }
  });

/*Se crea una funcion de eliminar lo que haya en la lista, con su respectivo contenido y clase,
con un evento click que va a remover los elementos en la lista. luego abajo hay un if que
se usa para la clase empty que tiene el parrafo cuando no hay ninguna tarea
se usa para que solo aparezca cuando no hay ningúna tarea.*/
function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item);
  
      const items = document.querySelectorAll("li");
  
      if (items.length === 0) {
        empty.style.display = "block";
      }
    });
  
    return deleteBtn;
  }