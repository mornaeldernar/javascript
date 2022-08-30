const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const miFuncion  = val => {
    if(typeof val === "number"){
        return 2* val
    }
    //return false
    throw new Error("El valor debe ser numerico")
}


try{
  const elDoble = miFuncion("2")
  console.log(elDoble)
} catch(e) {
  logger.error(`ERROR ${e}`)
}
//logger.log("Hola estoy saliendo por pantalla")
// logger.info("Hola esto es un mensaje informativo")
// logger.debug("Hola esto es un mensaje debug")
// logger.warn("Hola esto es un mensaje de advertencia")
// logger.error("Hola esto es un mensaje de error")

