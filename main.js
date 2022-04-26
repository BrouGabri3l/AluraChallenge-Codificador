const result = document.querySelector('.text')
const textArea = document.querySelector('textarea')
const image = document.querySelector('aside img')
textArea.addEventListener('keyup', () => teste(textArea.value))
function teste(str) {
    const reg = /[A-Z,à-ú]/
    if (!reg.test(str)) {
        document.querySelector('main div').innerHTML =
            `   <button id="btnCriptografar" class="color">
                    Criptografar
                </button>
                <button id="btnDescriptografar">
                    Descriptografar
                </button>`

    } else {
        document.querySelector('main div').innerHTML = `<p>O campo de texto contém letras maiúsculas ou acentuadas</p>`
    }
    document.getElementById('btnCriptografar').addEventListener('click', () => criptografar())
    document.getElementById('btnDescriptografar').addEventListener('click', () => descriptografar())
}

function criptografar() {
    let value = textArea.value
    let res = value.replace(/a|e|i|o|u/igm, (letra) => {
        if (letra == 'a') {
            return 'ai'
        } else if (letra == 'e') {
            return 'enter'
        } else if (letra == 'i') {
            return 'imes'
        } else if (letra == 'o') {
            return 'ober'
        } else if (letra == 'u') {
            return 'ufat'
        }
    })
    if (res.length > 0) {
        result.innerHTML = `
    <p>${res}</p>
    <button onclick="copiar()">
        Copiar
    </button>
    `
        image.classList.add('hide')
        result.classList.add('withData')
    } else {
        result.innerHTML = `
    <p>
         <h2>Nenhuma mensagem encontrada</h2>
         <p>Digite um texto que você deseja criptografar ou descriptografar</p>
    </p>`
        image.classList.remove('hide')
        result.classList.remove('withData')
    }

}
function descriptografar() {
    let value = textArea.value
    let res = value.replace(/ai|enter|imes|ober|ufat/igm, (letra) => {
        if (letra == 'ai') {
            return 'a'
        } else if (letra == 'enter') {
            return 'e'
        } else if (letra == 'imes') {
            return 'i'
        } else if (letra == 'ober') {
            return 'o'
        } else if (letra == 'ufat') {
            return 'u'
        }
    })
    if (res.length > 0) {
        result.innerHTML = `
    <p>${res}</p>
    <button onClick="copy()">
        Copiar
    </button>
    `
        image.classList.add('hide')
        result.classList.add('withData')
    } else {
        result.innerHTML = `
    <p>
         <h2>Nenhuma mensagem encontrada</h2>
         <p>Digite um texto que você deseja criptografar ou descriptografar</p>
    </p>`
        image.classList.remove('hide')
        result.classList.remove('withData')
    }
}
function copiar() {
    navigator.clipboard.writeText(result.firstElementChild.textContent)
}
