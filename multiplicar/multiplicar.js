const fs = require('fs');
const colors = require ('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`Tabla del ${base}`.red);
    console.log('============================='.green);
    for (let i = 1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let multiplica = (base, limite=10) =>{
    return new Promise((resolve, reject) =>{

        if (!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = "";

        for (let i = 1; i<=limite; i++){
            r = base * i;
            data += `${base} * ${i} = ${r}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err); //si hay error, arroje el error
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    //multiplica: multiplica
    multiplica, //ES6 - esta propiedad funciona igual que la de arriba, 
    listarTabla
}

