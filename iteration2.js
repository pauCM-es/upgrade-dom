//? 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement("div")
document.body.append(newDiv)

//? 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement("div")
const newP = document.createElement("p")
newDiv2.appendChild(newP)
document.body.append(newDiv2)

//? 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDiv3 = document.createElement("div")
for (let i = 0; i < 6; i++) {
  newDiv3.appendChild(document.createElement("p"))
}
document.body.append(newDiv3)

//? 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pDinamic = document.createElement("p")
pDinamic.textContent = "Soy dinamico!!"
document.body.append(pDinamic)

//? 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2$$ = document.querySelector("h2.fn-insert-here")
h2$$.textContent = "Wubba Lubba dub dub"

//? 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newUl = document.createElement("ul")
for (let i = 0; i < apps.length; i++) {
  let text = apps[i]
  const newLi = document.createElement("li")
  newLi.textContent = text
  newUl.appendChild(newLi)
}
document.body.append(newUl)
console.log(newUl)

//? 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//? 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//? 	Recuerda que no solo puedes insertar elementos con .appendChild.

//? 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here