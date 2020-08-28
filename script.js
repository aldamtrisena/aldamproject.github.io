const button = document.getElementById('butt')
const button2 = document.getElementById('butt2')
const box1 = document.getElementById('box1')
const input = document.querySelector('#box3 #form #input')
const box2 = document.getElementById('box2')

let p = document.getElementsByTagName('p')[0]

console.log(input);

button.addEventListener('click', function () {


    const p = document.createElement('p')
    const input = document.getElementById('input').value
    const text = document.createTextNode(input)
    p.appendChild(text)
    box2.appendChild(p)


})

button2.addEventListener('click', function () {

    box2.removeChild(p)

})