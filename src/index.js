import x from "./x.js"
import png from "./assets/1.png"

console.log(x)
console.log("hi ")

const div = document.getElementById('app')

// console.log(png)
// div.innerHTML = `
//   <img src="${png}">
// `
const button = document.createElement('button')
button.innerText = "懒加载"
button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module) => {
    const fn = module.default
    fn()
  }, () => {
    console.log('加载模错误')
  })
}
div.appendChild(button)