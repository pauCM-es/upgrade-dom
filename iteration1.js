//? 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showMe$$ = document.querySelector(".showme")
console.log(showMe$$)

//? 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1$$ = document.querySelector("#pillado")
console.log(h1$$)

//? 1.3 Usa querySelector para mostrar por consola todos los p
const p$$ = document.querySelectorAll("p")
console.log(p$$)

//? 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon$$ = document.querySelector(".pokemon")
console.log(pokemon$$)

//? 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//? data-function="testMe"
//* opcion 1. Usando los <span> como selector
// const elements = Array.from(document.querySelectorAll("span"))
// console.log(elements[0].attributes["data-function"].value === "testMe" ? "funciona" : "mierder")

//* opcion 2. Si no supieramos en que elementos tienen ese attributo

const elements = Array.from(document.body.children)
const withAttribute = []

elements.forEach(element => {
  // element.attributes["data-function"].value === "testMe" ? "funciona" : "mierder"
  if (element.hasAttribute("data-function")) {
    withAttribute.push(element)
  }
})

console.log(withAttribute)

//? 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//? data-function="testMe"

