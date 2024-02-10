function Km_m() {
    let n1 = parseInt(document.getElementById('convertir').value)
    

    if (isNaN(n1)) {
        alertify.error('Valor a convertir en blanco')
    } else {
        let m = n1 * 1000;
        document.getElementById('conversion').value = m
        alertify.error('Se pudo convertir a metros')
    }

}

function m_cm() {
    let n1 = parseInt(document.getElementById('convertir').value)
    

    if (isNaN(n1)) {
        alertify.error('Valor a convertir en blanco')
    } else {
        let cm = n1 * 100;
        document.getElementById('conversion').value = cm
        alertify.error('Se pudo convertir a centimetros')
    }

}

function ft_pulg() {
    let n1 = parseInt(document.getElementById('convertir').value)
    

    if (isNaN(n1)) {
        alertify.error('Valor a convertir en blanco')
    } else {
        let pulg = n1 * 12;
        document.getElementById('conversion').value = pulg
        alertify.error('Se pudo convertir a pulgadas')
    }

}

function yarda_pulg() {
    let n1 = parseInt(document.getElementById('convertir').value)
    

    if (isNaN(n1)) {
        alertify.error('Valor a convertir en blanco')
    } else {
        let pulg = n1 * 36;
        document.getElementById('conversion').value = pulg
        alertify.error('Se pudo convertir a pulgadas')
    }

}


function limpiar() {
    document.getElementById('convertir').value = ''
    document.getElementById('conversion').value = ''
}