console.log("Hello")
document.getElementById('quiet-btn').addEventListener('click', makeLower)
function makeLower(e){
    console.log(e)
    const p = document.getElementById('patrick')
        let txt = p.innerText
        p.innerText = txt.toLowerCase()
}

document.getElementById('loud-btn').addEventListener('click', makeUpper)
function makeUpper(e){
    const y = document.getElementById('patrick')
        let txt = y.innerText
        y.innerText = txt.toUpperCase()
}

document.getElementById('sarc-btn').addEventListener('click', makeSarc)
function makeSarc (e) {
    console.log(e)
    const z = document.getElementById('patrick')
    const text = z.innerText
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let i = 0
    for (let char of text) {
        if (alphabet.includes(char.toLowerCase())) {
            if (i % 2 === 0) char = char.toLowerCase()
            if (i % 2 === 1) char = char.toUpperCase()
            i++
        }
        result += char
        z.innerText = result
    }
}