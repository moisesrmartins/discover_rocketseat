console.log('Estudo de insertBefore')

const div= document.createElement('div')
div.innerText= "Bom dia"

const body= document.querySelector('body')
const script= body.querySelector('script')
body.insertBefore(div, script)