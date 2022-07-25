document.getElementById('quiet-Btn').addEventListener('click', makeLower)
function makeLower(e){
    const p = document.getElementById('patrick')
        let txt = p.innerText
        p.innerText = txt.toLowerCase()
    }

document.getElementById('loud-Btn').addEventListener('click', makeUpper)
function makeUpper(e){
    const y = document.getElementById('patrick')
        let txt = y.innerText
        y.innerText = txt.toUpperCase()
    }

document.getElementById('sarc-Btn').addEventListener('click', makeSarc)
function makeSarc(e){
    const z = document.getElementById('patrick')
        let txt = z.innerText.split("")
        for (i=0; i<txt.length; i+2){
            txt[i] = txt.toUpperCase()
        }
        txt.join("")
    }