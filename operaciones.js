const fs = require('fs');

let operacion = process.argv[2];
let nombre = process.argv[3];
let edad = process.argv[4];
let tipo = process.argv[5];
let color = process.argv[6];
let enfermedad = process.argv[7];

const registrar = ()=>{
    const registro = fs.readFileSync('citas.json', 'utf-8');
    let registroParseado = JSON.parse(registro);
    registroParseado.push({
        nombre_del_animal: nombre,
        edad: edad, 
        tipo_de_animal: tipo,
        color: color,
        enfermedad: enfermedad
    });
    fs.writeFileSync('citas.json', JSON.stringify(registroParseado));
}

const leer = ()=>{ 
    const registro = fs.readFileSync('citas.json', 'utf-8');
    let registroParseado = JSON.parse(registro);
    console.log(registroParseado);
}

if(operacion === 'leer'){
    leer();
}

if(operacion === 'registrar'){
    registrar(nombre, edad, tipo, color, enfermedad);
}

module.exports = {
    registrar,
    leer
}
