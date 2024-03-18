//Variables
let inputData;

//función para encriptar
function encrypt(){
    let textEncrypted = '';
    let inputData = document.getElementById('text-input').value;
    for (i = 0; i < inputData.length; i++) {
        let letters = inputData.charAt(i);
        switch (letters) {
            case 'a':
                textEncrypted += 'ai';
                break;
            case 'e':
                textEncrypted += 'enter';
                break;
            case 'i':
                textEncrypted += 'imes';
                break;
            case 'o':
                textEncrypted += 'ober';
                break;
            case 'u':
                textEncrypted += 'ufat';
                break;
            default:
                textEncrypted += letters;
        }
    }
    document.getElementById("text-cont").innerText = textEncrypted;
    //Mostrar botón de copia
    document.getElementById('copy').className = 'copy-button';
    //Ocultar imagen
    document.getElementById('output-img').style.display = 'none';
}

//función para desencriptar
function decrypt() {
    let inputData = document.getElementById('text-input').value;
    var textoDesencriptado = inputData.replace(/ufat/g, 'u')
                                    .replace(/ober/g, 'o')
                                    .replace(/imes/g, 'i')
                                    .replace(/enter/g, 'e')
                                    .replace(/ai/g, 'a');
    //texto desencriptado
    document.getElementById('text-cont').innerText = textoDesencriptado;
    //Mostrar botón de copia
    document.getElementById('copy').className = 'copy-button';
    //Ocultar imagen
    document.getElementById('output-img').style.display = 'none';
}

document.getElementById('text-input').addEventListener('input', imgChanger);

function imgChanger () {
    let inputDetection = document.getElementById('text-input');
    document.getElementById('output-img').src='img/cargando.gif';
    document.getElementById('text-cont').innerText = 'Estoy recibiendo tu mensaje';
    if (inputDetection.value === '') {
        document.getElementById('output-img').src='img/7906233_3804946.png';
        document.getElementById('text-cont').innerText = 'No encuentro nada para encriptar en mi sistema';
        document.getElementById('copy').className = 'copy-hidden';
        document.getElementById('output-img').style.display = '';
    }
}

function copyText(){
    let outputText = document.getElementById('text-cont').innerHTML;
    navigator.clipboard.writeText(outputText);
    Swal.fire({
        icon: 'success',
        text: 'Texto copiado con éxito'
    });
}