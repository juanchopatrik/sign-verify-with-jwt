const jwt = require('jsonwebtoken')

//esta es la entrada en la terminal
const [ , , option, secret, nameOrToken] = process.argv;

//si no estan los argumentos necesrios entonces error
if (!option || !secret || !nameOrToken) {
    return console.log('missing arguments')
};

//r
function singToken(payload, secret) {
    return jwt.sign(payload,secret)
}

//llamar la libreria y retorna el token decodificado
function verifyToken ( token, secret) {
    return jwt.verify (token, secret)
}

//si se pasa la palabra sign se le agrega el nombre y la clave
//si se pasa la palabra verify se agreaga el jwt y la clave
if (option == 'sign') {
    console.log (singToken({sub: nameOrToken}, secret))
} else  if (option == 'verify') {
    console.log (verifyToken(nameOrToken, secret))
}
 else{
    console.log('Option needs to be "sing" of "verify"')
}
