const argv = require('./config/yargs').argv;
const colors = require ('colors');

const {multiplica, listarTabla} = require('./multiplicar/multiplicar.js')
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)        
        break;
    
    case 'crear':
        multiplica(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
        .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}



//console.log('limite', argv.limite);
//console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=') [1];  //El método split() se utiliza para dividir una cadena en una matriz de subcadenas y devuelve la nueva matriz.
// console.log(base);

// multiplica(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));
